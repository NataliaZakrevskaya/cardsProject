import React, { useEffect } from 'react';
import PacksList from './PackList/PacksList';
import { cardsActions } from '../../../../Redux/Actions/cardsActions/cardsActions';
import { useDispatch } from 'react-redux';
import { setGlobalErrorAC } from '../../../../Redux/Reducers/appReducer/appReducer';

const PacksPage = () => {
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch( cardsActions.setCardModeAC( null ) );
    dispatch( setGlobalErrorAC( '' ) );
  }, [] );

  return (
    <div>
      <PacksList/>
    </div>
  );
};

export default PacksPage;