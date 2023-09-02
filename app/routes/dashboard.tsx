import {Outlet} from '@remix-run/react';
import {LoaderArgs, redirect} from '@shopify/remix-oxygen';
import Navigation from '~/components/dashboard/Header/Navigation';
import Sidebar from '~/components/dashboard/Sidebar';

export async function loader({context}: LoaderArgs) {
  const {session} = context;
  const customerAccessToken = await session.get('customerAccessToken');
  const isLoggedIn = Boolean(customerAccessToken?.accessToken);

  if (!isLoggedIn) {
    session.unset('customerAccessToken');
    return redirect('/login', {
      headers: {
        'Set-Cookie': await session.commit(),
      },
    });
  }
  return {};
}
function dashboard() {
  return (
    <main className=" flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navigation />
        <Outlet />
      </div>
    </main>
  );
}

export default dashboard;
