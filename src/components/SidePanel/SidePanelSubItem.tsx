import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const SidePanelSubItem: FC<{
  subItem: { name: string; path: string }[];
  onClick: Function;
}> = ({ subItem, onClick }) => {
  return (
    <div className="flex flex-col bg-gray-800" onClick={() => onClick()}>
      {subItem &&
        subItem.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`pt-2 pl-3 pb-1.5 ${
              item.name ===
              window.location.pathname.split('/')[1].charAt(0).toUpperCase() +
                window.location.pathname.split('/')[1].slice(1)
                ? 'border-l-2 border-green-400 text-green-400'
                : 'text-gray-400'
            } hover:border-l-2 hover:border-green-400 hover:text-green-400 hover:bg-gray-700 font-semibold`}
          >
            {item.name}
          </Link>
        ))}
    </div>
  );
};

export default SidePanelSubItem;
