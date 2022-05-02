import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import registerFormStyle from './RegisterForm.module.css';
import { useFormik } from 'formik';
import { Navigate, useNavigate } from 'react-router-dom';
import { registerUserTC } from '../../../../Redux/Thunk/passwordThunk/passwordThunk';
import { passwordActions } from '../../../../Redux/Actions/passwordActions/passwordActions';
import { getIsLoad } from '../../../../Redux/Selectors/appSelectors/appSelectors';
import { getError } from '../../../../Redux/Selectors/pesswordRegisterSelectors/pesswordRegisterSelectors';
import { FormikErrorType } from './types';
import { routesPathsEnum } from '../../../../Routes/enums';

const RegisterForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoad = useSelector( getIsLoad );
  const error = useSelector( getError );

  const formik = useFormik( {
    initialValues: {
      email: '',
      password: '',
      confirm: '',
    },
    validate: ( values ) => {

      const { email, password, confirm } = { ...values };
      const errors: FormikErrorType = {};
      if ( !email ) {
        errors.email = 'Required';
      } else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test( email ) ) {
        errors.email = 'Invalid email address';
      }
      if ( !password ) {
        errors.password = 'Required';
      } else if ( password.length < 8 ) {
        errors.password = 'Invalid password,pass will be longer that 8 symbols';
      }
      if ( !confirm ) {
        errors.confirm = 'Required';
      } else if ( confirm.length !== password.length && confirm !== password ) {
        errors.confirm = 'Invalid confirm password';
      }
      return errors;
    },
    onSubmit: value => {
      formik.resetForm();
      dispatch( registerUserTC( { email: value.email, password: value.password } ) );
    },
  } );

  const onCancelButtonClick = () => {
    formik.resetForm();
    formik.setTouched( {} );
    formik.setErrors( { email: undefined, password: undefined, confirm: undefined } );
    dispatch( passwordActions.setRegisterErrorAC( '' ) );
    navigate( routesPathsEnum.LOGIN );
  };

  if ( error === 'email already exists /ᐠ｡ꞈ｡ᐟ\\' ) {
    return <Navigate to={ routesPathsEnum.LOGIN }/>;
  }

  return (
    <div className={ registerFormStyle.registerPage }>
      <div className={ registerFormStyle.registerContainer }>
        <div className={ registerFormStyle.titles }>
          <h1>Cards</h1>
          { !!error && <div>{ error }</div> }
          <h4>Sing in</h4>
        </div>

        <div className={ registerFormStyle.registerForm }>
          <form onSubmit={ formik.handleSubmit }>
            <div className={ registerFormStyle.second }>
              eMail
              <input disabled={ isLoad } { ...formik.getFieldProps( 'email' ) }/>
              { formik.touched.email && formik.errors.email ?
                <div className={ registerFormStyle.errorMessage }>{ formik.errors.email }</div> : null }
            </div>
            <div className={ registerFormStyle.second }>
              Password
              <input type="password" disabled={ isLoad }
                     { ...formik.getFieldProps( 'password' ) }/>

              { formik.touched.password && formik.errors.password ?
                <div className={ registerFormStyle.errorMessage }>{ formik.errors.password }</div> : null }
            </div>
            <div className={ registerFormStyle.second }>
              Confirm password
              <input type="password" disabled={ isLoad }
                     { ...formik.getFieldProps( 'confirm' ) }/>
              { formik.touched.confirm && formik.errors.confirm ?
                <div className={ registerFormStyle.errorMessage }>{ formik.errors.confirm }</div> : null }
            </div>
            <div className={ registerFormStyle.buttonsDiv }>
              <button type="button" className={ registerFormStyle.cancelButton } onClick={ onCancelButtonClick }>
                Cancel
              </button>
              <button type="submit" className={ registerFormStyle.registerButton }>Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;