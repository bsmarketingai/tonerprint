# TonerPrint.cz — konvence projektu

> **Handoff (8. 10. 2026).** Projekt se přenáší 1:1 na nový firemní účet přes Git.
> Tento soubor je jediný kontext, který nový účet dostane — čti ho celý před první
> úpravou. Nic se nepřestavuje, nepřejmenovává ani „nevylepšuje“; pokračuje se tam,
> kde práce skončila. Viz sekce **Převzetí na nový účet** na konci.

## Co to je
Redesign e-shopu **TonerPrint.cz** (tonery, náplně, kancelářská technika) nad
platformou **BS Shop**. Výstupem jsou tři obrazovky (homepage, výpis kategorie,
detail produktu) složené z komponent, design systém (`ds/`) a deník úprav pro klienta.
Zákazníci: domácnost (náplň podle kódu na kazetě) i firma/škola/úřad (pravidelně,
na fakturu, ceny bez DPH). Jazyk projektu i komunikace se zadavatelem je **čeština**.
Zadavatel chce stručné, věcné odpovědi bez zbytečného vysvětlování.

## Zdroj pravdy je tento projekt. Natrvalo.
Tokeny, CSS a komponenty žijí **jen tady**: `ds/` (tokeny + CSS) a `komponenty/`
(komponenty stránek). Žádný jiný, napojený ani externí design systém se nehledá,
nekontroluje se proti němu a nic se z něj nepřebírá — ani teď, ani později.
I kdyby byl v organizaci (nebo na novém účtu) k dispozici jiný design systém, tenhle
projekt ho ignoruje; neexistuje pro něj „nadřazený zdroj“, ke kterému by se něco
dorovnávalo nebo synchronizovalo. Výchozí design systém účtu se **nepřipojuje**.

Když něco chybí nebo je nejasné, řeší se to **tady** — buď rozhodnutím, které přijde
od zadavatele, nebo zápisem do **Otevřených bodů**. Nikdy odkazem nebo kopií odjinud.

## Vizuál se nedomýšlí
Když pravidlo v `ds/` není, nesmí se doplnit „jak by to asi mělo být“ bez záznamu.
Zásah do vzhledu na stránce nebo v komponentě je dočasná náplast s komentářem
`CHYBÍ V DS` / `CHYBA V DS` a řádkem v seznamu **Chybí v DS**, který se vypisuje
na konci práce (a doplňuje do `zadani-doplneni-DS.md`). Jakmile je rozhodnutí,
náplast se překlopí do `ds/` a ze stránky i z komentáře zmizí.

Pravidla obsahu a vizuálu (tón, barvy, typografie, prostor, ikony, pohyb, fotky)
jsou v `readme.md` — závazné, číst před každou vizuální úpravou. Klíčové:
- Písmo **Figtree** (jediné), barvy jen z tokenů `ds/tokens/colors.css`.
- Ceny v **celých korunách** (`2 490 Kč`), desetinná čárka jen u jednotkových údajů.
- Prodejna: **Drozdovice 1200/31a, 796 01 Prostějov, Po–Pá 8:00–16:00** (ne Brno, ne 16:30).
- Vykání, žádné vykřičníky ani emoji (výjimka: 🎉 v `InfoBarView` je zadání klienta).
- Logo jen jako PNG `ds/assets/brand/logo-tonerprint.png`, nepřekreslovat.
- Ikony jen ze spritu `ds/assets/icons/tp-icons.svg` (`<use href="#tp-…">`), velikosti `ico1–ico4`.

## Komponenty jsou zdroj pravdy pro stránky
`index.dc.html`, `vypis-kategorie.dc.html` a `detail-produktu.dc.html` stránky jen
**skládají** přes `dc-import` (např. `<dc-import name="komponenty/global/HeaderView" …>`).
Markup i texty jsou v komponentách, aby úprava přes komentář v náhledu padla do
komponenty, ne na stránku. Stránka předává jen data, která se mezi stránkami liší,
a callbacky.

Komponenty **nenesou vlastní vizuál** — skládají třídy BS Shopu definované v `ds/css/`.
Vlastní `<style>` v helmetu komponenty je vždy jen náplast (`CHYBÍ V DS` / `CHYBA V DS`)
nebo obcházení runtime.

Tři technická omezení runtime, která tvar určila:

1. **`dc-import` neumí vnořovat.** Komponenta nemůže importovat komponentu — proto je
   hlavička jeden celek (hledání, našeptávač, „Rychlý nákup“, košík, oba panely jsou
   její stavy) a proto shell karuselu, mřížka výpisu a `._activeFilters` zůstávají na
   stránkách: hostí importy `ProductView`.
2. **Obal importu má vlastní výšku.** Přilepená hlavička, lišta kategorií ani karta
   v karuselu by v něm nedostaly rozměr z DS — obal se proto vyřazuje z layoutu
   (`.sc-host:has(&gt; …) { display: contents }`). Je to obcházení runtime, ne DS.
3. **Relativní cesty se řeší proti stránce, ne proti komponentě.** Fotky se píšou jako
   `data-src="ds/…"` a skutečné `src` doplní komponenta po mountu podle hloubky
   dokumentu (`hydrateImages`). Šablonová hole v `src` se během streamu vyžádá jako
   literální URL a zůstane v konzoli jako chyba — proto se tam nedává. Styly DS se
   nelinkují v helmetu, komponenta si je doplní jen když chybí. Úzké komponenty mají
   strop šířky jen jako kořen dokumentu (`body &gt; #dc-root &gt; .sc-host &gt; …`).

**Page-level náplast s `&gt;` kombinátorem proti bloku, který je dnes komponenta,
je mrtvá.** Náplast patří do komponenty a bez `&gt;`.

4. **Otevřená stránka si drží styl komponenty z předchozího mountu.** Po úpravě
   `&lt;style&gt;` v komponentě je potřeba stránce dát hard reload, jinak platí staré
   pravidlo — měření v běžícím náhledu může lhát.
5. **Media query v helmetu komponenty se přebíjí pořadím.** Když má jedno pravidlo
   platit napříč pásmy, je bezpečnější jeden strop přes `min()`/`max()`/`clamp()`
   než sada media queries.
6. **Flex položka s pouhým `max-width` se scvrkne na obsah.** Kontejnery jako
   `.ProductsMasterView` potřebují i `width: 100 %`, jinak výpis nedrží šířku obsahu.

### Kostra logiky komponenty (drž ji při nových komponentách)
Každá komponenta v `komponenty/<skupina>/` má v logice stejné pomocníky — zkopíruj je
z existující komponenty (např. `komponenty/global/InfoBarView.dc.html`), nevymýšlej:
- `standalone` — `location.pathname.includes('/komponenty/')` (otevřená samostatně).
- `dsPrefix()` — `'../../'` samostatně, jinak `''`.
- `ensureDsAssets()` — doplní `<link href="…ds/styles.css">` a `ds/assets/icons/sprite.js`,
  jen když na stránce chybí.
- `syncCustomElementClasses()` — `dc-con` dostává `className` jako atribut `classname`;
  přepisuje se na `class`, aby platily selektory BS Shopu (`dc-con.dcPrice` apod.).
- `hydrateImages()` (komponenty s fotkami) — `data-src` → `src` s prefixem.
- Volá se v `componentDidMount` / `componentDidUpdate`.
Každá podsložka `komponenty/*/` má vlastní `support.js` (runtime, needitovat, negenerovat ručně).

Soubory `komponenty/*.dc.html` v kořeni složky (malá písmena, např. `cena.dc.html`,
`productview.dc.html`) jsou **specimeny / stránky přehledu DS** pro `design-system.dc.html`,
ne komponenty stránek.

## C-edit
Zkratka: **úpravu proveď v komponentě, ne na stránce.** Platí i bez ní — komponenty
jsou zdroj pravdy — ale když ji napíšeš, znamená to „tohle nesmí skončit jako
page-level override“.

## Karta produktu má dvě podoby
- `komponenty/product/ProductView` — dlaždice do mřížky (`.ProductsView.columns5`).
- `komponenty/product/ProductViewBig` — řádková karta: v BS Shopu to není samostatné
  view, je to `ProductView` s modifikátorem `big` v seznamu `.ProductsView.custom1`
  (přepínač `ViewTypeSelectorView`, volba `custom1`). Vlastní soubor má proto, že
  struktura řádku je jiná — vlajky v řádku pod nadpisem, dostupnost u názvu, ceny
  a nákup v pravém sloupci. Výpis přepíná mezi nimi `sc-if` podle `isRows`.

Rozvržení řádkové karty má jen dvě podoby, nic mezi tím: **do m** je karta
jednosloupcová, cenový blok drží celý řádek (`grid-column: 1 / -1`), ceny jdou do
krajů a nákup pod nimi taky; **od l** má cenový sloupec, ceny stojí pod sebou u jeho
pravé hrany a nákup pod nimi. Fotka je do pásma s poloviční (48 px).

Karty tonerů mají variantu **P2**: řádky typ / výtěžnost / kompatibilita místo
krátkého popisu (`.ProductView .parameters`, náplast CHYBÍ V DS).

## Mřížka výpisu
Počet sloupců rozhoduje pásmo, ne tweak: 2 na xs/s, 3 od m, **4 od xl**, **5 od xxl**.
Výpis je natvrdo `columns5`. Obsah je široký **1560 px** (`--eshop-width`),
plocha okolo do 1920 px. Filtry jsou drawer (`overlay/FilterView`), ne sloupec.

## Názvosloví BS Shopu je závazné
Struktura a názvy tříd i views generuje BS Shop serverově — `ProductView`,
`dc-con.dcPrice`, `cs_zelena`, `bs-priceLayout` se nepřejmenovávají, nepřidávají se
BEM ani utility prefixy. Breakpointy jsou dané BS Shopem a vlastní se nezavádějí:
`xs 0–419 · s 420–549 · m 550–819 · l 820–999 · xl 1000–1149 · xxl 1150–1439 · xxxl 1440+`.
Vizuál (barvy, mezery, radiusy, stíny) je volný a řídí se tokeny.

Nové bloky, které BS Shop nezná, mají prefix `_` (`._infoBar`, `._aboutView`,
`._aiHelpView`, `._categorySeoBlock`, `._activeFilters`) — tak to má BS Shop
pro vlastní bloky.

## Přihlášení má jediný spouštěč
`._quickBuy` v liště nástrojů hlavičky se jmenuje **Přihlášení** a otevírá
`LoginPopupView` (`._headerPopup` v nositeli `.LoginUserView`). Třída zůstává
`_quickBuy` (názvosloví BS Shopu). V tmavém horním pruhu **odkaz na přihlášení není**
a v hlavičce se nepřidává žádné další tlačítko „Přihlásit“.

## Hlavička
Přilepená hlavička + lišta kategorií (`._menuWrap`) zůstávají nahoře (ROZHODNUTO).
Třídu `fixed` nasazuje logika podle `window.scrollY > header.offsetTop + 4` s hysterezí
(**ne** IntersectionObserver na `headerFixPivot` — bliká). Výška se přeměřuje přes
`ResizeObserver` a plní `--tp-header-h`. Detaily v `zadani-doplneni-DS.md` § 1.

## Deník úprav
`denik-uprav.dc.html` (HTML v designu webu, tokeny z `ds/`) se vede **automaticky** při každé práci:
- Nahoře sekce **K upřesnění s klientem** — otázky a věci k vysvětlení. Vyřešené body mazat.
- Pod ní dny chronologicky, **nejnovější nahoře** (nadpis `## D. M. RRRR`), uvnitř
  podle oblasti. Každá úprava, kterou má klient vidět nebo potvrdit, jako řádek
  **Předtím** | **Teď** (kopírovat existující řádek, držet stejný markup).
- Nejspodnější sekce **Před prvními úpravami** je výchozí stav před začátkem úprav
  s klientem (24. 9. 2026) — nemění se, nové dny se přidávají nad ni.
- Počet v pilulce „N otevřených“ držet podle počtu bodů k upřesnění.
- Interní technické změny (náplasti runtime, refaktor bez dopadu na vzhled) se nepíšou.
- Pokyn **„zapiš do DU“** = doplň do deníku, co v něm chybí.

## Kde co je
- `index.dc.html` — homepage, `vypis-kategorie.dc.html` — výpis kategorie,
  `detail-produktu.dc.html` — detail produktu.
- `denik-uprav.dc.html` — deník úprav pro klienta (viz výše).
- `design-system.dc.html` — přehled design systému: tokeny, komponenty a jejich stavy,
  stažení tokenů jako CSS, stažení ikon jako ZIP, Otevřené body.
- `komponenty/` — komponenty ve skupinách:
  - `global`: `InfoBarView`, `UserContentPanelView` (tmavý horní pruh), `HeaderView`, `FooterView`
  - `navigation`: `MenuView`, `BreadcrumbView`, `SimpleFilterView`, `CompoundPagingView`,
    `CategoryTextView`, `CategoryFaqView`, `CategorySeoView`, `AiHelpView`
  - `product`: `ProductView`, `ProductViewBig`
  - `overlay`: `FilterView`
  - `home`: `HeroBannerView`, `PromoTilesView`, `SituationsView`, `StatsBarView`,
    `HomeAsideView`, `AboutView`
  - `detail`: `ProductDetailImageView`, `ProductIdentityView`, `ProductDescriptionView`,
    `ProductDetailTableView`, `AddToCartView`, `AvailabilityPanelView`,
    `ProductActionPanelView`, `TabsProductDetailMasterView`
  Jeden soubor = jedna komponenta, otevíratelná i samostatně.
- `ds/` — tokeny (`ds/tokens/`), CSS (`ds/css/`), assety (`ds/assets/`). Vstupní bod
  `ds/styles.css` (jen `@import`). **Edituje se tady**, je to zdroj pravdy.
- `readme.md` — pravidla design systému (obsah, barvy, typografie, prostor, ikony).
- `zadani-doplneni-DS.md` (+ `zadani-doplneni-DS-homepage.md`) — otevřené body
  a nahlášené mezery v `ds/`.
- `support.js` (kořen i podsložky) — runtime, needitovat.

### Historické a pracovní soubory — needitovat, neodkazovat
- `assets/`, `components/`, `css/`, `tokens/`, `guidelines/`, `ui_kits/`, `styles.css`,
  `styleguide-shell.css`, `SKILL.md` v kořeni — **starší podoba DS kitu** z doby před
  přesunem do `ds/`. Nové soubory na ně neodkazují; platí jen `ds/`. Zmínky
  v `zadani-doplneni-DS.md` o `components/…`, `ui_kits/…`, `guidelines/…` jsou
  historické. Nemazat bez souhlasu zadavatele.
- `_tmp-*.txt`, `_tmp-*.json`, `bp-demo.html`, `screenshots/` — pracovní pomůcky.
- `uploads/` — podklady od zadavatele (fotky kategorií, screenshoty, export stránky
  tonerprint.cz). Jen číst; do designu se kopírují do `ds/assets/…`.
- `PROMPT-novy-projekt.md` — zadání pro založení projektu.

## Rozpracované k převzetí
- **Horní pruh (`UserContentPanelView`) — hranice dopravy zdarma.** V náhledu je
  1 500 Kč; padl návrh sjednotit na 5 000 Kč ve všech místech, kde se používá.
  **Nepotvrzeno zadavatelem** — neměnit, dokud nepřijde odpověď; mezitím držet jako
  bod v „K upřesnění s klientem“ v deníku.
- Ostatní otevřené body: `denik-uprav.dc.html` (K upřesnění) a `zadani-doplneni-DS.md`.

## Převzetí na nový účet
1. Naklonuj repozitář do projektu **beze změn** — struktura složek a názvy souborů
   musí zůstat 1:1 (cesty v `dc-import` a `data-src` jsou relativní ke kořeni).
2. **Nepřipojuj** výchozí ani jiný design systém účtu (viz „Zdroj pravdy“).
3. Otevři `index.dc.html`, `vypis-kategorie.dc.html`, `detail-produktu.dc.html`,
   `denik-uprav.dc.html` a `design-system.dc.html`; zkontroluj, že se načtou styly
   (`ds/styles.css`), ikony (sprite) a fotky. Když fotky chybí, je to cesta, ne DS.
4. Ověř, že konzole nehlásí chybějící soubory; `support.js` musí být v kořeni
   i v každé `komponenty/*/`.
5. Nic nepřestavuj ani nepřejmenovávej. První zápis do deníku je až s první
   skutečnou úpravou pro klienta.
6. Na konci každé práce vypiš seznam **Chybí v DS** (pokud vznikla nová náplast)
   a doplň deník.
