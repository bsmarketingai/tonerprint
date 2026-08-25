import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Header({ logo, searchPlaceholder = 'Hledejte podle názvu nebo kódu', cartCount = 0, onMenu, className = '' }) {
  const cls = ['HeaderView', 'v1a', 'v1', 'bs-view', 'dcon', 'dc000', className].filter(Boolean).join(' ');
  return (
    <header className={cls}>
      <dc-con class="dcContent">
        <button type="button" className="button menuButton" aria-label="Menu" onClick={onMenu}>
          <Icon name="menu-2" size={3} />
        </button>
        <a className="logo" href="/">{logo}</a>
        <div className="SimpleSearchView v1a v1 bs-view dcon dc000">
          <input className="textBox" type="search" placeholder={searchPlaceholder} aria-label="Hledat" />
          <button type="button" className="button search" aria-label="Hledat">
            <Icon name="search" size={2} />
          </button>
        </div>
        <dc-con class="dcHeader">
          <div className="LoginUserView v1a v1 bs-view dcon dc000">
            <a href="/prihlaseni"><Icon name="user" size={3} /><span className="name">Přihlásit</span></a>
          </div>
          <div className="BasketPanelView v1a v1 bs-view dcon dc000">
            <a href="/kosik">
              <Icon name="shopping-cart" size={3} />
              {cartCount > 0 && <span className="basketCount">{cartCount}</span>}
            </a>
          </div>
        </dc-con>
      </dc-con>
    </header>
  );
}
