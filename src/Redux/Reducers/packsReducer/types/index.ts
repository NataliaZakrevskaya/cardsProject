import { UpdatedType } from '../../../../API/packsAPI/types';
import { Nullable } from '../../../../types';
import { packsActions } from '../../../Actions/packsActions/packsActions';
import { PacksActionsTypes } from '../../../Actions/packsActions/types';

export type PackType = {
  _id: string
  user_id: string
  name: string
  cardsCount: number
  created: string
  updated: string
  user_name: string
  private: boolean
}
export type ModeTypes = 'add' | 'edit' | null
export type PacksInitialStateType = {
  cardPacks: PackType[]
  cardPacksTotalCount: number
  maxCardsCount: number
  minCardsCount: number
  page: number
  pageCount: number
  packName: string
  updated: UpdatedType
  user_id: Nullable<string>,
  mode: ModeTypes,
}
export type PacksReducerActionsType = ReturnType<PacksActionsTypes<typeof packsActions>>