import React from "react";
import DashboardSideBar from "./components/dashboard-side-bar";
import DashboardAppBar from "./components/dashboard-app-bar";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <div className="flex">
      <DashboardSideBar />
      <div>
        <DashboardAppBar />
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
