import { CardType } from '../../../Reducers/cardsReducer/types';

export type cardsActionsTypes<T> = T extends { [key: string]: infer A } ? A : never

export type CardsType = {
  cards: CardType[]
  cardsTotalCount: number
  maxGrade: number
  minGrade: number
  page: number
  pageCount: number
  cardsPack_id: string
}