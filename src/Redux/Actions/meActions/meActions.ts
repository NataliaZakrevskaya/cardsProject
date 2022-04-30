import { meActionsEnum } from './enums';

export const meActions = {
  initializeMeAC: ( initialization: boolean ) => {
    return {
      type: meActionsEnum.INITIALIZE_ME,
      payload: { initialization },
    } as const;
  },
  setErrorMeAC: ( error: string ) => {
    return {
      type: meActionsEnum.SET_ME_ERROR,
      payload: { error },
    } as const;
  },
};
