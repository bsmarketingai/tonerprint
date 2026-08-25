export interface QuantityProps {
  value?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
  /** Jednotka za číselníkem, např. "ks". */
  units?: string;
  className?: string;
}

export declare function Quantity(props: QuantityProps): JSX.Element;
