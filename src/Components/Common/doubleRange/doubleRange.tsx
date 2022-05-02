import React, { FC, useState } from 'react';
import './doubleRange.module.css';
import { packsActions } from '../../../Redux/Actions/packsActions/packsActions';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoad } from '../../../Redux/Selectors/appSelectors/appSelectors';
import { DoubleRangeElement } from './doubleRangeElement/doubleRangeElement';

const DoubleRange: FC = () => {

  const dispatch = useDispatch();
  const isLoad = useSelector( getIsLoad );
  const [ value, setValue ] = useState( [ 0, 100 ] );

  const onDoubleRangeChange = ( e: Event, values: number | number[] ) => {
    setValue( values as number[] );
    dispatch( packsActions.setMinCardsCountAC( value[ 0 ] ) );
    dispatch( packsActions.setMaxCardsCountAC( value[ 1 ] ) );
  };

  return (
    <div>
      <DoubleRangeElement
        value={ value }
        onChange={ onDoubleRangeChange }
        valueLabelDisplay="auto"
        step={ 1 }
        min={ 0 }
        max={ 100 }
        disableSwap
        disabled={ isLoad }
      />
    </div>
  );
};

export default DoubleRange;

