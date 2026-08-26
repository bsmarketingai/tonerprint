# TonerPrint — design systém

Design systém pro eshop **TonerPrint** — tonery, náplně a kancelářská technika.
Postavený nad platformou **BS Shop**, jejíž názvosloví tříd je závazné.

**Zdroj pravdy je tento projekt.** Tokeny, CSS a komponenty žijí tady — v `ds/`
a `komponenty/`. Žádný jiný, napojený ani externí design systém se nehledá,
nekontroluje se proti němu a nic se z něj nepřebírá; neexistuje nadřazený zdroj,
ke kterému by se cokoli dorovnávalo nebo synchronizovalo. Co chybí nebo je nejasné,
se rozhodne tady, nebo zůstane v **Otevřených bodech** — nikdy se to nedoplní
odkazem či kopií odjinud.

Zákazníci jsou ze dvou světů: domácnost, která jednou za rok shání náplň do
tiskárny podle kódu na kazetě, a firma, škola nebo úřad, které objednávají
pravidelně, na fakturu a potřebují ceny bez DPH. Systém obsluhuje oba, aniž by
jeden z nich obtěžoval.

---

## Index

| Kde | Co tam je |
| --- | --- |
| `ds/styles.css` | **Vstupní bod.** Stránky i komponenty linkují jen tenhle soubor. Obsahuje pouze `@import`. |
| `ds/tokens/` | Proměnné — barvy, typografie, spacing, radiusy, bordery, stíny, ikony, layout, komponentové tokeny |
| `ds/css/` | Styly komponent podle názvosloví BS Shopu — reset, primitiva, globální, produktové, kategorie, detail, formuláře, homepage |
| `ds/assets/` | Ikonový sprite, logo, loga dopravců a plateb, produktové a kategoriové fotky |
| `komponenty/` | Komponenty stránek ve skupinách `global`, `navigation`, `product`, `overlay`, `home`, `detail` |
| `design-system.dc.html` | Přehled: tokeny, komponenty a jejich stavy, stažení tokenů jako CSS, stažení ikon jako ZIP, Otevřené body |
| `index.dc.html` · `vypis-kategorie.dc.html` · `detail-produktu.dc.html` | Tři obrazovky eshopu — skládají se z komponent |

---

## Zdroje

- **Platforma:** BS Shop. Tokeny vycházejí z produkčního `variables.css`; serverové
  funkce (`AdjustLigtnessHex`, `HighestLightnessDistance`, `GetLabL`, `IfGe`) jsou
  rozpuštěné do statických hodnot, protože v prohlížeči nefungují. U každé odvozené
  barvy je v komentáři původní výraz.
- **Značka:** logo TonerPrint (čtyři tečky + wordmark) jako PNG na bílém podkladu —
  `ds/assets/brand/logo-tonerprint.png`. Jiná varianta neexistuje; logo se nepřekresluje
  do SVG ani nesází z písma. Na tmavém podkladu jde na bílou plotnu se zaoblením.
- **Ikony:** kurátorská sada z knihovny Tabler dodaná zadavatelem, doplněná o vlastní
  `ai-search`.
- **Fotografie:** 59 produktových fotek + 9 detailních fotek referenčního produktu
  (skartovačka AT-13C) z webu tonerprint.cz.

---

## Content fundamentals

**Mluvíme jako člověk za pultem, ne jako marketing.** Věcně, konkrétně, bez
superlativů. Zákazník řeší, jestli náplň sedne do jeho tiskárny a kdy přijde —
ne jak jsme skvělí.

- **Vykání, první osoba množného čísla.** „Objednáte-li do 14:00, odesíláme ještě dnes."
  Ne „Objednávky přijaté do 14:00 jsou expedovány týž den."
- **Konkrétní čísla místo přídavných jmen.** „Skladem 18 ks" ne „Ihned k odeslání".
  „1 000 stran při 5% pokrytí" ne „Vysoká výtěžnost".
- **Věta smí mít názor.** „Vyrábíme z nových komponent, ne z repasovaných kazet —
  proto dáváme dvouletou záruku." Pomlčka je povolená, závorka většinou ne.
- **Žádné vykřičníky, žádná emoji.** Jediná výjimka je matematické znaménko
  ve slevě: „Akce −18 %" (skutečné minus U+2212, ne spojovník).
- **České typografické konvence.** Mezera jako oddělovač tisíců (2 490,00 Kč),
  desetinná čárka, měna za číslem, nezlomitelná mezera po jednopísmenných
  předložkách. Rozsahy pomlčkou: „12.–14. 9.", „400–800".
- **Chyby říkají, co dělat.** „IČO musí mít 8 číslic." Ne „Neplatná hodnota."
- **Prázdné stavy nabízejí cestu ven.** „Tomuto filtru neodpovídá žádný produkt.
  Zkuste zrušit některé filtry." + tlačítko, které to udělá.
- **Velká písmena jen na začátku věty.** Žádný Title Case, žádné KAPITÁLKY —
  s jedinou výjimkou produktových vlajek, kde je verzálka daná tokenem
  `--flag-text-transform`.

Tón napříč rolemi: modrá informuje, zelená potvrzuje, žlutá upozorňuje,
červená zastavuje. Barva nikdy nenese sdělení sama — každý stav má i text a ikonu.

---

## Visual foundations

### Barvy

Šest rolí po devíti stupních, každá odvozená z jednoho seedu. Stupeň 500 je seed.

| Role | Seed | K čemu |
| --- | --- | --- |
| `main` | `#0065FC` | Nosná barva rozhraní. 500 je CTA, 600 hover, 900 (navy z loga) horní pruh a patička. |
| `primary` | `#E30613` | Slevy, „Akce %", destruktivní akce. **Nikdy jako druhé CTA.** |
| `neutral` | `#737373` | Text, rámečky, podklady. 900 je základní barva textu. |
| `secondary` | `#598896` | Tiché pásy, statistiky, splátky. 500 nesmí nést text (kontrast 3.90). |
| `success` | `#0B834B` | Dostupnost, potvrzení. |
| `warning` | `#FDAC00` | Žlutá z loga. **Na text jedině 700** — 500 a 600 mají kontrast pod 3. |

Maximálně dvě barvy pozadí na obrazovku: `--bg-color` (plocha) a
`--bg-view-color` (karty a panely). Barevný podklad má jen horní pruh, patička
a stavové panely.

### Typografie

**Figtree**, jediné písmo, váhy 400–800, subset `latin-ext` povinný.
Geometricko-humanistický grotesk s vysokou střední výškou — čitelný v 11 px
u kódů náplní i v 48 px v nadpisu.

- 400 běžný text · 600 popisky a názvy produktů · 700 tlačítka · 800 nadpisy a ceny
- Nadpisy `line-height: 1.15`, text `1.45`
- Základ rozhraní je 14 px, nikdy níž než 11 px

### Prostor a tvar

Spacery jsou pojmenované hodnotou v px (`--spacer-16` = 16px) — mezi 32 a 64 se
neinterpoluje. Radiusy: 4 px drobnosti, 6 px pole a tlačítka, 8 px karty a panely,
16 px popup, `--radius-pill` pilulky a vyhledávání.

**Redesign je plochý.** Stín je funkční signál výšky, ne dekorace:
`--shadow-2` na hover karty, `--shadow-3` na plovoucí panely, `--shadow-4` na
popup a drawer. Nikdy stín na statickou kartu v klidu.

Rámečky jsou 1px `--color-neutral-200`. Karty se od plochy oddělují bílou,
ne rámečkem — rámeček dostávají jen interaktivní pole.

### Pohyb

Střídmý a krátký. Drawer a popup 240 ms `ease`, overlay 200 ms, hover barvy
150 ms. Žádné bounce, žádné parallaxy, žádné vstupní animace obsahu — zákazník
přišel koupit náplň, ne se dívat.

Hover: tmavší odstín u plných tlačítek (500 → 600), světlý podklad u ghost.
Focus: `--focus-ring` (3px `--color-main-200`), nikdy `outline: none` bez náhrady.
Aktivní stav se neřeší zmenšením.

### Fotografie

Produktové výřezy na bílé; karty na ně používají `mix-blend-mode: multiply`,
aby se podklad slil. Detail blend vypíná, protože dodaná sada míchá produktové
fotky s ilustračními v interiéru. Poměr stran vždy 1 : 1, `object-fit: contain`.

### Layout

Obsah je vycentrovaný na **1560 px** (`--eshop-width`), plocha okolo jde do 1920 px.
Mřížka výpisu: 2 sloupce na xs/s, 3 od m, 4 od xl, 5 od xxl — počet rozhoduje pásmo,
ne volba na stránce. Kontejner výpisu potřebuje kromě `max-width` i `width: 100 %`,
jinak se jako flex položka scvrkne na obsah.
Breakpointy jsou dané BS Shopem a **vlastní se nezavádějí**:

`xs 0–419 · s 420–549 · m 550–819 · l 820–999 · xl 1000–1149 · xxl 1150–1439 · xxxl 1440+`

Filtry jsou drawer, ne sloupec — obsah proto drží plnou šířku na všech pásmech.

### Přístupnost

Dotykový cíl 44 px (`--btn-min-height`). Jediná výjimka je `button.small`
(32 px) v husté liště — nikdy pro nákupní akci. Kontrast běžného textu min. 4.5;
u každého odstínu je v `tokens/colors.css` poměr v komentáři.

---

## Ikonografie

**Tabler Icons**, stroke 2, zaoblené konce, mřížka 24 × 24. Kurátorská sada
157 symbolů žije v jednom sprite `assets/icons/tp-icons.svg` — žádné jednotlivé
soubory, žádná ikonová fontová sada, žádné emoji.

```html
<script src="assets/icons/sprite.js"></script>
<svg class="icon ico2"><use href="#tp-shopping-cart"></use></svg>
```

Velikosti: `ico1` 8 · `ico2` 16 (v tlačítkách a řádcích textu) · `ico3` 24
(výchozí) · `ico4` 32 (prázdné stavy). Barvu ikona dědí přes `currentColor` —
nikdy se nenastavuje na ikoně samotné.

**Loga značek stojí mimo sprite.** Dopravci (`assets/doprava/`) a platební
metody (`assets/platby/`) jsou barevná SVG cizích značek: nepřebarvují se,
nedávají do koleček ani na barevný podklad, drží původní proporce.

### Intentional additions

- **`Icon`** — obal nad `<use>`; sada sama komponentu nedefinuje, ale bez ní by
  každé použití opakovalo stejné čtyři řádky a velikostní třídu by šlo splést.
- **`ViewTypeSelectorView` styl** — přepínač dlaždice/řádky existoval v HTML,
  ale bez CSS. Doplněno v `css/category.css`.

---

## Komponenty

| Skupina | Komponenty |
| --- | --- |
| `global` | `HeaderView` (hledání, našeptávač, „Rychlý nákup“, košík, panely), `UserContentPanelView`, `FooterView` |
| `navigation` | `MenuView` (+ mega-menu), `BreadcrumbView`, `SimpleFilterView`, `CompoundPagingView`, `CategoryTextView` |
| `product` | `ProductView` (dlaždice), `ProductViewBig` (řádek = `ProductView.big` v `.ProductsView.custom1`) |
| `overlay` | `FilterView` |
| `home` | `HeroBannerView`, `PromoTilesView`, `SituationsView`, `StatsBarView`, `HomeAsideView` |
| `detail` | `ProductDetailImageView`, `ProductDescriptionView`, `ProductDetailTableView`, `AddToCartView`, `AvailabilityPanelView`, `ProductIdentityView`, `ProductActionPanelView`, `TabsProductDetailMasterView` |

Komponenty **nenesou vlastní vizuál** — skládají třídy BS Shopu, které definuje `ds/css/`.
Vlastní `<style>` v komponentě je vždy jen náplast s komentářem `CHYBÍ V DS` /
`CHYBA V DS`, nebo obcházení runtime (obal importu, cesty k assetům).

Markup i texty jsou v komponentách, aby úprava přes komentář padla do komponenty,
ne na stránku. Stránka předává jen data, která se mezi stránkami liší, a callbacky.

### Co je závazné a co ne

**Struktura a názvy tříd jsou závazné.** BS Shop je generuje serverově; přejmenování
rozbije šablonu. `ProductView`, `dc-con.dcPrice`, `cs_zelena`, `bs-priceLayout` —
tohle se nemění.

**Vizuál je volný.** Barvy, mezery, radiusy, stíny se řídí tokeny a dají se ladit
beze změny HTML.

**K ověření s BS Shopem:** název view pro panel filtrů (navrhujeme `FilterView` /
`ProductFilter`) a modifikátor `sale` pro červenou položku „Akce %" v liště
kategorií. Struktura ani vizuál se tím nezmění, jen třída.

---

## Co ještě chybí

- **Originální SVG loga** v obou variantách (na světlém a na navy). Wordmark je
  zatím vysazený z Figtree ExtraBold — písmo v logu má vlastní kresbu.
- **Sociální ikony** pro patičku: Facebook, Instagram, YouTube, LinkedIn.
- **Mobilní hero** 750 × 620 px.
- **Velké produktové fotky.** Katalog má fotky kolem 200 px; na kartách stačí,
  na detailu ne. Devět velkých fotek existuje jen u referenčního produktu.
