import React from 'react';

export function AvailabilityBadge({ children, state = 'zelena', className = '' }) {
  const cls = ['AvailabilityView', 'v1a', 'v1', 'bs-view', 'cs_' + state, className]
    .filter(Boolean).join(' ');
  return (
    <div className={cls}>
      <span className="label">{children}</span>
    </div>
  );
}
