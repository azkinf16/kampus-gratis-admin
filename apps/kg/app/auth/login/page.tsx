import { LoginModule } from '../../../modules/auth/login/module';
import { NextPage } from 'next';
import { authOptions } from '../../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const LoginPages: NextPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/dashboard');
  }

  return <LoginModule />;
};

export default LoginPages;
