import React from 'react';
import PasswordRecoveryForm from './PasswordRecoveryForm/PasswordRecoveryForm';
import style from './PasswordRecoveryPage.module.css';

const PasswordRecoveryPage = () => {
  return (
    <div className={ style.passwordRecoveryContainer }>
      <PasswordRecoveryForm/>
    </div>
  );
};

export default PasswordRecoveryPage;