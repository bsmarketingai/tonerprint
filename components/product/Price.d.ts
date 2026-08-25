export interface PriceProps {
  /** Cena s DPH, už zformátovaná — např. "2 490,00 Kč". */
  vat?: string;
  /** Cena bez DPH. Pro B2B publikum vždy uváděj obě. */
  novat?: string;
  /** Původní cena před slevou; vykreslí se přeškrtnutě nad hlavní cenou. */
  original?: string;
  /** Doplněk pod cenou, např. "Cena za 1 ks". */
  units?: string;
  /** primary = velká cena na detailu, secondary = tišší v seznamu. */
  size?: 'primary' | 'secondary';
  /** Zvýrazní cenu jako individuální/zákaznickou. */
  user?: boolean;
  className?: string;
}

export declare function Price(props: PriceProps): JSX.Element;
