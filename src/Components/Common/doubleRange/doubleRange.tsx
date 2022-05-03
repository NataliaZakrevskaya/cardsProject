import React, { ChangeEvent, FC, useState } from 'react';
import './doubleRange.module.css';
import { packsActions } from '../../../Redux/Actions/packsActions/packsActions';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoad } from '../../../Redux/Selectors/appSelectors/appSelectors';
import { Slider, styled } from '@material-ui/core';

const DoubleRangeElement = styled( Slider )( {
  maxWidth: '400px',
  margin: '5px 5px',
  color: '#2386a4',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#94cfd9',
    border: '2px solid #3B2A17',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: 'rgba(108,168,224,0.87)',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
} );

const DoubleRange: FC = () => {

  const dispatch = useDispatch();
  const isLoad = useSelector( getIsLoad );
  const [ value, setValue ] = useState( [ 0, 100 ] );

  const onDoubleRangeChange = ( e: ChangeEvent<any>, value: number | number[] ) => {
    if ( Array.isArray( value ) ) {
      setValue( value );
      dispatch( packsActions.setMinCardsCountAC( value[ 0 ] ) );
      dispatch( packsActions.setMaxCardsCountAC( value[ 1 ] ) );
    }
  };

  return (
    <div>
      <Slider
        value={ value }
        onChange={ onDoubleRangeChange }
        valueLabelDisplay="auto"
        step={ 1 }
        min={ 0 }
        max={ 100 }
        disabled={ isLoad }
      />
    </div>
  );
};

export default DoubleRange;

