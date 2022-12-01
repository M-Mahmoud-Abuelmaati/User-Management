import React, { FC, ReactNode, useState } from 'react';
import SidePanelSubItem from './SidePanelSubItem';

interface SidePanelConfig {
  text: string;
  iconComponent?: ReactNode;
  secondIconComponent?: ReactNode;
  subItem?: {
    name: string;
    path: string;
  }[];
  currentPage: {
    currentPath: string;
    setCurrentPath: Function;
  };
}

const SidePanelItem: FC<SidePanelConfig> = ({
  text,
  iconComponent,
  secondIconComponent,
  subItem,
  currentPage,
}) => {
  const [openItem, setOpenItem] = useState<boolean>(false);

  const onHandleOpenItem = () => {
    setOpenItem(!openItem);
  };
  const onHandleOpenSubItem = () => {
    if (iconComponent) {
      if (text === 'ATM Settings') {
        currentPage.setCurrentPath('ATM Settings');
        localStorage.setItem('location', text);
      }
      if (text === 'Business Setup') {
        currentPage.setCurrentPath('Business Setup');
        localStorage.setItem('location', text);
      }
      if (text === 'User Management') {
        currentPage.setCurrentPath('User Management');
        localStorage.setItem('location', text);
      }
    } else {
      currentPage.setCurrentPath('License Management');
      localStorage.setItem('location', text);
    }
  };

  return (
    <div className="pb-3 transition-all" onClick={onHandleOpenItem}>
      <h1
        className={`${
          currentPage.currentPath === text
            ? 'bg-green-600 text-white'
            : 'text-gray-400'
        } flex items-center justify-between text-lg p-1 cursor-pointer rounded-t`}
      >
        {text} {openItem ? iconComponent : secondIconComponent}
      </h1>
      {openItem && (
        <SidePanelSubItem subItem={subItem!} onClick={onHandleOpenSubItem} />
      )}
    </div>
  );
};

export default SidePanelItem;
