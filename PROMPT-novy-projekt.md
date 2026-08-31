# Zadání nového projektu — eshopový design systém TonerPrint (BS Shop)

> Tenhle soubor je **kompletní vstupní prompt**. Vlož ho do nového, prázdného projektu
> jako první zprávu (nebo ho ulož jako `CLAUDE.md` + pošli odkaz na něj). Popisuje
> **co postavit, v jakém pořadí, podle jakých pravidel** a **co teprve dorazí od zadavatele**.
> Nic z něj se nemá „domýšlet jinak“ — když něco chybí, zapíše se to do backlogu, ne
> se to vymyslí potichu.

---

## 0. Shrnutí v pěti větách

Postav design systém a tři referenční obrazovky eshopu **TonerPrint** (tonery, náplně
a kancelářská technika) nad platformou **BS Shop**, jejíž názvosloví HTML tříd je závazné.
Systém má **jeden zdroj pravdy uvnitř projektu**: tokeny a CSS v `ds/`, komponenty
v `komponenty/`. Stránky nic nestylují — jen skládají komponenty. Součástí dodávky je
**dashboard design systému** s přehledem tokenů, komponent, jejich stavů a **backlogem
otevřených bodů**. Barvy a fotografie dodá zadavatel později — do té doby se pracuje
s dočasnou paletou a placeholdery, ale **architektura tokenů musí být hotová**, aby
výměna barev byla změna hodnot, ne přepis CSS.

---

## 1. Produkt a publikum

Eshop prodává tonery, inkoustové náplně, tiskárny a kancelářskou techniku.

Dva typy zákazníků, oba obsluhovat rovnocenně, ani jeden neobtěžovat tím druhým:

- **Domácnost** — jednou za rok hledá náplň podle kódu na kazetě. Potřebuje jistotu,
  že náplň sedne do její tiskárny, cenu s DPH a datum doručení.
- **Firma, škola, úřad** — objednává pravidelně, na fakturu, potřebuje **ceny bez DPH**,
  historii objednávek a nákup podle kódu bez proklikávání katalogu.

Z toho plyne pár nepřekročitelných věcí: **vyhledávání a našeptávač jsou hlavní
navigace**, ne dekorace v hlavičce; přepínač DPH je systémové nastavení, ne filtr;
dostupnost a termín odeslání jsou stejně důležité jako cena.

---

## 2. Technický rámec a jeho důsledky (přečíst dřív, než se cokoli napíše)

Projekt běží nad runtime **Design Components** (`.dc.html`). Pět omezení, která určila
tvar celého projektu — nejsou to preference, jsou to naměřená fakta:

1. **`dc-import` neumí vnořovat.** Komponenta nesmí importovat komponentu. Proto je
   **hlavička jeden celek** (vyhledávání, našeptávač, přihlášení, košík i oba
   vysouvací panely jsou její stavy) a proto shell karuselu, mřížka výpisu a pás
   aktivních filtrů zůstávají na stránkách — hostí importy karet.
2. **Obal importu má vlastní výšku.** Přilepená hlavička, lišta kategorií ani karta
   v karuselu by v něm nedostaly rozměr z DS. Obal se vyřazuje z layoutu:
   `.sc-host:has(> …) { display: contents }`. Je to obcházení runtime, ne pravidlo DS —
   vždy okomentovat.
3. **Relativní cesty se řeší proti stránce, ne proti komponentě.** Fotky se píšou jako
   `data-src="ds/…"` a skutečné `src` doplní komponenta po mountu podle hloubky
   dokumentu (helper `hydrateImages`). **Šablonová hole v `src` se během streamu
   vyžádá jako literální URL a zůstane v konzoli jako chyba** — tam se nikdy nedává.
   Styly DS se nelinkují v helmetu; komponenta si je doplní jen když chybí.
4. **Otevřená stránka si drží styl komponenty z předchozího mountu.** Po úpravě
   `<style>` v komponentě je nutný hard reload — měření v běžícím náhledu jinak lže.
5. **Media query v helmetu komponenty se přebíjí pořadím.** Když má pravidlo platit
   napříč pásmy, je bezpečnější jeden strop přes `min()` / `max()` / `clamp()` než sada
   media queries.

Navíc: **flex položka s pouhým `max-width` se scvrkne na obsah** — kontejnery výpisu
potřebují i `width: 100%`.

---

## 3. Zdroj pravdy — pravidlo, které se neporušuje

**Tokeny, CSS a komponenty žijí jen v tomto projektu.** Žádný jiný, napojený ani
externí design systém se nehledá, nekontroluje se proti němu a nic se z něj nepřebírá.
Neexistuje „nadřazený zdroj“, ke kterému by se cokoli dorovnávalo nebo synchronizovalo.

Když něco chybí nebo je nejasné, řeší se to **tady**: buď rozhodnutím zadavatele, nebo
zápisem do **backlogu otevřených bodů**. Nikdy odkazem nebo kopií odjinud.

### Vizuál se nedomýšlí

Když pravidlo v `ds/` není, nesmí se doplnit „jak by to asi mělo být“ bez záznamu.
Zásah do vzhledu na stránce nebo v komponentě je **dočasná náplast** s komentářem
`CHYBÍ V DS` (pravidlo neexistuje) nebo `CHYBA V DS` (pravidlo existuje a je špatně),
plus řádek v backlogu. Jakmile padne rozhodnutí, náplast se překlopí do `ds/`
a ze stránky i z komentáře zmizí.

### C-edit

Zkratka pro „**úpravu proveď v komponentě, ne na stránce**“. Platí i bez ní —
komponenty jsou zdroj pravdy — ale když ji zadavatel napíše, znamená to
„tohle nesmí skončit jako page-level override“.

Page-level náplast s `>` kombinátorem proti bloku, který je dnes komponenta, je mrtvá:
náplast patří do komponenty a bez `>`.

---

## 4. Struktura projektu

```
ds/
  styles.css              vstupní bod — jen @import, nic jiného
  tokens/                 colors · typography · fonts · spacing · radii
                          borders · shadows · icons · layout · components
  css/                    base · primitives · global · product · category
                          detail · forms · home        (názvosloví BS Shopu)
  assets/                 icons (sprite) · brand · doprava · platby
                          produkty · kategorie
komponenty/
  global/                 HeaderView · UserContentPanelView · FooterView
  navigation/             MenuView · BreadcrumbView · SimpleFilterView
                          CompoundPagingView · CategoryTextView
  product/                ProductView · ProductViewBig
  overlay/                FilterView
  home/                   HeroBannerView · PromoTilesView · SituationsView
                          StatsBarView · HomeAsideView
  detail/                 ProductDetailImageView · ProductDescriptionView
                          ProductDetailTableView · AddToCartView
                          AvailabilityPanelView · ProductIdentityView
                          ProductActionPanelView · TabsProductDetailMasterView
index.dc.html             homepage
vypis-kategorie.dc.html   výpis kategorie
detail-produktu.dc.html   detail produktu
design-system.dc.html     dashboard DS — tokeny, komponenty, stavy, backlog
readme.md                 pravidla DS (obsah, barvy, typografie, prostor, ikony)
backlog.md                otevřené body a nahlášené mezery v ds/
CLAUDE.md                 konvence projektu (zkrácená verze tohoto souboru)
```

Jeden soubor = jedna komponenta, otevíratelná i samostatně (pro náhled a review).

Komponenty **nenesou vlastní vizuál** — skládají třídy BS Shopu, které definuje `ds/css/`.
Vlastní `<style>` v komponentě je vždy jen náplast s komentářem, nebo obcházení runtime.
Markup i **texty** jsou v komponentách, aby úprava přes komentář v náhledu padla do
komponenty, ne na stránku. Stránka předává jen data, která se mezi stránkami liší,
a callbacky.

---

## 5. Názvosloví BS Shopu je závazné

Strukturu a názvy tříd i views generuje BS Shop serverově. **Přejmenování rozbije
šablonu.** `ProductView`, `dc-con.dcPrice`, `cs_zelena`, `bs-priceLayout`,
`ActionIconsView`, `SearchWhispererView`, `LoginPopupView`, `BasketProductsPopupView` —
tohle se nemění, nepřidávají se BEM ani utility prefixy, nezavádí se vlastní jmenná
konvence.

**Vizuál je naopak volný.** Barvy, mezery, radiusy, stíny se řídí tokeny a dají se
ladit beze změny HTML. To je celý smysl rozdělení: HTML patří platformě, vzhled patří
design systému.

Když je název view nejistý, označ ho v backlogu jako **K OVĚŘENÍ S BS SHOPEM** a používej
navrhovaný název dál — struktura ani vizuál se ověřením nezmění, jen třída.

---

## 6. Breakpointy — dané, vlastní se nezavádějí

```
xs   0–419
s    420–549
m    550–819
l    820–999
xl   1000–1149
xxl  1150–1439
xxxl 1440+
```

Žádné jiné zlomy. Když návrh potřebuje zlom mezi pásmy, je to signál, že je špatně
navržený, ne že chybí breakpoint.

**Mřížka výpisu produktů**: 2 sloupce na xs/s, 3 od m, **4 od xl**, **5 od xxl**.
Počet rozhoduje pásmo, ne volba na stránce ani tweak.

**Layout**: obsah je vycentrovaný na **1560 px** (`--eshop-width`), plocha okolo jde
do **1920 px** (`--eshop-width-outer`). Filtry jsou **drawer, ne sloupec** — obsah proto
drží plnou šířku na všech pásmech.

---

## 7. Tokeny — architektura (barvy dorazí později)

Vstupní bod `ds/styles.css` obsahuje **jen `@import`**. Deset souborů tokenů:

| Soubor | Obsah |
| --- | --- |
| `colors.css` | šest rolí × devět stupňů + sémantické aliasy |
| `typography.css` | velikosti, váhy, line-heighty, letter-spacing |
| `fonts.css` | `@font-face` / `<link>`, rodiny |
| `spacing.css` | `--spacer-N` pojmenované hodnotou v px |
| `radii.css` | `--radius-N`, `--radius-pill`, `--radius-circle` |
| `borders.css` | šířky a barvy rámečků, `--focus-ring` |
| `shadows.css` | `--shadow-0` až `--shadow-4` |
| `icons.css` | velikostní třídy `ico1`–`ico4` |
| `layout.css` | šířky, gapy, výšky hlavičky, z-index hladiny |
| `components.css` | komponentové tokeny (tlačítka, vlajky, pole, karty) |

### Barvy — struktura teď, hodnoty později

**Šest rolí po devíti stupních** (100–900), každá odvozená z jednoho seedu; stupeň 500
je seed.

| Role | K čemu | Poznámka |
| --- | --- | --- |
| `main` | nosná barva rozhraní, CTA (500), hover (600), horní pruh a patička (900) | |
| `primary` | slevy, „Akce %“, destruktivní akce | **nikdy jako druhé CTA** |
| `neutral` | text, rámečky, podklady; 900 je základní barva textu | |
| `secondary` | tiché pásy, statistiky, splátky | 500 nemusí unést text — ověřit kontrast |
| `success` | dostupnost, potvrzení | |
| `warning` | upozornění | žluté odstíny často neunesou text — ověřit |

**Pravidla, která platí bez ohledu na to, jaké hodnoty dorazí:**

- Maximálně **dvě barvy pozadí na obrazovku**: `--bg-color` (plocha) a `--bg-view-color`
  (karty a panely). Barevný podklad má jen horní pruh, patička a stavové panely.
- **U každého odstínu je v komentáři kontrastní poměr.** Odstíny pod 4.5 se nesmí
  použít na běžný text; pod 3.0 ani na velký text a ikony.
- **Barva nikdy nenese sdělení sama** — každý stav má i text a ikonu.
  Tón napříč rolemi: modrá informuje, zelená potvrzuje, žlutá upozorňuje,
  červená zastavuje.
- Pokud platforma odvozuje odstíny serverovými funkcemi, **rozpustí se do statických
  hodnot** (v prohlížeči nefungují) a původní výraz zůstane v komentáři.

> **Dokud barvy nedorazí:** postav plnou devítistupňovou strukturu s dočasnými, zjevně
> provizorními hodnotami a zapiš do backlogu řádek `ČEKÁ NA DODÁNÍ — barvy`.
> Výměna pak musí být změna šesti seedů a přepočet stupňů, nic víc.

### Typografie

Jedno písmo pro celé rozhraní, váhy 400–800, **subset `latin-ext` povinný** (české
diakritice se nic neodpouští). Grotesk s vysokou střední výškou — musí být čitelný
v 11 px u kódů náplní i v 48 px v nadpisu.

- 400 běžný text · 600 popisky a názvy produktů · 700 tlačítka · 800 nadpisy a ceny
- nadpisy `line-height: 1.15`, text `1.45`
- základ rozhraní **14 px**, nikdy níž než **11 px**

### Prostor, tvar, pohyb

- Spacery pojmenované hodnotou v px (`--spacer-16` = 16px); mezi 32 a 64 se neinterpoluje.
- Radiusy: **4** drobnosti · **6** pole a tlačítka · **8** karty a panely · **16** popup ·
  `--radius-pill` pilulky a vyhledávání.
- **Redesign je plochý.** Stín je funkční signál výšky, ne dekorace: `--shadow-2` hover
  karty, `--shadow-3` plovoucí panely, `--shadow-4` popup a drawer.
  **Nikdy stín na statickou kartu v klidu.**
- Rámečky 1 px `--color-neutral-200`. Karty se od plochy oddělují **bílou, ne rámečkem** —
  rámeček dostávají jen interaktivní pole.
- Pohyb střídmý: drawer a popup 240 ms `ease`, overlay 200 ms, hover barvy 150 ms.
  Žádné bounce, parallax ani vstupní animace obsahu.
- Hover: tmavší odstín u plných tlačítek (500 → 600), světlý podklad u ghost.
  Focus: `--focus-ring`, nikdy `outline: none` bez náhrady. Aktivní stav se neřeší zmenšením.

### Přístupnost

Dotykový cíl **44 px** (`--btn-min-height`). Jediná výjimka `button.small` (32 px)
v husté liště — **nikdy pro nákupní akci**. Kontrast běžného textu min. 4.5.

---

## 8. Ikonografie

Jedna kurátorská sada, stroke 2, zaoblené konce, mřížka 24 × 24, **jeden sprite**
`ds/assets/icons/*.svg` — žádné jednotlivé soubory, žádná ikonová fontová sada,
žádná emoji.

```html
<svg class="icon ico2"><use href="#tp-shopping-cart"></use></svg>
```

Velikosti: `ico1` 8 · `ico2` 16 (v tlačítkách a řádcích textu) · `ico3` 24 (výchozí) ·
`ico4` 32 (prázdné stavy). Barvu ikona dědí přes `currentColor` — nikdy se nenastavuje
na ikoně samotné. **Výjimka: velké nákupní CTA má ikonu `ico3`.**

**Loga značek stojí mimo sprite.** Dopravci a platební metody jsou barevná SVG cizích
značek: nepřebarvují se, nedávají do koleček ani na barevný podklad, drží původní proporce.

Pomocná komponenta `Icon` (obal nad `<use>`) se vytvoří vždy — bez ní každé použití
opakuje čtyři řádky a velikostní třídu jde splést.

---

## 9. Content fundamentals

**Mluvíme jako člověk za pultem, ne jako marketing.** Věcně, konkrétně, bez superlativů.
Zákazník řeší, jestli náplň sedne do jeho tiskárny a kdy přijde — ne jak jsme skvělí.

- **Vykání, první osoba množného čísla.** „Objednáte-li do 14:00, odesíláme ještě dnes.“
- **Konkrétní čísla místo přídavných jmen.** „Skladem 18 ks“, ne „Ihned k odeslání“.
  „1 000 stran při 5% pokrytí“, ne „Vysoká výtěžnost“.
- **Věta smí mít názor.** Pomlčka povolená, závorka většinou ne.
- **Žádné vykřičníky, žádná emoji.** Jediná výjimka je matematické minus ve slevě:
  „Akce −18 %“ (U+2212, ne spojovník).
- **České typografické konvence.** Mezera jako oddělovač tisíců, desetinná čárka, měna
  za číslem, nezlomitelná mezera po jednopísmenných předložkách, rozsahy pomlčkou.
- **Ceny v celých korunách bez haléřů** — `106 Kč`, `2 490 Kč`. Desetinná čárka patří
  jen jednotkovým údajům (cena za stranu 0,42 Kč). Helper
  `formatPrice(n) = Math.round(n).toLocaleString('cs-CZ') + ' Kč'`.
- **Chyby říkají, co dělat.** „IČO musí mít 8 číslic.“, ne „Neplatná hodnota.“
- **Prázdné stavy nabízejí cestu ven.** „Tomuto filtru neodpovídá žádný produkt.
  Zkuste zrušit některé filtry.“ + tlačítko, které to udělá.
- **Velká písmena jen na začátku věty.** Žádný Title Case, žádné KAPITÁLKY.

---

## 10. Komponenty — co postavit

### `global`
- **`HeaderView`** — jeden celek, protože import neumí vnořovat: logo, vyhledávání
  s našeptávačem (`SearchWhispererView`), přihlášení (`._quickBuy`), košík, panel košíku
  (`BasketProductsPopupView`), panel přihlášení (`LoginPopupView`), tmavý horní pruh.
- **`UserContentPanelView`** — obsah tmavého horního pruhu (kontakt, doprava, výhody).
  Odkaz na přihlášení sem nepatří — jediný spouštěč je `._quickBuy` v hlavičce.
- **`FooterView`** — sloupce odkazů, loga dopravců a plateb, spodní pruh
  (copyright · claim · madeBy + odkaz na cookies; texty vlevo, loga vpravo).

### `navigation`
- **`MenuView`** — přilepená lišta kategorií pod hlavičkou + mega-menu.
- **`BreadcrumbView`**, **`CategoryTextView`** (rozbalovací text kategorie
  s podtitulem), **`SimpleFilterView`** (lišta řazení + přepínač zobrazení
  + tlačítko filtrů), **`CompoundPagingView`** (dobrání i skok na stránku),
  **`ViewTypeSelector`**, **`SubcategoryTileGrid`** (řádkové dlaždice podkategorií).

Sada řazení, kterou eshop používá: **Nejprodávanější · Od nejlevnějšího ·
Od nejdražšího · Nejnovější**.

### `product`
- **`ProductView`** — dlaždice do mřížky (`.ProductsView.columns5`).
- **`ProductViewBig`** — řádková karta. V BS Shopu to není samostatné view: je to
  `ProductView` s modifikátorem `big` v seznamu `.ProductsView.custom1` (přepínač
  `ViewTypeSelectorView`, volba `custom1`). Vlastní soubor má proto, že struktura řádku
  je jiná — vlajky v řádku pod nadpisem, dostupnost u názvu, ceny a nákup v pravém sloupci.

  Rozvržení řádkové karty má **jen dvě podoby, nic mezi tím**: *do m* jednosloupcová,
  cenový blok drží celý řádek (`grid-column: 1 / -1`), ceny do krajů, nákup pod nimi;
  *od l* cenový sloupec, ceny pod sebou u jeho pravé hrany, nákup pod nimi.
  Fotka je do pásma s poloviční (48 px).

- Součásti karty: vlajky (`ActionIconsView`), dostupnost, cena a přeškrtnutá cena,
  hvězdičkové hodnocení, číselník množství, ikonové i textové CTA.

### `overlay`
- **`FilterView`** — filtry jako drawer (min. 360 px kvůli patičce se dvěma tlačítky),
  overlay, skupiny filtrů, patička „Zrušit filtry“ + „Zobrazit N produktů“.
- **`ActiveFilters`** — pás zapnutých filtrů nad výpisem: popisek, chip
  „Skupina: hodnota“ s křížkem, poslední chip „Zrušit všechny filtry“ v červené.
  Bez zapnutých filtrů se nerenderuje.

### `home`
- **`HeroBannerView`** (se stropem plochy `--eshop-width-outer`), **`PromoTilesView`**,
  **`SituationsView`**, **`StatsBarView`**, **`HomeAsideView`**, **`ProductCarouselView`**
  (jediná karuselová varianta i mimo homepage — používá ji i detail produktu).

### `detail`
- **`ProductDetailImageView`** (galerie: fotky se přepínají třídou `hidden` nad staticky
  vypsanými `img`, dynamické `src` z proměnné nikdy),
  **`ProductIdentityView`** (tichý identifikační pás Kód · PN · EAN · Výrobce · Záruka,
  12 px, bez dělících linek), **`AvailabilityPanelView`**, **`ProductActionPanelView`**
  (cena, číselník, CTA), **`AddToCartView`**, **`ProductDescriptionView`**,
  **`ProductDetailTableView`** (parametry, výchozí **jeden sloupec**),
  **`TabsProductDetailMasterView`** (taby jsou nadpisy sekcí — 16 px bold, ne tiché odkazy).

### Sdílená primitiva
Tlačítka (velikosti a stavy), formulářová pole, číselník množství, cena, vlajky
a stavové třídy, hvězdičkové hodnocení, taby, notifikace a prázdné stavy, skeleton,
cookie lišta, newsletter s GDPR souhlasem.

**Číselník množství** má známou past: obal `span.value` kolem inputu a jednotky, jinak
se dvojice číslo + jednotka nedá vycentrovat. Šířka pole podle počtu číslic (`Nch`),
žádné `min-width` na inputu, jednotka má písmo čísla (ne 12px muted popisek).

---

## 11. Přihlášení má jediný spouštěč

Tlačítko `._quickBuy` v liště nástrojů hlavičky se jmenuje **Přihlášení** a otevírá
`LoginPopupView` (`._headerPopup` v nositeli `.LoginUserView`). Třída zůstává
`_quickBuy` — je z názvosloví BS Shopu a nepřejmenovává se.
**V tmavém horním pruhu odkaz na přihlášení není** a v hlavičce se nepřidává žádné
další tlačítko „Přihlásit“.

Nositel musí mít výšku řádku hlavičky. Pod 550 px je panel přes celou obrazovku
(`position: fixed; inset: 0`), stejně jako panel košíku.

---

## 12. Přilepená hlavička — udělat správně napoprvé

Tohle byl v předchozí verzi projektu největší dluh. Zapsat rovnou do komponenty:

- Třídu `fixed` **nasazuje komponenta hlavičky sama**, není to úkol stránky.
- **Nesledovat potomka hlavičky IntersectionObserverem.** Jakmile se hlavička přilepí,
  přitáhne si pivot zpátky do viewportu, observer ohlásí „viditelný“, hlavička se
  odlepí — a bliká v nekonečné smyčce (naměřeno: 2 přepnutí za 1,4 s při konstantním
  scrollu). Funkční řešení: `window.scrollY > header.offsetTop + 4` s malou hysterezí.
- **Výška hlavičky se musí přeměřovat.** Styly i logo dojdou po mountu; jedno měření
  po mountu dá výšku nestylované hlavičky (naměřeno 1 599 px místo 84 px).
  `ResizeObserver` na hlavičku + `load` + `document.fonts.ready`.
- **S hlavičkou zůstává přilepená i lišta kategorií** (`top: var(--tp-header-h)`),
  aby zákazník našel menu i uprostřed dlouhé stránky. Výška hlavičky patří do tokenu.
- **Hladiny:** přilepená hlavička zakládá stacking kontext — panely našeptávače, košíku
  a přihlášení musí být nad lištou kategorií, lišta pod hlavičkou. Vyřešit v tokenech
  z-indexů, ne ad hoc.
- Do dokumentace hlavičky poznámka: pokud má hostitelská stránka `html, body`
  nebo obal `height: 100%`, sticky se odlepí po výšce okna — patří tam
  `height: auto; min-height: 100%`.

---

## 13. Tři obrazovky

Stránky **jen skládají** komponenty přes `dc-import` a předávají data a callbacky.

1. **`index.dc.html` — homepage.** Hero, promo dlaždice, karusel produktů, situační
   bloky („Hledám podle tiskárny“ / „Nakupuji na firmu“), pás statistik, aside, patička.
2. **`vypis-kategorie.dc.html` — výpis kategorie.** Breadcrumb, H1, podtitul, rozbalovací
   text kategorie, dlaždice podkategorií, lišta řazení + přepínač dlaždice/řádky,
   pás aktivních filtrů, mřížka (`columns5`) nebo řádky, stránkování, drawer filtrů.
3. **`detail-produktu.dc.html` — detail produktu.** Tři samostatné bloky s `--section-gap`:
   sestava (galerie + identita + cena + dostupnost + nákup), karusel souvisejících,
   taby (Popis · Parametry · Ke stažení · Hodnocení).

Obal detailu je vlastní view (`ProductDetailView`), ne obal výpisu — výpis má
`--eshop-gap`, detail `--section-gap`.

---

## 14. Dashboard design systému (`design-system.dc.html`)

Jedna stránka, která je zároveň dokumentace i řídicí panel. Sekce:

1. **Přehled** — co systém je, na čem stojí, kde je zdroj pravdy, datum poslední změny.
2. **Tokeny** — barvy (všech šest rolí × devět stupňů, u každého odstínu hex
   a **kontrastní poměr**), typografie (živý vzorník velikostí a vah), spacing, radiusy,
   bordery, stíny, layout, z-index hladiny. Každý token s názvem proměnné ke zkopírování.
3. **Ikony** — celý sprite v mřížce, filtr podle názvu, klik zkopíruje `<use>`.
   Stažení jako ZIP.
4. **Komponenty a jejich stavy** — každá komponenta v živém náhledu se všemi stavy
   (výchozí, hover, focus, disabled, loading, prázdný, chybový). Odkaz na soubor.
5. **Breakpointy** — vizualizace sedmi pásem a toho, co se v nich mění (sloupce mřížky,
   podoba řádkové karty, chování hlavičky, panel přihlášení).
6. **Backlog otevřených bodů** — viz níž. **Tohle je nejdůležitější část stránky**,
   ne appendix.
7. **Export** — stažení tokenů jako CSS, stažení ikon jako ZIP.

### Backlog — jak má fungovat

Backlog je **strukturovaný seznam**, ne volný text. Každá položka má:

| Pole | Hodnoty |
| --- | --- |
| **ID** | `DS-001`, průběžně |
| **Typ** | `CHYBÍ V DS` · `CHYBA V DS` · `K OVĚŘENÍ S BS SHOPEM` · `ČEKÁ NA DODÁNÍ` |
| **Oblast** | tokeny · hlavička · výpis · detail · karta · overlay · obsah · assety |
| **Popis** | co je špatně nebo chybí, **měřitelně** — čísla, ne dojmy |
| **Dopad** | kde všude se to dnes obchází náplastí (seznam souborů) |
| **Návrh** | konkrétní hodnota nebo pravidlo, které to vyřeší |
| **Stav** | `otevřeno` · `rozhodnuto` · `hotovo` |

Na dashboardu se zobrazuje jako **filtrovatelná tabulka** s počty podle typu a stavu
v hlavičce (kolik je otevřeno, kolik čeká na rozhodnutí zadavatele, kolik na dodání
podkladů). Rozhodnuté body zůstávají v seznamu se stavem `rozhodnuto`, dokud se
náplast nepřeklopí do `ds/` — pak přecházejí do `hotovo` a sbalí se.

Zdroj je `backlog.md` v kořeni (aby šel číst i mimo náhled); dashboard ho zobrazuje.

**Na konci každé práce se vypisuje seznam nových položek backlogu** — co jsem musel
zalepit a proč. Bez toho práce není hotová.

---

## 15. Co dodá zadavatel později

Postav všechno tak, aby dodání bylo **výměna hodnot a souborů, ne přepis kódu**.
Každou z těchto položek založ v backlogu jako `ČEKÁ NA DODÁNÍ`.

- **Barvy** — šest seedů. Do té doby dočasná paleta se stejnou strukturou
  (šest rolí × devět stupňů) a s poznámkou v komentáři, že jsou provizorní.
- **Logo** — ve dvou variantách (na světlém a na tmavém podkladu). Logo se
  **nepřekresluje do SVG ani nesází z písma**. Do dodání placeholder s poměrem stran
  z tokenu `--logo-width` / `--logo-height`.
- **Fotografie** — produktové výřezy na bílé (karty na ně používají
  `mix-blend-mode: multiply`, aby se podklad slil; detail blend vypíná), poměr stran
  vždy 1 : 1, `object-fit: contain`. Do dodání pruhované placeholdery s monospace
  popiskem, co tam patří. **Velké fotky pro detail** jsou samostatná položka —
  katalogové fotky kolem 200 px na detail nestačí.
- **Hero** — desktop i mobilní varianta, obě s uvedeným rozměrem.
- **Sociální ikony** pro patičku.
- **Fakta o firmě** — adresa prodejny, otevírací doba, kontakty. Do dodání zjevný
  placeholder, ne vymyšlená adresa.
- **Ikonová sada** — pokud dorazí kurátorský výběr, nahradí prozatímní sadu;
  sprite a názvosloví `#tp-*` zůstávají.

Vlajka: `mix-blend-mode` fotky se nesmí přenášet na vlajky nad ní — vlajkám patří
`z-index: 1; isolation: isolate`, jinak fotka vlajku ztmaví a zprůhlední.

---

## 16. Postup prací

1. **Založ kostru** — `ds/styles.css` s importy, prázdné soubory tokenů, `readme.md`,
   `backlog.md`, `CLAUDE.md`. Nic se nestylduje dřív, než existují tokeny.
2. **Tokeny** — všech deset souborů, plná struktura, provizorní barvy, u každého
   odstínu kontrastní poměr v komentáři.
3. **Primitiva** — `base.css`, `primitives.css`: reset, typografie, tlačítka, pole,
   ikony, cena, vlajky, stavy. K nim komponenty primitiv a jejich stavy.
4. **Dashboard DS** — hned, ne nakonec. Roste s tím, co přibývá, a je to místo,
   kde se výsledek kontroluje.
5. **Globální komponenty** — hlavička (včetně sticky chování a panelů), horní pruh,
   patička, lišta kategorií.
6. **Produktová karta** v obou podobách + mřížka a řádky.
7. **Výpis kategorie** — navigační komponenty, filtry, stránkování, celá stránka.
8. **Detail produktu** — galerie, identita, nákupní panel, taby, karusel, celá stránka.
9. **Homepage** — hero, promo, situace, statistiky, karusel, celá stránka.
10. **Průběžně**: každá náplast dostane komentář a řádek v backlogu; na konci každé
    dávky se backlog vypíše.

---

## 17. Kontrolní seznam kvality

Než se cokoli prohlásí za hotové:

- [ ] Žádná stránka nemá vlastní `<style>` s vizuálem — jen komponenty, a i tam jen
      okomentovaná náplast.
- [ ] Žádná nová třída mimo názvosloví BS Shopu.
- [ ] Žádný breakpoint mimo sedm daných pásem.
- [ ] Žádná barva, mezera, radius ani stín napsané natvrdo — vše přes token.
- [ ] Každý interaktivní prvek má hover, focus (`--focus-ring`) a disabled.
- [ ] Dotykové cíle 44 px (výjimka `button.small` 32 px, nikdy pro nákup).
- [ ] Ceny v celých korunách, české tisícové mezery, měna za číslem.
- [ ] Žádná emoji, žádné vykřičníky, žádný Title Case.
- [ ] Konzole je čistá — zvlášť žádné požadavky na literální `{{ }}` URL v `src`.
- [ ] Každá náplast má komentář `CHYBÍ V DS` / `CHYBA V DS` **a** řádek v backlogu.
- [ ] Backlog je vypsaný v závěrečné zprávě.
