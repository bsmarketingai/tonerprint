import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Button({
  children, variant = 'a1', size = 'default', icon, iconRight,
  fullWidth = false, loading = false, disabled = false,
  className = '', ...rest
}) {
  const cls = [
    'button',
    variant !== 'a1' ? variant : '',
    size !== 'default' ? size : '',
    !children ? 'empty' : '',
    loading ? 'inactive' : '',
    className,
  ].filter(Boolean).join(' ');
  const icoSize = size === 'big' ? 3 : 2;
  return (
    <button
      type="button"
      className={cls}
      disabled={disabled || loading}
      style={fullWidth ? { width: '100%' } : undefined}
      {...rest}
    >
      {loading && <Icon name="loader-2" size={icoSize} className="loader" />}
      {!loading && icon && <Icon name={icon} size={icoSize} />}
      {children}
      {iconRight && <Icon name={iconRight} size={icoSize} />}
    </button>
  );
}
