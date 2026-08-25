Tlačítko systému — jedna primární akce na obrazovku, zbytek sekundární nebo ghost.

```jsx
<Button icon="shopping-cart" onClick={addToCart}>Vložit do košíku</Button>
<Button variant="a2">Nákupní rádci</Button>
<Button variant="a3" size="small">Zobrazit více</Button>
<Button variant="a4" icon="trash">Odebrat</Button>
<Button icon="filter" aria-label="Filtry" />
```

Bez children se tlačítko stane čtvercovým ikonovým — vždy mu dej aria-label. size="small" (32 px) je výjimka z pravidla 44px dotykového cíle: jen pro nepodstatné akce v husté liště, nikdy pro „Koupit" nebo „Odeslat". Funkční třídu BS Shopu (buy, search, toggle) předávej přes className.
