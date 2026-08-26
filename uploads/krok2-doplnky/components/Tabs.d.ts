import * as React from 'react';

export interface TabDef { label: string; count?: number | string }

export interface TabsProps {
  /** Řetězce nebo {label,count}. Počet u tabu je funkční informace, ne ozdoba. */
  tabs?: Array<string | TabDef>;
  value?: number;
  onChange?: (index: number) => void;
  /** Jeden potomek na tab, ve stejném pořadí. */
  children?: React.ReactNode;
  className?: string;
}

export declare function Tabs(props: TabsProps): JSX.Element;
