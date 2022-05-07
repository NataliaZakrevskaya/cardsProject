import { SrazyIliType } from '../../../../Pages/PacksPage/PacksPage/PackList/Pack/types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppStateType } from '../../../../../Redux/Store/types';
import React, { useEffect } from 'react';
import { cardsTC } from '../../../../../Redux/Thunk/cardsThunk/cardsThunk';
import { packsActions } from '../../../../../Redux/Actions/packsActions/packsActions';
import { routesPathsEnum } from '../../../../../Routes/enums';
import style from './ChooseRoadModal.module.css';

export const ChooseRoadModal = ( { runToCards, packId, setMode }: SrazyIliType ) => {

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
    <div className={ style.modalContainer }>
      <h2>
        Are you going to check cards list or learn cards?
      </h2>
      <div className={style.btnGroup}>
        <button className={style.learnBtn} onClick={ onLearnButtonClick }>Learn</button>
        <button className={style.checkBtn} onClick={ onCardListButtonClick }>Check cards list</button>
      </div>
      <button className={style.cancelBtn} onClick={ onCancelButtonClick }>Cancel</button>
    </div>
  );
};