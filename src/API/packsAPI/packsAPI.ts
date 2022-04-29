import {AxiosResponse} from "axios";
import {InitialCardPacksType, PackType} from "../../Redux/Reducers/packsReducer/packsReducer";
import {instance} from "../configAPI/configAPI";
import { Nullable } from '../../types';
import { PACK_URL } from './constants';
import { newPackType, UpdatedPackType, UpdatedType } from './types';

export const packsAPI = {
    async setPacks(packName: string, min: number, max: number, updated: UpdatedType, page: number, pageCount: number, user_id: Nullable<string>) {
        return await instance.get<InitialCardPacksType,
            AxiosResponse<InitialCardPacksType>, {
            packName: string, min: number, max: number, updated: UpdatedType, page: number, pageCount: number, user_id: string
        }>
        (PACK_URL, {params: {packName, min, max, sortPacks: updated, page, pageCount, user_id}})
    },
    async addNewPack(newPack: newPackType) {
        return await instance.post<PackType,
            AxiosResponse<PackType>, { cardsPack: newPackType }>
        (PACK_URL, {cardsPack: newPack})
    },
    async deletePack(packId: string) {
        return await instance.delete<PackType,
            AxiosResponse<PackType>>
        (`/cards/pack?id=${packId}`)
    },
    async changePack(newName: string, id: string) {
        const updatedPack: UpdatedPackType = {
            _id: id,
            name: newName,
        }
        return await instance.put <UpdatedPackType,
            AxiosResponse<UpdatedPackType>, {
            cardsPack: UpdatedPackType
        }>
        (PACK_URL, {cardsPack: updatedPack})
    },
}
