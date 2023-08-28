import img from '../assets/smartsave.png';
import {Link} from '@remix-run/react';
function SmartSave() {
  return (
    <section className=" my-20 md:my-0 py-10 md:pb-0  border-2 md:border-none  rounded-md   flex items-center justify-center">
      <div className=" relative grid grid-cols-1 md:grid-cols-2   md:grid-rows-1 gap-10">
        <div className="  md:block">
          <img
            src={img}
            alt=""
            width={600}
            className="absolute md:relative -bottom-[7rem] md:bottom-0 md:right-0 -right-14 w-[18rem] md:w-auto "
          />
        </div>
        <article className="flex flex-col gap-6">
          <span className="uppercase text-stone-600">Save Time and Effort</span>
          <h5 className="text-4xl leading-20  max-w-sm ">
            All your trading is safe with us
          </h5>
          <p className="text-stone-700 max-w-sm">
            We take your Trading very seriously, which is why we use advanced
            encryption protocols to protect your tarding signals and execute
            seamlessly. Your data is safe and secure with us.
          </p>
          <Link to={'/signup'}>
            <button className=" rounded-xl font-semibold px-8 py-3 border border-black w-fit">
              Try now for free
            </button>
          </Link>
        </article>
      </div>
    </section>
  );
}

export default SmartSave;
