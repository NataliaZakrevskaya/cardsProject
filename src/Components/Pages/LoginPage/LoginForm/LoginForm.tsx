import React from 'react';
import style from './LoginForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Navigate, NavLink } from 'react-router-dom';
import PasswordView from '../../../Common/passwordView/passwordView';
import { getIsLoad, getIsVisible } from '../../../../Redux/Selectors/appSelectors/appSelectors';
import { getError, getIsLoggedIn } from '../../../../Redux/Selectors/loginSelectors/loginSelectors';
import { FormikErrorType } from './types';
import { loginUserTC } from '../../../../Redux/Thunk/loginThunk/loginThunk';
import { routesPathsEnum } from '../../../../Routes/enums';

const LoginForm = () => {

  const dispatch = useDispatch();

  const isVisible = useSelector( getIsVisible );
  const error = useSelector( getError );
  const isLoggedIn = useSelector( getIsLoggedIn );
  const isLoad = useSelector( getIsLoad );

  const formik = useFormik( {
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validate: ( values ) => {
      const errors: FormikErrorType = {};
      if ( !values.email ) {
        errors.email = 'Required';
      } else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test( values.email ) ) {
        errors.email = 'Invalid email address';
      }
      if ( !values.password ) {
        errors.password = 'Required';
      } else if ( values.password.length < 8 ) {
        errors.password = 'Invalid password,pass will be longer them 8 symbols';
      }
      return errors;
    },
    onSubmit: value => {
      formik.resetForm();
      dispatch( loginUserTC( { email: value.email, password: value.password, rememberMe: value.rememberMe } ) );
    },
  } );

  if ( isLoggedIn ) {
    return <Navigate to={ routesPathsEnum.PROFILE }/>;
  }

  return (
    <div className={ style.main }>

      <div className={ style.title }>
        {
          !!error &&
            <div style={ { color: 'red' } }>
              { error }
            </div>
        }
      </div>
      <hr/>

      <div className={ style.login }>
        <h1>Login</h1>
        <form onSubmit={ formik.handleSubmit }>
          <div className={ style.second }>
            <span>eMail:</span>
            <input disabled={ isLoad }
                   type={ 'email' }
                   placeholder={ 'Enter your email' }
                   { ...formik.getFieldProps( 'email' ) }
            />
          </div>

          { formik.touched.email && formik.errors.email &&
              <div style={ { color: 'red', fontSize: '12px' } }>{ formik.errors.email }</div> }

          <div className={ style.second }>
            <span>Password:</span>
            <input disabled={ isLoad }
                   type={ isVisible ? 'text' : 'password' }
                   placeholder={ 'Enter your password' }
                   { ...formik.getFieldProps( 'password' ) }
            />
            <PasswordView isVisible={ isVisible }/>

          </div>
          {
            formik.touched.password &&
            formik.errors.password &&
              <div style={ { color: 'red', fontSize: '12px' } }>
                { formik.errors.password }
              </div>
          }

          <div className={ style.rememberMeBlock }>
            <span>Remember me:</span>
            <input
              type="checkbox"
              { ...formik.getFieldProps( 'rememberMe' ) }
            />
          </div>
            <button type="submit" disabled={ isLoad }>Login</button>
        </form>

        <div className={ style.footer }>
          <div className={ style.LinkItem }>
            <span>Not registered?</span>
             <NavLink className={ style.Link } to={ routesPathsEnum.REGISTER }>Create an Account</NavLink>
          </div>
          <div className={ style.LinkItem }>
            <span>Forgot password? </span>
            <NavLink className={ style.Link } to={ routesPathsEnum.RECOVERY }>Click here to recover</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;