import { PacksInitialStateType, PacksReducerActionsType } from './types';
import { UpdatedType } from '../../../API/packsAPI/types';
import { packsActionsEnum } from '../../Actions/packsActions/enums';

export const PacksInitialState: PacksInitialStateType = {
  cardPacks: [
    {
      _id: '',
      user_id: '',
      name: '',
      cardsCount: 0,
      created: '',
      updated: '',
      user_name: '',
      private: false,
    },
  ],
  cardPacksTotalCount: 0,
  maxCardsCount: 0,
  minCardsCount: 0,
  page: 1,
  pageCount: 10,
  packName: '',
  updated: '' as UpdatedType,
  user_id: null,
  mode: null,
};



export const packsReducer = ( state = PacksInitialState, action: PacksReducerActionsType ): PacksInitialStateType => {
  switch ( action.type ) {
    case packsActionsEnum.SET_PACKS: {
      return { ...state, cardPacks: action.payload.state.cardPacks };
    }
    case packsActionsEnum.SET_ALL_USER_ID_CARDS: {
      debugger
      return { ...state, user_id: action.payload.cardsFilter };
    }
    case packsActionsEnum.SET_MIN_CARDS_COUNT: {
      return { ...state, minCardsCount: action.payload.minCardsCount };
    }
    case packsActionsEnum.SET_MAX_CARDS_COUNT : {
      return { ...state, maxCardsCount: action.payload.maxCardsCount };
    }
    case packsActionsEnum.SEARCH_BY_PACK_NAME : {
      return { ...state, packName: action.payload.packName };
    }
    case packsActionsEnum.SET_CURRENT_PAGE : {
      return { ...state, page: action.payload.page };
    }
    case packsActionsEnum.SET_PAGE_COUNT : {
      return { ...state, pageCount: action.payload.pageCount };
    }
    case packsActionsEnum.SET_UPDATED_FILTER : {
      return { ...state, updated: action.payload.updated };
    }
    case packsActionsEnum.SET_PACKS_MODE: {
      return { ...state, mode: action.payload.mode };
    }
    default:
      return state;
  }
};