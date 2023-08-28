import img from '../assets/CostSaver.png';

function CostSaver() {
  return (
    <section className="md:min-h-screen flex items-center justify-center">
      <div className="grid md:grid-cols-2 grid-cols-1  grid-rows-1  gap-10 w-full">
        <article className="flex flex-col gap-6 md:pl-10">
          <span className="uppercase text-stone-600">No Stress</span>
          <h5 className="text-4xl leading-20  max-w-sm ">Plug and Play</h5>
          <p className="text-stone-700 max-w-sm">
            Powerful tool that helps you reduce lag, latency, and overall effort
            on your trading operations. With our advanced optimization software,
            you can reduce your trade setup time by up to 30%.
          </p>
          <a href={'/signup'}>
            <button className=" rounded-xl font-semibold px-8 py-3 border border-black w-fit">
              Try now for free
            </button>
          </a>
        </article>
        <div className="hidden md:flex justify-center">
          <img src={img} alt="" width={300} className="-top-10" />
        </div>
      </div>
    </section>
  );
}

export default CostSaver;
