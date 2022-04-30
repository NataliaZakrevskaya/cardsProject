import React, { useState } from 'react';
import style from '../../../PacksPage/PacksPage/PackList/Pack/Pack.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Rating } from '@mui/material';
import { RoutesXPaths } from '../../../../../Routes/routes';
import Modal from '../../../../Common/modal/modal';
import EditCardComponent from '../modulsComponents/EditCardComponent/EditCardComponent';
import { cardsActions } from '../../../../../Redux/Actions/cardsActions/cardsActions';
import DeleteCardComponent from '../modulsComponents/DeleteCardComponent/DeleteCardComponent';
import { getIsLoad } from '../../../../../Redux/Selectors/appSelectors/appSelectors';
import { getOwnId } from '../../../../../Redux/Selectors/profileSelectors/profileSelectors';
import { CardComponentType } from './types';
import { Delete } from '@material-ui/icons';

const Card = ( { content }: CardComponentType ) => {

  const { _id, cardsPack_id, grade, user_id, question, answer, updated } = { ...content };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [ mode, setMode ] = useState<'edit' | 'delete' | null>( null );

  const ownId = useSelector( getOwnId );
  const isLoad = useSelector( getIsLoad );

  const onTableDoubleClick = () => {
    navigate( `${ RoutesXPaths.LEARNED_CARD }/${ _id }/${ cardsPack_id }` );
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
        <div>дата: { updated.slice( 0, 10 ) },</div>
        <div>время: { updated.slice( 12, 19 ) }</div>
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
              <button className={ style.button } onClick={ () => setMode( 'edit' ) } disabled={ isLoad }>edit</button>
              <button className={ style.button } onClick={ onTableDoubleClick } disabled={ isLoad }>learn</button>
              <IconButton onClick={ () => setMode( 'delete' ) } aria-label="delete" disabled={ isLoad }>
                  <Delete/>
              </IconButton>
          </div>
      }
      <Modal
        backgroundOnClick={ () => dispatch( cardsActions.setCardModeAC( null ) ) }
        show={ mode !== null }
        height={ 0 }
        width={ 0 }
        backgroundStyle={ { backgroundColor: 'rgba(215,207,61,0.2)' } }
        enableBackground={ true }>
        { mode === 'edit' && <EditCardComponent card={ content } setMode={ () => {
          setMode( null );
        } }/> }
        { mode === 'delete' && <DeleteCardComponent id={ _id } setMode={ () => {
          setMode( null );
        } }/> }
      </Modal>
    </div>
  );
};

export default Card;
