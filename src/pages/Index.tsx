import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import SidePanel from '../components/SidePanel/SidePanel';
import { useEffect, useState } from 'react';

const Index: FC = () => {
  const [currentPath, setCurrentPath] = useState<string>('');
  const [openSidePanel, setOpenSidePanel] = useState<boolean>(true);

  useEffect(() => {
    const location = localStorage.getItem('location');
    if (location) {
      setCurrentPath(location);
    } else {
      setCurrentPath('Dashboard');
    }
  }, []);

  useEffect(() => {
    const panel = localStorage.getItem('panel');
    if (panel !== 'true') {
      setOpenSidePanel(false);
    }
  }, []);

  return (
    <div className="flex font-sans">
      <SidePanel
        currentPath={currentPath}
        setCurrentPath={setCurrentPath}
        panel={openSidePanel}
      />
      <div className="w-screen">
        <Navbar panel={{ openSidePanel, setOpenSidePanel }} />
        <Outlet />
      </div>
    </div>
  );
};

export default Index;
