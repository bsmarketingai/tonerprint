import * as React from 'react';

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  /** Nápověda pod polem. Chybová hláška ji přebije. */
  hint?: string;
  /** Text chyby. Nastavení chyby přidá řádku modifikátor "empty" a ikonu. */
  error?: string;
  required?: boolean;
  /** Vykreslí textarea místo input. */
  multiline?: boolean;
  disabled?: boolean;
  className?: string;
}

export declare function TextField(props: TextFieldProps): JSX.Element;
