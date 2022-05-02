import { CardType } from '../../../../../Redux/Reducers/cardsReducer/types';
import { Undetectable } from '../../../../../types';

export const getUserId = (cards: CardType[], packId: Undetectable<string>) => {
  const actualCard = cards.filter( card => card.cardsPack_id === packId )
  return actualCard[ 0 ]?.user_id
}