import React, { DetailedHTMLProps, FC, HTMLAttributes, memo } from 'react';
import { Navigate } from 'react-router-dom';
import { RoutesXPaths } from '../../Routes/routes';
import { getIsLoggedIn } from '../../Redux/Selectors/loginSelectors/loginSelectors';
import { useSelector } from 'react-redux';
import { AuthRedirectPagePropsType } from './types';

const AuthRedirectPage: FC<AuthRedirectPagePropsType> = memo( ( { children, ...restProps } ) => {

  const isLoggedIn = useSelector( getIsLoggedIn );

  if ( !isLoggedIn ) {
    return <Navigate to={ RoutesXPaths.LOGIN }/>;
  }
  return (
    <>
      <div { ...restProps }>{ children }</div>
    </>
  );
} );

export default AuthRedirectPage;