import React from 'react';
import RegisterForm from './RegisterForm/RegisterForm';
import style from './RegisterPage.module.css';

const RegisterPage = () => {
  return (
    <div className={ style.registerFormContainer }>
      <RegisterForm/>
    </div>
  );
};

export default RegisterPage;
