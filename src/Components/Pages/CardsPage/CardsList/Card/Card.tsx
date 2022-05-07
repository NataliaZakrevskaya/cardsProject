import React, { useState } from 'react';
import style from './Card.module.css';
import commonStyle from '../Table/commonTableStyles.module.css';
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

  const isOwnCards = ownId === user_id;
  const questionStyle = isOwnCards ? style.ownQuestion : style.question
  const answerStyle = isOwnCards ? style.ownAnswer : style.answer
  const dataStyle = isOwnCards ? style.ownData : style.data
  const ratingStyle = isOwnCards ? style.ownRating : style.rating

  const onTableDoubleClick = () => {
    navigate( `${ routesPathsEnum.LEARNED_CARD }/${ cardsPack_id }/${ _id }` );
  };
  const onModalClick = () => {
    dispatch( cardsActions.setCardModeAC( null ) );
  };
  const setNullModal = () => {
    setMode( null )
  };

  return (
    <div className={ commonStyle.tableItemContainer } onDoubleClick={ onTableDoubleClick }>
      <span className={ questionStyle }>{ question }</span>
      <span className={ answerStyle }>{ answer }</span>
      <div className={ dataStyle }>
        <div>Date: { updated.slice( 0, 10 ) },</div>
        <div>Time: { updated.slice( 12, 19 ) }</div>
      </div>
      <div className={ ratingStyle }>
        <Rating
          name="read-only"
          value={ grade }
          readOnly size="small"
        />
      </div>
      {
        isOwnCards &&
          <div className={ style.btnGroup }>
              <button className={ commonStyle.button } onClick={ () => setMode( ModeEnum.EDIT ) } disabled={ isLoad }>edit
              </button>
              <button className={ commonStyle.button } onClick={ onTableDoubleClick } disabled={ isLoad }>learn</button>
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
