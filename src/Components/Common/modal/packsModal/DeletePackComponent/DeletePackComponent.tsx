import React from 'react';
import style from './DeletePackComponent.module.css';
import commonStyle from '../../commonModalStyles.module.css';
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
    <div className={ style.deletePackContainer }>
      <h2>Delete Pack</h2>
      <hr/>
      <p>Do you really want to remove the pack?</p>
      <div className={ commonStyle.btnGroup }>
          <button className={commonStyle.cancelBtn} onClick={ onNoButtonClick } disabled={ isLoad }>Cancel</button>
          <button className={commonStyle.extraActionBtn} onClick={ onYesButtonClick } disabled={ isLoad }>Delete</button>
      </div>
    </div>
  );
};

export default DeletePackComponent;
