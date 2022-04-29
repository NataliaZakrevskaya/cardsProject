import React from 'react';
import style from './Table.module.css';
import { useSelector } from 'react-redux';
import Preloader from '../../../../../Common/preloader/preloader';
import { getPacks } from '../../../../../../Redux/Selectors/packsSelectors/packsSelectors';
import { TableRow } from './TableRow/TableRow';

export const Table = () => {

  const packs = useSelector( getPacks );

  return (
    packs
      ? (
        <div className={ style.table }>
          { packs.map( ( pack, id ) => {
            return <TableRow key={ id } arr={ pack }/>;
          } ) }
        </div>
      ) : (
        <div>
          error
          <Preloader status={ 'failed' }/>
        </div> )
  );
};
