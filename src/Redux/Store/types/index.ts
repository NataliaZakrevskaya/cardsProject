import { PacksReducerActionsType } from '../../Reducers/packsReducer/types';
import { AppReducerActionType } from '../../Reducers/appReducer/types';
import { PasswordReducerActionsType } from '../../Reducers/passwordReducer/types';
import { ProfileReducerActionsType } from '../../Reducers/profileReducer/types';
import { MeReducerActionsType } from '../../Reducers/meReducer/types';
import { LoginFormActionsType } from '../../Actions/loginFormActions/types';
import { ThunkAction } from 'redux-thunk';
import { rootReducer } from '../store';

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStateActionsType =
  PacksReducerActionsType
  | AppReducerActionType
  | PasswordReducerActionsType
  | ProfileReducerActionsType
  | MeReducerActionsType
  | LoginFormActionsType

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppStateActionsType>