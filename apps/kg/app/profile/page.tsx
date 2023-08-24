import { BaseLayout } from '../../components/layouts/base/section';
import { NextPage } from 'next';
import { ReactElement } from 'react';

const ProfilePage: NextPage = (): ReactElement => {
  return <BaseLayout title="Profile User">Halo</BaseLayout>;
};

export default ProfilePage;
