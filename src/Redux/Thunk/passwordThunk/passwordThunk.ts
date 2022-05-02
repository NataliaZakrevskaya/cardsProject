import { Dispatch } from 'redux';
import { passwordActions } from '../../Actions/passwordActions/passwordActions';
import { appActions } from '../../Actions/appActions/appActions';
import { passwordAPI } from '../../../API/passwordAPI/passwordAPI';
import { AppRequestStatus } from '../../../enums';
import { SOME_ERROR } from '../../../constants';
import { newPassBodyType } from '../../../API/passwordAPI/types';

export const registerUserTC = ( body: { email: string, password: string } ) => async ( dispatch: Dispatch ) => {

  dispatch( appActions.setAppStatusAC( AppRequestStatus.LOADING ) );
  dispatch( appActions.setIsLoadAC( true ) );
  try {
    let res = await passwordAPI.registerMe( body );
    dispatch( passwordActions.registerNewUserAC( res.data ) );
    dispatch( appActions.setAppStatusAC( AppRequestStatus.SUCCEEDED ) );
  } catch ( e: any ) {
    const error = e.response ? e.response.data.error : ( e.message + ', more details in the console' );
    dispatch( passwordActions.setRegisterErrorAC( error ) );
    dispatch( appActions.setAppStatusAC( AppRequestStatus.FAILED ) );
  } finally {
    dispatch( appActions.setAppStatusAC( AppRequestStatus.IDLE ) );
    dispatch( appActions.setIsLoadAC( false ) );
  }
};

export const passwordRecoveryTC = ( email: string ) => async ( dispatch: Dispatch ) => {
  dispatch( appActions.setAppStatusAC( AppRequestStatus.LOADING ) );
  dispatch( appActions.setIsLoadAC( true ) );
  try {
    let res = await passwordAPI.forgot( email );
    dispatch( passwordActions.setRecoveryPassInfoAC( res.data ) );
    dispatch( appActions.setAppStatusAC( AppRequestStatus.SUCCEEDED ) );
  } catch ( error: any ) {
    dispatch( appActions.setGlobalErrorAC( error.response ? error.response.data.error : SOME_ERROR ) );
    dispatch( appActions.setAppStatusAC( AppRequestStatus.FAILED ) );
  } finally {
    dispatch( appActions.setAppStatusAC( AppRequestStatus.IDLE ) );
    dispatch( appActions.setIsLoadAC( false ) );
  }
};

export const newPasswordTC = ( body: newPassBodyType ) => async ( dispatch: Dispatch ) => {
  dispatch( appActions.setAppStatusAC( AppRequestStatus.LOADING ) );
  dispatch( appActions.setIsLoadAC( true ) );
  try {
    let res = await passwordAPI.createNewPass( body );
    dispatch( passwordActions.setInfoNewPassAC( res.data ) );
    dispatch( appActions.setAppStatusAC( AppRequestStatus.SUCCEEDED ) );
  } catch ( error: any ) {
    dispatch( appActions.setGlobalErrorAC( error.response ? error.response.data.error : SOME_ERROR ) );
    dispatch( appActions.setAppStatusAC( AppRequestStatus.FAILED ) );
  } finally {
    dispatch( appActions.setAppStatusAC( AppRequestStatus.IDLE ) );
    dispatch( appActions.setIsLoadAC( false ) );
  }
};