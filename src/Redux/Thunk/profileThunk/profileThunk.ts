import { Dispatch } from 'redux';
import { profileAPI } from '../../../API/profileAPI/profileAPI';
import { appActions } from '../../Actions/appActions/appActions';
import { profileActions } from '../../Actions/profileActions/profileActions';
import { AppRequestStatus } from '../../../enums';
import { CONSOLE_DETAILS } from '../../../constants';

export const updateUserNameTC = ( newUserName: string ) => async ( dispatch: Dispatch ) => {
  dispatch( appActions.setAppStatusAC( AppRequestStatus.LOADING ) );
  let updateModel = {
    name: newUserName,
    avatar: '',
  };
  try {
    let res = await profileAPI.changeUserName( updateModel );
    const { updatedUser } = res.data;
    dispatch( profileActions.setProfileAC( updatedUser ) );
    dispatch( appActions.setAppStatusAC( AppRequestStatus.SUCCEEDED ) );
    dispatch( profileActions.setErrorAC( '' ) );
  } catch ( e: any ) {
    const error = e.response ? e.response.data.error : ( e.message + CONSOLE_DETAILS );
    dispatch( profileActions.setErrorAC( error ) );
    dispatch( appActions.setGlobalErrorAC( error ) );

    dispatch( appActions.setAppStatusAC( AppRequestStatus.FAILED ) );
  } finally {
    dispatch( appActions.setAppStatusAC( AppRequestStatus.IDLE ) );
  }
};