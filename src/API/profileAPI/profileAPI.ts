import { AxiosResponse } from 'axios';
import { instance } from '../configAPI/configAPI';
import { ME_URL } from '../loginFormAPI/constants';
import { ProfileRespType, UpdateUser } from './types';

export const profileAPI = {
  async changeUserName( updateBody: UpdateUser ) {
    return await instance.put<ProfileRespType,
      AxiosResponse<ProfileRespType>>( ME_URL, updateBody );
  },
};
