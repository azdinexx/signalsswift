import {Link, V2_MetaFunction} from '@remix-run/react';

export const meta: V2_MetaFunction = () => {
  return [{title: 'Log In'}];
};
function LogIn() {
  return (
    <div className=" flex ">
      <div className="mx-auto mt-20 mb-36">
        <h1 className="text-4xl font-bold">Log In</h1>
        <p className="text-stone-500 mb-4 max-w-xs">
          Welcome back! Explore the future with us
        </p>
        <form action="#" className="flex flex-col gap-4 max-w-sm">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="your email"
            id="email"
            name="email"
            className="pl-4 p-2 rounded-md"
          />
          <label htmlFor="pwd">Password</label>
          <input
            type="password"
            placeholder="your password"
            id="pwd"
            name="pwd"
            className="pl-4 p-2 rounded-md"
          />

          <button className="bg-blue-500 text-white py-2 rounded-md">
            Log In
          </button>
        </form>
        <p className="py-4">
          Don&apos;t have an account?{' '}
          <Link className="text-blue-500" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LogIn;
