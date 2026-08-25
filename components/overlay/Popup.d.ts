import * as React from 'react';

export interface PopupProps {
  open?: boolean;
  onClose?: () => void;
  caption?: string;
  children?: React.ReactNode;
  /** Tlačítka ve spodní liště, zarovnaná doprava. */
  actions?: React.ReactNode;
  className?: string;
}

export declare function Popup(props: PopupProps): JSX.Element;
