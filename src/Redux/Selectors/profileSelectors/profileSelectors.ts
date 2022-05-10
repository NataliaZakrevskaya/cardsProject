import { meRespType } from '../../../API/meAPI/types';
import { AppStateType } from '../../Store/types';
import { UserDataType } from '../../Actions/loginFormActions/types';

export const getOwnId = ( state: AppStateType ): string => {
  return state.profile.profile._id;
};
export const getProfileInfo = ( state: AppStateType ): UserDataType | meRespType => {
  return state.profile.profile;
};
export const getErrorMessage = ( state: AppStateType ): string => {
  return state.profile.error;
};