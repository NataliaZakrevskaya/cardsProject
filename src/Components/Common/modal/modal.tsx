import React, { FC } from 'react';
import { Modal } from './interface';



const Modal: FC<Modal> = (
  {
    enableBackground,
    backgroundStyle,
    backgroundOnClick = () => {
    },
    width,
    height,
    modalStyle,
    modalOnClick = () => {
    },
    show,
    children,
  },
) => {
  const top = `calc(50vh - ${ height / 2 }px)`;
  const left = `calc(50vw - ${ width / 2 }px)`;

  if ( !show ) return null;

  return (
    <>
      {
        enableBackground &&
          <div
              style={ {
                position: 'fixed',
                top: '0px',
                left: '0px',
                width: '100vw',
                height: '100vh',

                background: 'black',
                opacity: 0.65,
                zIndex: 20,

                ...backgroundStyle,
              } }
              onClick={ backgroundOnClick }
          />
      }
      <div
        style={ {
          position: 'fixed',
          top,
          left,
          width,
          height,
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          justifyContent: 'center',

          zIndex: 21,

          ...modalStyle,
        } }
        onClick={ modalOnClick }
      >
        { children }
      </div>
    </>
  );
};

export default Modal;
