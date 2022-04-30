import React from 'react';
import style from '../ProfilePage.module.css';
import { ProfileNameSpanPropsType } from './types';

export const ProfileNameSpan = ( { name, changeModification }: ProfileNameSpanPropsType ) => {
  return (
    <div className={ style.profileInfo }>
            <span
              className={ style.yourNameMessage }
              onClick={ changeModification }>
                { `Your name is: ${ name }` }
              <span className={ style.pencil }>&nbsp; ✎</span>
            </span>
      <p className={ style.description }>If you want to change your name, click on it 😉</p>
    </div>
  );
};
