import style from '../TableCards.module.css';
import { TableCell } from '../TableCell/TableCell';
import Rating from '@mui/material/Rating/Rating';
import React from 'react';

export const TableRow = ( { info }: any ) => {

  const { question, answer, updated, grade } = info;

  return (
    <div className={ style.tableRow }>
      <TableCell item={ question }/>
      <TableCell item={ answer }/>
      <TableCell item={ updated }/>
      <TableCell item={ <Rating name={ 'half-rating-read' } value={ grade } precision={ 0.1 } readOnly/> }/>
    </div>
  );
};