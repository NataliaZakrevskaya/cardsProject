import { Dispatch } from 'redux';
import { meAPI } from '../../../API/meAPI/meAPI';
import { ProfileActions } from '../../Reducers/profileReducer/ProfileReducer';
import { LoginFormActions } from '../../Actions/loginFormActions/loginFormActions';
import { meActions } from '../../Actions/meActions/meActions';
import { appActions } from '../../Actions/appActions/appActions';
import { AppRequestStatus } from '../../../enums';

export const meTC = () => async ( dispatch: Dispatch ) => {
  dispatch( appActions.setAppStatusAC( AppRequestStatus.LOADING ) );
  dispatch( appActions.setIsLoadAC( true ) );
  try {
    let res = await meAPI.me();
    dispatch( ProfileActions.setProfileAC( res.data ) );
    dispatch( LoginFormActions.setIsLoggedInAC( true ) );
    dispatch( appActions.setAppStatusAC( AppRequestStatus.SUCCEEDED ) );
  } catch ( error: any ) {
    dispatch( appActions.setGlobalErrorAC( error.response ? error.response.data.error : 'some error' ) );
    dispatch( appActions.setAppStatusAC( AppRequestStatus.FAILED ) );
  } finally {
    dispatch( meActions.initializeMeAC( true ) );
    dispatch( appActions.setAppStatusAC( AppRequestStatus.IDLE ) );
    dispatch( appActions.setIsLoadAC( false ) );
  }
};