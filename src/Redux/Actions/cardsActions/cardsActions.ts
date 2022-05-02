import { cardsActionsEnum } from './enums';
import { UpdatedType } from '../../../API/packsAPI/types';
import { UpdatedGradeType } from '../../../API/cardsAPI/types';
import { CardsType } from './types';
import { ModeTypes } from '../../Reducers/packsReducer/types';

export const cardsActions = {
    setCardsAC: (state: CardsType) => {
        return {
            type: cardsActionsEnum.SET_CARDS,
            payload: {state}
        } as const
    },
    setCardsPageAC: ( page: number) => {
        return {
            type: cardsActionsEnum.SET_PAGE,
            payload: {page}
        } as const
    },
    setCardsPageCountAC: ( pageCount: number) => {
        return {
            type: cardsActionsEnum.SET_PAGE_COUNT,
            payload: {pageCount}
        } as const
    },
    searchCardAC: (e: string) => {
        return {
            type: cardsActionsEnum.SEARCH_CARDS,
            payload: {e}
        } as const
    },
    updateFilterCardAC: (updated: UpdatedType) => {
        return {
            type: cardsActionsEnum.UPDATE_CARDS,
            payload: {updated}
        } as const
    },
    gradeCardAC: (updatedCard: UpdatedGradeType) => {
        return {
            type: cardsActionsEnum.GRADE_CARD,
            payload: {updatedCard}
        } as const
    },
    setCardModeAC: ( mode: ModeTypes) => {
        return {
            type: cardsActionsEnum.SET_CARD_MODE,
            payload: {mode}
        } as const
    },
}
