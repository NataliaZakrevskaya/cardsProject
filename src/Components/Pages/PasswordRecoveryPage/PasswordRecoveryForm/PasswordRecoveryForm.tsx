import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import registerFormStyle from '../../RegisterPage/RegisterForm/RegisterForm.module.css';
import { useNavigate } from 'react-router-dom';
import { passwordRecoveryTC } from '../../../../Redux/Thunk/passwordThunk/passwordThunk';
import { getIsLoad } from '../../../../Redux/Selectors/appSelectors/appSelectors';
import { getError } from '../../../../Redux/Selectors/pesswordRegisterSelectors/pesswordRegisterSelectors';
import { routesPathsEnum } from '../../../../Routes/enums';

const PasswordRecoveryForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoad = useSelector( getIsLoad );
  const error = useSelector( getError );

  const [ email, setEmail ] = useState<string>( '' );

  const onSendButtonClick = () => {
    dispatch( passwordRecoveryTC( email ) );
  };
  const onCancelButtonClick = () => {
    navigate( routesPathsEnum.LOGIN );
  };
  const onEmailInputChange = ( e: ChangeEvent<HTMLInputElement> ) => {
    setEmail( e.currentTarget.value );
  };

  return (
    <div className={ registerFormStyle.registerPage }>
      <div className={ registerFormStyle.registerContainer }>
        <div className={ registerFormStyle.titles }>
          <h1>Cards</h1>
          <h4>Forgot your password?</h4>
          <h4>Write your email</h4>
          {
            error
              ? <h6 style={ { color: 'red' } }>{ error }</h6>
              : <h5>After entering, visit your email</h5>
          }
        </div>
        <div className={ registerFormStyle.second }>
          <input disabled={ isLoad }
                 type="text"
                 value={ email }
                 onChange={ onEmailInputChange }/>
          <div className={ registerFormStyle.buttonsDiv }>
            <button className={ registerFormStyle.cancelButton } type="button" onClick={ onCancelButtonClick }>
              Cancel
            </button>
            <button className={ registerFormStyle.registerButton } onClick={ onSendButtonClick }
                    disabled={ isLoad }>Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordRecoveryForm;