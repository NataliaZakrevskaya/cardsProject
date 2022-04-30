import { AppRequestStatus } from '../../../enums';
import { AppReducerActionType, InitialAppStateType, RequestStatusType } from './types';
import { AppFormReducer } from './enums';

export const appInitialState = {
  status: AppRequestStatus.IDLE as RequestStatusType,
  isVisible: false,
  globalError: '',
  isLoad: false,
};

export const appReducer = ( state: InitialAppStateType = appInitialState, action: AppReducerActionType ): InitialAppStateType => {
  switch ( action.type ) {
    case AppFormReducer.SET_STATUS:
      return { ...state, status: action.payload.status };
    case AppFormReducer.SET_VISIBLE:
      return { ...state, isVisible: action.payload.isVisible };
    case AppFormReducer.SET_GLOBAL_ERROR:
      return {
        ...state, globalError: action.payload.error,
      };
    case AppFormReducer.SET_IS_LOAD:
      return {
        ...state, isLoad: action.payload.isLoad,
      };
    default:
      return state;
  }
};







