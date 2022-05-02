import { ProfileInitialStateType, ProfileReducerActionsType } from './types';
import { profileActionsEnums } from '../../Actions/profileActions/enums';
import { meRespType } from '../../../API/meAPI/types';

const profileInitialState = {
  profile: {} as meRespType,
  error: '',
};

export const profileReducer = ( state: ProfileInitialStateType = profileInitialState, action: ProfileReducerActionsType ): ProfileInitialStateType => {
  switch ( action.type ) {
    case profileActionsEnums.SET_PROFILE: {
      return { ...state, profile: action.payload.profile };
    }
    case profileActionsEnums.SET_ERROR: {
      return { ...state, error: action.payload.error };
    }
    default:
      return state;
  }
};



