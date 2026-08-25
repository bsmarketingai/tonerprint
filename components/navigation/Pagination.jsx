import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Pagination({ page = 1, pages = 1, onChange, position = 'bottom', className = '' }) {
  const cls = ['CompoundPagingView', 'v1a', 'v1', 'bs-view', 'dcon', 'dc000', position, className]
    .filter(Boolean).join(' ');
  const go = (n) => onChange && onChange(Math.min(pages, Math.max(1, n)));
  const nums = [];
  for (let n = 1; n <= pages; n++) {
    if (n === 1 || n === pages || Math.abs(n - page) <= 1) nums.push(n);
    else if (nums[nums.length - 1] !== '…') nums.push('…');
  }
  return (
    <div className={cls}>
      <div className="pages">
        <button type="button" className="button page previous" aria-label="Předchozí strana" disabled={page === 1} onClick={() => go(page - 1)}>
          <Icon name="chevron-left" size={2} />
        </button>
        {nums.map((n, i) =>
          n === '…'
            ? <span key={'s' + i} className="separator">…</span>
            : (
              <button key={n} type="button" className={'button page' + (n === page ? ' selected' : '')} onClick={() => go(n)}>
                {n}
              </button>
            )
        )}
        <button type="button" className="button page next" aria-label="Další strana" disabled={page === pages} onClick={() => go(page + 1)}>
          <Icon name="chevron-right" size={2} />
        </button>
      </div>
    </div>
  );
}
