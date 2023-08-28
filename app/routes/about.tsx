import {V2_MetaFunction} from '@shopify/remix-oxygen';
import aboutusImg from '../assets/aboutus.png';
import heroimg from '../assets/hero.png';
import man from '../assets/team/man.jpeg';
import GetStarted from '../components/GetStarted';

export const meta: V2_MetaFunction = () => {
  return [{title: 'About Us'}];
};

function AboutUs() {
  return (
    <>
      <div className="flex flex-col gap-6 md:my-20 items-center">
        <h1 className="text-5xl text-center ">About Us</h1>
        <p className="max-w-sm text-center mx-auto text-gray-600">
          We offer revolutionary solutions to trading across multiple platforms.
          Join Signalsswift Community and experience the benefits of trading
          optimization today!
        </p>
        <img src={aboutusImg} alt="" width={650} />
        <span className="text-5xl text-center ">Our Mission</span>
        <p className="max-w-xl text-center mx-auto text-gray-600 pb-20 border-b border-stone-300 mb-10">
          At Signalsswift, we are commited to providing excellent services to
          our customers and clients and to help them achieve the best trading
          outcomes possible. We work hard so our customers are more effecient.
          We believe that we can make a positive impact on our community,
          industry and the world. Our Signalsswift team is dedicated to
          providing the best possible service and support, and we are always
          looking for ways to improve and innovate.
        </p>
        <div className="flex md:w-[60rem] justify-center items-center  mb-10">
          <p className="flex flex-col text-4xl font-semibold w-1/2 md:pl-20 gap-2">
            <span>Let&apos;s start </span>
            <span>automating </span>
            <span>your </span>
            <span>trading</span>
            <span>today!</span>
          </p>
          <div className="w-1/2 flex items-center justify-center">
            <img src={heroimg} alt="" width={300} />
          </div>
        </div>
        <Team />
      </div>
      <GetStarted />
    </>
  );
}

export default AboutUs;

function Team() {
  return (
    <div className="  flex flex-col gap-6">
      <h1 className="text-5xl text-center ">Team</h1>
      <p className="max-w-sm text-center mx-auto text-gray-600">
        Meet the CEO behind the magical product
        <div className="grid md:grid-cols-2 grid-cols-1  md:grid-rows-1   md:w-[700px] my-8">
          <Person />
        </div>
      </p>
    </div>
  );
}

function Person() {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full overflow-hidden w-20 h-20 mb-4">
        <img src={man} alt="" className="object-cover " />
      </div>
      <span className="text-gray-800">Daniel Oforji</span>
      <p className="text-sm text-stone-600 text-center">
        CEO of Swiftssignals
        <br /> & Dantis AI
      </p>
    </div>
  );
}
