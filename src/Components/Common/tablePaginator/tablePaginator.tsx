import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import { packsActions } from '../../../Redux/Actions/packsActions/packsActions';
import { useDispatch, useSelector } from 'react-redux';
import { Nullable } from '../../../types';
import { getIsLoad } from '../../../Redux/Selectors/appSelectors/appSelectors';
import { getActualPacksCount, getActualPacksPage } from '../../../Redux/Selectors/packsSelectors/packsSelectors';

const TablesPagination = () => {

  const dispatch = useDispatch();
  const isLoad = useSelector( getIsLoad );
  const actualPacksPage = useSelector( getActualPacksPage );
  const actualPacksCount = useSelector( getActualPacksCount );

  const [ page, setPage ] = React.useState<number>( actualPacksPage );

  const handleChangePage = (
    event: Nullable<React.MouseEvent<HTMLButtonElement>>,
    newPage: number,
  ) => {
    if ( newPage === page ) {
      setPage( page + 1 );
      dispatch( packsActions.pageAC( newPage + 1 ) );
    } else if ( newPage < page ) {
      setPage( page - 1 );
      dispatch( packsActions.pageAC( newPage + 1 ) );
    }
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    dispatch( packsActions.pageCountAC( parseInt( event.target.value ) ) );
  };

  return (
    <>
      <TablePagination
        component="div"
        count={ 100 }
        page={ page - 1 }
        onPageChange={ handleChangePage }
        rowsPerPage={ actualPacksCount }
        onRowsPerPageChange={ handleChangeRowsPerPage }
        aria-disabled={ isLoad }
      />
    </>
  );
};

export default TablesPagination;
