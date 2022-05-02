import { LoginType } from '../../../API/loginFormAPI/types';
import { Dispatch } from 'redux';
import { loginFormAPI } from '../../../API/loginFormAPI/loginFormAPI';
import { LoginFormActions } from '../../Actions/loginFormActions/loginFormActions';
import { AppRequestStatus } from '../../../enums';
import { appActions } from '../../Actions/appActions/appActions';
import { profileActions } from '../../Actions/profileActions/profileActions';
import { CONSOLE_DETAILS } from '../../../constants';

export const loginUserTC = ( loginInfo: LoginType ) => async ( dispatch: Dispatch ) => {
  dispatch( appActions.setAppStatusAC( AppRequestStatus.LOADING ) );
  try {
    const res = await loginFormAPI.loginMe( loginInfo );
    dispatch( LoginFormActions.setUserDataAC( res.data ) );
    dispatch( profileActions.setProfileAC( res.data ) );
    dispatch( LoginFormActions.setIsLoggedInAC( true ) );
    dispatch( appActions.setAppStatusAC( AppRequestStatus.SUCCEEDED ) );
  } catch ( e: any ) {
    const error = e.response ? e.response.data.error : ( e.message + CONSOLE_DETAILS );
    dispatch( LoginFormActions.setErrorAC( error ) );
    dispatch( appActions.setGlobalErrorAC( error ) );
    dispatch( appActions.setAppStatusAC( AppRequestStatus.FAILED ) );
  } finally {
    dispatch( appActions.setAppStatusAC( AppRequestStatus.IDLE ) );
  }
};

export const logoutUserTC = () => async ( dispatch: Dispatch ) => {
  try {
    await loginFormAPI.logoutMe();
    dispatch( LoginFormActions.setIsLoggedInAC( false ) );
  } catch ( error ) {
    dispatch( appActions.setGlobalErrorAC( error ) );
  } finally {
    dispatch( appActions.setAppStatusAC( AppRequestStatus.IDLE ) );
  }
};