import { CardType } from '../../../../../../Redux/Reducers/cardsReducer/types';

export type CardComponentType = {
  content: CardType
}
export type ModeType = 'edit' | 'delete' | null