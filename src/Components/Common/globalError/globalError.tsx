import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGlobalError } from '../../../Redux/Selectors/appSelectors/appSelectors';
import { appActions } from '../../../Redux/Actions/appActions/appActions';

const GlobalError = () => {
  const dispatch = useDispatch();
  const errorText = useSelector( getGlobalError );

  const onResetErrorButtonClick = () => {
    dispatch( appActions.setGlobalErrorAC( '' ) );
  };

  return (
    <div>
      <h2>Incorrect action:</h2>
      <span>{ errorText } ✎</span>
      <button onClick={ onResetErrorButtonClick }>Ok</button>
    </div>
  );
};

export default GlobalError;
