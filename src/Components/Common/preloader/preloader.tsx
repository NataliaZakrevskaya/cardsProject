import React from 'react';
import preloader from '../../../Images/preloader.gif';
import { PreloaderType } from './types';
import style from 'preloader.module.css';

const Preloader = ( { status }: PreloaderType ) => {
  return (
    <>
      {
        status === 'loading' &&
          <img
              src={ preloader }
              className={ style.preloader }
              alt="preloader"
          />
      }
    </>
  );
};

export default Preloader;
