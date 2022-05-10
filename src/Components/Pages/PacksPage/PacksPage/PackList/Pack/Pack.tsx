import React, { useState } from 'react';
import style from './Pack.module.css';
import commonStyle from '../../../../CardsPage/CardsList/Table/commonTableStyles.module.css';
import { Delete } from '@material-ui/icons';
import ModalComponent from '../../../../../Common/modal/modalComponent';
import { useSelector } from 'react-redux';
import { getOwnId } from '../../../../../../Redux/Selectors/profileSelectors/profileSelectors';
import { getIsLoad } from '../../../../../../Redux/Selectors/appSelectors/appSelectors';
import { modeType, OnlyOnePackComponentType } from './types';
import DeletePackComponent from '../../../../../Common/modal/packsModal/DeletePackComponent/DeletePackComponent';
import EditPackComponent from '../../../../../Common/modal/packsModal/EditPackComponent/EditPackComponent';
import IconButton from '@material-ui/core/IconButton';
import { ChooseRoadModal } from '../../../../../Common/modal/packsModal/ChooseRoadModal/ChooseRoadModal';

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
    <div className={ commonStyle.tableItemContainer }>
      <div className={ style.name }>
        { name }
      </div>
      <div className={ style.cardsCount }>
        { cardsCount }
      </div>
      <div className={ style.data }>
        <div>Date: { updated.slice( 0, 10 ) },</div>
        <div>Time: { updated.slice( 12, 19 ) }</div>
      </div>
      <div className={ style.userName }>
        { user_name }
      </div>
      <div className={ style.btnGroup }>
        {
          ownId === user_id
            ? <div className={ commonStyle.btnGroup }>
              <button className={ commonStyle.button } onClick={ onEditButtonClick }
                      disabled={ isLoad }>edit
              </button>
              <button className={ commonStyle.button } onClick={ onLearnButtonClick } disabled={ isLoad }>learn
              </button>
              <IconButton onClick={ onDeleteButtonClick } aria-label="delete" disabled={ isLoad }>
                <Delete/>
              </IconButton>
            </div>
            : <div className={ commonStyle.btnGroup }>
              <button className={ commonStyle.button } onClick={ onForeignCardLearnButtonClick } disabled={ isLoad }>learn
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
        { mode === 'v' && <ChooseRoadModal packId={ item._id } runToCards={ runToCards } setMode={ onModalClick }/> }
      </ModalComponent>
    </div>
  );
};

export default Pack;
