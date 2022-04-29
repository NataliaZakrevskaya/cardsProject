import { AppStateType } from '../../Store/store';

export const getOwnId = ( state: AppStateType ): string => {
  return state.profile.profile._id;
};