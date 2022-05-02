import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons/faEyeSlash';
import { faEye } from '@fortawesome/free-regular-svg-icons/faEye';
import { useDispatch } from 'react-redux';
import { PasswordViewType } from './types';
import { appActions } from '../../../Redux/Actions/appActions/appActions';
import style from 'passwordReview.module.css';

const PasswordView = ( { isVisible }: PasswordViewType ) => {
  const icon = <FontAwesomeIcon icon={ isVisible ? faEye : faEyeSlash }/>

  const dispatch = useDispatch();

  const onIconClick = () => {
    dispatch( appActions.setAppVisibleAC( !isVisible ) );
  };

  return (
    <span onClick={ onIconClick } className={ style.eye }>
        { icon }
      </span>
  );
};

export default PasswordView;
