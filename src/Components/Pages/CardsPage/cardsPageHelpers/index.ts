import { PackType } from '../../../../Redux/Reducers/packsReducer/types';
import { Undetectable } from '../../../../types';

export const getActualPack = ( packs: PackType[], packId: Undetectable<string> ) => {
  const actualPack = packs.filter( pack => pack._id === packId );
  return actualPack[ 0 ];
};