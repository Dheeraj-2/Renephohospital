import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar, { SidebarItem } from './Sidebar';
import { LayoutDashboard, User, Bed, Text } from 'lucide-react';

const Navbar = () => {
  const { isAuthenticated, role } = useSelector((state) => state.auth);
  const { email, name } = useSelector((state) => state.user.userData || {});
  // const { email,name } = useSelector((state) => state.user.userData);
  const getRoute = (path) => (role ? `/${role}${path}` : path);
  return (
    <div className="flex h-screen">
      <Sidebar email={email} userName={name}>
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          to={getRoute('/dashboard')}
        />

        {role === 'superAdmin' ? <SidebarItem
          icon={<User size={20} />}
          text="Users"
          to={getRoute('/allUsers')}
        /> : null}

        <SidebarItem
          icon={<Bed size={20} />}
          text="Patients"
          to={getRoute('/allPatients')}
        />

        <SidebarItem
          icon={<Bed size={20} />}
          text="Ward"
          to={getRoute('/Ward')}
        />

        <SidebarItem
          icon={<Text  size={20} />}
          text="Generate Invoice"
          to={getRoute('/billGenerate')}
        />
        
        <hr className="my-3" />
        {/* Uncomment if needed
          <SidebarItem icon={<Settings size={20} />} text="Settings" to={getRoute('/settings')} />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" to={getRoute('/help')} />
        */}
      </Sidebar>
    </div>
  );
};

export default Navbar;
