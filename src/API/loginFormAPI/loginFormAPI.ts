import { AxiosResponse } from 'axios';
import { UserDataType } from '../../Redux/Actions/loginFormActions/loginFormActions';
import { instance } from '../configAPI/configAPI';
import { LOGIN_URL, ME_URL } from './constants';
import { LoginType } from './types';

export const loginFormAPI = {
  async loginMe( body: LoginType ) {
    return await instance.post<UserDataType, AxiosResponse<UserDataType>>( LOGIN_URL, body );
  },
  async logoutMe() {
    return await instance.delete( ME_URL, {} );
  },
};
