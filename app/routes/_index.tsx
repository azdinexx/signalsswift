import Hero from '../components/Hero';
import SolutionSection from '../components/SolutionSection';
import SmartSave from '../components/SmartSave.jsx';
import CostSaver from '../components/CostSaverSection';
import Steps from '../components/Steps';
import Testimonials from '../components/Testimonials';
import Pricing from './pricing';
import {V2_MetaFunction} from '@shopify/remix-oxygen';

export const meta: V2_MetaFunction = () => {
  return [{title: 'Home'}];
};

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
