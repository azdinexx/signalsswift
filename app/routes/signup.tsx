import {Link, V2_MetaFunction} from '@remix-run/react';

export const meta: V2_MetaFunction = () => {
  return [{title: 'Sign Up'}];
};

function SignUp() {
  return (
    <div className="grid place-items-center  grid-cols-1 grid-rows-1 mb-36 mt-20">
      <div>
        <h1 className="text-4xl font-bold">Sign Up</h1>
        <p className="text-stone-500 mb-4 max-w-xs">
          Welcome! Explore the future with us
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

          <label htmlFor="pwd">Verify Password</label>
          <input
            type="password"
            placeholder="rewrite your password"
            id="pwd"
            name="pwd"
            className="pl-4 p-2 rounded-md"
          />
          <button className="bg-blue-500 text-white py-2 rounded-md">
            Sign Up
          </button>
        </form>
        <p className="py-4">
          Already signed Up?{' '}
          <Link className="text-blue-500" to="/login">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
