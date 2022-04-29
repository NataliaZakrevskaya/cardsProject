import { useDispatch, useSelector } from 'react-redux';
import TablePagination from '@mui/material/TablePagination';
import { cardsActions } from '../../../../../../Redux/Actions/cardsActions/cardsActions';
import {
  getActualCardsCount,
  getActualCardsPage,
} from '../../../../../../Redux/Selectors/cardsSelectors/cardsSelectors';
import { ChangeEvent, FC, useState } from 'react';
import { Nullable } from '../../../../../../types';

const TablesCardsPagination: FC = () => {

  const dispatch = useDispatch();

  const actualCardsPage = useSelector( getActualCardsPage );
  const actualCardsCount = useSelector( getActualCardsCount );

  const [ page, setPage ] = useState<number>( actualCardsPage );

  const onPageChange = (
    event: Nullable<React.MouseEvent<HTMLButtonElement>>,
    newPage: number,
  ) => {
    if ( newPage === page ) {
      setPage( page + 1 );
      dispatch( cardsActions.cardsPageAC( newPage + 1 ) );
    } else if ( newPage < page ) {
      setPage( page - 1 );
      dispatch( cardsActions.cardsPageAC( newPage + 1 ) );
    }
  };

  const onRowsPerPageChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPage( 0 );
    dispatch( cardsActions.cardsPageCountAC( parseInt( event.target.value ) ) );
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
