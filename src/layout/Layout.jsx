import React from "react";
import Header from "./header/Header";
import SideBar from "./sidebar/SideBar";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="layout">
      <SideBar />
      <Header />
      <div className="content-container">
       <Outlet />
      </div>
    </div>
  );
}
export default Layout;

