import { ProfileModule } from '../../modules/profile/module';
import { BaseLayout } from '../../components/layouts/base/section';
import { NextPage } from 'next';
import { ReactElement } from 'react';

const ProfilePage: NextPage = (): ReactElement => {
  return (
    <BaseLayout title="Profile User">
      <ProfileModule />
    </BaseLayout>
  );
};

export default ProfilePage;
