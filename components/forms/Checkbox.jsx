import React from 'react';

export function Checkbox({ label, count, type = 'checkbox', disabled = false, className = '', ...rest }) {
  const cls = ['formRow', 'inline', disabled ? 'disabled' : '', className].filter(Boolean).join(' ');
  return (
    <label className={cls}>
      <input className={type === 'radio' ? 'radio' : 'checkBox'} type={type} disabled={disabled} {...rest} />
      <span className="label">{label}</span>
      {count != null && <span className="value">{count}</span>}
    </label>
  );
}
