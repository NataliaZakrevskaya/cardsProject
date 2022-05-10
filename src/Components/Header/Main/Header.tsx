import React from 'react';
import Links from './Links/Links';
import style from './Header.module.css';

const Header = () => {
  return (
    <div className={ style.header }>
      <Links/>
    </div>
  );
};

export default Header;
