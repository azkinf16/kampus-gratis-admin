import axios, { AxiosRequestConfig } from 'axios';
import { getSession } from 'next-auth/react';

const apiConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
};

const api = axios.create(apiConfig);

api.interceptors.request.use(
  async (config) => {
    const session = await getSession();

    // const token = session?.user?.token?.access_token;
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
