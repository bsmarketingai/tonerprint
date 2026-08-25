import * as React from 'react';

export interface AvailabilityBadgeProps {
  children: React.ReactNode;
  /** Stavová třída BS Shopu. Názvy jsou české a nepřejmenovávají se. */
  state?: 'zelena' | 'zluta' | 'cervena' | 'seda' | 'storage';
  className?: string;
}

export declare function AvailabilityBadge(props: AvailabilityBadgeProps): JSX.Element;
