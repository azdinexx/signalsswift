import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import appStyles from './styles/app.css';
import tailwindcss from './styles/tailwind.css';
import favicon from '../public/ss.png';
import RootLayout from './layout/RootLayout';
import {LoaderArgs, redirect} from '@shopify/remix-oxygen';

export const links = () => {
  return [
    {rel: 'stylesheet', href: appStyles},
    {rel: 'stylesheet', href: tailwindcss},
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    },
    {rel: 'icon', type: 'image/svg+xml', href: favicon},
  ];
};

export async function loader({context}: LoaderArgs) {
  const {session, storefront} = context;
  const layout = await storefront.query(LAYOUT_QUERY);
  const customerAccessToken = await session.get('customerAccessToken');
  const isLoggedIn = Boolean(customerAccessToken?.accessToken);
  if (isLoggedIn) {
    redirect('/account', {
      headers: {
        'Set-Cookie': await session.commit(),
      },
    });
  }
  return {layout, isLoggedIn};
}

export default function App() {
  const {layout, isLoggedIn} = useLoaderData();

  const {name, description} = layout.shop;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{name}</title>
        <meta name="description">{description}</meta>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {isLoggedIn ? (
          <Outlet />
        ) : (
          <RootLayout>
            <Outlet />
          </RootLayout>
        )}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

const LAYOUT_QUERY = `#graphql
  query layout {
    shop {
      name
      description
    }
  }
`;
