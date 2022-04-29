import {initializeMeACType, meActions, setErrorMeACType} from "../../Actions/meActions/meActions";

const meReducerState: meReducerStateType = {
    isInitialized: false,
    error: ''
}

export const meReducer = (state = meReducerState, action: MeReducerActionsType): meReducerStateType => {
    switch (action.type) {
        case meActions.INITIALIZE_ME: {
            return {...state, isInitialized: action.payload.initialization}
        }
        case meActions.SET_ME_ERROR: {
            return {...state, error: action.payload.error}
        }
        default:
            return state
    }
}

//Types

export type MeReducerActionsType = initializeMeACType | setErrorMeACType

export type meReducerStateType = {
    isInitialized: boolean,
    error: string
}

