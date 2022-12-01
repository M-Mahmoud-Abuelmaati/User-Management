import { FC } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { HiOutlineMenu } from 'react-icons/hi';
import { format } from 'date-fns';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { IoNotificationsOutline } from 'react-icons/io5';
import { RiArrowDownSLine } from 'react-icons/ri';

interface User {
  name: string;
}

const Navbar: FC<{
  panel: { openSidePanel: boolean; setOpenSidePanel: Function };
}> = ({ panel }) => {
  const user: User = {
    name: 'Mohamed Mahmoud',
  };

  const greetings = () => {
    const date = format(Date.now(), 'HH:mm');
    if (date >= '00:01' && date <= '11:59') {
      return 'Good Morning';
    }
    if (date >= '12:01' && date <= '16:00') {
      return 'Good Afternoon';
    }
    if (date >= '16:00' && date <= '23:59') {
      return 'Good Evening';
    }
  };

  return (
    <div className="flex gap-5 border border-1 h-max p-2">
      <div className="flex justify-between items-center w-full">
        <div className="flex">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              panel.setOpenSidePanel(!panel.openSidePanel);
              localStorage.setItem(
                'panel',
                !panel.openSidePanel as unknown as string
              );
            }}
          >
            {panel.openSidePanel ? (
              <IoIosArrowBack size={12} />
            ) : (
              <IoIosArrowForward size={12} />
            )}
            <HiOutlineMenu size={24} />
          </div>
          <h1 className="pl-3">
            <span className="font-semibold">{greetings()}</span>{' '}
            {format(Date.now(), `EEE LLL dd, yyyy hh:mm aa`)}
          </h1>
        </div>
        <div className="flex p-1 h-full gap-1">
          <div className="flex relative p-2">
            <AiOutlineQuestionCircle size={26} className="cursor-help" />
            <span className="flex items-center pr-1 cursor-pointer">
              <IoNotificationsOutline size={26} className="mr-1" />
              <label className="absolute bg-red-600 text-xs text-white font-bold top-0 right-2 rounded-md animate-pulse p-0.5">
                6+
              </label>
            </span>
          </div>
          <span className="h-full border-l border border-gray-400"></span>
          <div className="flex h-max gap-2 items-center justify-start p-1">
            <h1 className="hover:underline font-semibold underline-offset-4 cursor-pointer">
              {user.name}
            </h1>
            <label className="p-1 py-2 px-2 rounded-full bg-green-500/50 text-[10px] font-bold flex">
              {user.name.charAt(0) + user.name.split(' ')[1].charAt(0)}
            </label>
            <RiArrowDownSLine className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
