import { KeyboardEvent } from 'react';

export type ChangeNameInputPropsType = {
  name: string
  error: string
  onSaveButtonClick: () => void
  onNameInputKeyPress: ( e: KeyboardEvent<HTMLInputElement> ) => void
  changeNameValue: ( newName: string ) => void
}