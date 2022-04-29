import { AppStateType } from '../../Store/store';
import { Undetectable } from '../../../types';

export const getIsLoggedIn = ( state: AppStateType ): boolean => {
  return state.login.isLoggedIn;
};
export const getError = ( state: AppStateType ): Undetectable<string> => {
  return state.login.error;
};