import * as React from 'react';

/**
 * Produktová karta — základní jednotka všech výpisů.
 * @startingPoint section="Produkt" subtitle="Karta produktu v mřížce i v řádku" viewport="700x400"
 */
export interface ProductCardProps {
  name: string;
  href?: string;
  /** Cesta k fotce. Produktové výřezy na bílé; karta na ně používá mix-blend-mode. */
  image: string;
  /** Kód produktu nad názvem. Ve výpisu ho lze vynechat. */
  code?: string;
  /** Prvek Price. Předává se hotový, aby karta neřešila formátování. */
  price?: React.ReactNode;
  /** Text dostupnosti, např. "Skladem 18 ks". */
  availability?: string;
  availabilityState?: 'zelena' | 'zluta' | 'cervena' | 'seda' | 'storage';
  rating?: number;
  ratingCount?: number;
  flags?: Array<{ label: string; tone?: string }>;
  /** Zobrazí se jen v řádkovém layoutu. */
  shortDescription?: string;
  /** grid = dlaždice, row = řádek pro přepínač zobrazení. */
  layout?: 'grid' | 'row';
  /** false ztlumí kartu pro nedostupný produkt. */
  canBuy?: boolean;
  onBuy?: () => void;
  className?: string;
}

export declare function ProductCard(props: ProductCardProps): JSX.Element;
