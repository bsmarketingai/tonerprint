import * as React from 'react';

export interface SelectOption { value: string; label: string }

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  /** Pole řetězců nebo dvojic {value,label}. */
  options?: Array<string | SelectOption>;
  className?: string;
}

export declare function Select(props: SelectProps): JSX.Element;
