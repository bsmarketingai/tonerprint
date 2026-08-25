import * as React from 'react';

export interface EmptyStateProps {
  /** Ikona 32 px nad nadpisem. */
  icon?: string;
  caption?: string;
  children?: React.ReactNode;
  /** Tlačítko, které stav řeší — bez něj je prázdný stav slepá ulička. */
  action?: React.ReactNode;
  className?: string;
}

export declare function EmptyState(props: EmptyStateProps): JSX.Element;
