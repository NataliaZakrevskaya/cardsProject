import React, { ChangeEvent, useState } from 'react';
import style from './AddPackComponent.module.css';
import commonStyle from '../../commonModalStyles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoad } from '../../../../../Redux/Selectors/appSelectors/appSelectors';
import { addNewPacksTC } from '../../../../../Redux/Thunk/packsThunk/packsThunk';
import { packsActions } from '../../../../../Redux/Actions/packsActions/packsActions';

const AddPackComponent = () => {

  const dispatch = useDispatch();

  const isLoad = useSelector( getIsLoad );

  const [ newPack, seNewPack ] = useState<string>( '' );
  const [ newPackPrivate, setNewPackPrivate ] = useState<boolean>( false );

  const pack = { name: newPack, deckCover: '', private: newPackPrivate };

  const onAddPackButtonClick = () => {
    dispatch( addNewPacksTC( pack ) );
    dispatch( packsActions.setPacksModeAC( null ) );
  };
  const onCancelButtonClick = () => {
    dispatch( packsActions.setPacksModeAC( null ) );
  };
  const onCheckboxInputChange = ( e: ChangeEvent<HTMLInputElement> ) => {
    setNewPackPrivate( e.currentTarget.checked );
  };
  const onNewPackInputChange = ( e: ChangeEvent<HTMLInputElement> ) => {
    seNewPack( e.currentTarget.value );
  };

  return (
    <div className={ style.addItemContainer }>
      <h2>Add new pack:</h2>
      <div className={ style.infoContainer }>
        <span>Name</span>
        <input disabled={ isLoad }
               type="text"
               value={ newPack }
               onChange={ onNewPackInputChange }
               className={ style.textInput }
        />
        <div className={ style.privateContainer }>
        <span>
          Make private:
        </span>
          <input disabled={ isLoad }
                 type="checkbox"
                 onChange={ onCheckboxInputChange }
          />
        </div>
      </div>

      <div className={ commonStyle.btnGroup }>
        <button className={ commonStyle.cancelBtn } onClick={ onCancelButtonClick } disabled={ isLoad }>Cancel</button>
        <button className={ commonStyle.actionBtn } onClick={ onAddPackButtonClick } disabled={ isLoad }>Add</button>
      </div>

    </div>
  );
};

export default AddPackComponent;
