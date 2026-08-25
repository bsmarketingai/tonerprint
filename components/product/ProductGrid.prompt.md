Mřížka produktů, volitelně s hlavičkou sekce a odkazem "Zobrazit vše".

```jsx
<ProductGrid caption="Nejprodávanější tonery" captionIcon="flame" readMore="Zobrazit vše" columns={4}>
  {products.map(p => <ProductCard key={p.code} {...p} />)}
</ProductGrid>
```

Sloupce se samy redukují na užších pásmech (4 → 3 → 2), nezasahuj do toho. variant="carousel" pro doporučené produkty na homepage.
