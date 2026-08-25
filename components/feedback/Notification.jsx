import React from 'react';
import { Icon } from '../core/Icon.jsx';

const ICONS = {
  zelena: 'circle-check',
  zluta: 'alert-triangle',
  cervena: 'circle-x',
  seda: 'info-circle',
  info: 'info-circle',
};

export function Notification({ children, caption, tone = 'info', onClose, className = '' }) {
  const cls = [
    'NotificationView', 'v1a', 'v1', 'bs-view', 'dcon', 'dc000',
    tone !== 'info' ? 'cs_' + tone : '', className,
  ].filter(Boolean).join(' ');
  return (
    <div className={cls}>
      <Icon name={ICONS[tone] || ICONS.info} size={3} />
      <span>
        {caption && <span className="caption">{caption}</span>}
        {children}
      </span>
      {onClose && (
        <button type="button" className="button toggle" aria-label="Zavřít" onClick={onClose}>
          <Icon name="x" size={2} />
        </button>
      )}
    </div>
  );
}
