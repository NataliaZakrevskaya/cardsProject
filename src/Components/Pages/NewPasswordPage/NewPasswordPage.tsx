import React from 'react';
import NewPasswordForm from './NewPasswordForm/NewPasswordForm';
import style from './NewPasswordPage.module.css';

const NewPasswordPage = () => {
  return (
    <div className={ style.newPasswordContainer }>
      <NewPasswordForm/>
    </div>
  );
};

export default NewPasswordPage;