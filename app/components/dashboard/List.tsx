import SubList from './SubList';
import {SettingsIcon} from '../icons/Settings';
import {UserIcon} from '../icons/UserIcon';
import {useState} from 'react';
import {Report} from '../icons/Report';

function List() {
  const [open, setOpen] = useState(0);
  return (
    <div className="mt-10 text-stone-600  max-h-96  select-none mb-auto ">
      <SubList
        items={UserList}
        title={'User'}
        icon={<UserIcon size={20} />}
        setOpen={setOpen}
        open={open}
        order={0}
      />
      <SubList
        items={SettingsItems}
        title={'Settings'}
        icon={<SettingsIcon size={20} />}
        setOpen={setOpen}
        open={open}
        order={1}
      />
      <SubList
        items={ReportItems}
        title={'Reports'}
        icon={<Report />}
        setOpen={setOpen}
        open={open}
        order={2}
      />
    </div>
  );
}

export default List;

const UserList = [
  {
    name: 'Dashboard',
    link: '/dashboard',
  },
  {
    name: 'Users',
    link: '/users',
  },

  {
    name: 'Settings',
    link: '/settings',
  },
];

const ReportItems = [
  {
    name: 'month',
    link: '/month',
  },
  {
    name: 'week',
    link: '/week',
  },
  {
    name: 'day',
    link: '/day',
  },
];

const SettingsItems = [
  {
    name: 'billing',
    link: '/billing',
  },
  {
    name: 'profile',
    link: '/profile',
  },
  {
    name: 'account',
    link: '/account',
  },
  {
    name: 'security',
    link: '/security',
  },
];
