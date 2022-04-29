import style from '../TableCards.module.css';
import React from 'react';

export const TableCell = ( { item }: any ) => {
  return (
    <div className={ style.tableCell }>
      { item }
    </div>
  );
};