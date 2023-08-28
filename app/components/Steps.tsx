import img from '../assets/steps.png';
import {Link} from '@remix-run/react';
function Steps() {
  return (
    <div className="md:min-h-screen my-36 relative flex justify-center items-center">
      <div className="absolute z-[1]  bg-blue-500 h-screen w-[96%] -bottom-5  rounded-2xl shadow-xl"></div>

      <div className=" z-10 bg-white shadow-2xl flex flex-col md:flex-row md:p-10 p-6 rounded-2xl">
        <div className="md:w-[60%] w-full">
          <div className="h-72 relative">
            <img src={img} alt="" className="absolute bottom-10" />
          </div>
          <span className="text-6xl capitalize max-w-[3rem] py-5">
            Get started with
            <br /> Signal
            <img
              src="/ss.png"
              alt="signalsswift"
              className="h-12 inline-block"
              style={{verticalAlign: 'middle'}}
            />
            wift
          </span>
          <p className="text-gray-600 py-5 max-w-xs">
            Just 3 Simple Steps to optimize your Trading operations
          </p>
          <Link to={'/signup'}>
            <button className=" rounded-xl font-semibold px-6 py-3 my-5 bg-blue-500 border border-blue-500 text-white w-fit">
              Try it for Free
            </button>
          </Link>
        </div>
        <div className="md:w-[40%] w-full py-10">
          <Step
            nmbr={1}
            content="Attach the Signlsswift Expert Advisor on your MetaTrader terminal"
          />
          <Step
            nmbr={2}
            content="Configure the Signalsswift EA settings to best execute your trades"
          />
          <Step
            nmbr={3}
            content="Setup TradingView Alerts for your strategy with execution instructions for Signalsswift"
          />
        </div>
      </div>
    </div>
  );
}

export default Steps;

function Step({nmbr, content}) {
  return (
    <div
      className={`flex flex-col gap-5  py-10 ${nmbr === 3 ? null : 'border-b'}`}
    >
      <span className="text-3xl">Step {nmbr}</span>
      <p className="text-gray-500 max-w-xs">{content}</p>
    </div>
  );
}
