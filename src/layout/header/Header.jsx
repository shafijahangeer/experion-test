import React, { useState } from "react";
import SearchBar from "../../components/search/SearchBar";
import GTScore from "../../components/gt-score/GTScore";
import Icon from "../../components/Icon";
import ShoppingCart from "../../components/shopping-cart/ShoppingCart";
import UserProfile from "../../components/user-profile/UserProfile";
import Sidebar from "../sidebar/SideBar";
import UserName from "../../components/user-name/UserName";


function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <header className="header">
            <button className="hamburger" onClick={toggleSidebar}>
                {isSidebarOpen ? (
                    <Icon className="close" name="close" />
                ) : (
                    <Icon name="hamburger" />
                )}
            </button>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <UserName name="John" />
            <div className="content-area">
                <SearchBar />
                <div className="profile-container">
                    <GTScore />
                    <div className="profile-area">
                        <Icon className="favourite" name={'heart'} />
                        <ShoppingCart />
                        <UserProfile />
                    </div>

                </div>

            </div>
        </header>
    );
}
export default Header;