# UI kit — Eshop TonerPrint

Dvě reálné obrazovky poskládané výhradně z komponent systému. Slouží jako
referenční složení, ne jako přehlídka dílů: co v nich není, do produkce
nepatří bez rozmyslu.

| Soubor | Obrazovka | Co ukazuje |
| --- | --- | --- |
| `index.html` | Výpis kategorie | Horní pruh, hlavička, drobečky, řazení, přepínač zobrazení, mřížka 4 sloupců, stránkování, drawer filtrů, patička |
| `detail.html` | Detail produktu | Galerie s devíti fotkami, rozhodovací blok (cena → košík → dostupnost → splátky → akce), taby, modální dotaz, výběr dopravy |

## Co v nich funguje

Obě stránky jsou klikací bez frameworku — jen pár řádků obsluhy událostí:

- **Výpis** — tlačítko Filtry otevře drawer, zavírá se křížkem, overlayem i Esc.
- **Detail** — náhledy i šipky přepínají hlavní fotku, taby přepínají obsah,
  tlačítko Dotaz otevře modál.

## Referenční produkt

Detail stojí na skartovačce **AT-13C, 13 listů (kód 125127)** — jediném
produktu, ke kterému máme devět fotek. Zbytek katalogu má jednu fotku na
produkt, takže galerii na nich nelze poctivě ukázat.

## Pozor při kopírování

Fotky v `assets/produkty/` mají kolem 200 px. Na kartách stačí, na detailu
už ne — proto detail používá `assets/detail/`. Než se kit použije jako
základ produkční stránky, je potřeba vyřešit velikosti fotek u celého
katalogu.
