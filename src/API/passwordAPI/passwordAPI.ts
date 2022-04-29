import { AxiosResponse } from 'axios';
import { registerStateType } from '../../Redux/Reducers/passwordReducer/passwordReducer';
import { instance } from '../configAPI/configAPI';
import { FORGOT_URL, REGISTER_URL, SET_NEW_PASSWORD_URL } from './constants';
import { ForgotResponseType, newPassBodyType, SetNewResponseType } from './types';

export const passwordAPI = {
  async registerMe( body: { email: string, password: string } ) {
    return await instance.post<registerStateType,
      AxiosResponse<registerStateType>, { email: string, password: string }>( REGISTER_URL, body );
  },
  async forgot( email: string ) {
    return await instance.post<ForgotResponseType>( FORGOT_URL, {
      email,
      message: `<div style="background-color: lime; padding: 15px">
password recovery link: 
<a href='http://localhost:3000/IFriday#/set-new-password>
link</a>
</div>`,
    } );
  },
  async createNewPass( body: newPassBodyType ) {
    return await instance.post<SetNewResponseType,
      AxiosResponse<SetNewResponseType>, newPassBodyType>( SET_NEW_PASSWORD_URL, body );
  },
};
