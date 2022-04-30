import { LoginType } from '../../../API/loginFormAPI/types';
import { Dispatch } from 'redux';
import { loginFormAPI } from '../../../API/loginFormAPI/loginFormAPI';
import { LoginFormActions } from '../../Actions/loginFormActions/loginFormActions';
import { ProfileActions } from '../../Reducers/profileReducer/ProfileReducer';
import { AppRequestStatus } from '../../../enums';
import { appActions } from '../../Actions/appActions/appActions';

export const loginUserTC = ( body: LoginType ) => async ( dispatch: Dispatch ) => {
  dispatch( appActions.setAppStatusAC( AppRequestStatus.LOADING ) );
  try {
    const res = await loginFormAPI.loginMe( body );
    dispatch( LoginFormActions.setUserDataAC( res.data ) );
    dispatch( ProfileActions.setProfileAC( res.data ) );
    dispatch( LoginFormActions.setIsLoggedInAC( true ) );
    dispatch( appActions.setAppStatusAC( AppRequestStatus.SUCCEEDED ) );
  } catch ( e: any ) {
    const error = e.response ? e.response.data.error : ( e.message + ', more details in the console' );
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