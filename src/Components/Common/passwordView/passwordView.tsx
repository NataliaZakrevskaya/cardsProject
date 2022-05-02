import React from 'react';
import { useDispatch } from 'react-redux';
import { PasswordViewType } from './types';
import { appActions } from '../../../Redux/Actions/appActions/appActions';

const PasswordView = ( { isVisible }: PasswordViewType ) => {

  const dispatch = useDispatch();

/*  const icon = <FontAwesomeIcon icon={ isVisible ? faEye : faEyeSlash }/>;*/

  const onIconClick = () => {
    dispatch( appActions.setAppVisibleAC( !isVisible ) );
  };

  return (
    <div>
      <span
        onClick={ onIconClick }
        style={ { fontSize: '13px' } }
      >
       {/* { icon }*/}
      </span>
    </div>
  );
};

export default PasswordView;
