import React from 'react';

/* Ikona ze sprite assets/icons/tp-icons.svg.
   Sprite musí být vložený do dokumentu (viz readme, sekce Ikonografie). */
export function Icon({ name, size = 3, className = '', ...rest }) {
  const cls = ['icon', size ? 'ico' + size : '', className].filter(Boolean).join(' ');
  return (
    <svg className={cls} aria-hidden="true" {...rest}>
      <use href={'#tp-' + name} />
    </svg>
  );
}
