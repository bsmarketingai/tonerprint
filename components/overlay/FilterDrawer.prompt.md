Filtry výpisu. Vždy drawer zleva přes overlay — nikdy sloupec v layoutu.

```jsx
<FilterDrawer open={open} onClose={close} count={2} resultLabel="Zobrazit 842 produktů" onReset={reset}>
  <FilterGroup label="Výrobce">
    <Checkbox label="HP" count={842} defaultChecked />
    <Checkbox label="Canon" count={613} />
  </FilterGroup>
  <FilterGroup label="Typ náplně" collapsed>
    <Checkbox label="Originální" count={402} />
  </FilterGroup>
</FilterDrawer>
```

Pod pásmem m zabírá celý displej. Hlavička s křížkem i spodní lišta s CTA jsou lepivé, takže cesta zpět k produktům je na dosah i uprostřed dlouhého seznamu. Zavírá se křížkem, overlayem i klávesou Esc; pozadí se zamkne proti rolování.
