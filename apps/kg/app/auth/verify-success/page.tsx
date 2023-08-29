import { getServerSession } from 'next-auth';
import { NextPage } from 'next';
import { authOptions } from '../../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
import { VerifySuccessModule } from '../../../modules/auth/verify-success';

const SuccessVeriryPage: NextPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/dashboard');
  }
  return <VerifySuccessModule />;
};

export default SuccessVeriryPage;
