import React, { useState } from 'react';
import style from '../../../PacksPage/PacksPage/PackList/Pack/Pack.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ModalComponent from '../../../../Common/modal/modalComponent';
import { cardsActions } from '../../../../../Redux/Actions/cardsActions/cardsActions';
import { getIsLoad } from '../../../../../Redux/Selectors/appSelectors/appSelectors';
import { getOwnId } from '../../../../../Redux/Selectors/profileSelectors/profileSelectors';
import { CardComponentType, ModeType } from './types';
import { Delete } from '@material-ui/icons';
import { routesPathsEnum } from '../../../../../Routes/enums';
import { ModeEnum } from '../../../../../enums';
import Rating from '@material-ui/lab/Rating';
import EditCardComponent from '../../../../Common/modal/cardsModal/EditCardComponent/EditCardComponent';
import DeleteCardComponent from '../../../../Common/modal/cardsModal/DeleteCardComponent/DeleteCardComponent';
import IconButton from '@material-ui/core/IconButton';

const Card = ( { content }: CardComponentType ) => {

  const { _id, cardsPack_id, grade, user_id, question, answer, updated } = { ...content };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [ mode, setMode ] = useState<ModeType>( null );

  const ownId = useSelector( getOwnId );
  const isLoad = useSelector( getIsLoad );

  const onTableDoubleClick = () => {
    navigate( `${ routesPathsEnum.LEARNED_CARD }/${ _id }/${ cardsPack_id }` );
  };
  const onModalClick = () => {
    dispatch( cardsActions.setCardModeAC( null ) );
  };
  const setNullModal = () => {
    setMode( null )
  };

  return (

    <div className={ style.tableContainer } onDoubleClick={ onTableDoubleClick }>
      <div className={ style.window }>
        <span>{ question }</span>
      </div>
      <div className={ style.window }>
        { answer }
      </div>
      <div className={ style.updated }>
        <div>Date: { updated.slice( 0, 10 ) },</div>
        <div>Time: { updated.slice( 12, 19 ) }</div>
      </div>
      <div className={ style.window }>
        <Rating
          name="read-only"
          value={ grade }
          readOnly size="small"
        />
      </div>
      {
        ownId === user_id &&
          <div className={ style.btnGroupItemMy }>
              <button className={ style.button } onClick={ () => setMode( ModeEnum.EDIT ) } disabled={ isLoad }>edit
              </button>
              <button className={ style.button } onClick={ onTableDoubleClick } disabled={ isLoad }>learn</button>
              <IconButton onClick={ () => setMode( ModeEnum.DELETE ) } aria-label="delete" disabled={ isLoad }>
                  <Delete/>
              </IconButton>
          </div>
      }
      <ModalComponent
        backgroundOnClick={ onModalClick }
        show={ mode !== null }
        height={ 0 }
        width={ 0 }
        backgroundStyle={ { backgroundColor: 'rgba(215,207,61,0.2)' } }
        enableBackground={ true }>
        { mode === ModeEnum.EDIT && <EditCardComponent card={ content } setMode={ setNullModal }/> }
        { mode === ModeEnum.DELETE && <DeleteCardComponent id={ _id } setMode={ setNullModal }/> }
      </ModalComponent>
    </div>
  );
};

export default Card;
