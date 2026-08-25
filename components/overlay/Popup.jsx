import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Popup({ open = false, onClose, caption, children, actions, className = '' }) {
  const cls = ['PopupView', 'v1a', 'v1', 'bs-view', 'dcon', 'dc000', open ? 'active' : '', className]
    .filter(Boolean).join(' ');
  return (
    <div className={cls} role="dialog" aria-modal="true" aria-label={caption}>
      <div className="overlay" onClick={onClose} />
      <dc-con class="popup">
        <dc-con class="dcHeader">
          <span className="caption">{caption}</span>
          <button type="button" className="button toggle" aria-label="Zavřít" onClick={onClose}>
            <Icon name="x" size={3} />
          </button>
        </dc-con>
        <dc-con class="dcContent">{children}</dc-con>
        {actions && <dc-con class="bottom">{actions}</dc-con>}
      </dc-con>
    </div>
  );
}
