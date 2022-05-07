import React from 'react';
import style from './DeleteCardComponent.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteCardComponentType } from './types';
import { getIsLoad } from '../../../../../Redux/Selectors/appSelectors/appSelectors';
import { deleteCardTC } from '../../../../../Redux/Thunk/cardsThunk/cardsThunk';

const DeleteCardComponent = ( { id, setMode }: DeleteCardComponentType ) => {

  const dispatch = useDispatch();

  const isLoad = useSelector( getIsLoad );

  const onYesButtonClick = () => {
    dispatch( deleteCardTC( id ) );
    setMode();
  };
  const onNoButtonClick = () => {
    setMode();
  };

  return (
    <div className={ style.deleteCardContainer }>
      <h2>Delete Card</h2>
      <hr/>
      <p>Do you really want to remove the card?</p>
      <div className={style.btnGroup}>
        <button className={style.cancelBtn} onClick={ onNoButtonClick } disabled={ isLoad }>Cancel</button>
        <button className={style.deleteBtn} onClick={ onYesButtonClick } disabled={ isLoad }>Delete</button>
      </div>
    </div>
  );
};

export default DeleteCardComponent;
