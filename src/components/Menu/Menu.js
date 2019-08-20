import React from 'react';

import './style.scss';

const Menu = () => {
  return (
    <nav className="menu">
      <a href="#root" className="menu--item menu--item-active">Workday</a>
      <a href="#root" className="menu--item">Clients</a>
      <a href="#root" className="menu--item">Finance</a>
      <a href="#root" className="menu--item">Goods</a>
      <a href="#root" className="menu--item">Services</a>
      <div className="menu--more">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Menu;