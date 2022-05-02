import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style
  from '../../Pages/PacksPage/PacksPage/PackList/modulsComponents/AddPackComponent/AddPackComponent.module.css';
import { getGlobalError } from '../../../Redux/Selectors/appSelectors/appSelectors';
import { appActions } from '../../../Redux/Actions/appActions/appActions';

const GlobalError = () => {
  const dispatch = useDispatch();
  const errorText = useSelector( getGlobalError );

  const onResetErrorButtonClick = () => {
    dispatch( appActions.setGlobalErrorAC( '' ) );
  };

  return (
    <div className={ style.addItemContainer }>
      <h2>
        Incorrect action:
      </h2>
      <div className={ style.centerInputContainer }>
        <span>
          { errorText } <span>&nbsp; ✎</span>
        </span>
      </div>
      <div>
        <button onClick={ onResetErrorButtonClick }>Ok</button>
      </div>
    </div>
  );
};

export default GlobalError;
