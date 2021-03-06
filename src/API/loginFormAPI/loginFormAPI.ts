import { AxiosResponse } from 'axios';
import { instance } from '../configAPI/configAPI';
import { LOGIN_URL, ME_URL } from './constants';
import { LoginType } from './types';
import { UserDataType } from '../../Redux/Actions/loginFormActions/types';

export const loginFormAPI = {
  async loginMe( loginInfo: LoginType ) {
    return await instance.post<UserDataType, AxiosResponse<UserDataType>>( LOGIN_URL, loginInfo );
  },
  async logoutMe() {
    return await instance.delete( ME_URL, {} );
  },
};
