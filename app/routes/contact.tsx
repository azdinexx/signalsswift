import {V2_MetaFunction} from '@shopify/remix-oxygen';
import img from '../assets/CostSaver.png';

export const meta: V2_MetaFunction = () => {
  return [{title: 'Contact Us'}];
};

function ContactUs() {
  return (
    <div className="grid place-items-center md:grid-cols-2 grid-cols-1 md:grid-rows-1 mb-36 mt-20">
      <div className="mb-10">
        <img src={img} alt="" width={500} className="w-48 md:w-auto" />
      </div>
      <div>
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-stone-500 mb-4 max-w-xs">
          explore the future with us. Feel Free to get in touch
        </p>
        <form action="#" className="flex flex-col gap-4 max-w-sm">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="your name"
            id="name"
            name="name"
            className="pl-4 p-2 rounded-md"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="email@example.com"
            id="email"
            name="email"
            className="pl-4 p-2 rounded-md"
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="4"
            placeholder="how can we get better?"
            className="pl-4 p-2 rounded-md resize-none"
          ></textarea>
          <button className="bg-blue-500 text-white py-2 rounded-md">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
