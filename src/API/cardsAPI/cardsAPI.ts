import { AxiosResponse } from 'axios';
import { instance } from '../configAPI/configAPI';
import { CARD_URL, GRADE_URL } from './constants';
import { addCardType } from './types';
import { CardsType, SetCardsInfoType } from '../../Redux/Actions/cardsActions/types';
import { UpdatedCardType } from '../../Redux/Thunk/cardsThunk/types';
import { getPackUrl } from './helpers';

export const cardsAPI = {
  async setCards( cardsInfo: SetCardsInfoType ) {
    return await instance.get<CardsType, AxiosResponse<CardsType>>( CARD_URL, { params: { cardsInfo } } );
  },
  async addCard( newCard: addCardType ) {
    return await instance.post<CardsType,
      AxiosResponse<CardsType>, addCardType>( CARD_URL, newCard );
  },
  async deleteCard( cardId: string ) {
    return await instance.delete( getPackUrl( cardId ) );
  },
  async updateCard( updatedCard: UpdatedCardType ) {
    return await instance.put( CARD_URL, updatedCard );
  },
  async gradeCard( grade: number, card_id: string ) {
    return await instance.put( GRADE_URL, { grade, card_id } );
  },
};
