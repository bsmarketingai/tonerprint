import * as React from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: React.ReactNode;
  /** Počet výsledků vpravo — používá se ve filtrech. */
  count?: number | string;
  /** Přepne na radio; skupinu drží pohromadě shodný name. */
  type?: 'checkbox' | 'radio';
  disabled?: boolean;
  className?: string;
}

export declare function Checkbox(props: CheckboxProps): JSX.Element;
