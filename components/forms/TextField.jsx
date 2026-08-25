import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function TextField({
  label, hint, error, required = false, multiline = false,
  id, disabled = false, className = '', ...rest
}) {
  const cls = ['formRow', error ? 'empty' : '', disabled ? 'disabled' : '', className]
    .filter(Boolean).join(' ');
  const Field = multiline ? 'textarea' : 'input';
  return (
    <div className={cls}>
      {label && (
        <label className="label" htmlFor={id}>
          {label} {required && <span className="value">*</span>}
        </label>
      )}
      <Field className={multiline ? 'textArea' : 'textBox'} id={id} disabled={disabled} {...rest} />
      {error && (
        <span className="shortDescription">
          <Icon name="alert-circle" size={2} />{error}
        </span>
      )}
      {!error && hint && <span className="shortDescription">{hint}</span>}
    </div>
  );
}
