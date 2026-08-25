Jediný způsob, jak v systému vykreslit ikonu — obalí use do sprite a nastaví velikostní třídu.

```jsx
<Icon name="shopping-cart" size={2} />
```

Sprite assets/icons/tp-icons.svg musí být v dokumentu, jinak se ikona nevykreslí. Barvu ikona dědí přes currentColor, nikdy se nenastavuje na ikoně samotné. Velikost 3 (24 px) je výchozí; 2 (16 px) do tlačítek a řádků textu, 4 (32 px) do prázdných stavů.
