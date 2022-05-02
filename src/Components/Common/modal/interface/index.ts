import { CSSProperties } from 'react';

export interface Modal {
  enableBackground?: boolean;
  backgroundStyle?: CSSProperties;
  backgroundOnClick?: () => void;
  width: number;
  height: number;
  modalStyle?: CSSProperties;
  modalOnClick?: () => void;
  show: boolean;
}