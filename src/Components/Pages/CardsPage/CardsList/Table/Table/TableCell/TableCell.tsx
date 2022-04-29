import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { changePacksTC } from '../../../../../../../Redux/Thunk/packsThunk/packsThunk';
import style from '../Table.module.css';
import { ButtonGroup } from '../ButtonGroup';

export const TableCell = ( { item, status, _id, user_id, dataStatus }: any ) => {

  const dispatch = useDispatch();

  const [ newPackName, setNewPackName ] = useState<string>( '' );
  const [ edit, setEdit ] = useState<boolean>( false );

  const saveChanges = () => {
    setEdit( false );
    dispatch( changePacksTC( newPackName, _id ) );
  };

  return (
    <div className={ style.tableCell }>
      {
        dataStatus ? <>{ `Date: ${ item.slice( 0, 10 ) }, Time: ${ item.slice( 12, 19 ) }` }</> : <>{ item }</>
      }
      {
        status &&
          <ButtonGroup _id user_id edit setEdit={ setEdit } saveChanges={ saveChanges }/>
      }
    </div>
  );
};