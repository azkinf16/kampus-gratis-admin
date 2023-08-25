import { BaseLayout } from '../../components/layouts/base/section';
import { DashboardModule } from '../../modules/dashboard/module';
import { NextPage } from 'next';

const DashboardPage: NextPage = () => {
  return (
    <BaseLayout title="Dashboard">
      <DashboardModule />;
    </BaseLayout>
  );
};

export default DashboardPage;
