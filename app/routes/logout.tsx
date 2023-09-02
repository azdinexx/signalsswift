import {LoaderArgs, redirect} from '@shopify/remix-oxygen';
import React from 'react';

export async function loader({request, context}: LoaderArgs) {
  const {session} = context;
  const customerAccessToken = await session.get('customerAccessToken');
  const isLoggedIn = Boolean(customerAccessToken?.accessToken);
  if (isLoggedIn) {
    session.unset('customerAccessToken');
    return redirect('/', {
      headers: {
        'Set-Cookie': await session.commit(),
      },
    });
  }
  return {};
}
function logout() {
  return <div>loging out...</div>;
}

export default logout;
