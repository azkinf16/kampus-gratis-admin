import NextAuth from 'next-auth';
import { authOptions } from './options';
import { TLoginData } from '../../../../types/authentications';
import { refreshTokenRequest } from '../../../../hooks/authentications/request';

export const refreshAccessToken = async (token: TLoginData) => {
  try {
    const data = await refreshTokenRequest({
      refresh_token: token.refresh_token,
    });

    return {
      ...token,
      access_token: data.access_token,
      refresh_token: data.refresh_token ?? token.refresh_token,
    };
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
