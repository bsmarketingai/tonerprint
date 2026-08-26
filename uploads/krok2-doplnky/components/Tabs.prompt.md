Taby na detailu produktu — popis, parametry, hodnocení, doprava.

```jsx
<Tabs tabs={['Popis', 'Parametry', { label: 'Hodnocení', count: 38 }]} value={tab} onChange={setTab}>
  <ProductDescription />
  <ParameterTable rows={rows} />
  <Reviews />
</Tabs>
```

Nejvýš pět tabů. Šestý znamená, že obsah patří na samostatnou stránku.
