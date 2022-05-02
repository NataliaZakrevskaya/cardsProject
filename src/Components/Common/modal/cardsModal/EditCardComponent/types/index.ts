import { CardType } from '../../../../../../Redux/Reducers/cardsReducer/types';

export type EditCardComponentType = {
  card: CardType
  setMode: () => void
}