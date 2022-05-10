import { meRespType } from '../../../API/meAPI/types';
import { profileActionsEnums } from './enums';

export const profileActions = {
  setProfileAC: ( profile: meRespType ) => {
    return {
      type: profileActionsEnums.SET_PROFILE,
      payload: { profile },
    } as const;
  },
  setErrorAC: ( error: string ) => ( {
    type: profileActionsEnums.SET_ERROR,
    payload: { error },
  } as const ),
};