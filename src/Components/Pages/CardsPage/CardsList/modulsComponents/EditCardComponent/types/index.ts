import { CardType } from '../../../../../../../Redux/Reducers/cardsReducer/cardsReducer';

export type EditCardComponentType = {
  card: CardType
  setMode: () => void
}