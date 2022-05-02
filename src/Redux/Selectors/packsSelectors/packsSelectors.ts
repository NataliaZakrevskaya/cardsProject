import { AppStateType } from '../../Store/types';
import { PacksInitialStateType, PackType } from '../../Reducers/packsReducer/types';

export const getPacksState = ( state: AppStateType ): PacksInitialStateType => {
  return state.packs;
};
export const getActualPacksPage = ( state: AppStateType ): number => {
  return state.packs.page;
};
export const getActualPacksCount = ( state: AppStateType ): number => {
  return state.packs.pageCount;
};
export const getPacks = ( state: AppStateType ): PackType[] => {
  return state.packs.cardPacks;
};