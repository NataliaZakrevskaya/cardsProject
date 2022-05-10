import React, { ChangeEvent, useState } from 'react';
import style from './EditPackComponent.module.css';
import commonStyle from '../../commonModalStyles.module.css';
import { useDispatch } from 'react-redux';
import { EditPackComponentType } from './types';
import { changePacksTC } from '../../../../../Redux/Thunk/packsThunk/packsThunk';

const EditPackComponent = ( { item, closeModal }: EditPackComponentType ) => {

  const dispatch = useDispatch();

  const [ newPackName, setNewPackName ] = useState<string>( item.name );

  const onSaveChangesButtonClick = () => {
    if ( item._id ) {
      dispatch( changePacksTC( newPackName, item._id ) );
      closeModal();
    }
  };
  const onCanselButtonClick = () => {
    closeModal();
  };
  const onNewPackInputChange = ( e: ChangeEvent<HTMLInputElement> ) => {
    setNewPackName( e.currentTarget.value );
  };

  return (
    <div className={ style.editPackContainer }>
      <h2>Pack info:</h2>
      <div className={ style.editBlock }>
        <span>Pack name</span>
        <input
          type="text"
          value={ newPackName }
          onChange={ onNewPackInputChange }
        />
      </div>
      <div className={ commonStyle.btnGroup }>
        <button className={ commonStyle.cancelBtn } onClick={ onCanselButtonClick }>Cancel</button>
        <button className={ commonStyle.actionBtn } onClick={ onSaveChangesButtonClick }>Save</button>
      </div>

    </div>
  );
};

export default EditPackComponent;
