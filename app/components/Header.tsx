import {useEffect, useState} from 'react';
import {useLocation, Link, useLoaderData} from '@remix-run/react';
import img from '../../public/ss.png';
import {LoaderArgs} from '@shopify/remix-oxygen';
import {UserIcon} from './icons/UserIcon';

export async function loader({context}: LoaderArgs) {
  const {session, storefront} = context;
  const customerAccessToken = await session.get('customerAccessToken');
  const isLoggedIn = Boolean(customerAccessToken?.accessToken);

  return {isLoggedIn};
}
function Header() {
  const {isLoggedIn} = useLoaderData();

  const navigate = useLocation();
  const [index, setIndex] = useState(0);
  const [isMenuOpen, setMenu] = useState(false);

  useEffect(() => {
    switch (navigate.pathname) {
      case '/':
        setIndex(0);
        break;
      case '/pricing':
        setIndex(1);
        break;
      case '/about':
        setIndex(2);
        break;
      case '/contact':
        setIndex(3);
        break;
      case '/docs':
        setIndex(4);
        break;
      case '/login':
        setIndex(5);
        break;
      case '/signup':
        setIndex(6);
        break;
      default:
        setIndex(0);
        break;
    }
  }, [navigate]);

  return (
    <header className="relative px-4 md:px-0 md:max-w-6xl py-6 mx-auto flex justify-between items-center">
      <div className="flex gap-20 items-center">
        {/* LOGO */}
        <div className="flex gap-2">
          <MenuSvg setMenu={setMenu} isMenuOpen={isMenuOpen} />
          <Link to={'/'}>
            <img src={img} alt="signalsswift" className="h-12" />
          </Link>
        </div>
        {/* NAV */}
        <nav
          className={`${
            isMenuOpen
              ? 'bg-white px-6 py-3 absolute top-20 rounded-lg shadow-2xl'
              : 'hidden'
          }  md:block `}
        >
          <ul
            className={`${
              isMenuOpen ? 'flex-col' : null
            } flex  gap-5 md:gap-10`}
          >
            <NavItem index={index} order={0} to={'/'}>
              Home
            </NavItem>
            <NavItem index={index} order={1} to={'/pricing'}>
              Pricing
            </NavItem>
            <NavItem index={index} order={2} to={'/about'}>
              About Us
            </NavItem>
            <NavItem index={index} order={3} to={'/contact'}>
              Contact
            </NavItem>
            <NavItem index={index} order={4} to={'/docs'}>
              Docs
            </NavItem>
          </ul>
        </nav>
      </div>
      {/* Login and Sign up features */}
      {!isLoggedIn ? (
        <div className="flex gap-4">
          <Link to={'/login'}>
            <button className="px-5 py-2 text-[#3164f5] -white rounded-md ">
              Log In
            </button>
          </Link>
          <Link to={'/signup'}>
            <button className="px-5 py-2 bg-[#3164f5] text-white rounded-md ">
              Sign Up
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex gap-3 items-center">
          <span className="text-blue-500 bg-blue-400/20 px-1 rounded-md ">
            Free Plan
          </span>
          <UserMenu />
        </div>
      )}
    </header>
  );
}

export default Header;

function NavItem({
  to,
  index,
  order,
  children,
}: {
  to: string;
  index: number;
  order: number;
  children: React.ReactNode;
}) {
  return (
    <Link to={to}>
      <li
        className={`${
          index === order ? 'text-[#3164f5]  ' : null
        }          text-sm md:text-lg `}
      >
        {children}
      </li>
    </Link>
  );
}

function MenuSvg({
  isMenuOpen,
  setMenu,
}: {
  isMenuOpen: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button className="block md:hidden" onClick={() => setMenu(!isMenuOpen)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M224 120v16a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8Zm-8 56H40a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8Zm0-128H40a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8Z"
        />
      </svg>
    </button>
  );
}

function UserMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)}>
        <UserIcon className="text-[#3164f5] hover:text-[#3164f5]/60 active:scale-95" />
      </button>
      {open ? (
        <div className="absolute top-12 right-0 bg-white rounded-md shadow-2xl">
          <ul className="flex flex-col gap-2 px-6 py-4">
            <Link to={'/account'}>
              <li className="text-sm">Profile</li>
            </Link>
            <Link to={'/account/settings'}>
              <li className="text-sm">Settings</li>
            </Link>
            <Link to={'/logout'}>
              <li className="text-sm">Logout</li>
            </Link>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
