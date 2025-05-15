// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../../components/Icon';
import Img from '../../components/img/Img';

const Sidebar = () => {
  const menuItems = [

    { icon: <Icon name="membership" />, label: 'Membership', path: '/membership' },
    { icon: <Icon name="dashboard" />, label: 'Dashboard', path: '/dashboard' },
    { icon: <Icon name="orders" />, label: 'Orders', path: '/orders' },
    { icon: <Icon name="help" />, label: 'Help', path: '/help' },
  ];

  return (
    <div className="sidebar open">
      <NavLink to="/" className="logo">
        <Img src="/assets/images/logo.svg" alt="Logo" />
      </NavLink>

      {menuItems.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className={({ isActive }) =>
            `sidebar__item ${isActive ? 'active' : ''}`
          }
        >
          <div className="sidebar__icon">{item.icon}</div>
          <span className="sidebar__label">{item.label}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
