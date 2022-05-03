import { useDispatch, useSelector } from 'react-redux';
import { cardsActions } from '../../../../../../Redux/Actions/cardsActions/cardsActions';
import {
  getActualCardsCount,
  getActualCardsPage,
} from '../../../../../../Redux/Selectors/cardsSelectors/cardsSelectors';
import { ChangeEvent, MouseEvent, FC, useState } from 'react';
import { Nullable } from '../../../../../../types';
import { TablePagination } from '@material-ui/core';

const TablesCardsPagination: FC = () => {

  const dispatch = useDispatch();

  const actualCardsPage = useSelector( getActualCardsPage );
  const actualCardsCount = useSelector( getActualCardsCount );

  const [ page, setPage ] = useState<number>( actualCardsPage );

  const onPageChange = ( event: Nullable<MouseEvent<HTMLButtonElement>>, newPage: number ) => {
    if ( newPage === page ) {
      setPage( page + 1 );
      dispatch( cardsActions.setCardsPageAC( newPage + 1 ) );
    } else if ( newPage < page ) {
      setPage( page - 1 );
      dispatch( cardsActions.setCardsPageAC( newPage + 1 ) );
    }
  };
  const onRowsPerPageChange = ( event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, ) => {
    setPage( 0 );
    dispatch( cardsActions.setCardsPageCountAC( parseInt( event.target.value ) ) );
  };

  return (
    <TablePagination
      component="div"
      count={ 100 }
      page={ page - 1 }
      onPageChange={ onPageChange }
      rowsPerPage={ actualCardsCount }
      onRowsPerPageChange={ onRowsPerPageChange }
    />
  );
};

export default TablesCardsPagination;
