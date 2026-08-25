import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** Název ikony bez prefixu, např. "shopping-cart". Sprite používá #tp-<name>. */
  name: string;
  /** Velikostní stupeň: 1 = 8px, 2 = 16px, 3 = 24px, 4 = 32px. */
  size?: 1 | 2 | 3 | 4;
  className?: string;
}

export declare function Icon(props: IconProps): JSX.Element;
