import { meRespType } from '../../../../API/meAPI/types';
import { ProfileActionsTypes } from '../../../Actions/profileActions/types';
import { profileActions } from '../../../Actions/profileActions/profileActions';

export type ProfileInitialStateType = {
  profile: meRespType
  error: string
}
export type ProfileReducerActionsType = ReturnType<ProfileActionsTypes<typeof profileActions>>