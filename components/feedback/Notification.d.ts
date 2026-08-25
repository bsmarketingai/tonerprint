import * as React from 'react';

export interface NotificationProps {
  children?: React.ReactNode;
  /** Tučný nadpis nad textem. Nese sdělení, aby barva nebyla jediný nosič. */
  caption?: string;
  /** zelena úspěch · zluta varování · cervena chyba · seda neutrální · info modrá */
  tone?: 'zelena' | 'zluta' | 'cervena' | 'seda' | 'info';
  /** Vykreslí křížek. Bez něj notifikace nejde zavřít. */
  onClose?: () => void;
  className?: string;
}

export declare function Notification(props: NotificationProps): JSX.Element;
