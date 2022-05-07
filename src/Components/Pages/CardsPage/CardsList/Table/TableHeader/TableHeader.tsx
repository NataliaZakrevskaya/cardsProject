import React, { useState } from 'react';
import style from './TableHeader.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { packsActions } from '../../../../../../Redux/Actions/packsActions/packsActions';
import { getIsLoad } from '../../../../../../Redux/Selectors/appSelectors/appSelectors';
import { UpdatedFilterEnum } from '../../../../../../enums';

const TableHeader = () => {

  const dispatch = useDispatch();

  const [ isLastUpdate, setIsLastUpdate ] = useState<boolean>( false );
  const [ isCardsCountUpdated, setIsCardsCountUpdated ] = useState<boolean>( false );
  const isLoad = useSelector( getIsLoad );

  const getNew = () => {
    dispatch( packsActions.setUpdatedFilterAC( UpdatedFilterEnum.UPDATED_1 ) );
    setIsLastUpdate( true );
  };

  const getOld = () => {
    dispatch( packsActions.setUpdatedFilterAC( UpdatedFilterEnum.UPDATED_0 ) );
    setIsLastUpdate( false );
  };

  const getFew = () => {
    dispatch( packsActions.setUpdatedFilterAC( UpdatedFilterEnum.CARDS_COUNT_1 ) );
    setIsCardsCountUpdated( true );
  };

  const getMore = () => {
    dispatch( packsActions.setUpdatedFilterAC( UpdatedFilterEnum.CARDS_COUNT_0 ) );
    setIsCardsCountUpdated( false );
  };

  return (
    <div className={ style.tableHeader }>
      <div className={ style.headerItem }>
        <span>Name</span>
      </div>
      <div className={ `${ style.headerItem } ${ style.changedItem } ` }
           onClick={ isCardsCountUpdated ? getMore : getFew } aria-disabled={ isLoad }>
        Cards
      </div>
      <div className={ `${ style.headerItem } ${ style.changedItem } ` } onClick={ isLastUpdate ? getOld : getNew }
           aria-disabled={ isLoad }>
        Last Updated
      </div>
      <div className={ style.headerItem }>
        Created by
      </div>
      <div className={ style.headerItem }>
        Actions
      </div>
    </div>
  );
};

export default TableHeader;