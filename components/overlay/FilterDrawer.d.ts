import * as React from 'react';

/**
 * Panel filtrů jako drawer zleva přes overlay.
 * @startingPoint section="Kategorie" subtitle="Drawer s filtry přes overlay" viewport="700x520"
 */
export interface FilterDrawerProps {
  /** Otevřený stav. Zavřený drawer zůstává v DOM kvůli animaci. */
  open?: boolean;
  onClose?: () => void;
  /** Počet aktivních filtrů v hlavičce. */
  count?: number;
  children?: React.ReactNode;
  /** Text hlavního tlačítka, typicky s počtem výsledků. */
  resultLabel?: string;
  onReset?: () => void;
  className?: string;
}

export interface FilterGroupProps {
  label: string;
  children?: React.ReactNode;
  /** Sbalená skupina — pro filtry, které většina lidí nepoužije. */
  collapsed?: boolean;
}

export declare function FilterDrawer(props: FilterDrawerProps): JSX.Element;
export declare function FilterGroup(props: FilterGroupProps): JSX.Element;
