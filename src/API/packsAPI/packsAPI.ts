import { AxiosResponse } from 'axios';
import { instance } from '../configAPI/configAPI';
import { PACK_URL } from './constants';
import { newPackType, PacksInfoType, UpdatedPackType } from './types';
import { PacksInitialStateType, PackType } from '../../Redux/Reducers/packsReducer/types';
import { getPackUrl } from './heplers';

export const packsAPI = {
  async setPacks( packsInfo: PacksInfoType ) {

    return await instance.get<PacksInitialStateType,
      AxiosResponse<PacksInitialStateType>>( PACK_URL, { params: { ...packsInfo } } );
  },
  async addNewPack( newPack: newPackType ) {
    return await instance.post<PackType,
      AxiosResponse<PackType>, { cardsPack: newPackType }>
    ( PACK_URL, { cardsPack: newPack } );
  },
  async deletePack( packId: string ) {
    return await instance.delete<PackType, AxiosResponse<PackType>>( getPackUrl( packId ) );
  },
  async changePack( newName: string, id: string ) {
    const updatedPack: UpdatedPackType = {
      _id: id,
      name: newName,
    };
    return await instance.put <UpdatedPackType,
      AxiosResponse<UpdatedPackType>, {
      cardsPack: UpdatedPackType
    }>
    ( PACK_URL, { cardsPack: updatedPack } );
  },
};
