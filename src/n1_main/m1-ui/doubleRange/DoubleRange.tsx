import React, {useState} from 'react'
import './DoubleRange.module.css'
import Slider from '@mui/material/Slider';
import {packsActions} from "../../../n2_features/f2-packs&cards_YM/b1-packs/ActionsPacks";
import {useDispatch} from "react-redux";
import {styled} from "@mui/material";


type DoubleRangePropsType = {}

const SuperDoubleRangeElem = styled(Slider)({
    maxWidth: '400px',
    margin: '5px 5px',
    color: "#2386a4",
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
});

const DoubleRange: React.FC<DoubleRangePropsType> = (
    {}
) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState([0, 100])
    const onChangeCallback = (e: Event, values: number | number[]) => {
        setValue(values as number[]);

        dispatch(packsActions.minAC(value[0]))
        dispatch(packsActions.maxAC(value[1]))
    };


    return (
        <div>
            {/*<Slider
                sx={{width: 100}}
                step={10}
                min={0}
                max={100}
                marks
                getAriaLabel={() => 'Minimum distance'}
                value={value}
                onChange={onChangeCallback}
                valueLabelDisplay="auto"
                disableSwap
            />*/}
            <SuperDoubleRangeElem
                value={value}
                onChange={onChangeCallback}
                valueLabelDisplay="auto"
                step={1}
                min={0}
                max={100}
                disableSwap
            />
        </div>
    );
}
export default DoubleRange;