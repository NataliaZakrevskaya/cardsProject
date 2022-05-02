import { PackType } from '../../../../../../Redux/Reducers/packsReducer/types';

export type EditPackComponentType = {
  item: PackType
  closeModal: () => void
}