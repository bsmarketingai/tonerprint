# Zadání pro Claude Design — doplnění DS TonerPrint o komponenty homepage

Doplň do design systému **DS TonerPrint.cz** komponenty potřebné pro homepage eshopu.
Vše se řídí stávajícími pravidly systému — **nezaváděj nové barvy, fonty, breakpointy ani spacery**.
Novou hodnotu vždy nejdřív hledej v `tokens/`; když opravdu chybí, přidej ji jako token, ne jako
napevno zapsanou hodnotu v komponentě.

## Závazný rámec

- **Názvosloví BS Shopu je závazné.** Nové bloky, které v BS Shopu ekvivalent nemají, pojmenuj
  konzistentně stejným způsobem (`*View` pro sekční view, `_camelCase` pro pomocné třídy)
  a v `.prompt.md` označ jako **k ověření s BS Shopem**.
- **Komponenty nenesou vlastní styly** — jen skládají třídy, které definuje `css/`.
  Nové CSS patří do nového souboru `css/home.css` a přidá se `@import` do `styles.css`.
- Ke každé komponentě dodej `.d.ts` (kontrakt props) a `.prompt.md` (kdy ji použít, kdy ne).
- **Layout:** obsah centrovaný na `--eshop-width` (1260 px). Breakpointy jen ty z BS Shopu:
  `xs 0–419 · s 420–549 · m 550–819 · l 820–999 · xl 1000–1149 · xxl 1150–1439 · xxxl 1440+`.
- **Plochý vizuál.** Stín jen funkčně (`--shadow-2` hover karty, `--shadow-3` plovoucí prvky).
  Karty se od plochy oddělují bílou, ne rámečkem.
- **Maximálně dvě barvy pozadí na obrazovku.** Barevné podklady mají jen horní pruh, patička,
  stavové a promo bloky.
- **Ikony** výhradně ze sprite `assets/icons/tp-icons.svg` přes komponentu `Icon`, barva
  přes `currentColor`. Loga dopravců a plateb se nepřebarvují.
- **Copy** podle Content fundamentals: vykání, konkrétní čísla, žádné vykřičníky ani emoji,
  velká písmena jen na začátku věty, české typografické konvence (mezera jako oddělovač tisíců,
  desetinná čárka, měna za číslem, minus U+2212 ve slevě).
- **Přístupnost:** dotykový cíl 44 px, kontrast textu min. 4.5, `--focus-ring` na všem
  interaktivním, karta jako odkaz má jeden dosažitelný `<a>` (ne celá karta jako `div` s onClick).

---

## 1. `global/TopUtilityBar`

Tmavý servisní pruh úplně nahoře.

- Podklad `--color-main-900`, text bílý, velikost 12–13 px, výška 40 px.
- Vlevo skupina benefitů: `Icon ico2` + text (např. „Česká společnost od 90. let",
  „Doprava zdarma od 1 500 Kč", „Odesíláme do 24 h", „Více než 30 let zkušeností").
- Vpravo servisní odkazy (O nás, Poradna, Kontakt, Přihlášení), hover na `--color-main-200`.
- Rozložení flex + `gap`, obsah centrovaný na `--eshop-width`.

Props: `benefits: { icon: string; label: string }[]`, `links: { label: string; href: string }[]`.

Responzivita: pod `xl` se skryjí poslední benefity (přebývající), pod `l` zůstanou jen odkazy,
pod `m` se celý pruh skryje (obsah se přesune do drawer menu).

## 2. `global/Header` — rozšíření stávající komponenty

Stávající `Header` doplň o varianty, které homepage potřebuje:

- **Rychlý nákup** — textová akce s ikonou uživatele.
- **Košík** — ikona + cena (`0 Kč`), na `m` a níž jen ikona s bublinou počtu.
- Vyhledávání zůstává `--radius-pill` s tlačítkem „Hledat" (`--color-main-500`).
- Logo výhradně `assets/brand/logo-tonerprint.png`, nikdy překreslené.

Nové props: `quickBuyHref`, `cart: { count: number; total: string }`, `searchPlaceholder`.

Responzivita: pod `l` se vyhledávání zalomí do druhého řádku přes celou šířku.

## 3. `navigation/CategoryNav`

Bílá lišta kategorií pod hlavičkou, spodní linka 1px `--color-neutral-200`.

- Vlevo trvalé tlačítko „Všechny kategorie" s burger ikonou, oddělené svislou linkou.
- Vodorovný seznam kategorií, 14 px / 600, hover `--color-main-500`.
- Poslední položka „Akce %" v `--color-primary-500`, modifikátor `sale`
  (**k ověření s BS Shopem**).
- Volitelný mega-menu panel po otevření „Všechny kategorie": plovoucí panel `--shadow-4`,
  `--radius-8`, sloupce kategorie → podkategorie.

Props: `items: { label: string; href: string; sale?: boolean }[]`, `onOpenAll`, `megaMenu?`.

Responzivita: pod `xl` vodorovný scroll bez viditelného scrollbaru, pod `m` zůstane
jen „Všechny kategorie" a otevírá drawer.

## 4. `global/HeroBanner`

Úvodní pás na bílé, dvousloupcový.

- Levý sloupec: nadpis 44–48 px / 800 / `line-height: 1.15`, perex 18 px / 400,
  řádek 4 mikro-benefitů (`Icon ico3` + dvouřádkový text), dvě CTA —
  primární `Button` a ghost `Button`.
- Pravý sloupec: obrázek, `object-fit: contain`, bez blend módu.
- Bez gradientu, bez animací.

Props: `title`, `perex`, `benefits: { icon; title; note }[]`, `primaryAction`, `secondaryAction`, `image`.

Responzivita: pod `l` jednosloupec (obrázek nad textem), benefity 2×2, CTA na plnou šířku pod `s`.

## 5. `global/PromoTileGrid` + `global/PromoTile`

Čtyři barevné dlaždice pod herem.

- `PromoTile`: podklad ze světlé škály (`--color-success-50`, `--color-warning-50`,
  `--color-main-50`, `--color-neutral-50`), `--radius-8`, padding `--spacer-24`,
  `Icon ico4` nahoře, titulek 18 px / 700, popis 14 px / 400, dole textový odkaz
  se šipkou `#tp-chevron-right`.
- Celá dlaždice je klikatelná (odkaz přes `::after`), hover: `--shadow-2`.

Props (`PromoTile`): `tone: 'success' | 'warning' | 'main' | 'neutral'`, `icon`, `title`,
`text`, `linkLabel`, `href`.
Props (`PromoTileGrid`): `tiles`, `columns?`.

Responzivita: 4 → 2 (`l`) → 1 (`s`).

## 6. `product/SituationGrid` + `product/SituationCard`

Blok „Co právě potřebujete?" — vstup do nákupu podle situace, ne podle kategorie.

- Sekční hlavička: nadpis 32 px / 800 na střed + podtitul 16 px / 400 `--color-neutral-600`.
- `SituationCard`: barevný podklad (světlá škála), `--radius-8`, nahoře otázka
  20 px / 800 na dva řádky, popis 14 px, odkaz „Zobrazit ›", dole produktová fotka
  zarovnaná k pravému dolnímu rohu, poměr 1 : 1, `object-fit: contain`,
  `mix-blend-mode: multiply`.
- Minimální výška karty ať drží mřížku i při různě dlouhém textu.

Props: `tone`, `question`, `text`, `href`, `image`.

Responzivita: 5 → 3 (`xl`) → 2 (`l`) → vodorovný swipe (`s`).

## 7. `global/StatsBar`

Pás čísel a jistot na `--bg-view-color`, `--radius-8`.

- Položka: `Icon ico3` vlevo, vpravo hodnota 24 px / 800 a popisek 13 px / 400.
- Hodnoty typu „30+ let zkušeností", „23 000+ produktů skladem", „300 000+ spokojených
  zákazníků", i položky bez čísla („Odborné poradenství").

Props: `items: { icon; value?; label }[]`.

Responzivita: 6 → 3 (`xl`) → 2 (`m`) → 1 (`xs`).

## 8. `global/ArticleListCard` + `global/ArticleListItem`

Panel „Nejčtenější rady a návody".

- Bílá karta `--radius-8`, hlavička s nadpisem 18 px / 800.
- Položka: thumbnail 56 × 56 (`--radius-6`, `object-fit: contain`), titulek 14 px / 600,
  podtitulek 13 px `--color-neutral-600`, vpravo šipka. Mezi položkami linka
  1px `--color-neutral-200`, hover podklad `--color-neutral-50`.
- Celá položka je jeden odkaz, výška min. 44 px.

Props: `title`, `items: { image; title; note; href }[]`, `moreHref?`.

## 9. `product/ProductCarousel`

Obal nad `ProductGrid` s vodorovným posunem.

- Hlavička: volitelná `Icon`, titulek 18 px / 800, vpravo odkaz „Zobrazit celý výběr ›".
- Šipky: kulaté tlačítko 40 px, bílé, `--shadow-3`, vertikálně vystředěné, přesahují
  přes okraj karet; ve výchozím i koncovém stavu disabled (opacity, ne mizení).
- Posun po jedné kartě, `scroll-snap`, klávesnicová obsluha, `aria-label` na šipkách.

Props: `title`, `icon?`, `moreHref?`, `products: ProductCardProps[]`, `perView?`.

Responzivita: počet viditelných karet 4 → 3 (`xl`) → 2 (`m`) → 1,2 (`s`, náhled další karty).
Na dotyku se šipky skryjí a jede se swipem.

## 10. `feedback/FaqList`

Seznam nejčastějších otázek.

- Varianta `links` (výchozí): otázka jako odkaz 14 px / 600 se šipkou vpravo, linky mezi
  položkami, dole odkaz „Zobrazit všechny otázky ›".
- Varianta `accordion`: rozbalovací odpověď, animace výšky 240 ms `ease`,
  ikona `chevron` rotuje, `aria-expanded`, `aria-controls`.

Props: `title`, `items: { question; answer?; href? }[]`, `variant: 'links' | 'accordion'`, `moreHref?`.

## 11. `global/Footer`

Patička na `--bg-view-color`, horní linka 1px `--color-neutral-200`.

- Horní část: sloupec „O Tonerprint" (odstavec + odkaz „Více o nás ›") + tři sloupce
  odkazů (Zákazník, Poradna, Kategorie) + blok newsletteru.
- Nadpis sloupce 16 px / 800, odkazy 14 px / 400, hover `--color-main-500`.
- Sociální sítě: ikony `#tp-brand-*` v kolečku 44 × 44 px, podklad `--color-main-500`,
  ikona bílá; hover `--color-main-600`.
- Spodní pruh: copyright vlevo, loga plateb uprostřed/vpravo (`assets/platby/`,
  původní barvy, bez koleček a barevného podkladu), volitelný claim vpravo.

Props: `about: { title; text; href }`, `columns: { title; links[] }[]`, `social[]`,
`payments[]`, `copyright`, `claim?`.

Responzivita: 4 sloupce → 2 (`l`) → 1 (`s`, sloupce jako rozbalovací sekce).

## 12. `forms/NewsletterForm`

- `TextField` (type `email`, placeholder „Váš e-mail") + `Button` „Přihlásit se",
  na širokých pásmech vedle sebe, pod `m` pod sebou na plnou šířku.
- Inline validace: „E-mail musí obsahovat @." — chyba říká, co udělat.
- Stav po odeslání: `Notification` varianty `success` — „Přihlášeno. Novinky posíláme
  jednou za měsíc."
- Pod formulářem místo pro souhlas se zpracováním údajů (`Checkbox`, volitelný).

Props: `label`, `note?`, `consent?`, `onSubmit`, `state: 'idle' | 'loading' | 'success' | 'error'`.

---

## Co dodat navíc

- **Ikony:** ověř, že ve sprite jsou `chevron-right`, `chevron-left`, `menu-2`, `user`,
  `shopping-cart`, `truck`, `clock`, `package`, `heart-handshake`, `building-store`,
  `robot`, `book`, `brain`, `flag`. Co chybí, doplň ve stylu sady (Tabler, stroke 2, 24 × 24).
- **UI kit:** přidej `ui_kits/eshop/homepage.html` — klikací sestavení všech bloků nad sebou
  v pořadí z mockupu, aby šlo ověřit rytmus sekcí a vertikální spacing.
- **Guidelines:** specimen karta pro každou novou komponentu do `guidelines/`,
  včetně stavů hover / focus / disabled a prázdného stavu tam, kde dává smysl.
- **Vertikální rytmus sekcí:** ustanov a zdokumentuj token pro odsazení mezi sekcemi
  homepage (návrh `--section-gap: 48px`, pod `m` 32 px) — ať se to nezapisuje ad hoc.
