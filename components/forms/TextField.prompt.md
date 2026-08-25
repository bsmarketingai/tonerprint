Textové pole s popiskem, nápovědou a chybou — nikdy jen samotný input.

```jsx
<TextField id="ico" label="IČO" required error="IČO musí mít 8 číslic." defaultValue="1234" />
<TextField id="note" label="Poznámka" multiline hint="Poznámka se propíše na fakturu." />
```

Chyba se hlásí textem, ne jen červeným rámečkem. Povinnost značí hvězdička, ne barva.
