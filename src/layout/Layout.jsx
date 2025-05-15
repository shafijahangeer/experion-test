import React, { useState } from "react";
import Header from "./header/Header";
import SideBar from "./sidebar/SideBar";
import { Outlet } from "react-router-dom";
function Layout() {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };
  return (
    <div className="layout">
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}   />
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="content-container">
       <Outlet />
      </div>
    </div>
  );
}
export default Layout;

