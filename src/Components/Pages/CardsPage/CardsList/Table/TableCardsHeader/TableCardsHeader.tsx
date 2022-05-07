import React, { useState } from 'react';
import style from './TableCardsHeader.module.css';
import commonStyle from '../commonTableStyles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cardsActions } from '../../../../../../Redux/Actions/cardsActions/cardsActions';
import { TableHeaderCardType } from './types';
import { getOwnId } from '../../../../../../Redux/Selectors/profileSelectors/profileSelectors';
import { getIsLoad } from '../../../../../../Redux/Selectors/appSelectors/appSelectors';

const TableCardsHeader = ( { user_id }: TableHeaderCardType ) => {

  const dispatch = useDispatch();

  const ownId = useSelector( getOwnId );
  const isLoad = useSelector( getIsLoad );

  const isOwnCards = ownId === user_id;
  const tableCardsHeader = isOwnCards ? style.tableHeaderOwnCards : commonStyle.tableCardsHeader;

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

  return (
    <div className={ tableCardsHeader }>
      <div>
        <span className={ commonStyle.headerItem }>Question</span>
      </div>
      <div>
        <span className={ commonStyle.headerItem }>Answer</span>
      </div>
      <div onClick={ lastUpd ? getOldCard : getNewCard } aria-disabled={ isLoad }>
        <span className={ commonStyle.headerItem }>Last Updated</span>
      </div>
      <div onClick={ gradeUpd ? getGradeUpdLessCard : getGradeUpdMoreCard } aria-disabled={ isLoad }>
        <span className={ commonStyle.headerItem }>Grade</span>
      </div>
      {
        isOwnCards && <span className={ commonStyle.headerItem }>Actions</span>
      }
    </div>
  );
};

export default TableCardsHeader;
