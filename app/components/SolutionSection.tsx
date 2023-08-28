import img from '../assets/SolutionSection.png';
import {Link} from '@remix-run/react';
function SolutionSection() {
  return (
    <div className=" my-48  flex justify-center items-center relative">
      <div className="hidden md:block absolute z-[1]  bg-white h-[14rem] w-[96%] -bottom-4  rounded-2xl shadow-lg"></div>

      <div className="w-full bg-white rounded-2xl grid md:grid-cols-2 grid-cols-1 grid-rows-1 shadow-xl z-10 ">
        <div className="flex flex-col gap-6 justify-center px-6 py-8 md:pl-10">
          <h3 className="text-5xl capitalize max-w-xs ">
            introducing,
            <img
              src="swiftssignal.png" // Replace with the path to your image
              alt="New Solution"
              className="h-18 inline-block mr-4" // Adjust the height and margin as needed
            />
          </h3>
          <p className="max-w-xs">
            join our community and experience the benefits today!
          </p>
          <Link to={'/signup'}>
            <button className=" rounded-xl font-semibold px-6 py-3 bg-[#3164f5] border border-[#3164f5] text-white w-fit">
              Try it for free
            </button>
          </Link>
        </div>
        <div className="relative   md:block">
          <img
            src={img}
            alt=""
            className="absolute md:bottom-4 -bottom-16 -right-10 w-[18rem] md:w-auto "
          />
        </div>
      </div>
    </div>
  );
}

export default SolutionSection;
