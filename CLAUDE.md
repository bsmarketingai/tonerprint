# TonerPrint.cz — konvence projektu

## Zdroj pravdy je tento projekt. Natrvalo.
Tokeny, CSS a komponenty žijí **jen tady**: `ds/` (tokeny + CSS) a `komponenty/`
(komponenty stránek). Žádný jiný, napojený ani externí design systém se nehledá,
nekontroluje se proti němu a nic se z něj nepřebírá — ani teď, ani později.
I kdyby byl v organizaci k dispozici jiný design systém, tenhle projekt ho ignoruje;
neexistuje pro něj „nadřazený zdroj“, ke kterému by se něco dorovnávalo nebo
synchronizovalo.

Když něco chybí nebo je nejasné, řeší se to **tady** — buď rozhodnutím, které přijde
od zadavatele, nebo zápisem do **Otevřených bodů**. Nikdy odkazem nebo kopií odjinud.

## Vizuál se nedomýšlí
Když pravidlo v `ds/` není, nesmí se doplnit „jak by to asi mělo být“ bez záznamu.
Zásah do vzhledu na stránce nebo v komponentě je dočasná náplast s komentářem
`CHYBÍ V DS` / `CHYBA V DS` a řádkem v seznamu **Chybí v DS**, který se vypisuje
na konci práce. Jakmile je rozhodnutí, náplast se překlopí do `ds/` a ze stránky
i z komentáře zmizí.

## Komponenty jsou zdroj pravdy pro stránky
`index.dc.html`, `vypis-kategorie.dc.html` a `detail-produktu.dc.html` stránky jen
**skládají** přes `dc-import`. Markup i texty jsou v komponentách, aby úprava přes
komentář v náhledu padla do komponenty, ne na stránku. Stránka předává jen data,
která se mezi stránkami liší, a callbacky.

Tři technická omezení runtime, která tvar určila:

1. **`dc-import` neumí vnořovat.** Komponenta nemůže importovat komponentu — proto je
   hlavička jeden celek (hledání, našeptávač, „Rychlý nákup“, košík, oba panely jsou
   její stavy) a proto shell karuselu, mřížka výpisu a `._activeFilters` zůstávají na
   stránkách: hostí importy `ProductView`.
2. **Obal importu má vlastní výšku.** Přilepená hlavička, lišta kategorií ani karta
   v karuselu by v něm nedostaly rozměr z DS — obal se proto vyřazuje z layoutu
   (`.sc-host:has(> …) { display: contents }`). Je to obcházení runtime, ne DS.
3. **Relativní cesty se řeší proti stránce, ne proti komponentě.** Fotky se píšou jako
   `data-src="ds/…"` a skutečné `src` doplní komponenta po mountu podle hloubky
   dokumentu (`hydrateImages`). Šablonová hole v `src` se během streamu vyžádá jako
   literální URL a zůstane v konzoli jako chyba — proto se tam nedává. Styly DS se
   nelinkují v helmetu, komponenta si je doplní jen když chybí. Úzké komponenty mají
   strop šířky jen jako kořen dokumentu (`body > #dc-root > .sc-host > …`).

**Page-level náplast s `>` kombinátorem proti bloku, který je dnes komponenta,
je mrtvá.** Náplast patří do komponenty a bez `>`.

## Názvosloví BS Shopu je závazné
Struktura a názvy tříd i views generuje BS Shop serverově — `ProductView`,
`dc-con.dcPrice`, `cs_zelena`, `bs-priceLayout` se nepřejmenovávají, nepřidávají se
BEM ani utility prefixy. Breakpointy jsou dané BS Shopem a vlastní se nezavádějí:
`xs 0–419 · s 420–549 · m 550–819 · l 820–999 · xl 1000–1149 · xxl 1150–1439 · xxxl 1440+`.
Vizuál (barvy, mezery, radiusy, stíny) je volný a řídí se tokeny.

## Přihlášení: „Rychlý nákup“ JE login
`._quickBuy` v hlavičce se jmenuje **Rychlý nákup**, ale je to **spouštěč přihlášení**.
Klik na něj — a stejně tak na odkaz **Přihlášení** v tmavém horním pruhu — otevře
`LoginPopupView` (`._headerPopup` v nositeli `.LoginUserView`). V hlavičce **není
žádné další tlačítko „Přihlásit“** a nikdy se tam nepřidává.

## Kde co je
- `index.dc.html` — homepage, `vypis-kategorie.dc.html` — výpis kategorie,
  `detail-produktu.dc.html` — detail produktu.
- `design-system.dc.html` — přehled design systému: tokeny, komponenty a jejich stavy,
  stažení tokenů jako CSS, stažení ikon jako ZIP, Otevřené body.
- `komponenty/` — komponenty ve skupinách `global`, `navigation`, `product`, `overlay`,
  `home`, `detail`. Jeden soubor = jedna komponenta, otevíratelná i samostatně.
- `ds/` — tokeny, CSS a assety design systému. **Edituje se tady**, je to zdroj pravdy.
- `readme.md` — pravidla design systému (obsah, barvy, typografie, prostor, ikony).
- `zadani-doplneni-DS.md` — otevřené body a nahlášené mezery v `ds/`.
