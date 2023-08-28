import { ForgotModule } from '../../../modules/auth/forgot/module';
import { NextPage } from 'next';

export const ForgotPages: NextPage = async () => {
  return <ForgotModule />;
};
