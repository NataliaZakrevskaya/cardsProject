import { AxiosResponse } from 'axios';
import { UpdatedType } from '../packsAPI/packsAPI';
import { CardsType } from '../../Redux/Actions/cardsActions/cardsActions';
import { UpdatedCardType } from '../../Redux/Thunk/cardsThunk/cardsThunk';
import { instance } from '../configAPI/configAPI';
import { CARD_URL, GRADE_URL } from './constants';
import { addCardType } from './types';

export const cardsAPI = {
  async setCards( cardAnswer: string, cardQuestion: string, cardsPack_id: string, min: number, max: number, sortCards: UpdatedType, page: number, pageCount: number ) {
    return await instance.get<CardsType,
      AxiosResponse<CardsType>, { cardAnswer: string, cardQuestion: string, cardsPack_id: string, min: number, max: number, sortCards: UpdatedType, page: number, pageCount: number }>
    ( CARD_URL, { params: { cardsPack_id, cardAnswer, cardQuestion, min, max, sortCards, page, pageCount } } );
  },
  async addCard( newCard: addCardType ) {
    return await instance.post<CardsType,
      AxiosResponse<CardsType>, { card: addCardType }>
    ( CARD_URL, { card: newCard } );
  },
  async deleteCard( cardId: string ) {
    return await instance.delete( `/cards/card?id=${ cardId }` );
  },
  async updateCard( updatedCard: UpdatedCardType ) {
    return await instance.put( CARD_URL, { card: updatedCard } );
  },
  async gradeCard( grade: number, card_id: string ) {
    return await instance.put( GRADE_URL, { grade, card_id } );
  },
};
