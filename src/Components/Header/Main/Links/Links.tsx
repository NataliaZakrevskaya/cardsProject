import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Links.module.css';
import { routesPathsEnum } from '../../../../Routes/enums';

const Links = () => {

  return (
    <div className={ style.main }>
      <NavLink
        to={ routesPathsEnum.PROFILE }
        className={ ( { isActive } ) => ( isActive ? style.active : style.ordinaryLink ) }>
        Profile
      </NavLink>
      <NavLink
        to={ routesPathsEnum.PACKS }
        className={ ( { isActive } ) => ( isActive ? style.active : style.ordinaryLink ) }>
        Packs
      </NavLink>
      <NavLink
        to={ routesPathsEnum.CARDS }
        className={ ( { isActive } ) => ( isActive ? style.active : style.ordinaryLink ) }>
        Cards
      </NavLink>
      <NavLink
        to={ routesPathsEnum.LOGOUT }
        className={ ( { isActive } ) => ( isActive ? style.active : style.ordinaryLink ) }>
        Logout
      </NavLink>
    </div>
  );
};

export default Links;