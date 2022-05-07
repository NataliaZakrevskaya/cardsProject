import { SrazyIliType } from '../../../../Pages/PacksPage/PacksPage/PackList/Pack/types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppStateType } from '../../../../../Redux/Store/types';
import React, { useEffect } from 'react';
import { cardsTC } from '../../../../../Redux/Thunk/cardsThunk/cardsThunk';
import { packsActions } from '../../../../../Redux/Actions/packsActions/packsActions';
import { routesPathsEnum } from '../../../../../Routes/enums';

export const ChangeRoadModal = ( { runToCards, packId, setMode }: SrazyIliType ) => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const cardId = useSelector<AppStateType, string>( state => state.cards.cards.filter( card => card.cardsPack_id === packId )[ 0 ]?._id );

  useEffect( () => {
    dispatch( cardsTC( packId ) );
  }, [] );

  const onLearnButtonClick = () => {
    dispatch( packsActions.setAllUserIdCardsAC( '' ) );
    dispatch( packsActions.searchByPackNameAC( '' ) );
    dispatch( packsActions.seCurrentPageAC( 1 ) );
    dispatch( packsActions.setMinCardsCountAC( 0 ) );
    dispatch( packsActions.setMaxCardsCountAC( 100 ) );

    setMode();
    navigate( `${ routesPathsEnum.LEARNED_CARD }/${ packId }/${ cardId }` );

  };
  const onCancelButtonClick = () => {
    setMode();
  };
  const onCardListButtonClick = () => {
    runToCards( packId );
  };

  return (
    <div>
      <h2>
        Do you go to cardsList or to learn ?
      </h2>
      <div>
        <span>
          Are you sure? <span>&nbsp; ✎</span>
        </span>
        <div>
          <button onClick={ onCancelButtonClick }>Cancel</button>
          <button onClick={ onCardListButtonClick }>To cardsList</button>
          <button onClick={ onLearnButtonClick }>To learn</button>
        </div>
      </div>
    </div>
  );
};