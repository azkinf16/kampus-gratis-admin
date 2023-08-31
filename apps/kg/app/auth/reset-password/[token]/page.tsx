import { ResetModule } from '../../../../modules/auth/reset-password';

const ResetPages = ({ params }: { params: { token: string } }) => {
  return <ResetModule params={params} />;
};

export default ResetPages;
