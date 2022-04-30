import React, { ChangeEvent } from 'react';
import style from '../ProfilePage.module.css';
import { ChangeNameInputPropsType } from './types';

export const ChangeNameInput = ( {
                                   name,
                                   onSaveButtonClick,
                                   onNameInputKeyPress,
                                   changeNameValue,
                                   error,
                                 }: ChangeNameInputPropsType ) => {

  const onNameInputChange = ( e: ChangeEvent<HTMLInputElement> ) => {
    changeNameValue( e.currentTarget.value );
  };

  return (
    <div className={ style.changeNameContainer }>
      <input
        type="text"
        className={ style.input }
        value={ name }
        onBlur={ onSaveButtonClick }
        onKeyPress={ onNameInputKeyPress }
        onChange={ onNameInputChange }
        autoFocus
      />
      { !error && <p className={ style.description }>Enter your new name, please 😌</p> }
      { error && <span className={ style.errorMessage }>{ `${ error }, try again` }</span> }

      <button className={ style.button } onClick={ onSaveButtonClick }>Save</button>
    </div>
  );
};
