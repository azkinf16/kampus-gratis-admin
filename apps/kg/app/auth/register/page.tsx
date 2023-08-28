import { getServerSession } from 'next-auth';
import { RegisterModule } from '../../../modules/auth/register/module';
import { NextPage } from 'next';
import { authOptions } from '../../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';

const RegisterPages: NextPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/dashboard');
  }
  return <RegisterModule />;
};

export default RegisterPages;
