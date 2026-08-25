Prázdný stav — nic nenalezeno, prázdný košík, žádné objednávky.

```jsx
<EmptyState
  icon="package-off"
  caption="Nic jsme nenašli"
  action={<Button variant="a2" icon="filter-x">Zrušit filtry</Button>}
>
  Tomuto filtru neodpovídá žádný produkt.
</EmptyState>
```

Vždy s akcí, která stav řeší. Prázdný stav bez cesty ven je chyba návrhu.
