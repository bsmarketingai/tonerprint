import * as React from 'react';

/**
 * Hlavička eshopu — logo, vyhledávání, přihlášení, košík.
 * @startingPoint section="Globální" subtitle="Hlavička s vyhledáváním a košíkem" viewport="1260x140"
 */
export interface HeaderProps {
  /** Logo jako uzel — obrázek nebo inline SVG. */
  logo?: React.ReactNode;
  searchPlaceholder?: string;
  /** Počet položek v košíku; 0 bublinu skryje. */
  cartCount?: number;
  onMenu?: () => void;
  className?: string;
}

export declare function Header(props: HeaderProps): JSX.Element;
