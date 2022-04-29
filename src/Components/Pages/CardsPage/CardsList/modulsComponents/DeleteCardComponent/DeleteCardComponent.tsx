import React from 'react';
import style
  from '../../../../PacksPage/PacksPage/PackList/modulsComponents/AddPackComponent/AddPackComponent.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCardTC } from '../../../../../../Redux/Thunk/cardsThunk/cardsThunk';
import { getIsLoad } from '../../../../../../Redux/Selectors/appSelectors/appSelectors';
import { DeleteCardComponentType } from './types';

const DeleteCardComponent = ( { id, setMode }: DeleteCardComponentType ) => {

  const dispatch = useDispatch();

  const isLoad = useSelector( getIsLoad );

  const onAcceptanceButtonClick = () => {
    dispatch( deleteCardTC( id ) );
    setMode();
  };

  const onDenialButtonClick = () => {
    setMode();
  };

  return (
    <div className={ style.addItemContainer }>
      <h2>
        Do you want delete card ?
      </h2>
      <div className={ style.centerInputContainer }>
                    <span>
                       Really ? <span>&nbsp; ✎</span>
                    </span>
        <div>
          <button onClick={ onDenialButtonClick } disabled={ isLoad }>NO</button>
          <button onClick={ onAcceptanceButtonClick } disabled={ isLoad }>YES</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCardComponent;
