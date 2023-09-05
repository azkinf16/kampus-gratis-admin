import axios, { AxiosRequestConfig } from 'axios';
import { refreshTokenRequest } from 'hooks/auth/request';
import { getSession } from 'next-auth/react';

type Session = {
  user?: {
    id: string;
    name: string;
    email: string;
    token: {
      access_token: string;
      refresh_token: string;
    };
  };
};

const apiConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
};

const api = axios.create(apiConfig);

api.interceptors.request.use(
  async (config) => {
    const session: Session = (await getSession()) as Session;

    const token = session?.user?.token?.access_token as string;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      const session: Session = (await getSession()) as Session;
      const token = session?.user?.token?.refresh_token as string;

      if (token) {
        const { data } = await refreshTokenRequest({ refresh_token: token });

        const newToken = data?.token?.access_token;

        api.defaults.headers.Authorization = `Bearer ${newToken}`;
      }

      return api.request(error.config);
    }

    return Promise.reject(error);
  }
);

export { api };
