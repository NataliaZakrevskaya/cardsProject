import { AppStateType } from '../../Store/types';
import { CardsInitialStateType, CardType } from '../../Reducers/cardsReducer/types';

export const getCardsState = ( state: AppStateType ): CardsInitialStateType => {
  return state.cards;
};
export const getActualCardsPage = ( state: AppStateType ): number => {
  return state.cards.page;
};
export const getActualCardsCount = ( state: AppStateType ): number => {
  return state.cards.pageCount;
};
export const getCards = ( state: AppStateType ): CardType[] => {
  return state.cards.cards;
};
export const getCardSearchName = ( state: AppStateType ): string => {
  return state.cards.cardQuestion;
};

