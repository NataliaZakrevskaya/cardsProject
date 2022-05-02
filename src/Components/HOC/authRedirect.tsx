import React, { FC, memo } from 'react';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../../Redux/Selectors/loginSelectors/loginSelectors';
import { useSelector } from 'react-redux';
import { AuthRedirectPagePropsType } from './types';
import { routesPathsEnum } from '../../Routes/enums';

const AuthRedirectPage: FC<AuthRedirectPagePropsType> = memo( ( { children, ...restProps } ) => {

  const isLoggedIn = useSelector( getIsLoggedIn );

  if ( !isLoggedIn ) {
    return <Navigate to={ routesPathsEnum.LOGIN }/>;
  }
  return (
    <>
      <div { ...restProps }>{ children }</div>
    </>
  );
} );

export default AuthRedirectPage;