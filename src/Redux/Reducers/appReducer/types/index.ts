import { appInitialState } from '../appReducer';
import { appActions } from '../../../Actions/appActions/appActions';
import { appActionsTypes } from '../../../Actions/appActions/types';

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';
export type InitialAppStateType = typeof appInitialState;
export type AppReducerActionType = ReturnType<appActionsTypes<typeof appActions>>