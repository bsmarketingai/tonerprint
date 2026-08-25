import React from 'react';

export function Tabs({ tabs = [], value = 0, onChange, children, className = '' }) {
  const cls = ['TabsProductDetailMasterView', 'v1a', 'v1', 'bs-view', 'dcon', 'dc000', className]
    .filter(Boolean).join(' ');
  const panels = React.Children.toArray(children);
  return (
    <div className={cls}>
      <div className="tabpages">
        <div className="tabs" role="tablist">
          {tabs.map((t, i) => {
            const label = typeof t === 'string' ? t : t.label;
            const count = typeof t === 'string' ? null : t.count;
            return (
              <button
                key={i} type="button" role="tab" aria-selected={i === value}
                className={'page' + (i === value ? ' selected' : '')}
                onClick={() => onChange && onChange(i)}
              >
                {label}{count != null && <span className="value">{count}</span>}
              </button>
            );
          })}
        </div>
        <div className="pages">
          {panels.map((p, i) => (
            <div key={i} role="tabpanel" className={'page' + (i === value ? ' selected' : '')}>{p}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
