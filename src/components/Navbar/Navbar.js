import React from 'react';
import './style.scss';
import Logo from '../Logo/Logo';
import SearchField from '../SearchField/SearchField';
import Menu from '../Menu/Menu';
import User from '../User/User';

const Navbar = () => {
  return (
    <header className="navbar">
      <Logo />
      <SearchField />
      <Menu />
      <User />
    </header>
  );
};

export default Navbar;