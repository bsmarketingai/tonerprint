# Zadání pro DS TonerPrint — co víme ze tří stránek

Postaveno na `index.dc.html` (homepage), `vypis-kategorie.dc.html` a `detail-produktu.dc.html`.
Každý bod níž je místo, kde stránky drží dočasnou záplatu s komentářem `CHYBÍ V DS`
nebo `CHYBA V DS`. Nahoře je, co už DS převzal, ať se to neřeší dvakrát.

Stav: 25. 8. 2026, po updatu DS z téhož dne.

---

## Už převzato (jen pro přehled)

`CategoryView`, `._eshopWidth` v `global.css`, rytmus `dc-con.dcQuery`, blok
`._categoryTextBlock` / `._categoryText` / `._expandButton`, řádková `FlatCategoriesRwdView.v5a`,
jednotka uvnitř `.quantity`, ikonové CTA na kartě (`:not(.v3a)`), čtvercová tlačítka
číselníku 32 × 32, zlom CTA v pásmu 820–999 px, popis na kartě 13 px, ořez lišty kategorií,
z-index panelu našeptávače. Odpovídající záplaty jsme ze stránek smazali.

---

## 1. Hlavička a sticky chování — největší dluh

DS má jen `.HeaderView.isFixedHeaderAware.fixed { position: sticky; top: 0 }`. **Chybí
všechno ostatní**, takže si to každá stránka píše sama (dnes ve všech třech stejně):

- **Nikdo třídu `fixed` nenasazuje.** Patří ke komponentě `Header` jako chování.
- **Nesledovat `dc-gi.headerFixPivot`.** Je to potomek hlavičky: jakmile se hlavička
  přilepí, přitáhne si pivot zpátky do viewportu, IntersectionObserver ohlásí
  „viditelný“, hlavička se odlepí — a bliká v nekonečné smyčce. Ověřeno měřením
  (2 přepnutí za 1,4 s při konstantním scrollu).
  Funkční řešení: `window.scrollY > header.offsetTop + 4` (sticky prvek z toku
  nevypadává, takže `offsetTop` drží) s malou hysterezí.
- **Výška hlavičky se musí přeměřovat.** Styly z `<link>` i logo dojdou po mountu;
  jedno měření po mountu dá výšku nestylované hlavičky (naměřeno 1 599 px místo 84 px).
  Řešení: `ResizeObserver` na `.HeaderView` + `load` + `document.fonts.ready`.
- **S hlavičkou má zůstat i lišta kategorií** (`._menuWrap`), aby zákazník našel menu
  i uprostřed dlouhé stránky — ROZHODNUTO. Na stránkách:
  `._menuWrap { position: sticky; top: var(--tp-header-h); z-index: var(--z-popup) }`,
  kde `--tp-header-h` plní logika. V DS chce vlastní token (výška hlavičky se mění mezi
  mobilem se dvěma řádky a desktopem).
- **CHYBA V DS — hladiny při přilepení.** `.fixed` dává hlavičce `--z-header` (100)
  a tím zakládá stacking kontext, takže panel našeptávače (`--z-header-popup`, 250)
  se počítá jen vnitřně a sticky lišta kategorií se dostane nad něj. Přilepená hlavička
  musí být nad lištou (`--z-header-popup`), lišta pod ní. Vyřešit v DS včetně panelů
  košíku a přihlášení, které mají stejnou hladinu.
- **Pozor na hostitelskou stránku:** pokud má `html, body` nebo obal `height: 100 %`,
  sticky se odlepí po výšce okna. Do dokumentace `Header` patří poznámka
  `height: auto; min-height: 100 %`.

## 2. Číselník: obal pro dvojici číslo + jednotka

DS umí jednotku vedle čísla, ale nejde ji **vycentrovat** — odsazení paddingem pár vždy
posune mimo osu (reklamováno třikrát). Příčina: `.quantity` má čtyři sourozence
(−, input, jednotka, +) a dvojice se nedá centrovat jako jeden celek.

Řešení, které funguje a je na stránkách: obal `span.value` kolem `input.real`
a `span.unitsDescription`:

```
.quantity > .value { flex: 1 1 auto; display: inline-flex; align-items: center;
                     justify-content: center; gap: var(--spacer-2); min-width: 0 }
.quantity > .value .real { flex: none; min-width: 0; text-align: right; padding: 0 }
```

K tomu dvě věci:
- **šířka pole podle počtu číslic** (stránka to řeší inline `width: Nch` z logiky) —
  pevná šířka 24–29 px nechá v poli prázdno a pár se opticky odsune o ~10 px;
- **žádné `min-width` na `.real`** — přebije šířku podle obsahu (to byla poslední chyba);
- **jednotka má písmo čísla** (`--font-weight-bold` / `--font-size-14`, barva textu),
  ne 12px muted popisek — uvnitř číselníku to není metadatum.

Prokreslit i do `Quantity` a `ProductCard` (`units`).

## 3. Výpis kategorie

- **Pás aktivních filtrů `._activeFilters` chybí úplně.** Číselnou pilulku u
  `._filterButton` nepoužíváme — zákazník nevidí, *co* je zapnuté. Blok:
  popisek „Aktivní filtry“ (13 px muted), chip „Skupina: hodnota“ s `#tp-x`
  (`--radius-pill`, `--color-main-100/700`, hover `-200`), poslední chip
  „Zrušit všechny filtry“ v červené (`--color-primary-100/700`), výška 32 px,
  `focus-visible: var(--focus-ring)`; bez zapnutých filtrů se nerenderuje.
- **Přeškrtnutá cena na kartě.** `.value.ghost` má přeškrtnutí jen detail
  (`css/detail.css`). Na kartě: `text-decoration: line-through`,
  `color: var(--color-primary-600)`, 13 px.
- **Drawer filtrů je úzký na svou patičku.** 300 px (`--eshop-left-width`) nestačí
  na „Zrušit filtry“ + „Zobrazit 212 produktů“ — tlačítka přetékají. Stránka drží
  360 px a `flex-wrap` na `dc-con.bottom`.
- **Podtitul nad textem kategorie** (`._categoryTextBlock .caption`, na webu h2 pod H1)
  není stylovaný — stránka drží 16 px bold.
- **Lišta řazení a přepínač zobrazení nemají komponentu ani specimen.**
  `SimpleFilterView`, `ViewTypeSelectorView`, `._filterButton` existují jen jako CSS.
  Doplnit `navigation/SortingBar` + `navigation/ViewTypeSelector` a specimeny
  `guidelines/category-toolbar.html`, `category-paging.html`. Sada řazení, kterou eshop
  používá: **Nejprodávanější · Od nejlevnějšího · Od nejdražšího · Nejnovější**
  (DS kit má „Nejlevnější“, rozchází se).
- **Dlaždice podkategorií**: řádková `v5a` je převzatá — chybí k ní komponenta
  (`SubcategoryTileGrid`) a specimen, a je potřeba ověřit jméno view s BS Shopem.

## 4. Detail produktu

- **Obal stránky detailu chybí.** `CategoryView` s `--eshop-gap` (16 px) je správný pro
  výpis, ale detail má tři samostatné bloky (sestava, karusel, taby) a chce `--section-gap`.
  Do DS patří `ProductDetailView` / `DetailView`.
- **Identifikační pás nad akcemi** (Kód, PN, EAN, Výrobce, Záruka). `ProductDetailTableView v2a`
  je specifikovaná jako blok s nadpisem v tabu Parametry; tady je to tichá metadata:
  12 px, řádky `--spacer-2`, **bez dělících linek**. Chce vlastní modifikátor
  (stránka drží `v2a.identity`).
- **CHYBA V DS: nadpis bloku přebíjí popisky řádků.**
  `.ProductDetailTableView.v2a .caption { font-size: 18px; font-weight: bold }` trefuje
  i `bs-grid-item .caption` (specificita 0,2,0 vs 0,1,1), takže parametry mají popisek
  18 px bold. Opravit na `.v2a > .caption`.
- **Parametry jsou příliš velké.** `bs-grid-item` 14 px → 13 px (popisek muted,
  hodnota semibold); výchozí je **jeden sloupec**, `columns2` jen když je krátkých
  parametrů málo.
- **Taby jsou příliš tiché.** 14 px semibold → **16 px bold**, padding `10/16`.
  Jsou to nadpisy sekcí obsahu, ne odkazy v liště.
- **Krátký popis pod titulkem nemá být v bílé kartě.** `.ProductDescriptionView` má bílý
  podklad vždy; v pravém sloupci detailu soutěží s cenovým a dostupnostním panelem —
  tam patří na plochu, bílá zůstává v tabu Popis.
- **Hlavní CTA má ikonu 24 px** (`ico3`), ne 16 px. `Icon.prompt.md` říká „ico2
  v tlačítkách“ — u velkého nákupního CTA to neplatí, doplnit výjimku.
- **CTA „Koupit“ nesmí mít pevné minimum šířky** — v úzkém pravém sloupci přeteče;
  `flex: 1 1 auto` + zlom pod číselník.
- **Karusel na detailu = `ProductCarouselView` z homepage**, ne `ProductsView v2a`.
  Jeho šipky (`left/right: calc(-1 * --spacer-16)`) uvnitř `._eshopWidth` leží na
  kartách. Doplnit do `ProductCarousel.prompt.md`, že je to jediná karuselová varianta
  i mimo homepage, a šipky `ProductsView.v2a` opravit nebo zrušit.
- **Karusel potřebuje inicializované krajní stavy** — bez měření po mountu (a přes
  `ResizeObserver`, dokud se nedoměří fotky) je „Předchozí“ aktivní na začátku.
- **Galerie**: fotky se přepínají třídou `hidden` nad staticky vypsanými `img.mainImg`
  (jak to má DS kit). Dynamické `src` z proměnné vede na načtení literálu za streamu.

## 5. Vlajky (ActionIconsView)

- **CHYBA V DS: vlajky se násobí s fotkou.** `.ProductView .image .mainImage` má
  `mix-blend-mode: multiply` a `.ActionIconsView` je v DOM **před** obrázkem, takže se
  fotka násobí i s vlajkou (ztmavená, poloprůhledná). Doplnit `z-index: 1; isolation: isolate`.
- **Tokeny (ROZHODNUTO):** `--flag-text-transform: none` (větná velikost písmen, ne
  verzálky) a `--flag-font-weight: var(--font-weight-semibold)`. Velikost jsme nechali
  na 12 px, protože `tokens/typography.css` zakazuje 11 px v produktovém UI —
  pokud má u vlajek platit výjimka, je potřeba ji do DS napsat.

## 9. LoginPopupView — nositel, spouštěče a mobil

DS má komponentu i CSS, ale nikde nestojí, **kdo panel otevírá a kde žije**, takže se to
při každé stránce vynechává:

- Nositelem je `.LoginUserView` (`._headerPopup` uvnitř), stejně jako u košíku.
- **Spouštěče jsou `._quickBuy` („Rychlý nákup“ — je to login, jen se tak jmenuje)
  a odkaz „Přihlášení“ v `UserContentPanelView`.** V hlavičce není žádné samostatné
  tlačítko „Přihlásit“.
- Nositel musí mít výšku řádku hlavičky — `top: calc(100% + var(--spacer-8))` z DS by
  jinak panel posadilo přes tlačítka.
- **Pod 550 px má být panel přes celou obrazovku**, přesně jako
  `.BasketProductsPopupView` (`position: fixed; inset: 0`, `.button.back` viditelný,
  `.caption` skrytý). DS to má jen u košíku.
- DS navíc pod 820 px `.HeaderView .LoginUserView` skrývá (účet v mobilním menu) —
  to panel na mobilu vypne. Nositel musí zůstat.
- Doplnit specimen do `guidelines/`.

## 10. Hero má mít strop plochy

`.HeroBannerView` se roztahuje bez omezení, ale fotka (2172 × 724) se sází `auto 100 %`
na výšku pásu (max 420 px) — nad ~1900 px zbyde vedle textu prázdná bílá plocha.
Guide říká, že plocha okolo obsahu jde do 1920 px: `width: 100%; max-width:
var(--eshop-width-outer); margin-inline: auto` (bez `width: 100 %` se blok v `.HomeView`
scvrkne na fit-content — DS to u ostatních sekcí takhle má).

## 11. Ceny: celé koruny (ROZHODNUTO)

Ceny všude v **celých korunách bez haléřů** — `106 Kč`, `2 490 Kč`. DS si protiřečí:
guide i `Price.prompt.md` mají příklady s `,00`, `ui_kits/eshop/index.html` celé koruny —
proto se to na stránkách opakovaně rozjíždí.

1. `readme.md` → Content fundamentals: příklad „2 490 Kč“ + věta, že desetinná čárka patří
   jen jednotkovým údajům (cena za stranu 0,42 Kč).
2. `Price.prompt.md`: ukázka bez `,00`, poznámka, že částky se předávají zaokrouhlené.
3. Helper `formatPrice(n) = Math.round(n).toLocaleString('cs-CZ') + ' Kč'` do `components/core/`.
4. Vyčistit `,00` v `ui_kits/eshop/*.html` a `guidelines/*`.
5. Do `_adherence.oxlintrc.json` pravidlo na vzor `\d,\d\d\s*Kč`.

## 7. Obsah — fakta o firmě

Prodejna je **Drozdovice 1200/31a, 796 01 Prostějov, Po–Pá 8:00–16:00**. DS kit i guide
uvádějí „Prodejna Brno“ a „Po–Pá 8:00–16:30“ — opravit v `ui_kits/`, patičce i příkladech,
ať se to nepřepisuje na každé stránce.

## 8. `ProductCard` skrývá krátký popis v mřížce

`components/product/ProductCard.jsx` renderuje `shortDescription` jen pro `layout === 'row'`,
přitom `css/product.css` má pro mřížku clamp na dva řádky. Opravit kontrakt komponenty.


## Doplněno 2026-08-26 (převod na komponenty)

- **`.ProductsMasterView`** — má jen `max-width`, ale jako flex položka v `.CategoryView`
  se scvrkne na obsah. V DS chce `width: 100 %` (nebo `align-self: stretch`), jinak výpis
  nedrží šířku obsahu (na 2200 px okně byl 1097 px místo 1560).
- **`.ProductView.big` (řádková karta)** — DS řeší jen mřížku sloupců. Chybí:
  cenový blok na celý řádek do pásma m (`grid-column: 1 / -1`), ceny do krajů na
  jednosloupcové kartě a pod sebou od pásma l, vlajky v řádku pod nadpisem (v DS jsou
  absolutně nad fotkou, kde překrývají a vejde se jich pár), poloviční fotka (48 px) do
  pásma s, čtvercové ikonové CTA i mimo `dc-con.dcContent`.
- **`.SearchWhispererView`** — panel má být vycentrovaný v obsahu hlavičky a strop šířky
  má růst s pásmem (760 px → tři čtvrtiny šířky obsahu od xl → celá šířka od xxxl).
  DS ho přilepuje na levou hranu pole hledání s fixním stropem.
- **Spodní pruh patičky** — DS zná jen `.copyright`, `.paymentLogos` a `.claim`; chybí
  `.madeBy` (dodavatel řešení + odkaz na cookies) a rozvržení „texty vlevo, loga vpravo“.
  Zároveň pruh míchá metadata s větami na 12 px — `.claim` je věta a podle content
  fundamentals nemá být pod 13 px.
