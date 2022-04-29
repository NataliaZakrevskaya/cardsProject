import React from 'react';
import { useDispatch } from 'react-redux';
import s from '../../Pages/PacksPage/PacksPage/PackList/modulsComponents/AddPackComponent/AddPackComponent.module.css';
import { useAppSelector } from '../../../Redux/Store/store';
import { setGlobalErrorAC } from '../../../Redux/Reducers/appReducer/appReducer';

const GlobalError = () => {
  const dispatch = useDispatch();
  const errorText = useAppSelector<string>( state => state.app.globalError );

  const onResetErrorButtonClick = () => {
    dispatch( setGlobalErrorAC( '' ) );
  };

  return (
    <div className={ s.addItemContainer }>
      <h2>
        Incorrect action:
      </h2>
      <div className={ s.centerInputContainer }>
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
