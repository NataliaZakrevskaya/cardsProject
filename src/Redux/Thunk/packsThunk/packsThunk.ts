import { packsAPI } from '../../../API/packsAPI/packsAPI';
import { Dispatch } from 'redux';
import { packsActions } from '../../Actions/packsActions/packsActions';
import { appActions } from '../../Actions/appActions/appActions';
import { AppRequestStatus } from '../../../enums';
import { newPackType } from '../../../API/packsAPI/types';
import { SOME_ERROR } from '../../../constants';
import { AppStateType, AppThunkType } from '../../Store/types';

export const packsTC = () => async ( dispatch: Dispatch, getState: () => AppStateType ) => {
  const { packName, minCardsCount, maxCardsCount, updated, page, pageCount, user_id } = getState().packs;
  dispatch( appActions.setAppStatusAC( AppRequestStatus.LOADING ) );
  dispatch( appActions.setIsLoadAC( true ) );
  try {
    const packsInfo = { packName, minCardsCount, maxCardsCount, updated, page, pageCount, user_id };
    let res = await packsAPI.setPacks( packsInfo );
    dispatch( packsActions.setPacksAC( res.data ) );
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