import { BaseLayout } from '../../../components/layouts/base/section';
import { ProfileModule } from '../../../modules/profile/module';
import { NextPage } from 'next';

const ProfileEditPage: NextPage = () => {
  return (
    <BaseLayout title="Ubah Profile">
      <ProfileModule />
    </BaseLayout>
  );
};

export default ProfileEditPage;
