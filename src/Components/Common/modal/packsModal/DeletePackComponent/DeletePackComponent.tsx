import React from 'react';
import style from '../AddPackComponent/AddPackComponent.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { DeletePackComponentType } from './types';
import { getIsLoad } from '../../../../../Redux/Selectors/appSelectors/appSelectors';
import { deletePacksTC } from '../../../../../Redux/Thunk/packsThunk/packsThunk';

const DeletePackComponent = ( { id, setMode }: DeletePackComponentType ) => {

  const dispatch = useDispatch();
  const isLoad = useSelector( getIsLoad );

  const onYesButtonClick = () => {
    dispatch( deletePacksTC( id ) );
    setMode();
  };
  const onNoButtonClick = () => {
    setMode();
  };

  return (
    <div className={ style.addItemContainer }>
      <h2>Do you want delete pack ?</h2>
      <div className={ style.centerInputContainer }>
        <span>
          Really ?
          <span>
            &nbsp; ✎
          </span>
        </span>
        <div>
          <button onClick={ onNoButtonClick } disabled={ isLoad }>NO</button>
          <button onClick={ onYesButtonClick } disabled={ isLoad }>YES</button>
        </div>
      </div>
    </div>
  );
};

export default DeletePackComponent;
