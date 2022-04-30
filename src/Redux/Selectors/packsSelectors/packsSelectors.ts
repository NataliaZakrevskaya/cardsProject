import { AppStateType } from '../../Store/store';
import { InitialCardPacksType, PackType } from '../../Reducers/packsReducer/packsReducer';

export const getPacksState = ( state: AppStateType ): InitialCardPacksType => {
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