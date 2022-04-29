import { Undetectable } from '../../../types';

export type ForgotResponseType = {
  info: string
  success: boolean
  answer: boolean
  html: boolean
}

export type newPassBodyType = {
  password: string
  resetPasswordToken: Undetectable<string>
}

export type SetNewResponseType = {
  info: string
  error: string
}