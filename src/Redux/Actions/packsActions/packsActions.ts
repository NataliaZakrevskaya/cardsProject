import { ModeType, PacksInitialStateType } from '../../Reducers/packsReducer/types';
import { packsActionsEnum } from './enums';
import { Nullable } from '../../../types';
import { UpdatedType } from '../../../API/packsAPI/types';

export const packsActions = {
  setPacksAC: ( state: PacksInitialStateType ) => {
    return {
      type: packsActionsEnum.SET_PACKS,
      payload: { state },
    } as const;
  },
  setAllUserIdCardsAC: ( cardsFilter: Nullable<string> ) => {
    return {
      type: packsActionsEnum.SET_ALL_USER_ID_CARDS,
      payload: { cardsFilter },
    } as const;
  },
  setMinCardsCountAC: ( minCardsCount: number ) => {
    return {
      type: packsActionsEnum.SET_MIN_CARDS_COUNT,
      payload: { minCardsCount },
    } as const;
  },
  setMaxCardsCountAC: ( maxCardsCount: number ) => {
    return {
      type: packsActionsEnum.SET_MAX_CARDS_COUNT,
      payload: { maxCardsCount },
    } as const;
  },
  searchByPackNameAC: ( packName: string ) => {
    return {
      type: packsActionsEnum.SEARCH_BY_PACK_NAME,
      payload: { packName },
    } as const;
  },
  seCurrentPageAC: ( page: number ) => {
    return {
      type: packsActionsEnum.SET_CURRENT_PAGE,
      payload: { page },
    } as const;
  },
  setPageCountAC: ( pageCount: number ) => {
    return {
      type: packsActionsEnum.SET_PAGE_COUNT,
      payload: { pageCount },
    } as const;
  },
  setUpdatedFilterAC: ( updated: UpdatedType ) => {
    return {
      type: packsActionsEnum.SET_UPDATED_FILTER,
      payload: { updated },
    } as const;
  },
  setPacksModeAC: ( mode: ModeType ) => {
    return {
      type: packsActionsEnum.SET_PACKS_MODE,
      payload: { mode },
    } as const;
  },
};
