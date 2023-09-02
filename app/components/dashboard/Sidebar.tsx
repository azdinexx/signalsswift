import img from '../../../public/swiftssignal.png';
import List from './List';
import {LogOut} from '../icons/Logout';
import {Link} from '@remix-run/react';

function Sidebar() {
  return (
    <div className="bg-stone-50 min-h-screen border-r min-w-[16rem] p-4 flex flex-col pb-6">
      <div className="my-2 flex items-center justify-center">
        <img src={img} width={200} height={100} />
      </div>
      <List />
      <Link to={'/logout'}>
        <div className="flex gap-4 bg-red-500/5 text-red-500 px-6 py-2 rounded-md text-lg items-center justify-center cursor-pointer hover:bg-red-500/10 ">
          Log Out
          <LogOut />
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
