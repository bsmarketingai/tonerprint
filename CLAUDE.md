# TonerPrint.cz — konvence projektu

## „update DS“ (nebo „update z DS“)
Zkratka pro synchronizaci s design systémem. Znamená bez dalšího ptaní:

1. Překopírovat z DS projektu (`/projects/e44a329e-ed5e-465e-a62f-cec0ee134450/`)
   do lokální kopie `ds/`: `css/`, `tokens/`, `styles.css` (a `assets/` jen když
   se přidaly nové soubory, které stránka opravdu načítá).
2. Projít, co se v DS změnilo u bloků, které stránka používá, a dorovnat markup
   stránky podle aktuálních specimenů v `guidelines/` a kontraktů komponent
   v `components/` (např. nová `dc-con.dcFooter` s `._carouselNav` u karuselu,
   `aria-hidden="true"` na dekorativních ikonách podle `core/Icon.jsx`).
3. Zrušit v `index.dc.html` ty page-level overridy v `<style>`, které už DS řeší
   sám, a u zbylých nechat komentář `CHYBÍ V DS` / `CHYBA V DS` s důvodem.
4. Nakonec ověřit.
5. **Na konci vypsat do chatu „Chybí v DS“** — seznam míst, kde DS pravidlo chybí
   nebo je vadné, ať se to dá opravit ve zdroji. U každého: soubor a selektor v DS,
   co se děje na stránce, a jak to má být. Odpovídá to komentářům `CHYBÍ V DS` /
   `CHYBA V DS`, které v `index.dc.html` zůstaly. Když je seznam prázdný, napsat to.

Pokud má být update jen dílčí, píše se to za zkratku: „update DS: topbar“.

## Design systém je jediný zdroj pravdy
Vizuál se nedomýšlí. Když DS pravidlo nemá, nesmí se doplnit „jak by to asi mělo být“
bez toho, že se to nahlásí — jinak se stránka a DS rozejdou. Zásah do vzhledu na stránce
je vždy jen dočasná náplast s komentářem a záznamem v seznamu „Chybí v DS“.

## Přihlášení: „Rychlý nákup“ JE login
`._quickBuy` v hlavičce se jmenuje **Rychlý nákup**, ale je to **spouštěč přihlášení**.
Klik na něj — a stejně tak na odkaz **Přihlášení** v tmavém horním pruhu — otevře
`LoginPopupView` (`._headerPopup` v nositeli `.LoginUserView`). V hlavičce **není
žádné další tlačítko „Přihlásit“** a nikdy se tam nepřidává.

## Kde co je
- `index.dc.html` — homepage eshopu (Design Component).
- `vypis-kategorie.dc.html` — výpis kategorie, `detail-produktu.dc.html` — detail produktu.
- `zadani-doplneni-DS.md` — otevřené body pro design systém (chybí / chyba v DS).
- `ds/` — lokální kopie design systému. Ručně se needituje; opravy patří do DS
  projektu, na stránce se drží jako override s komentářem.
