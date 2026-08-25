Notifikace nad obsahem — potvrzení, varování, chyba.

```jsx
<Notification tone="zelena" caption="Objednávka odeslána" onClose={dismiss}>
  Číslo objednávky 2026-004821. Potvrzení jsme poslali na váš e-mail.
</Notification>
```

Vždy s nadpisem: barva sama sdělení nenese. Ikona se odvozuje z tónu automaticky.
