import React, { FC } from 'react';
import style from './TableCards.module.css';
import Preloader from '../../../../../Common/preloader/preloader';
import { TableCardsType } from './types';
import { TableRow } from './TableRow/TableRow';

const TableCards: FC<TableCardsType> = ( { cards } ) => {

  const { question, grade, answer, updated } = { ...cards };

  const cardInfo = [ { question, answer, updated, grade } ];

  return (
    cardInfo
      ? (
        <div className={ style.table }>
          { cardInfo.map( ( info, index ) => <TableRow key={ index } info={ info }/> ) }
        </div>
      ) : (
        <div>
          <Preloader status={ 'failed' }/>

        </div> )
  );
};

export default TableCards;
