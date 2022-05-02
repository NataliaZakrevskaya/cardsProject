import { AppStateType } from '../../Store/types';

export const getIsInitialized = ( state: AppStateType ): boolean => {
  return state.me.isInitialized;
};