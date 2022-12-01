import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import SidePanelItem from './SidePanelItem';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { FaSpinner } from 'react-icons/fa';
import { FC, useEffect, useState } from 'react';
import logo from '../../imgs/logo.png';
import { sidePanelType } from '../../types/userType';
import axios from 'axios';

const SidePanel: FC<{
  currentPath: string;
  setCurrentPath: Function;
  panel: boolean;
}> = ({ currentPath, setCurrentPath, panel }) => {
  const [sidePanelItems, setSidePanelItems] = useState<sidePanelType[]>([]);
  const [filteredSidePanelItems, setFilteredSidePanelItems] = useState<
    sidePanelType[]
  >([]);
  const [search, setSearch] = useState<string>('');
  const [noSearch, setNoSearch] = useState<string>('Searching');

  useEffect(() => {
    axios.get('http://localhost:4000/sidepanelitems').then((response) => {
      setSidePanelItems(response.data);
    });
  }, []);

  useEffect(() => {
    const searchFilter = (item: sidePanelType) =>
      [item.subItem.map((si) => si.name)]
        .join('')
        .toLowerCase()
        .indexOf(search.toLowerCase()) !== -1;

    const filteredPanelSearch = sidePanelItems.filter(searchFilter);
    setFilteredSidePanelItems(filteredPanelSearch);
    setNoSearch('Searching');
  }, [sidePanelItems, search]);

  useEffect(() => {
    if (!filteredSidePanelItems[0]) {
      setTimeout(() => {
        setNoSearch('No search found.');
      }, 3000);
    }
  }, [noSearch, filteredSidePanelItems]);
  return (
    <div
      className={`transition-all duration-200 h-screen flex flex-col gap-2 w-60 items-center p-1 bg-[#0e0f22eb] ${
        !panel && `w-0 p-0 overflow-hidden`
      }`}
    >
      <img src={logo} alt="Logo" className="w-max h-28" />
      <div className="relative">
        <input
          type="search"
          placeholder="Quick Access"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-1 rounded-t-2xl p-1 indent-7 text-md"
        />
        <BsSearch className="absolute top-2.5 left-3" />
        {search && (
          <div className="absolute w-full rounded-b-2xl bg-white p-1 text-md">
            {noSearch === 'Searching' && !filteredSidePanelItems[0] ? (
              <button className="flex pl-2 items-center cursor-wait" disabled>
                <FaSpinner className="animate-spin h-5 w-5 mr-3 text-indigo-500" />
                <h1 className="animate-pulse">{noSearch}</h1>
              </button>
            ) : (
              !filteredSidePanelItems[0] && <h1 className="pl-2">{noSearch}</h1>
            )}
            {filteredSidePanelItems.map((i) => {
              return i.subItem.map((sItem, idx2) => {
                if (sItem.name.toLowerCase().includes(search.toLowerCase())) {
                  return (
                    <Link
                      to={sItem.path}
                      key={idx2}
                      className="hover:bg-gray-200 pl-4 rounded cursor-pointer flex"
                    >
                      {sItem.name}
                    </Link>
                  );
                }
                return null;
              });
            })}
          </div>
        )}
      </div>
      <Link
        to={'/'}
        onClick={() => {
          setCurrentPath('Dashboard');
          localStorage.setItem('location', 'Dashboard');
        }}
        className={`flex items-center self-start gap-2 text-xl ${
          currentPath === 'Dashboard'
            ? 'text-green-400 bg-gray-700'
            : 'text-gray-400'
        } pl-2 p-5 hover:bg-gray-700 h-8 w-full rounded-lg`}
      >
        <MdDashboard /> Dashboard
      </Link>
      <div className="self-start pt-2 w-full">
        <h1 className="text-gray-600 uppercase text-md pb-2 pl-1">Settings</h1>

        {sidePanelItems.map((item) => (
          <SidePanelItem
            key={item.id}
            text={item.name}
            iconComponent={<AiOutlineArrowDown />}
            secondIconComponent={<AiOutlineArrowUp />}
            currentPage={{ currentPath, setCurrentPath }}
            subItem={item.subItem}
          />
        ))}

        <SidePanelItem
          text="License Management"
          currentPage={{ currentPath, setCurrentPath }}
        />
      </div>
    </div>
  );
};

export default SidePanel;
