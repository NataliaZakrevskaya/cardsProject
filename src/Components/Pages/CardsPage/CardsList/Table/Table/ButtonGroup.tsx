import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOwnId } from '../../../../../../Redux/Selectors/profileSelectors';
import { deletePacksTC } from '../../../../../../Redux/Thunk/packsThunk/packsThunk';
import { RoutesXPaths } from '../../../../../../Routes/routes';
import style from './Table.module.css';
import { Button, IconButton } from '@mui/material';
import { Delete } from '@material-ui/icons';
import React from 'react';

export const ButtonGroup = ( { _id, user_id, edit, setEdit, saveChanges }: any ) => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const ownId = useSelector( getOwnId );

  const deletePack = ( id: string ) => {
    dispatch( deletePacksTC( id ) );
  };

  const onLearnButtonClick = () => {
    navigate( `${ RoutesXPaths.CARDS }/${ _id }` );
  };
  const onEditButtonClick = () => {
    setEdit( true );
  };
  const onDeleteButtonClick = () => {
    deletePack( _id );
  };

  return (
    <div className={ style.btnContainer }>
      <Button size="small" onClick={ onLearnButtonClick }>learn</Button>
      {
        ownId === user_id &&
          <>
            {
              !edit
                ? <Button size="small" onClick={ onEditButtonClick }>edit</Button>
                : <Button size="small" onClick={ saveChanges }>save</Button>
            }
              <IconButton onClick={ onDeleteButtonClick } aria-label="delete">
                  <Delete/>
              </IconButton>
          </>
      }
    </div>
  );
};