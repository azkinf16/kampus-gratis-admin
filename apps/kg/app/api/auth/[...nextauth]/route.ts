import NextAuth from 'next-auth';
import { authOptions } from './options';
import { TLoginData } from '../../../../types/authentications';
import { refreshTokenRequest } from '../../../../hooks/authentications/request';

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
