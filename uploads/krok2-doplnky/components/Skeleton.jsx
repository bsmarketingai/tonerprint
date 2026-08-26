import React from 'react';

export function Skeleton({ variant, width, height, className = '' }) {
  const cls = ['skeleton', variant || '', className].filter(Boolean).join(' ');
  return <span className={cls} style={{ width, height }} />;
}

export function ProductCardSkeleton() {
  return (
    <div className="ProductView v1a v1 bs-view dcon dc000 inactive">
      <Skeleton variant="image" />
      <Skeleton variant="name" />
      <Skeleton variant="short" />
      <Skeleton variant="price" />
    </div>
  );
}
