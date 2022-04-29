import { AppStateType } from '../../Store/store';
import { RequestStatusType } from '../../Reducers/appReducer/appReducer';

export const getIsLoad = ( state: AppStateType ): boolean => {
  return state.app.isLoad;
};
export const getGlobalError = ( state: AppStateType ): string => {
  return state.app.globalError;
};
export const getStatus = ( state: AppStateType ): RequestStatusType => {
  return state.app.status;
};
export const getIsVisible = ( state: AppStateType ): boolean => {
  return state.app.isVisible;
};