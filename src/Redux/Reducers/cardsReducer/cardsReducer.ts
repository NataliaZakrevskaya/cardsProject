import { CardsInitialStateType, cardsReducerActionType } from './types';
import { UpdatedType } from '../../../API/packsAPI/types';
import { cardsActionsEnum } from '../../Actions/cardsActions/enums';

const CardsInitialState: CardsInitialStateType = {
  cards: [
    {
      answer: '',
      question: '',
      cardsPack_id: '',
      grade: 0,
      shots: 0,
      user_id: '',
      created: '',
      updated: '',
      _id: '',
    },
  ],
  cardsTotalCount: 0,
  maxGrade: 0,
  minGrade: 0,
  page: 1,
  pageCount: 10,
  cardAnswer: '',
  cardQuestion: '',
  sortCards: '' as UpdatedType,
  mode: null,
};

export const cardsReducer = ( state = CardsInitialState, action: cardsReducerActionType ): CardsInitialStateType => {
  switch ( action.type ) {
    case cardsActionsEnum.SET_CARDS: {
      return { ...state, ...action.payload.state };
    }
    case cardsActionsEnum.SET_PAGE_COUNT: {
      return { ...state, pageCount: action.payload.pageCount };
    }
    case cardsActionsEnum.SET_PAGE: {
      return { ...state, page: action.payload.page };
    }
    case cardsActionsEnum.SEARCH_CARDS: {
      return { ...state, cardQuestion: action.payload.e };
    }
    case cardsActionsEnum.UPDATE_CARDS : {
      return { ...state, sortCards: action.payload.updated };
    }
    case cardsActionsEnum.GRADE_CARD : {
      return {
        ...state,
        cards: state.cards.map( card => card._id === action.payload.updatedCard._id
          ? { ...card, grade: action.payload.updatedCard.grade }
          : { ...card } ),
      };
    }
    case cardsActionsEnum.SET_CARD_MODE: {
      return { ...state, mode: action.payload.mode };
    }
    default:
      return state;
  }
};