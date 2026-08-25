export interface ProductFlag {
  label: string;
  /** flag01 akce · flag02 novinka/doporučeno · flag03 info · flag04 upozornění · flag05–08 tiché */
  tone?: 'flag01' | 'flag02' | 'flag03' | 'flag04' | 'flag05' | 'flag06' | 'flag07' | 'flag08';
}

export interface ProductFlagsProps {
  /** Nejvýš tři; další se zahodí. */
  flags?: ProductFlag[];
  /** A = plovoucí pilulky, B = plná dlaždice na hraně fotky. */
  look?: 'A' | 'B';
  className?: string;
}

export declare function ProductFlags(props: ProductFlagsProps): JSX.Element;
