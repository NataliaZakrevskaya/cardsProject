import { packsAPI } from '../../../API/packsAPI/packsAPI';
import { AppStateType, AppThunkType } from '../../Store/store';
import { Dispatch } from 'redux';
import { packsActions } from '../../Actions/packsActions/packsActions';
import { appActions } from '../../Actions/appActions/appActions';
import { AppRequestStatus } from '../../../enums';
import { newPackType } from '../../../API/packsAPI/types';
import { SOME_ERROR } from '../../../constants';

export const packsTC = () => async ( dispatch: Dispatch, getState: () => AppStateType ) => {
  const { packName, minCardsCount, maxCardsCount, updated, page, pageCount, user_id } = getState().packs;
  dispatch( appActions.setAppStatusAC( AppRequestStatus.LOADING ) );
  dispatch( appActions.setIsLoadAC( true ) );
  try {
    let res = await packsAPI.setPacks( packName, minCardsCount, maxCardsCount, updated, page, pageCount, user_id );
    dispatch( packsActions.setPacksAC( res.passwordRecoveryInfo ) );
    dispatch( appActions.setAppStatusAC( AppRequestStatus.SUCCEEDED ) );
  } catch ( error: any ) {
    dispatch( appActions.setGlobalErrorAC( error.response ? error.response.data.error : SOME_ERROR ) );
    dispatch( appActions.setAppStatusAC( AppRequestStatus.FAILED ) );
  } finally {
    dispatch( appActions.setAppStatusAC( AppRequestStatus.IDLE ) );
    dispatch( appActions.setIsLoadAC( false ) );
  }
};

export const addNewPacksTC = ( newPack: newPackType ): AppThunkType => async ( dispatch: any ) => {
  dispatch( appActions.setAppStatusAC( AppRequestStatus.LOADING ) );
  dispatch( appActions.setIsLoadAC( true ) );
  try {
    await packsAPI.addNewPack( newPack );
    dispatch( packsTC() );
  } catch ( error: any ) {
    dispatch( appActions.setGlobalErrorAC( error.response ? error.response.data.error : SOME_ERROR ) );
    dispatch( appActions.setAppStatusAC( AppRequestStatus.FAILED ) );
  } finally {
    dispatch( appActions.setAppStatusAC( AppRequestStatus.IDLE ) );
    dispatch( appActions.setIsLoadAC( false ) );
  }
};

export const deletePacksTC = ( id: string ): AppThunkType => async ( dispatch: any ) => {
  dispatch( appActions.setAppStatusAC( AppRequestStatus.LOADING ) );
  dispatch( appActions.setIsLoadAC( true ) );
  try {
    await packsAPI.deletePack( id );
    dispatch( packsTC() );
  } catch ( error: any ) {
    dispatch( appActions.setGlobalErrorAC( error.response ? error.response.data.error : SOME_ERROR ) );
    dispatch( appActions.setAppStatusAC( AppRequestStatus.FAILED ) );
  } finally {
    dispatch( appActions.setAppStatusAC( AppRequestStatus.IDLE ) );
    dispatch( appActions.setIsLoadAC( false ) );
  }
};

export const changePacksTC = ( newName: string, id: string ): AppThunkType => async ( dispatch: any ) => {
  dispatch( appActions.setAppStatusAC( AppRequestStatus.LOADING ) );
  dispatch( appActions.setIsLoadAC( true ) );
  try {
    await packsAPI.changePack( newName, id );
    dispatch( packsTC() );
  } catch ( error: any ) {
    dispatch( appActions.setGlobalErrorAC( error.response ? error.response.data.error : SOME_ERROR ) );
    dispatch( appActions.setAppStatusAC( AppRequestStatus.FAILED ) );
  } finally {
    dispatch( appActions.setAppStatusAC( AppRequestStatus.IDLE ) );
    dispatch( appActions.setIsLoadAC( false ) );
  }
};