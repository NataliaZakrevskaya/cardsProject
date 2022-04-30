import { PackType } from '../../../../../../../../Redux/Reducers/packsReducer/packsReducer';

export type EditPackComponentType = {
  item: PackType
  closeModal: () => void
}