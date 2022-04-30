import { PackType } from '../../../../../../../Redux/Reducers/packsReducer/packsReducer';

export type OnlyOnePackComponentType = {
  item: PackType
  runToCards: ( packId: string ) => void
}
export type modeType = 'edit' | 'delete' | null | 'v';
export type SrazyIliType = {
  runToCards: ( packId: string ) => void
  packId: string
  setMode: () => void
}