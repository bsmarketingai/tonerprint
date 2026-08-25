Modální okno. Používej střídmě — jen když akce vyžaduje rozhodnutí.

```jsx
<Popup open={open} onClose={close} caption="Dotaz k produktu"
  actions={<><Button variant="a2" onClick={close}>Zrušit</Button><Button onClick={send}>Odeslat</Button></>}>
  <TextField id="q" label="Váš dotaz" multiline required />
</Popup>
```

Nikdy pro potvrzení vložení do košíku — od toho je efekt na kartě. Zavírá se křížkem, overlayem i Esc.
