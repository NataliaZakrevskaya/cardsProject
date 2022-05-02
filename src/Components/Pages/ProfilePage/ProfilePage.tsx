import React, { KeyboardEvent, useState } from 'react';
import style from './ProfilePage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeNameInput } from './changeNameInput/changeNameInput';
import { ProfileNameSpan } from './profileNameSpan/profileNameSpan';
import { BASE_IMG_URL } from './constants';
import { getErrorMessage, getProfileInfo } from '../../../Redux/Selectors/profileSelectors/profileSelectors';
import { updateUserNameTC } from '../../../Redux/Thunk/profileThunk/profileThunk';

const ProfilePage = () => {

  const dispatch = useDispatch();

  const userInfo = useSelector( getProfileInfo );
  const errorMessage = useSelector( getErrorMessage );

  const { name, avatar, publicCardPacksCount } = { ...userInfo };

  const [ userName, setUserName ] = useState<string>( name );
  const [ error, setError ] = useState<string>( '' );
  const [ modification, setModification ] = useState<boolean>( false );

  const changeModification = () => {
    setModification( true );
  };
  const onSaveButtonClick = () => {
    if ( userName.trim() && userName.length <= 20 ) {
      dispatch( updateUserNameTC( userName ) );
      setModification( !modification );
      setError( '' );
    } else {
      setError( 'Incorrect name' );
    }

  };
  const changeNameValue = ( newName: string ) => {
    setUserName( newName );
  };
  const onNameInputKeyPress = ( e: KeyboardEvent<HTMLInputElement> ) => {
    if ( e.key === 'Enter' ) {
      dispatch( updateUserNameTC( userName ) );
      setModification( !modification );
    }
  };

  return (
    <div className={ style.profilePage }>
      <div className={ style.profileContainer }>
        <h2 className={ style.title }>Personal information</h2>
        <img src={ avatar ? avatar : BASE_IMG_URL } alt={ 'user\'s image' } title={ 'your avatar' }/>
        <span>{ `Cards: ${ publicCardPacksCount }` }</span>
        <div className={ style.nameContainer }>
          {
            !!errorMessage && <div className={ style.errorMessage }>{ errorMessage }</div>
          }
          {
            modification
              ? (
                <ChangeNameInput
                  name={ userName }
                  error={ error }
                  changeNameValue={ changeNameValue }
                  onNameInputKeyPress={ onNameInputKeyPress }
                  onSaveButtonClick={ onSaveButtonClick }
                />
              ) : (
                <ProfileNameSpan
                  name={ name }
                  changeModification={ changeModification }
                />
              )
          }
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;