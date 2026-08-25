# Zadání pro DS TonerPrint — výpis kategorie

Vzniklo při skládání stránky `vypis-kategorie.dc.html`. Každý bod je místo, kde DS pravidlo
chybí nebo je vadné a stránka drží dočasnou náplast s komentářem `CHYBÍ V DS` / `CHYBA V DS`.

---

## 1. Dlaždice podkategorií — přespecifikovat (hlavní bod)

Varianta `.FlatCategoriesRwdView.v5a` v `css/product.css` existuje, ale **nikde se nepoužívá
a nemá ani komponentu, ani specimen**. Reálný web (viz screenshot z tonerprint.cz) má
podkategorie jako **kompaktní řádkové odkazy, ne fotogalerii**: malý čtvercový náhled vlevo,
název, šipka vpravo, rámeček, výška jednoho řádku — v mřížce 5 na řádek, dva řádky pod sebou.
Současná `v5a` s poměrem 4 : 3 a fotkou přes celou šířku dlaždice je proti tomu 6× vyšší
a na kategorii se sedmi podkategoriemi sežere celou první obrazovku.

**Co udělat:**

- Přespecifikovat `v5a` na **řádkovou dlaždici**:
  - výška řádku `--btn-min-height` (44 px), `display: grid; grid-template-columns: auto minmax(0,1fr) auto`,
    `gap: var(--spacer-10)`, padding `var(--spacer-6) var(--spacer-10)`,
  - náhled 32 × 32 px, `object-fit: contain`, `mix-blend-mode: multiply` (fotky jsou výřezy na bílé),
  - název `--font-size-14` / `--font-weight-semibold`, počet produktů `.value` 12 px muted (volitelný),
  - vpravo `#tp-chevron-right` v `--color-neutral-400`,
  - rámeček 1px `--color-neutral-200`, radius `--border-4-radius-base`, podklad bílý,
  - hover: `border-color: var(--color-main-300)`, název `--color-main-700`, bez stínu (plochý redesign),
  - focus-visible: `--focus-ring`.
- Mřížka: použít existující `.FlatCategoriesRwdView .items` s `columns5` / `columns6`,
  gap `var(--spacer-8)` (ne `--eshop-gap`, řádky nemají být tak daleko od sebe).
- Rozhodnout, jestli fotka náhledu je povinná — pokud podkategorie obrázek nemá,
  má se řádek zúžit, nebo držet placeholder? (Preferuji: bez fotky se náhled vynechá,
  mřížka zůstane.)
- Doplnit **komponentu** `product/SubcategoryTileGrid` (+ `SubcategoryTile`) s kontraktem
  `{ name, href, image?, count?, }[]` a `columns`, s `class` na `dc-con` / `dc-root`
  podle konvence DS (React propisuje `class` na custom elementech 1 : 1).
- Doplnit **specimen** `guidelines/category-subcategories.html` (skupina „Eshop“) s oběma
  stavy: se počty a bez počtů, a s ukázkou dvouřádkové mřížky.
- **K ověření s BS Shopem:** jméno view. Pokud BS Shop generuje podkategorie jako
  `FlatCategoriesRwdView`, zůstat u něj a jen doplnit modifikátor; jinak navrhnout
  `SubCategoriesView`.
- Starou fotografickou podobu `v5a` neponechávat jako mrtvý kód — pokud ji chceme mít
  (např. pro rozcestník bez produktů), přeznačit na `v6a` a doplnit jí specimen.

## 2. Obal stránky kategorie

Homepage má `.HomeView` (rytmus `--section-gap`), kategorie nemá nic — stránka si drží
`.CategoryView { display: flex; flex-direction: column; gap: var(--eshop-gap); padding-bottom: var(--section-gap) }`
plus `._eshopWidth` z `css/home.css`. Patří do `css/category.css` (a `._eshopWidth`
vytáhnout z `home.css` do `css/global.css`, používá ho i kategorie).

## 2b. Rytmus uvnitř `dc-con.dcQuery`

`.ProductsMasterView > dc-con.dcQuery` má v `css/category.css` jen `min-width: 0`. Titulek,
text kategorie, dlaždice podkategorií a lišta řazení proto stojí na sobě bez jakékoli mezery —
jediné odsazení je `margin-top` u `.shortDescription`. Sousední `dc-con.dcContent` přitom
flex column s `gap: var(--eshop-gap)` má. Doplnit totéž i pro `dcQuery`.

## 3. Rozbalovací text kategorie

DS zná jen jednořádkový `.ProductsMasterView .shortDescription`. Reálná kategorie má
víceodstavcový SEO text, ve výchozím stavu zkrácený na tři řádky s přechodem do bílé
a tlačítkem „Zobrazit více / Zobrazit méně“. Na stránce je náplast `._categoryText`
(`.collapsed`, `mask-image`) a `._expandButton` — ten je v DS stylovaný jen uvnitř
`.FilterView`, mimo drawer nemá pravidlo. Doplnit blok do `css/category.css`
+ komponentu `feedback/ExpandableText` nebo `product/CategoryText` a specimen.

## 4. Jednotka v číselníku na kartě

`.AddToCartView .unitsDescription` je v DS popisek **pod** číselníkem. Výpis potřebuje
jednotku **vedle čísla** („1 bal“, „1 ks“) — jinak zákazník nepozná, že kupuje balení
100 fólií, ne jednu. Doplnit pravidlo pro `.quantity .unitsDescription`
(padding-right `--spacer-6`, číslo zarovnané doprava) a prop `units` u `Quantity`
prokreslit i do `ProductCard`.

## 4b. Karta výpisu: číselník + textové CTA se nevejde do 4 sloupců

V pásmu 820–999 px zapíná `css/product.css` u `columns4` čtyři sloupce — karta má 207 px,
obsah 183 px. Číselník s jednotkou zabere 108 px a `.button.buy` s textem „Do košíku“
potřebuje 100 px (má `white-space: nowrap`, `.quantity` je `flex: none`), takže tlačítko
vyleze mimo bílou plochu karty. Na 1260 px se to vejde, proto to na návrhové šířce není vidět.

Doplnit do DS jedno z toho: (a) v tomto pásmu láme `.AddToCartView` na kartě CTA na druhý
řádek (`flex-wrap: wrap`, tlačítko `flex: 1 1 100%`), nebo (b) karta se pod 1000 px přepne
na variantu `AddToCartView v3a` (ikonové CTA + rozbalovací číselník). Stránka teď drží (a).

## 5. `ProductCard` skrývá krátký popis v mřížce

`components/product/ProductCard.jsx` renderuje `shortDescription` jen pro `layout === 'row'`,
ale `css/product.css` má pro mřížku připravený clamp na dva řádky. Opravit kontrakt
komponenty (popis prokreslit v obou layoutech, případně prop `showDescription`).

## 5b. Lišta řazení a přepínač zobrazení nemá komponentu ani specimen

`SimpleFilterView`, `ViewTypeSelectorView` a `._filterButton` existují v DS **jen jako CSS**
(`css/category.css`). V `components/` k nim není nic — `navigation/` má jen `CategoryNav`,
`Pagination`, `Tabs`, `overlay/` má `FilterDrawer`. Kdo skládá kategorii, opisuje tedy třídy
z `ui_kits/eshop/index.html` a nemá kde řídit úpravy. V `guidelines/` navíc kategorie nemá
ani jednu specimen kartu (všechny jsou `home-*`, `colors-*`, `type-*`, `spacing-*`, `brand-*`).

**Co doplnit:**

- Komponentu `navigation/SortingBar` (nebo `product/ProductListToolbar`) s kontraktem
  `{ sortOptions: {value,label}[], sort, onSortChange, total, filterCount, onFilterOpen,
  viewType: 'grid'|'rows', onViewTypeChange }` — uvnitř skládá `.SimpleFilterView`
  (`._filterButton`, `.sortOrder` pro pásma pod 550 px, `.sortingBox` s radio + label,
  `.totalItems`, `.viewTypeButtons`).
- Komponentu `navigation/ViewTypeSelector` (`.ViewTypeSelectorView`, dva `.page`
  `default` / `custom1`, stavy `active` / `inactive`, `aria-label`) — dnes ji zmiňuje
  jen komentář „Intentional additions“ v readme.
- Specimeny `guidelines/category-toolbar.html` a `guidelines/category-paging.html`
  (skupina „Eshop“) — s oběma pásmy: `sortingBox` nad 550 px a `select.sortOrder` pod ním.
- Sada řazení, kterou eshop reálně používá, je čtyřprvková: **Nejprodávanější ·
  Od nejlevnějšího · Od nejdražšího · Nejnovější** — zafixovat ji jako výchozí v prompt.md,
  ať se na každé stránce nepojmenovává jinak („Nejlevnější“ vs. „Od nejlevnějšího“;
  DS kit i homepage se dnes rozcházejí).

## 5c. Pás aktivních filtrů (chips) — chybí úplně

DS umí u `._filterButton` jen číselnou pilulku „kolik filtrů je zapnutých“. Zákazník ale
nevidí, **co** je zapnuté, dokud neotevře drawer. Číselná pilulka se proto na stránce
nepoužívá vůbec — místo ní je pás chipsů nad výpisem.

Doplnit blok `._activeFilters` do `css/category.css` + komponentu `navigation/ActiveFilters`
a specimen:

- popisek „Aktivní filtry“ (`.caption`, 13 px muted),
- chip za každou zapnutou hodnotu ve formátu „Skupina: hodnota“, `--radius-pill`,
  `--color-main-100` / `--color-main-700`, hover `--color-main-200`, s `#tp-x` —
  klik odebere jednu hodnotu,
- poslední chip „Zrušit všechny filtry“ v červené (`--color-primary-100` / `-700`),
- výška 32 px (hustá lišta, ne nákupní akce), `focus-visible: var(--focus-ring)`,
- blok stojí pod lištou řazení, je vidět bez otevřeného drawru; bez zapnutých filtrů
  se nerenderuje.

## 5d. Původní cena před slevou na kartě výpisu

Přeškrtnutí původní ceny má v DS jen detail (`.ProductDetailTableView .value.ghost`
v `css/detail.css`). Karta výpisu pro `.priceParts .value.ghost` pravidlo nemá, takže
původní cena vypadá jako obyčejné druhé číslo. **Rozhodnuto:** na kartě je přeškrtnutá
a červená — `text-decoration: line-through`, `color: var(--color-primary-600)`,
`--font-size-13`. Doplnit do `css/product.css` a prokreslit do `Price` / `ProductCard`.

## 5e. Drawer filtrů je příliš úzký na svou patičku

`.FilterView > dc-con.wrap` je `width: min(var(--eshop-left-width), 88vw)` = 300 px, ale
patička nese dvě tlačítka („Zrušit filtry“ + „Zobrazit 212 produktů“) a ta se do 300 px
nevejdou — přetékají mimo panel. Buď zvětšit `--eshop-left-width` / šířku panelu na ~360 px,
nebo dát `dc-con.bottom` `flex-wrap: wrap` (stránka drží obojí).

## 5f. Výchozí karta výpisu: číselník s jednotkou + ikonové CTA — ROZHODNUTO

Výchozí podoba karty ve výpisu je **číselník s jednotkou („1 bal“) a ikonové CTA** (jen
košík, bez textu) — vejde se do všech sloupcových pásem a jednotka je vidět. Textové CTA
zůstává pro řádkový výpis a detail.

DS varianta `AddToCartView v3a` je blízko, ale číselník skrývá (`.v3a .quantity { display: none }`)
a rozbaluje ho až po kliknutí, takže zákazník nevidí, v čem nakupuje. Doplnit do
`css/product.css`: na kartě (`.ProductView`) je `v3a` číselník viditelný trvale a jednotka
má **stejné písmo jako číslo** (`--font-weight-bold` / `--font-size-14`, barva textu) —
12px muted popisek vedle čísla nefunguje. Prokreslit i do `ProductCard` (dnes renderuje
`v3a` bez číselníku a bez `units`).

Po téhle změně je bod 4b (zlom CTA v pásmu 820–999 px) potřeba jen pro řádkovou/textovou
variantu, ne pro výchozí kartu.

## 5g. Číselník: čtvercové klikatelné plochy

`.AddToCartView .quantity .button` má šířku danou paddingem (`0 var(--spacer-10)`, na kartě
přepsáno na `0 var(--spacer-6)`), takže „−“ a „+“ jsou úzké obdélníky ~28 px. Mají být
**čtvercové 40 × 40 px** — dát `.quantity .button` pevnou `width: var(--spacer-40)`
(`min-width` totéž, `padding: 0`) a nespoléhat na padding.

## 5h. „1 bal“ má sedět uprostřed číselníku

`.quantity:has(.unitsDescription)` dnes odsazuje jen zprava (`.unitsDescription
padding-right: var(--spacer-6)`), takže dvojice číslo + jednotka sedí mimo osu a čte se
jako zarovnaná doprava. Odsazení má být symetrické: `.real` dostane `padding-left:
var(--spacer-6)` (a `padding-right: 0`), šířku podle obsahu s `min-width: var(--spacer-20)`.

## 7. Ceny: celé koruny, ROZHODNUTO

Ceny se všude píšou v **celých korunách bez haléřů** — `106 Kč`, `2 490 Kč`. Desetinná
čárka u cen se nepoužívá vůbec. DS si dnes protiřečí: guide (Content fundamentals)
i `Price.prompt.md` uvádějí příklady s `,00`, kdežto `ui_kits/eshop/index.html` má celé
koruny — proto se to na stránkách opakovaně rozjíždí.

**Co v DS udělat:**

1. `readme.md` → Content fundamentals: přepsat příklad na „2 490 Kč“ a doplnit větu
   „ceny vždy v celých korunách, desetinná čárka jen u jednotkových údajů (např. cena
   za stranu 0,42 Kč)“.
2. `components/product/Price.prompt.md`: přepsat ukázku na `original="3 049 Kč"
   vat="2 490 Kč" novat="2 058 Kč"` a doplnit, že částky se předávají už zaokrouhlené.
3. `components/product/Price.jsx` / `.d.ts`: nechat formátování na volajícím, ale doplnit
   do kontraktu poznámku o celých korunách; případně přidat helper
   `formatPrice(n) → Math.round(n).toLocaleString('cs-CZ') + ' Kč'` do `components/core/`,
   aby to každá stránka nepsala znovu.
4. Projít `ui_kits/eshop/*.html` a `guidelines/*` a odstranit všechna `,00` u cen
   (detail produktu, splátky, dobírka, souhrn košíku).
5. Do `_adherence.oxlintrc.json` / kontroly DS přidat hlídání vzoru
   `\d,\d\d\s*Kč` — ať to příště spadne v kontrole, ne až v revizi stránky.

## 9. CHYBA V DS: nadpis bloku přebíjí popisky řádků v parametrech

`css/detail.css` má `.ProductDetailTableView.v2a .caption { font-size: var(--font-size-18);
font-weight: var(--font-weight-bold) }` jako nadpis bloku, ale selektor trefuje i popisky
řádků `bs-grid-item .caption` — a jejich vlastní pravidlo (14 px, regular, muted) má nižší
specificitu (0,1,1 vs 0,2,0). Výsledek: v tabulce parametrů je popisek 18 px bold.
Opravit na `.ProductDetailTableView.v2a > .caption`.

Zároveň: `bs-grid-item` je 14 px, což je na dlouhý seznam parametrů moc — jsou to metadata,
ne čtený text. Nastavit 13 px (popisek muted, hodnota semibold) a pro identifikační pás
(bod 1) 12 px bez dělících linek.

## 10. Detail: krátký popis nemá stát v bílé kartě

`.ProductDescriptionView` má v DS bílý podklad vždy. V pravém sloupci detailu (pod titulkem)
tím soutěží s cenovým panelem a panelem dostupnosti — tam má stát přímo na ploše, bílý
zůstává v tabu Popis. Doplnit variantu (např. `.ProductDetailMasterView > dc-con.dcContent >
.ProductDescriptionView { background: transparent }`).

## 11. Karusel na detailu

Karusel podobných produktů na detailu používá **`ProductCarouselView` z homepage** (bez bílého
podkladu, modrá ikona u nadpisu, `._carouselArrow` + `._carouselNav`) — ne `ProductsView v2a`,
jehož šipky `left/right: calc(-1 * --spacer-16)` uvnitř `._eshopWidth` leží na kartách.
Doplnit do `ProductCarousel.prompt.md`, že tohle je jediná karuselová varianta i mimo homepage,
a `ProductsView.v2a` šipky opravit nebo zrušit.

## 12. Známé chyby z homepage platí i na kategorii

- Panel našeptávače v `.SimpleSearchView > dc-con.pivot` má `--z-popup` jako `._menuWrap`
  a `.HeaderView` je `position: static` → lišta kategorií panel překryje. Dát pivotu
  `--z-header-popup`.
- `.MenuView > dc-con.dcContent` se nikde neořezává → dlouhá lišta kategorií roztahuje
  stránku. Vodorovný scroll do 1149 px, od 1150 px `overflow: visible`.
