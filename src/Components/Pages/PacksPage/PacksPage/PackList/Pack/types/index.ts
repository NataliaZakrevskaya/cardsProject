import { PackType } from '../../../../../../../Redux/Reducers/packsReducer/types';

export type OnlyOnePackComponentType = {
  item: PackType
  runToCards: ( packId: string ) => void
}
export type modeType = 'edit' | 'delete' | null | 'v';
export type ChooseRoadModalType = {
  runToCards: ( packId: string ) => void
  packId: string
  setMode: () => void
}