import React from 'react';

export function Price({ vat, novat, original, units, size = 'primary', user = false, className = '' }) {
  return (
    <div className={['priceParts', className].filter(Boolean).join(' ')}>
      {original && <span className="value ghost">{original}</span>}
      {vat && (
        <span className={['price', 'bs-priceLayout', 'notranslate', 'vat', size, user ? 'user' : ''].filter(Boolean).join(' ')}>
          <span className="value">{vat}</span>
          <span className="vatText">s DPH</span>
        </span>
      )}
      {novat && (
        <span className="price bs-priceLayout notranslate novat secondary">
          <span className="value">{novat}</span>
          <span className="vatText">bez DPH</span>
        </span>
      )}
      {units && <span className="unitsDescription">{units}</span>}
    </div>
  );
}
