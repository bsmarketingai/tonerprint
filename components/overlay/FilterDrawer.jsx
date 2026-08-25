import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function FilterDrawer({
  open = false, onClose, count, children, resultLabel = 'Zobrazit výsledky',
  onReset, className = '',
}) {
  const cls = [
    'FilterView', 'v1a', 'v1', 'bs-view', 'dcon', 'dc000',
    open ? 'active' : '', className,
  ].filter(Boolean).join(' ');
  return (
    <div className={cls} role="dialog" aria-modal="true" aria-label="Filtry">
      <div className="overlay" onClick={onClose} />
      <dc-con class="wrap">
        <dc-con class="dcHeader">
          <span className="caption">
            <Icon name="filter" size={2} />Filtry
            {count > 0 && <span className="value">{count}</span>}
          </span>
          <button type="button" className="button toggle" aria-label="Zavřít filtry" onClick={onClose}>
            <Icon name="x" size={3} />
          </button>
        </dc-con>
        <dc-con class="dcContent">{children}</dc-con>
        <dc-con class="bottom">
          <button type="button" className="button toggle" onClick={onReset}>Zrušit</button>
          <button type="button" className="button buy" onClick={onClose}>{resultLabel}</button>
        </dc-con>
      </dc-con>
    </div>
  );
}

export function FilterGroup({ label, children, collapsed = false }) {
  return (
    <div className={'group' + (collapsed ? ' noAutoExpand' : '')}>
      <button type="button" className="label">
        {label}<Icon name="chevron-down" size={2} className="bs-crv" />
      </button>
      <div className="items">{children}</div>
    </div>
  );
}
