import {Link} from '@remix-run/react';
import {useState} from 'react';
import {ChevronDown} from '~/components/icons/ChevronDown';
import {UserIcon} from '~/components/icons/UserIcon';

function User() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className=" relative flex gap-2 items-center px-2 py-1 select-none  mr-4 hover:bg-stone-200 rounded-md hover:text-black/80 cursor-pointer active:scale-95 border-l"
      onClick={() => setOpen(!open)}
    >
      <UserIcon size={26} />
      <span>John Doe</span>
      <ChevronDown />
      {open && (
        <div className="absolute top-0 right-0 mt-12 w-full bg-stone-100 rounded-md shadow-md text-">
          <div className="flex flex-col gap-3 py-4 ">
            <Span to="/dashboard/profile">Profile</Span>
            <Span to="/dashboard/profile">Settings</Span>
            <Span to="/logout">Logout</Span>
          </div>
        </div>
      )}
    </div>
  );
}

export default User;

function Span({children, to}: {children: React.ReactNode; to: string}) {
  return (
    <Link to={to}>
      <div className="hover:bg-stone-200/20 hover:text-black/70 w-full px-4 py-1 active:scale-95">
        {children}
      </div>
    </Link>
  );
}
