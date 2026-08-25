import * as React from 'react';

/**
 * Mřížka nebo carousel produktových karet.
 * @startingPoint section="Produkt" subtitle="Mřížka produktů s hlavičkou sekce" viewport="1260x560"
 */
export interface ProductGridProps {
  children?: React.ReactNode;
  /** Nadpis sekce. Bez něj se hlavička nevykreslí. */
  caption?: string;
  /** Ikona před nadpisem. */
  captionIcon?: string;
  /** Text odkazu vpravo v hlavičce, např. "Zobrazit vše". */
  readMore?: string;
  readMoreHref?: string;
  /** Počet sloupců na největším pásmu; níž se automaticky redukuje. */
  columns?: 2 | 3 | 4 | 5 | 6;
  /** grid = mřížka, carousel = vodorovný posuv se snapem. */
  variant?: 'grid' | 'carousel';
  className?: string;
}

export declare function ProductGrid(props: ProductGridProps): JSX.Element;
