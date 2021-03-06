import { CardType } from '../../../Reducers/cardsReducer/types';

export type cardsActionsTypes<T> = T extends { [ key: string ]: infer A } ? A : never

export type CardsType = {
  cards: CardType[]
  cardsTotalCount: number
  maxGrade: number
  minGrade: number
  page: number
  pageCount: number
  cardsPack_id: string
}
export type SortCardsType =
  '0updated'
  | '1updated'
  | '0cardsCount'
  | '1cardsCount'
  | '0packName'
  | '1packName'
  | '0grade'
  | '1grade'
  | '1created'
  | '0created'