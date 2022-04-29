import { AxiosResponse } from 'axios';
import { instance } from '../configAPI/configAPI';
import { ME_URL } from '../loginFormAPI/constants';
import { meRespType } from './types';

export const meAPI = {
  async me() {
    return await instance.post<meRespType,
      AxiosResponse<meRespType>, {}>( ME_URL, {} );
  },
};
