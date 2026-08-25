import React from 'react';

export function Select({ label, hint, options = [], id, className = '', ...rest }) {
  return (
    <div className={['formRow', className].filter(Boolean).join(' ')}>
      {label && <label className="label" htmlFor={id}>{label}</label>}
      <select className="select" id={id} {...rest}>
        {options.map((o) => {
          const value = typeof o === 'string' ? o : o.value;
          const text = typeof o === 'string' ? o : o.label;
          return <option key={value} value={value}>{text}</option>;
        })}
      </select>
      {hint && <span className="shortDescription">{hint}</span>}
    </div>
  );
}
