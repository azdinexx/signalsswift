import img from '../assets/hero.png';
import {Link} from '@remix-run/react';

function Hero() {
  return (
    <>
      <div className="px-4  md:px-0 grid grid-cols-1 md:grid-cols-2 grid-rows-1 ">
        {/* Call To Action */}
        <div className="flex justify-center flex-col">
          <span className="text-stone-400 py-4">FREE 14 DAYS TRIAL</span>
          <img src={img} alt="" width={200} className="mx-auto md:hidden" />
          <h1 className="text-4xl md:text-7xl capitalize py-4">
            the best way to automate your trades from TradingView.
          </h1>

          <p className="py-4 font-thin text-stone-600">
            Seamlessly connect your Tradingview with MT4, MT5, and Binance
            (coming soon!)
          </p>
          <div className="py-4 flex flex-col sm:flex-row gap-x-10 gap-y-2 ">
            <Link to={'/signup'}>
              <button className=" rounded-xl font-semibold px-8 py-3 bg-[#3164f5] border border-[#3164f5] text-white">
                Try it for free
              </button>
            </Link>
            <Link to={'/documentation'}>
              <button className=" rounded-xl font-semibold px-8 py-3 border border-black  ">
                See how it works
              </button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="hidden md:flex items-center justify-center ">
          <img src={img} alt="" width={430} />
        </div>
      </div>
      <div className="md:mb-20 my-6">
        <p className="max-w-md mx-auto text-stone-600 text-center font-thin text-2xl ">
          trusted by <span className="font-bold text-gray-900">4,432</span>{' '}
          individuals and teams at the world&apos;s best trading companies
        </p>
        <div className="flex flex-wrap justify-center py-5 ">
          <img src="/exness.png" alt="signalsswift" className="h-8 mx-4 my-2" />
          <img
            src="/trading-logo.png"
            alt="signalsswift"
            className="h-7 mx-4 my-2"
          />
          <img src="/FTMO.png" alt="signalsswift" className="h-8 mx-4 my-2" />
          <img
            src="/mfflogo.png"
            alt="signalsswift"
            className="h-10 mx-4 my-2"
          />
          <img
            src="/capitalcore.png"
            alt="signalsswift"
            className="h-8 mx-4 my-2"
          />
          <img src="/amlogo.png" alt="signalsswift" className="h-8 mx-4 my-2" />
        </div>
      </div>
    </>
  );
}

export default Hero;
