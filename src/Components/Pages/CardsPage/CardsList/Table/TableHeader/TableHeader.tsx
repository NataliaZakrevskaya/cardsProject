import React, { useState } from 'react';
import style from './TableHeader.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { packsActions } from '../../../../../../Redux/Actions/packsActions/packsActions';
import { getIsLoad } from '../../../../../../Redux/Selectors/appSelectors/appSelectors';

const TableHeader = () => {

  const dispatch = useDispatch();

  const [ isLastUpdate, setIsLastUpdate ] = useState<boolean>( false );
  const [ isCardsCountUpdated, setIsCardsCountUpdated ] = useState<boolean>( false );
  const isLoad = useSelector( getIsLoad );

  const getNew = () => {
    dispatch( packsActions.setUpdatedFilterAC( '1updated' ) );
    setIsLastUpdate( true );
  };

  const getOld = () => {
    dispatch( packsActions.setUpdatedFilterAC( '0updated' ) );
    setIsLastUpdate( false );
  };

  const getFew = () => {
    dispatch( packsActions.setUpdatedFilterAC( '1cardsCount' ) );
    setIsCardsCountUpdated( true );
  };

  const getMore = () => {
    dispatch( packsActions.setUpdatedFilterAC( '0cardsCount' ) );
    setIsCardsCountUpdated( false );
  };

  return (
    <div className={ style.tableHeader }>
      <div>
        <span className={ style.tableHeader__item }>Name</span>
      </div>
      <div onClick={ isCardsCountUpdated ? getMore : getFew } aria-disabled={ isLoad }>
        <span className={ style.tableHeader__item }>Cards</span>
      </div>
      <div onClick={ isLastUpdate ? getOld : getNew } aria-disabled={ isLoad }>
        <span className={ style.tableHeader__item }>Last Updated</span>
      </div>
      <div>
        <span className={ style.tableHeader__item }>Created by</span>
      </div>
      <div>
        <span className={ style.tableHeader__item }>Actions</span>
      </div>
    </div>
  );
};

export default TableHeader;