import Hero from '../components/Hero';
import SolutionSection from '../components/SolutionSection';
import SmartSave from '../components/SmartSave.jsx';
import CostSaver from '../components/CostSaverSection';
import Steps from '../components/Steps';
import Testimonials from '../components/Testimonials';
import Pricing from './pricing';
import {LoaderArgs, V2_MetaFunction, redirect} from '@shopify/remix-oxygen';

export const meta: V2_MetaFunction = () => {
  return [{title: 'Home'}];
};

export async function loader({request, context}: LoaderArgs) {
  const {session} = context;

  const customerAccessToken = await session.get('customerAccessToken');
  const isLoggedIn = Boolean(customerAccessToken?.accessToken);

  if (isLoggedIn) {
    return redirect('/dashboard');
  }
  return {};
}

function Home() {
  return (
    <>
      <Hero />
      <Steps />
      <CostSaver />
      <SmartSave />
      <SolutionSection />
      <Testimonials />
      <Pricing />
    </>
  );
}

export default Home;
