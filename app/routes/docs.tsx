import {V2_MetaFunction} from '@shopify/remix-oxygen';

export const meta: V2_MetaFunction = () => {
  return [{title: 'Docs'}];
};

function Docs() {
  return (
    <div className="grid place-items-left  grid-cols-1 grid-rows-1 mb-36 mt-26">
      <div>
        <h1 className="text-4xl font-bold">
          Signal
          <img
            src="/ss.png"
            alt="signalsswift"
            className="h-12 inline-block"
            style={{verticalAlign: 'middle'}}
          />
          wift Docs
        </h1>
        <p className="text-stone-500 mb-4 max-w-md">
          Get Started! setup the Signalsswift and start trading!
        </p>
      </div>
    </div>
  );
}

export default Docs;
