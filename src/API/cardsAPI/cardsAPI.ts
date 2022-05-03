import { AxiosResponse } from 'axios';
import { instance } from '../configAPI/configAPI';
import { CARD_URL, GRADE_URL } from './constants';
import { addCardType } from './types';
import { CardsType } from '../../Redux/Actions/cardsActions/types';
import { UpdatedCardType } from '../../Redux/Thunk/cardsThunk/types';
import { getPackUrl } from './helpers';

export const cardsAPI = {
  async setCards( cardsInfo: any ) {

    return await instance.get<CardsType,
      AxiosResponse<CardsType>>
    ( CARD_URL, { params: { ...cardsInfo } } );
  },
  async addCard( card: addCardType ) {
    return await instance.post<CardsType,
      AxiosResponse<CardsType>>( CARD_URL, { card } );
  },
  async deleteCard( cardId: string ) {
    return await instance.delete( getPackUrl( cardId ) );
  },
  async updateCard( card: UpdatedCardType ) {
    return await instance.put( CARD_URL, { card } );
  },
  async gradeCard( grade: number, card_id: string ) {
    return await instance.put( GRADE_URL, { grade, card_id } );
  },
};
