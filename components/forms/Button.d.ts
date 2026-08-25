import * as React from 'react';

/**
 * Tlačítko systému. Vzhled řídí varianta, ne ruční barvy.
 * @startingPoint section="Formuláře" subtitle="Tlačítka ve všech variantách a velikostech" viewport="700x240"
 */
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  children?: React.ReactNode;
  /** a1 hlavní (plná modrá) · a2 sekundární (obrys) · a3 ghost · a4 destruktivní (červená) */
  variant?: 'a1' | 'a2' | 'a3' | 'a4';
  /** small 32px · default 44px · big 56px. Small nikdy pro nákupní akce. */
  size?: 'small' | 'default' | 'big';
  /** Název ikony vlevo, bez prefixu tp-. */
  icon?: string;
  /** Název ikony vpravo — pro pokračovací a rozbalovací akce. */
  iconRight?: string;
  fullWidth?: boolean;
  /** Zobrazí rotující loader a zablokuje tlačítko. */
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

export declare function Button(props: ButtonProps): JSX.Element;
