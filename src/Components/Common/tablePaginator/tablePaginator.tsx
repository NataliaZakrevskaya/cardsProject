import * as React from 'react';
import style from './tablePaginator.module.css';
import { packsActions } from '../../../Redux/Actions/packsActions/packsActions';
import { useDispatch, useSelector } from 'react-redux';
import { Nullable } from '../../../types';
import { getIsLoad } from '../../../Redux/Selectors/appSelectors/appSelectors';
import { getActualPacksCount, getActualPacksPage } from '../../../Redux/Selectors/packsSelectors/packsSelectors';
import { ChangeEvent, useState } from 'react';
import { TablePagination } from '@material-ui/core';


const TablesPagination = () => {

  const dispatch = useDispatch();

  const isLoad = useSelector( getIsLoad );
  const actualPacksPage = useSelector( getActualPacksPage );
  const actualPacksCount = useSelector( getActualPacksCount );

  const [ page, setPage ] = useState<number>( actualPacksPage );

  const handleChangePage = (
    event: Nullable<React.MouseEvent<HTMLButtonElement>>,
    newPage: number,
  ) => {
    if ( newPage === page ) {
      setPage( page + 1 );
      dispatch( packsActions.seCurrentPageAC( newPage + 1 ) );
    } else if ( newPage < page ) {
      setPage( page - 1 );
      dispatch( packsActions.seCurrentPageAC( newPage + 1 ) );
    }
  };
  const handleChangeRowsPerPage = ( event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    dispatch( packsActions.setPageCountAC( parseInt( event.target.value ) ) );
  };

  return (
    <div className={ style.paginatorBlock }>
      <TablePagination
        component="div"
        count={ 100 }
        page={ page - 1 }
        onPageChange={ handleChangePage }
        rowsPerPage={ actualPacksCount }
        onRowsPerPageChange={ handleChangeRowsPerPage }
        aria-disabled={ isLoad }
      />
    </div>
  );
};

export default TablesPagination;
