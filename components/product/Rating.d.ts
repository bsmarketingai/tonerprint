export interface RatingProps {
  /** Průměr 0–5; zaokrouhluje se na celé hvězdy. */
  value?: number;
  /** Počet hodnocení. Bez něj se hvězdy zobrazí samostatně. */
  count?: number;
  className?: string;
}

export declare function Rating(props: RatingProps): JSX.Element;
