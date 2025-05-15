// src/components/Sidebar.jsx
import React, { useState } from 'react';
import Icon from '../../components/Icon';
import Img from '../../components/img/Img';



const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { icon: <Icon name="membership" />, label: 'Membership' },
    { icon: <Icon name="dashboard" />, label: 'Dashboard' },
     { icon: <Icon name="orders" />, label: 'Orders' },
    { icon: <Icon name="help" />, label: 'Help' },
  ];


   return (
   <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <a href='/' className='logo'>
        <Img className='' src={'../assets/images/logo.svg'} alt={'illustration of logo'} />
        {/* <Icon name={'logo'} /> */}
      </a>
      {menuItems.map((item, index) => (
        <div
          className={`sidebar__item ${activeIndex === index ? 'active' : ''}`}
          key={index}
          onClick={() => setActiveIndex(index)}
        >
          <div className="sidebar__icon">{item.icon}</div>
          <span className="sidebar__label">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
