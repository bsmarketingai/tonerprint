Číselník množství. V systému existuje jen tenhle jeden — nezakládej druhou variantu.

```jsx
<Quantity value={qty} onChange={setQty} units="ks" />
```

Skrytý span.ghost drží šířku pole podle počtu číslic, takže se layout při přechodu z 9 na 10 neposune.
