import {Link} from '@remix-run/react';
import {ChevronDown} from '../icons/ChevronDown';

export interface ItemProps {
  name: string;
  link: string;
  icon?: JSX.Element;
}

export default function SubList({
  items,
  title,
  icon,
  open,
  order,
  setOpen,
}: {
  items: ItemProps[];
  title: string;
  icon?: JSX.Element;
  open: number;
  order: number;
  setOpen: (open: number) => void;
}) {
  return (
    <>
      <div
        className="text-lg bg-stone-100 py-2 px-4 my-2   rounded-md flex gap-2 items-center cursor-pointer hover:bg-stone-200"
        onClick={() => setOpen(order)}
        onDoubleClick={() => setOpen(5)}
      >
        <div
          className={`${
            open === order ? 'rotate-180' : null
          } transform transition-all duration-300 `}
        >
          <ChevronDown />
        </div>
        {icon && <div className="">{icon}</div>}
        {title}
      </div>
      {open === order && (
        <ul className="border-l flex flex-col gap-2 ml-6 pt-4 mb-6 ">
          {items.map((item) => {
            return (
              <Link to={item.link}>
                <li className="flex items-center gap-2 ml-5 relative before:absolute before:w-4 before:h-[1px] before:bg-stone-200 before:-left-5 hover:bg-stone-100 p-2 pl-4 rounded-lg hover:text-stone-900 ">
                  {item.icon && <div className="">{item.icon}</div>}
                  {item.name}
                </li>
              </Link>
            );
          })}
        </ul>
      )}
    </>
  );
}
