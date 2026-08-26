import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Rating({ value = 0, count, className = '' }) {
  return (
    <span className={['rating', className].filter(Boolean).join(' ')}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Icon key={n} name="star" size={2} className={n <= Math.round(value) ? 'selected' : ''} />
      ))}
      {count != null && <span className="value">({count} hodnocení)</span>}
    </span>
  );
}
