import React from "react";
import SearchBar from "../../components/search/SearchBar";
import GTScore from "../../components/gt-score/GTScore";
import Icon from "../../components/Icon";
import ShoppingCart from "../../components/shopping-cart/ShoppingCart";
import UserProfile from "../../components/user-profile/UserProfile";
import UserName from "../../components/user-name/UserName";

function Header({ toggleSidebar, isSidebarOpen }) {
  return (
    <header className="header">
      <button className="hamburger" onClick={toggleSidebar}>
        {isSidebarOpen ? (
          <Icon className="close" name="close" />
        ) : (
          <Icon name="hamburger" />
        )}
      </button>

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
