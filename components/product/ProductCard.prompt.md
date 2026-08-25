Produktová karta. Základní jednotka homepage, výpisu i carouselu.

```jsx
<ProductCard
  name="Skartovačka papíru AT-13C, 13 listů"
  image="assets/detail/at13c-1.jpg"
  code="125127"
  price={<Price vat="2 490,00 Kč" novat="2 057,85 Kč" />}
  availability="Skladem 18 ks"
  rating={4.6}
  ratingCount={38}
  flags={[{ label: 'Akce −18 %', tone: 'flag01' }]}
/>
```

Název se zalamuje na dvě řádky a karta si drží minimální výšku, aby ceny v mřížce seděly na jedné lince. layout="row" přepne kartu do řádku pro ViewTypeSelector.
