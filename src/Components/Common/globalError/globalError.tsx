import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGlobalError } from '../../../Redux/Selectors/appSelectors/appSelectors';
import { appActions } from '../../../Redux/Actions/appActions/appActions';
import style from './globalError.module.css';
import commonStyle from '../modal/commonModalStyles.module.css';

const GlobalError = () => {
  const dispatch = useDispatch();
  const errorText = useSelector( getGlobalError );

  const onResetErrorButtonClick = () => {
    dispatch( appActions.setGlobalErrorAC( '' ) );
  };

  return (
    <div className={ style.globalErrorContainer }>
      <h2>Incorrect action:</h2>
      <hr/>
      <p>{ errorText }</p>
      <button className={ commonStyle.actionBtn } onClick={ onResetErrorButtonClick }>Ok</button>
    </div>
  );
};

export default GlobalError;
