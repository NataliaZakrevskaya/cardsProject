import React, { ChangeEvent, FC, useState } from 'react';
import { packsActions } from '../../../Redux/Actions/packsActions/packsActions';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoad } from '../../../Redux/Selectors/appSelectors/appSelectors';
import { Slider } from '@material-ui/core';
import style from './doubleRange.module.css';

const DoubleRange: FC = () => {

  const dispatch = useDispatch();
  const isLoad = useSelector( getIsLoad );
  const [ value, setValue ] = useState( [ 0, 100 ] );

  const onDoubleRangeChange = ( e: ChangeEvent<any>, values: number | number[] ) => {
    setValue( values as number[] );
    if ( Array.isArray( values ) ) {
      dispatch( packsActions.setMinCardsCountAC( value[ 0 ] ) );
      dispatch( packsActions.setMaxCardsCountAC( value[ 1 ] ) );
    }
  };

  return (
    <Slider
      value={ value }
      onChange={ onDoubleRangeChange }
      valueLabelDisplay={ 'on' }
      step={ 1 }
      min={ 0 }
      max={ 100 }
      disabled={ isLoad }
      className={ style.slider }
    />
  );
};

export default DoubleRange;

