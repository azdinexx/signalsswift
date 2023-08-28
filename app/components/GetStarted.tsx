import img from '../assets/getStarted.png';
import {Link} from '@remix-run/react';

function GetStarted() {
  return (
    <div className="bg-white px-10 md:px-20 grid grid-cols-1 md:grid-cols-2 grid-rows-1 my-36 rounded-2xl shadow-2xl relative ">
      <div className="md:hidden absolute -top-16 left-1/2 -translate-x-1/2">
        <img src={img} alt="" width={300} />
      </div>
      <div className="py-10 flex flex-col gap-5 mt-10 md:mt-0">
        <span className="text-3xl md:text-6xl mt-5">
          Get Started with
          <br /> Signal
          <img
            src="/ss.png"
            alt="signalsswift"
            className="h-12 inline-block"
            style={{verticalAlign: 'middle'}}
          />
          wift today
        </span>
        <p className="text-stone-600">Automate your Trades today!</p>
        <Link to={'/signup'}>
          <button className="w-fit  rounded-xl font-semibold px-6 py-3 bg-[#3164f5] border border-[#3164f5] text-white">
            Sign up now
          </button>
        </Link>
      </div>
      <div className="hidden md:block">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default GetStarted;
