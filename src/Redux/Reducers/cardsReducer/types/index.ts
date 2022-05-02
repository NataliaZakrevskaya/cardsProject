import { UpdatedType } from '../../../../API/packsAPI/types';
import { cardsActions } from '../../../Actions/cardsActions/cardsActions';
import { cardsActionsTypes } from '../../../Actions/cardsActions/types';
import { ModeTypes } from '../../packsReducer/types';

export type CardType = {
  answer: string
  question: string
  cardsPack_id: string
  grade: number
  shots: number
  user_id: string
  created: string
  updated: string
  _id: string
}

export type CardsInitialStateType = {
  cards: CardType[]
  cardsTotalCount: number
  maxGrade: number
  minGrade: number
  page: number
  pageCount: number
  cardAnswer: string
  cardQuestion: string
  sortCards: UpdatedType,
  mode: ModeTypes
}
export type cardsReducerActionType = ReturnType<cardsActionsTypes<typeof cardsActions>>