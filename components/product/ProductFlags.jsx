import React from 'react';

export function ProductFlags({ flags = [], look = 'A', className = '' }) {
  const shown = flags.slice(0, 3);
  const cls = ['ActionIconsView', 'v1a', 'v1', 'bs-view', 'count' + shown.length, className]
    .filter(Boolean).join(' ');
  return (
    <div className={cls} data-look={look}>
      {shown.map((fl, i) => (
        <div key={i} className={'productFlag icon ' + (fl.tone || 'flag01')}>
          <span>{fl.label}</span>
        </div>
      ))}
    </div>
  );
}
