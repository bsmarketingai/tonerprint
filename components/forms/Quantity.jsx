import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Quantity({ value = 1, min = 1, max = 999, onChange, units, className = '' }) {
  const set = (n) => onChange && onChange(Math.min(max, Math.max(min, n)));
  const cls = ['AddToCartView', 'v1a', 'v1', 'bs-view', 'dcon', 'dc000', className].filter(Boolean).join(' ');
  return (
    <div className={cls}>
      <div className="quantity">
        <button type="button" className="button decrease" aria-label="Snížit počet" onClick={() => set(value - 1)}>
          <Icon name="minus" size={2} />
        </button>
        <input
          className="real" type="number" aria-label="Počet"
          value={value} min={min} max={max}
          onChange={(e) => set(parseInt(e.target.value, 10) || min)}
        />
        <span className="ghost">{value}</span>
        <button type="button" className="button increase" aria-label="Zvýšit počet" onClick={() => set(value + 1)}>
          <Icon name="plus" size={2} />
        </button>
      </div>
      {units && <span className="unitsDescription">{units}</span>}
    </div>
  );
}
