import { useDispatch, useSelector } from 'react-redux';
import { getOwnId } from '../../../../../../../Redux/Selectors/profileSelectors/profileSelectors';
import React, { useState } from 'react';
import { changePacksTC } from '../../../../../../../Redux/Thunk/packsThunk/packsThunk';
import style from '../Table.module.css';
import { TableCell } from '../TableCell/TableCell';
import { ButtonGroup } from '../ButtonGroup';

export const TableRow = ( { pack, status = true }: any ) => {

  const { name, cardsCount, updated, user_name, actions, _id, user_id } = pack;

  const dispatch = useDispatch();

  const ownId = useSelector( getOwnId );

  const [ edit, setEdit ] = useState<boolean>( false );
  const [ newPackName, setNewPackName ] = useState<string>( name );

  const saveChanges = () => {
    setEdit( false );
    dispatch( changePacksTC( newPackName, _id ) );
  };
  return (
    <div className={ style.tableRow }>
      { ownId === user_id && edit ? <input type={ 'text' }
                                           onChange={ ( { target } ) => setNewPackName( target.value ) }
                                           autoFocus
                                           value={ newPackName }
                                           className={ style.input }/> : <TableCell item={ name }/> }
      <TableCell item={ cardsCount }/>
      <TableCell item={ updated } dataStatus={ true }/>
      <TableCell item={ user_name }/>
      <TableCell item={ actions } _id user_id/>
      {
        status &&
          <ButtonGroup _id user_id edit setEdit={ setEdit } saveChanges={ saveChanges }/>
      }
    </div>
  );
};