import React from 'react';
import style from './LogoutPage.module.css';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserTC } from '../../../Redux/Reducers/loginFormReducer/loginReducer';
import { RoutesXPaths } from '../../../Routes/routes';
import { getIsLoggedIn } from '../../../Redux/Selectors/loginSelectors/loginSelectors';

const LogoutPage = () => {

  const dispatch = useDispatch();

  const isLoggedIn = useSelector( getIsLoggedIn );

  const onLogoutButtonClick = () => {
    dispatch( logoutUserTC() );
  };

  if ( !isLoggedIn ) {
    return <Navigate to={ RoutesXPaths.LOGIN }/>;
  }

  return (
    <div className={ style.logOutBlock }>
      <div className={ style.title }>
        Are you sure you want to exit?
      </div>
      <div className={ style.text }>
        If you are sure click the button below <span className={ style.arrow }>&#10534;</span>
      </div>
      <div
        className={ style.logoutBtn }
        onClick={ onLogoutButtonClick }>
        Click me for logout
      </div>
    </div>
  );
};

export default LogoutPage;