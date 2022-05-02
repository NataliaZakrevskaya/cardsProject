import React, { useState } from 'react';
import style from '../TableHeader/TableHeader.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cardsActions } from '../../../../../../Redux/Actions/cardsActions/cardsActions';
import { TableHeaderCardType } from './types';
import { getOwnId } from '../../../../../../Redux/Selectors/profileSelectors/profileSelectors';
import { getIsLoad } from '../../../../../../Redux/Selectors/appSelectors/appSelectors';

const TableCardsHeader = ( { user_id }: TableHeaderCardType ) => {

  const dispatch = useDispatch();

  const ownId = useSelector( getOwnId );
  const isLoad = useSelector( getIsLoad );

  const [ lastUpd, setLastUpd ] = useState<boolean>( false );
  const [ gradeUpd, setGradeUpd ] = useState<boolean>( false );

  const getNewCard = () => {
    dispatch( cardsActions.updateFilterCardAC( '1created' ) );
    setLastUpd( true );
  };

  const getOldCard = () => {
    dispatch( cardsActions.updateFilterCardAC( '0created' ) );
    setLastUpd( false );
  };

  const getGradeUpdMoreCard = () => {
    dispatch( cardsActions.updateFilterCardAC( '1grade' ) );
    setGradeUpd( true );
  };

  const getGradeUpdLessCard = () => {
    dispatch( cardsActions.updateFilterCardAC( '0grade' ) );
    setGradeUpd( false );
  };

  const tableHeader = ownId === user_id ? style.tableHeader : style.tableHeaderWithId;

  return (
    <div className={ tableHeader }>
      <div>
        <span className={ style.tableHeaderItem }>Question</span>
      </div>
      <div>
        <span className={ style.tableHeaderItem }>Answer</span>
      </div>
      <div onClick={ lastUpd ? getOldCard : getNewCard } aria-disabled={ isLoad }>
        <span className={ style.tableHeaderItem }>Last Updated</span>
      </div>
      <div onClick={ gradeUpd ? getGradeUpdLessCard : getGradeUpdMoreCard } aria-disabled={ isLoad }>
        <span className={ style.tableHeaderItem }>Grade</span>
      </div>
      {
        ownId === user_id && <span className={ style.tableHeaderItem }>Actions</span>
      }
    </div>
  );
};

export default TableCardsHeader;
