import { AppStateType, AppThunkType } from '../../Store/store';
import { Dispatch } from 'redux';
import { cardsAPI } from '../../../API/cardsAPI/cardsAPI';
import { cardsActions } from '../../Actions/cardsActions/cardsActions';
import { appActions } from '../../Actions/appActions/appActions';
import { AppRequestStatus } from '../../../enums';
import { UpdatedCardType } from './types';
import { SOME_ERROR } from '../../../constants';

export const cardsTC = ( id: string ) => {
  return async ( dispatch: Dispatch, getState: () => AppStateType ) => {
    const { cardAnswer, cardQuestion, minGrade, maxGrade, sortCards, page, pageCount } = getState().cards;
    dispatch( appActions.setAppStatusAC( AppRequestStatus.LOADING ) );
    dispatch( appActions.setIsLoadAC( true ) );
    try {
      let res = await cardsAPI.setCards( cardAnswer, cardQuestion, id, minGrade, maxGrade, sortCards, page, pageCount );
      dispatch( cardsActions.setCardsAC( res.passwordRecoveryInfo ) );
      dispatch( appActions.setAppStatusAC( AppRequestStatus.SUCCEEDED ) );
    } catch ( e: any ) {
      dispatch( appActions.setGlobalErrorAC( e.response ? e.response.data.error : 'some error' ) );
      dispatch( appActions.setAppStatusAC( AppRequestStatus.FAILED ) );
    } finally {
      dispatch( appActions.setAppStatusAC( AppRequestStatus.IDLE ) );
      dispatch( appActions.setIsLoadAC( false ) );
    }
  };
};

export const addNewCardTC = ( question: string, answer: string, packId: string ): AppThunkType => async ( dispatch: any ) => {
  const newCard = {
    cardsPack_id: packId,
    question: question,
    answer: answer,
    grade: 0,
    shots: 0,
    answerImg: '',
    questionImg: '',
    questionVideo: '',
    answerVideo: '',
  };

  dispatch( appActions.setAppStatusAC( AppRequestStatus.LOADING ) );
  dispatch( appActions.setIsLoadAC( true ) );
  try {
    await cardsAPI.addCard( newCard );
    dispatch( cardsTC( packId ) );
    dispatch( appActions.setAppStatusAC( AppRequestStatus.SUCCEEDED ) );
  } catch ( error: any ) {
    dispatch( appActions.setGlobalErrorAC( error.response ? error.response.data.error : SOME_ERROR ) );
    dispatch( appActions.setAppStatusAC( AppRequestStatus.FAILED ) );
  } finally {
    dispatch( appActions.setAppStatusAC( AppRequestStatus.IDLE ) );
    dispatch( appActions.setIsLoadAC( false ) );
  }
};

export const deleteCardTC = ( cardId: string ): AppThunkType => async ( dispatch: any ) => {
  dispatch( appActions.setAppStatusAC( AppRequestStatus.LOADING ) );
  try {
    let res = await cardsAPI.deleteCard( cardId );
    dispatch( cardsTC( res.passwordRecoveryInfo.deletedCard.cardsPack_id ) );
    dispatch( appActions.setAppStatusAC( AppRequestStatus.SUCCEEDED ) );
    dispatch( appActions.setIsLoadAC( true ) );
  } catch ( error: any ) {
    dispatch( appActions.setGlobalErrorAC( error.response ? error.response.data.error : SOME_ERROR ) );
    dispatch( appActions.setAppStatusAC( AppRequestStatus.FAILED ) );
  } finally {
    dispatch( appActions.setAppStatusAC( AppRequestStatus.IDLE ) );
    dispatch( appActions.setIsLoadAC( false ) );
  }
};
const updateCardTC = ( updatedCard: UpdatedCardType ): AppThunkType => async ( dispatch: any ) => {
  dispatch( appActions.setAppStatusAC( AppRequestStatus.LOADING ) );
  dispatch( appActions.setIsLoadAC( true ) );
  try {
    let res = await cardsAPI.updateCard( updatedCard );
    dispatch( cardsTC( res.passwordRecoveryInfo.updatedCard.cardsPack_id ) );
    dispatch( appActions.setAppStatusAC( AppRequestStatus.SUCCEEDED ) );
  } catch ( error: any ) {
    dispatch( appActions.setGlobalErrorAC( error.response ? error.response.data.error : SOME_ERROR ) );
    dispatch( appActions.setAppStatusAC( AppRequestStatus.FAILED ) );
  } finally {
    dispatch( appActions.setAppStatusAC( AppRequestStatus.IDLE ) );
    dispatch( appActions.setIsLoadAC( false ) );
  }
};

export const gradeCardTC = ( grade: number, card_id: string ): AppThunkType => async ( dispatch: any ) => {
  dispatch( appActions.setAppStatusAC( AppRequestStatus.LOADING ) );
  dispatch( appActions.setIsLoadAC( true ) );
  try {
    let res = await cardsAPI.gradeCard( grade, card_id );
    dispatch( cardsActions.gradeCardAC( res.passwordRecoveryInfo.updatedGrade ) );
    dispatch( appActions.setAppStatusAC( AppRequestStatus.SUCCEEDED ) );
  } catch ( error: any ) {
    dispatch( appActions.setGlobalErrorAC( error.response ? error.response.data.error : SOME_ERROR ) );
    dispatch( appActions.setAppStatusAC( AppRequestStatus.FAILED ) );
  } finally {
    dispatch( appActions.setAppStatusAC( AppRequestStatus.IDLE ) );
    dispatch( appActions.setIsLoadAC( false ) );
  }
};
