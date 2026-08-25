import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function ProductGrid({
  children, caption, captionIcon, readMore, readMoreHref = '#',
  columns = 4, variant = 'grid', className = '',
}) {
  const cls = [
    'ProductsView', 'ProductsViewBase', variant === 'carousel' ? 'v2a v2' : 'v1a v1',
    'bs-view', 'dcon', 'dc000', 'columns' + columns, className,
  ].filter(Boolean).join(' ');
  return (
    <div className={cls}>
      {caption && (
        <dc-con class="dcHeader">
          <span className="caption">
            {captionIcon && <Icon name={captionIcon} size={3} />}
            {caption}
          </span>
          {readMore && (
            <a className="readMore" href={readMoreHref}>
              {readMore}<Icon name="chevron-right" size={2} />
            </a>
          )}
        </dc-con>
      )}
      {variant === 'carousel' ? (
        <div className="slidingItems">
          <div className="scrollContainer">{children}</div>
        </div>
      ) : (
        <div className="productHolder">{children}</div>
      )}
    </div>
  );
}
