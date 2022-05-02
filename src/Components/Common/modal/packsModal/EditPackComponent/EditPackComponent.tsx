import React, { ChangeEvent, useState } from 'react';
import style from '../AddPackComponent/AddPackComponent.module.css';
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
    <div className={ style.addItemContainer }>
      <h2>Edit pack:</h2>
      <div className={ style.centerInputContainer }>
        <span>
          Enter new pack name <span>&nbsp; ✎</span>
        </span>
        <input
          type="text"
          value={ newPackName }
          onChange={ onNewPackInputChange }
        />
      </div>

      <div>
        <button onClick={ onCanselButtonClick }>Cancel</button>
        <button onClick={ onSaveChangesButtonClick }>Save changes</button>
      </div>

    </div>
  );
};

export default EditPackComponent;
