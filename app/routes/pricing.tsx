import {V2_MetaFunction} from '@shopify/remix-oxygen';
import GetStarted from '../components/GetStarted';
import {useState} from 'react';

export const meta: V2_MetaFunction = () => {
  return [{title: 'Pricing'}];
};

function Pricing() {
  return (
    <div className="flex flex-col gap-6 my-20 items-center">
      <h1 className="text-5xl text-center ">Pricing</h1>
      <p className="max-w-sm text-center mx-auto text-gray-600 mb-10">
        Our pricing is not expensive , but it&apos;s not cheap either, it&apos;s
        exactly what it should be
      </p>

      <Cards />
      <CompareFeatures />
      <GetStarted />
    </div>
  );
}

export default Pricing;

function Cards() {
  const [active, setActive] = useState('Pro');
  return (
    <div className="grid md:grid-cols-3 gap-3 grid-cols-1 w-[80%]">
      <PricingCard
        title="Basic"
        price="9"
        description="for individuals and single accounts"
        buttonText="Get Started With Basic"
        isPopular={false}
        active={active === 'Basic'}
        setActive={setActive}
      />

      <PricingCard
        title="Pro"
        price="19"
        description="for high trade volume and multiple accounts"
        buttonText="Get Started With Pro"
        isPopular={true}
        active={active === 'Pro'}
        setActive={setActive}
      />

      <PricingCard
        title="Business"
        price="99"
        description="for Individuals/Organizations with advanced needs"
        buttonText="Get Started With Business"
        isPopular={false}
        active={active === 'Business'}
        setActive={setActive}
      />
    </div>
  );
}

function CompareFeatures() {
  return (
    <div className="mt-10 w-[80%]">
      <span className="text-2xl font-bold w-full text-start">
        Compare Features
      </span>
      <div className="hidden md:grid grid-cols-3 text-2xl py-10 border-b border-gray-300">
        <span>Basic</span>
        <span>Pro</span>
        <span>Business</span>
      </div>
      <div className=" grid grid-cols-1 gap-2 md:grid-cols-3 text-gray-800 py-5 ">
        {/* BASIC */}
        <ul>
          <span className="text-2xl  border-b border-gray-300"></span>

          <Feature>One Trading Account</Feature>
          <Feature>1 Second Typical Latency</Feature>
          <Feature>Any MT4/MT5 Broker </Feature>
          <Feature>MT4 or MT5</Feature>
          <Feature>75 Trades</Feature>
          <Feature>24/7 Chat Support</Feature>
          <Feature>Demo or Live</Feature>
          <Feature>All Symbols</Feature>
        </ul>

        {/* PRO */}
        <ul>
          <span className="text-2xl  border-b border-gray-300"></span>

          <Feature>Two Trading Account</Feature>
          <Feature>1 Second Typical Latency</Feature>
          <Feature>Any MT4/MT5 Broker </Feature>
          <Feature>MT4 and MT5</Feature>
          <Feature>250 Trades</Feature>
          <Feature>24/7 Chat Support</Feature>
          <Feature>Demo or Live</Feature>
          <Feature>All Symbols</Feature>
        </ul>

        {/* BUSINESS */}
        <ul>
          <span className="text-2xl  border-b border-gray-300 "></span>

          <Feature>Ten Trading Account</Feature>
          <Feature>1 Second Typical Latency</Feature>
          <Feature>Any MT4/MT5 Broker </Feature>
          <Feature>MT4 and MT5</Feature>
          <Feature>Unlimited Trades</Feature>
          <Feature>24/7 Chat Support</Feature>
          <Feature>Demo or Live</Feature>
          <Feature>All Symbols</Feature>
        </ul>
      </div>
    </div>
  );
}

function Feature({children}: {children: React.ReactNode}) {
  return (
    <li className="flex gap-4 items-center my-3 capitalize">
      <Checked /> {children}
    </li>
  );
}

function Checked() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      className="text-blue-500"
    >
      <path
        fill="currentColor"
        d="M20 12a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8c.76 0 1.5.11 2.2.31l1.57-1.57A9.822 9.822 0 0 0 12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10M7.91 10.08L6.5 11.5L11 16L21 6l-1.41-1.42L11 13.17l-3.09-3.09Z"
      />
    </svg>
  );
}

interface PricingCardProps {
  active: boolean;
  title: string;
  price: string;
  description: string;
  isPopular: boolean;
  buttonText: string;
  setActive: (title: string) => void;
}
function PricingCard({
  active,
  title,
  price,
  description,
  isPopular,
  buttonText,
  setActive,
}: PricingCardProps) {
  return (
    <div
      onClick={() => setActive(title)}
      className={`${
        active ? 'scale-110 z-20 opacity-100 border' : ' border-0 opacity-95'
      } bg-white relative p-10 rounded-2xl flex flex-col shadow-xl cursor-pointer`}
    >
      {isPopular && (
        <span className="bg-blue-500 text-xs text-white absolute top-5 rounded-2xl px-4 py-1 right-5">
          Most Popular
        </span>
      )}
      <span
        className="uppercase text-xs mb-5
    "
      >
        {title}
      </span>
      <div className="flex gap-1">
        <span className="translate-y-2 font-bold">$</span>
        <span className="text-6xl font-bold">{price}</span>
        <span className=" self-end">/month</span>
      </div>
      <p className="mt-2  mb-14 text-stone-600">{description}</p>
      <button
        className={`${
          isPopular ? ' bg-blue-500 text-white border-blue-500' : 'border-black'
        } px-4 py-2  border rounded-xl `}
      >
        {buttonText}
      </button>
    </div>
  );
}
