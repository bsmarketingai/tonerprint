Zaškrtávátko nebo přepínač — nativní prvek s accent-color, ne vlastní kresba.

```jsx
<Checkbox label="Skladem" count={1204} defaultChecked />
<Checkbox type="radio" name="pay" label="Na fakturu (14 dnů)" />
```

Ve filtrech vždy s count. Možnost s nulou patří jako disabled, ne skrytá — uživatel má vidět, že existuje.
