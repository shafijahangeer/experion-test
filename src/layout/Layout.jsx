import React from "react";
import Header from "./header/Header";
import SideBar from "./sidebar/SideBar";
import ContentArea from "./content/ContentArea";
import MembershipCard from "../components/membership-card/MembershipCard";
function Layout() {
  return (
    <div className="layout">
      <SideBar />
      <Header />
      <div className="content-container">
        <ContentArea />
        <MembershipCard />
      </div>
    </div>
  );
}
export default Layout;

