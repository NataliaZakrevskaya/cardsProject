import { meInitialStateType, MeReducerActionsType } from './types';
import { meActionsEnum } from '../../Actions/meActions/enums';

export const meInitialState: meInitialStateType = {
  isInitialized: false,
  error: '',
};

export const meReducer = ( state = meInitialState, action: MeReducerActionsType ): meInitialStateType => {
  switch ( action.type ) {
    case meActionsEnum.INITIALIZE_ME: {
      return { ...state, isInitialized: action.payload.initialization };
    }
    case meActionsEnum.SET_ME_ERROR: {
      return { ...state, error: action.payload.error };
    }
    default:
      return state;
  }
};
