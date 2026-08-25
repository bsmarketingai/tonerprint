import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Price } from './Price.jsx';
import { Rating } from './Rating.jsx';
import { ProductFlags } from './ProductFlags.jsx';
import { AvailabilityBadge } from './AvailabilityBadge.jsx';

export function ProductCard({
  name, href = '#', image, code, price, availability, availabilityState = 'zelena',
  rating, ratingCount, flags, shortDescription, layout = 'grid',
  canBuy = true, onBuy, className = '',
}) {
  const cls = [
    'ProductView', 'v1a', 'v1', 'bs-view', 'dcon', 'dc000',
    canBuy ? 'canBuy' : 'empty',
    layout === 'row' ? 'big' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <div className={cls} data-name="Product">
      <a className="image" href={href}>
        {flags && flags.length > 0 && <ProductFlags flags={flags} look="B" />}
        <img className="mainImage" src={image} alt={name} loading="lazy" />
      </a>
      <dc-con class="dcHeader">
        {code && <span className="code">{code}</span>}
        <a className="name" href={href}>{name}</a>
        {shortDescription && layout === 'row' && (
          <p className="shortDescription">{shortDescription}</p>
        )}
        {rating != null && <Rating value={rating} count={ratingCount} />}
      </dc-con>
      <dc-con class="dcPrice">
        {price}
        {availability && (
          <AvailabilityBadge state={availabilityState}>{availability}</AvailabilityBadge>
        )}
      </dc-con>
      <dc-con class="dcContent">
        <div className="AddToCartView v3a v3 bs-view dcon dc000">
          <button type="button" className="button buy" aria-label="Vložit do košíku" onClick={onBuy}>
            <Icon name="shopping-cart" size={2} />
          </button>
        </div>
      </dc-con>
    </div>
  );
}
