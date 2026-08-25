import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function EmptyState({ icon = 'package-off', caption, children, action, className = '' }) {
  const cls = ['EmptyView', 'v1a', 'v1', 'bs-view', 'dcon', 'dc000', 'empty', className]
    .filter(Boolean).join(' ');
  return (
    <div className={cls}>
      <Icon name={icon} size={4} />
      {caption && <span className="caption">{caption}</span>}
      {children && <p className="shortDescription">{children}</p>}
      {action}
    </div>
  );
}
