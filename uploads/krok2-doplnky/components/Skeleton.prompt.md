Zástupný obrys během načítání.

```jsx
<div className="productHolder">
  {Array.from({ length: 4 }, (_, i) => <ProductCardSkeleton key={i} />)}
</div>
```

Skeleton musí mít rozměry cílového obsahu, aby se po načtení nic neposunulo. Nepoužívej spinner tam, kde znáš tvar výsledku.
