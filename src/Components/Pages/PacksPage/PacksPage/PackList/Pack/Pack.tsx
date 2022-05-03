import React, { useEffect, useState } from 'react';
import style from './Pack.module.css';
import { Delete } from '@material-ui/icons';
import ModalComponent from '../../../../../Common/modal/modalComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { packsActions } from '../../../../../../Redux/Actions/packsActions/packsActions';
import { cardsTC } from '../../../../../../Redux/Thunk/cardsThunk/cardsThunk';
import { getOwnId } from '../../../../../../Redux/Selectors/profileSelectors/profileSelectors';
import { getIsLoad } from '../../../../../../Redux/Selectors/appSelectors/appSelectors';
import { modeType, OnlyOnePackComponentType, SrazyIliType } from './types';
import { AppStateType } from '../../../../../../Redux/Store/types';
import { routesPathsEnum } from '../../../../../../Routes/enums';
import DeletePackComponent from '../../../../../Common/modal/packsModal/DeletePackComponent/DeletePackComponent';
import EditPackComponent from '../../../../../Common/modal/packsModal/EditPackComponent/EditPackComponent';
import IconButton from '@material-ui/core/IconButton';

const Pack = ( { item, runToCards }: OnlyOnePackComponentType ) => {

  const { name, cardsCount, updated, user_name, user_id } = { ...item };

  const [ mode, setMode ] = useState<modeType>( null );

  const ownId = useSelector( getOwnId );
  const isLoad = useSelector( getIsLoad );

  const onEditButtonClick = () => {
    setMode( 'edit' );
  };
  const onLearnButtonClick = () => {
    runToCards( item._id );
  };
  const onDeleteButtonClick = () => {
    setMode( 'delete' );
  };
  const onForeignCardLearnButtonClick = () => {
    setMode( 'v' );
  };
  const onModalClick = () => {
    setMode( null );
  };

  return (
    <div className={ style.tableContainer }>
      <div className={ style.tableItemName }>
        { name }
      </div>
      <div className={ style.tableItemCardsCount }>
        { cardsCount }
      </div>
      <div className={ style.tableItemData }>
        <div>Date: { updated.slice( 0, 10 ) },</div>
        <div>Time: { updated.slice( 12, 19 ) }</div>
      </div>
      <div className={ style.tableItemUserName }>
        { user_name }
      </div>
      <div className={ style.tableItemBtnGroup }>
        {
          ownId === user_id
            ? <div className={ style.btnGroupItemMy }>
              <button className={ style.button } onClick={ onEditButtonClick }
                      disabled={ isLoad }>edit
              </button>
              <button className={ style.button } onClick={ onLearnButtonClick } disabled={ isLoad }>learn
              </button>
              <IconButton onClick={ onDeleteButtonClick } aria-label="delete" disabled={ isLoad }>
                <Delete/>
              </IconButton>
            </div>
            : <div className={ style.btnGroupItemMy }>
              <button className={ style.button } onClick={ onForeignCardLearnButtonClick } disabled={ isLoad }>learn
              </button>
            </div>
        }
      </div>

      <ModalComponent
        backgroundOnClick={ onModalClick }
        show={ mode !== null }
        height={ 0 }
        width={ 0 }
        backgroundStyle={ { backgroundColor: 'rgba(255,145,3,0.13)' } }
        enableBackground={ true }>
        { mode === 'delete' && <DeletePackComponent id={ item._id } setMode={ onModalClick }/> }
        { mode === 'edit' && <EditPackComponent item={ item } closeModal={ onModalClick }/> }
        { mode === 'v' && <SrazyIli packId={ item._id } runToCards={ runToCards } setMode={ onModalClick }/> }
      </ModalComponent>

    </div>
  );
};

export default Pack;

const SrazyIli = ( { runToCards, packId, setMode }: SrazyIliType ) => {

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
