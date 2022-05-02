import { CardType } from '../../../Reducers/cardsReducer/types';
import { UpdatedType } from '../../../../API/packsAPI/types';

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
export type SetCardsInfoType = {
  cardQuestion: string
  pageCount: number
  sortCards: SortCardsType
  minGrade: number
  cardAnswer: string
  id: string
  page: number
  maxGrade: number
}