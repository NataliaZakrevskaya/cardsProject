import React from 'react';
import style
  from '../../../../PacksPage/PacksPage/PackList/modulsComponents/AddPackComponent/AddPackComponent.module.css';
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
    <div className={ style.addItemContainer }>
      <h2>Do you want to delete card ?</h2>
      <div className={ style.centerInputContainer }>
        <span>Really ? ✎</span>
        <div>
          <button onClick={ onNoButtonClick } disabled={ isLoad }>NO</button>
          <button onClick={ onYesButtonClick } disabled={ isLoad }>YES</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCardComponent;
