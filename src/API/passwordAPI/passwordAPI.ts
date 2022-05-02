import { AxiosResponse } from 'axios';
import { instance } from '../configAPI/configAPI';
import { FORGOT_URL, REGISTER_URL, SET_NEW_PASSWORD_URL } from './constants';
import { ForgotResponseType, newPassBodyType, SetNewResponseType } from './types';
import { registerStateType } from '../../Redux/Reducers/passwordReducer/types';
import { message } from './message/message';

export const passwordAPI = {
  async registerMe( userInfo: { email: string, password: string } ) {
    return await instance.post<registerStateType,
      AxiosResponse<registerStateType>, { email: string, password: string }>( REGISTER_URL, userInfo );
  },
  async forgot( email: string ) {
    return await instance.post<ForgotResponseType>( FORGOT_URL, { email, message } );
  },
  async createNewPass( newPassword: newPassBodyType ) {
    return await instance.post<SetNewResponseType,
      AxiosResponse<SetNewResponseType>, newPassBodyType>( SET_NEW_PASSWORD_URL, newPassword );
  },
};
