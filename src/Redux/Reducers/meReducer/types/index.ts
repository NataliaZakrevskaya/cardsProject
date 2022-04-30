import { meActionsTypes } from '../../../Actions/meActions/types';
import { meActions } from '../../../Actions/meActions/meActions';

export type MeReducerActionsType = ReturnType<meActionsTypes<typeof meActions>>
export type meInitialStateType = {
  isInitialized: boolean,
  error: string
}