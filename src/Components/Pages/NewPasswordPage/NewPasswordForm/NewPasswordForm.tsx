import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import regS from '../../RegisterPage/RegisterForm/RegisterForm.module.css';
import { newPasswordTC } from '../../../../Redux/Thunk/passwordThunk/passwordThunk';
import { getIsLoad } from '../../../../Redux/Selectors/appSelectors/appSelectors';

const NewPasswordForm = () => {

  const dispatch = useDispatch();

  const isLoad = useSelector( getIsLoad );

  const [ newPass, setNewPass ] = useState<string>( '' );

  const { token } = useParams<'token'>();

  const onCreateButtonClick = () => {
    dispatch( newPasswordTC( {
        password: newPass,
        resetPasswordToken: token,
      } ),
    );
  };
  const onNewPasswordInputChange = ( e: ChangeEvent<HTMLInputElement> ) => {
    setNewPass( e.currentTarget.value );
  };

  return (
    <div className={ regS.registerPage }>
      <div className={ regS.title }>
        <h1>Cards</h1>
        <h4> Write new pass!</h4>
      </div>
      <>
        <div className={ regS.second }>
          <input type="text" disabled={ isLoad }
                 value={ newPass }
                 onChange={ onNewPasswordInputChange }/>
          <div className={ regS.buttonsDiv }>
            <button onClick={ onCreateButtonClick } disabled={ isLoad }>Create</button>
          </div>
        </div>
      </>
    </div>
  );
};

export default NewPasswordForm;