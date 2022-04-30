import { AppFormReducer } from '../../Reducers/appReducer/enums';
import { RequestStatusType } from '../../Reducers/appReducer/types';

export const appActions = {
  setAppStatusAC: ( status: RequestStatusType ) => {
    return {
      type: AppFormReducer.SET_STATUS,
      payload: { status },
    } as const;
  },
  setAppVisibleAC: ( isVisible: boolean ) => {
    return {
      type: AppFormReducer.SET_VISIBLE, payload: { isVisible },
    } as const;
  },
  setGlobalErrorAC: ( error: any ) => {
    return {
      type: AppFormReducer.SET_GLOBAL_ERROR, payload: { error },
    } as const;
  },
  setIsLoadAC: ( isLoad: boolean ) => {
    return {
      type: AppFormReducer.SET_IS_LOAD, payload: { isLoad },
    } as const;
  },
}