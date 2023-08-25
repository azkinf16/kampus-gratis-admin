import { BaseLayout } from '../components';
import LandingPage from './landing-page/page';

export default async function Index() {

  return (
    <BaseLayout title="Home" addSearch>
    <section className="h-full flex-col flex bg-white w-full">
      <LandingPage />
    </section>
  </BaseLayout>
  );
}
