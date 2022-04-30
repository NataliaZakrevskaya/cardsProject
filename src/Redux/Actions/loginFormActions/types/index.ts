import { LoginFormActions, LoginFormReducerReducerActionsTypes } from '../loginFormActions';

export type LoginFormActionsType = ReturnType<LoginFormReducerReducerActionsTypes<typeof LoginFormActions>>