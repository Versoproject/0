# VERSO — HLAVNÉ INŠTRUKCIE

**Verzia: 2026-10-03 00:30**

> **Ako sa tento súbor udržiava:** je JEDEN a prenáša sa VŽDY CELÝ. Keď pribudne pravidlo, Claude
> prepíše tento súbor a dá ti ho; ty ním nahradíš starú kópiu v ostatných projektoch. Nikdy sa
> nekopíruje len prírastok — po pár týždňoch by mal každý projekt inú podmnožinu pravidiel a nikto by
> nevedel, ktorá je tá správna. Podľa dátumu vyššie spoznáš, ktorá kópia je najnovšia.

**Toto je to miesto.** Všetko v tomto dokumente platí v **každom novom chate** v tomto projekte —
Claude si to prečíta skôr, než začne robiť. Keď pribudne nové pravidlo, povedz „daj do rules" a
dopíše sa sem.

**Fotky a náčrty** patria do **Project files** (v claude.ai: Project → *Add content* → nahraj obrázok).
Nie sú to artefakty — artefakt je jedna stránka, project file je podklad, ktorý vidí každý chat.
**Nahrávaš ich ty**, ja do projektu viem zapísať len text. Oplatí sa tam dať aspoň tieto tri:
náčrt tabuľky SUBS (1. 10., červenou), fotku originálneho Verso modulu (čo má zrkadliť Author
workspace) a fotku TEMPLATES so zlatým tlačidlom (vzor pre `[Zzz2-R23:ACTIVE-GOLD]`).
Pomenuj ich popisne — názov je jediné, podľa čoho ich v novom chate nájdem.

**Krátke, tvrdé pravidlá** (tie, čo sa nesmú stratiť ani keď je dokument dlhý) patria aj do
**Project → Custom instructions** — to je text, ktorý ide do každého chatu automaticky.
Návrh, čo tam dať, je na konci tohto dokumentu.

---

## 1. ZÁVÄZNÉ PRAVIDLÁ (nie úlohy — platia pri každej zmene)

- **Základná verzia Versa je po anglicky** — všetky viditeľné popisy, tlačidlá, placeholdery a hlášky
- **SQL vždy s menom**, v samostatnom skopírovateľnom bloku. Keď Claude niečo z DB potrebuje (dump, overenie,
  migráciu), **hneď dá celé SQL s menom na copy**, nikdy len odkaz na meno (Vrso 3. 10., 00:26). **Meno sa
  dáva tiež na copy, celé ako názov súboru `nazov.sql`** (napr. `verso_security_hardening_v1.sql`), v
  samostatnom bloku nad SQL (Vrso 3. 10., 00:29). **SQL posielať po jednom** - plán celého radu sa smie
  spomenúť, ale ďalšie SQL až po výsledku predchádzajúceho (Vrso 3. 10., 00:29). Dump je
  read-only a vracia **jeden výsledok** (SQL editor ukáže len posledný).
- Okná a workspacy sa **nesmú hýbať** pri bežnej práci — ani pri **otváraní okien a povelov** (podržanie
  3 s, otvorenie Notes/chat okna, note line): obrazovka nesmie poskočiť, poloha stránky aj scrollu v okne
  sa drží (Vrso 2. 10., 14:08; `[Zzz5-6:NO-JUMP]`)
- Každý modul je **adaptívny** naprieč zariadeniami; najprv zmenšiť, zalomiť až ako posledné
- `cl` = command line (obsadené), `chl`/`chat` = chat line, `nl` = note line, `w` = workspace
- **Hlavný Verso modul je HLAVNÝ COMMAND MODUL a vždy musí ísť ovládať tlačidlami na obrazovke**
  (Vrso 2. 10., 12:15). Layout (kruhy povelov, Web line, dashboard) + **hlavná M4 CRM** sú spolu
  s ostatnými ovládacími prvkami jadro ovládania. Workspacy (napr. Author workspace) ich **neprekrývajú
  klonom**, ale otvárajú sa pod nimi, aby nad nimi stál originál so všetkými funkciami
  (`[Zzz5-6:WS-MAIN]`). Gestá ich smú časom schovať, ale **vždy musí ostať aj „jednoduché" ovládanie**
  viditeľnými tlačidlami, keby gesto nefungovalo (iné zariadenie, porucha, nový user). Gesto je skratka,
  nikdy jediná cesta.
- **Chatnote sa VKLADÁ, note sa UKLADÁ** (`[Zzz1-CN:ENTER-VS-SAVE]`, 30. 9.) — `ENTER CHATNOTE` pošle
  záznam **iba do chatu** (`is_saved = false`), `SAVE NOTE` v note line ho uloží **do Notes**. Názvy
  tlačidiel musia túto hranicu držať; „save" sa nesmie objaviť na ceste, ktorá do Notes nezapisuje
- V chate ide každý záznam chronologicky pod posledný; osnova (#, a/b/c) patrí do Notes
- Nič sa z pairing tabov a contacts okna **nemaže** — presúva sa
- Preset pairing je **len pre komunikáciu**, nikdy pre user consent
- Preset môže otvoriť kanál, **nikdy nepodpíše dohodu**
- Cache: ukladať **fakt** o consente, nikdy dáta, ktoré odomyká
- **SUBS = štruktúra, TAGS = vlastnosti** (30. 9.): SUBS hovorí *kde niečo býva a k čomu patrí*
  (odkazy, priečinky, umiestnenie — sem patrí aj „enter as subs"); TAGS hovoria *aké to je* (vlastnosti
  bežiace súbežne s obsahom). Štítok záznamu (`r21`) a štítok poznámky sú jeden pojem v dvoch rozsahoch,
  nie dva systémy
- **Pevná množina + koná podľa nej stroj → vlastný stĺpec. Otvorená a číta ju len človek → štítok.**
  Preto priority, privacy a status ostávajú stĺpcami (CHECK constraint, počítadlá ich čítajú priamo,
  farba je pevná), hoci sa správajú ako štítky. V ROZHRANÍ sa ale zobrazujú v jednom páse a v jednej
  skupine kritérií SHOW — zjednotenie zobrazenia, nie uloženia
- **KAŽDÁ POLOŽKA MUSÍ MAŤ VŽDY UMIESTNENIE** (Vrso 2. 10., 21:49: *„vždy musí mať nejaké umiestnenie!
  Inak ho ani nenájdem — aj keby sa nestratil v kóde, ale kde inde ho hľadať?"*). Platí pre **note, CL,
  EL aj akúkoľvek bunku / položku**, ktorá sa dá uložiť: nič nesmie existovať „nikde". Zatiaľ je
  umiestnením **vlastný tab** (your own tabs) — neskôr môžu pribudnúť priečinky.
  - Umiestnenie dostane položka **už pri vzniku** (najmenej tab, v ktorom vznikla). Appka nesmie ponúknuť
    uloženie, po ktorom by položka nemala kde byť.
  - Umiestnenie je **ŠTRUKTÚRA, nie štítok** (pravidlo SUBS = štruktúra, TAGS = vlastnosti) a je to
    **STAV, nie obsah** (pravidlo OBSAH vs STAV: „placement"). Presun do iného tabu sa preto zapisuje na
    mieste a **nevytvára novú verziu** — nemennosť uloženého záznamu tým nie je dotknutá.
  - CL s notes: pri uložení poznámky prechádzajú pod číslo záznamu (`[Zzz1-CN:DRAFT-KEY]`) a záznam
    ostáva v tom umiestnení, kde CL bola.
- **VERIFIKÁCIA JE HLAVNÉ OVERENIE PRI VŠETKÝCH ÚKONOCH** (Vrso 3. 10., 00:22). Každý zápis do databázy
  (záznam, poznámka, consent, comm setup, kontakty, umiestnenie, kôš…) overuje **server** podľa overeného
  prihlásenia z verifikácie (`verso_jwt_username()` - token vydá server až po overení hesla voči registrácii),
  nie appka. Kontrola v appke (napr. `[Zzz0-R1:OWNER-IS-ME]`) je len pohodlie a hláška vopred; zámok je
  v databáze (RLS / trigger). Platí aj po tom, čo dostane RLS `verso_entries` - RLS hovorí *kto smie*,
  verifikácia hovorí *kto to naozaj je*. **CL** (rozpísaný záznam v prehliadači) sa chrániť nedá a netreba:
  do databázy sa dostane až pri ENTER, a tam ju overí server. Prvý krok: `verso_entries_owner_is_session_v1`
  (owner nového záznamu = prihlásený user).
- **OWNER = PRIHLÁSENÝ USER** (Vrso 3. 10., 00:02): pri vkladaní CL je PROJECT OWNER **vždy a iba
  prihlásené username** - nikto nevloží záznam za iného. Ten istý user je automaticky v **USER (consent)** aj
  v **COMMUNICATION (contacts)** - pripája sa sám, takže jeho vlastný chip je **needitovateľný** (nedá sa
  odobrať) a ostatní ho vidia. Vynútené pred zápisom na jednom mieste (`[Zzz0-R1:OWNER-IS-ME]`,
  `[Zzz0-R1:SELF-CHIP]`).
- **KONTAKTY - REGISTER A VLASTNÉ ZOZNAMY** (Vrso 2. 10., 23:55 a 3. 10., 00:14). **Registrom kontaktov je
  VERIFIKAČNÁ DATABÁZA** - registrácia usera prebieha cez ňu (`user_registration`) a má RLS; nie záznamy
  v `verso_entries` (tie ešte nemajú dorobené RLS). **Username môžu vidieť všetci** (aj tak ho vidno pri
  záznamoch) - vidieť meno ale **nie je spárovanie**: spojenie vždy vyžaduje consent (pairing). **Zoznam
  kontaktov si buduje každý sám** (mená z jeho záznamov), neviaže sa na všetkých registrovaných.
  **Autorita** musí mať **kompletný zoznam**, aby si vedela spárovať userov na **svoj projekt** - a prístup
  len k tomu projektu (napr. zdravotné záležitosti). Neskôr: časť verifikačnej databázy oddeliť tak, aby
  fungovala aj lokálne (dnes je len online) (`[Zzz1-R17b:CONTACTS-REGISTRY]`).
- **TABY NESMÚ MAŤ NIKDY ROVNAKÝ NÁZOV** (Vrso 1. 10.: „*tabs nemozu mat nikdy rovnaky nazov. Daj do
  rules!"). Platí **naprieč všetkými líniami tabov toho istého modulu** — človek vidí jeden rad názvov,
  nie dva nezávislé zoznamy — a **necitlivo na veľkosť písmen a medzery**: „Work", „work" a „work " sú
  pre oko ten istý tab. Pravidlo drží **databáza**, nielen appka: appka ho kontroluje, aby vedela
  povedať PREČO sa tab nepridal, ale zárukou je UNIQUE index. Bez neho stačí druhá záložka alebo druhé
  zariadenie a dva rovnaké taby sú na svete. Prvý prípad: `[Zzz5-6:TAB-NAME-UNIQUE]`,
  `verso_note_tabs_v1.sql` (`UNIQUE (lower(username), lower(btrim(tab_name)))`)

- **localStorage je CACHE, nikdy zdroj pravdy** (Vrso 30. 9., 18:00: „local storage len ako PWA vrstvu,
  ak vypadne pripojenie… resp. ako nejaký minimálny backup dát"). Pravda je vždy v databáze. Lokálne sa
  drží (a) posledná známa hodnota, aby appka niečo ukázala aj offline, a (b) fronta nezapísaných zmien
  (outbox, B1). Pri **oprávneniach** platí navyše: lokálna kópia riadi len ZOBRAZENIE, vynucuje ich
  vždy RLS na serveri — inak si práva udelí ktokoľvek, kto si prepíše localStorage.
  Comm setup to porušoval do 30. 9. (hodnota žila IBA lokálne) — VYRIEŠENÉ, viz `[Zzz1-CN:GATE-ONLINE]`:
  pravda je `verso_entries.comm_setup`, localStorage je cache + fronta
- **OBSAH vs STAV** (30. 9., POTVRDENÉ A NASADENÉ — `verso_entries_v1_state_columns.sql` beží,
  overené na `#155` → `comm_setup = 'contacts:all'`; viz VERSO-SUBS-NOTES kap. 12):
  **Obsah** = čo do záznamu napísal človek. Zmena → nová verzia (`[Zzz6-F13:EDIT-AS-VERSION]`,
  `superseded_by`). **Stav** = čo appka o zázname vie alebo podľa čoho koná. Zmena → zápis na mieste,
  bez nového čísla. **Test:** *bude niekedy niekto chcieť vidieť PREDCHÁDZAJÚCU hodnotu toho poľa?*
  Áno → obsah. Nie → stav. Tabuľka `verso_entries` už obe skupiny má: obsah = `fields_json`,
  `content_hash`, `entry_date`; stav = `is_trashed`, `superseded_by`, `copied_from` (tie sa dnes
  prepisujú na mieste a nikto pri nich novú verziu nečaká). Pravidlo teda nič nové nezavádza, len
  pomenúva hranicu, ktorá už existuje. Vynútenie: UPDATE trigger ako **deny-list** — presne vzor,
  ktorý už beží na `verso_chat_notes` (vymenuje nemenné stĺpce, zvyšok smie autor prepísať).
  Na tomto rozhodnutí stoja tri funkcie naraz: `comm_setup` (matica, kap. 11), `entry_status`,
  cross-refs/placement (MIRRORING DATA)

---

## 1b. GITHUB — ODKIAĽ SA BERIE A KAM SA ZAPISUJE index.html

**Repo: `Versoproject/0`, vetva `main`.** Vrso index NENAHADZUJE — pracuje sa so súborom priamo z repa.

- **Na začiatku každého chatu:** naklonuj repo a rob s `index.html` z neho, nie s voľnou kópiou
  v kontajneri. (`git clone https://github.com/Versoproject/0`)
- **Pred každým pushom** stručne popíš, čo sa mení.
- Keď Vrso napíše **„po starom cez v"** → namiesto pushu pošli súbor na stiahnutie.

**PODMIENKA, NA KTOREJ TO STOJÍ:** push funguje len vtedy, keď je repo pridané medzi **sources tej
session** (robí sa to pri zakladaní tasku v appke). Bez toho proxy odmietne vydať prihlasovacie údaje:
*„Versoproject/0 is not in this session's authorized repository set"* — čítať sa dá, pushovať nie.
Keď push zlyhá takto, nie je to chyba kódu ani tokenu: treba to zapnúť na strane session.

**Prvé, čo sa v novom chate robí:** skontroluj repo a jeho posledný commit, a porovnaj ho s tým, čo máš.
1. 10. večer sa trikrát testovala stará nasadená verzia a chyba sa hľadala v niečom, čo už bolo
   opravené — presne preto má Author workspace **značku buildu** vpravo v riadku vlastných tabov.

---

## 2. AKO SPOLU PRACUJEME

- Jeden súbor: `index.html` (~37 600 riadkov), nasadzuje sa na `0-gold-seven.vercel.app`, dáta v Supabase.
- **Značka buildu** je vpravo v riadku vlastných tabov v Author workspace (`[Zzz5-6:BUILD]`).
  Na každom screenshote je vidno, ktorá verzia beží — keď tam číslo nesedí, testuje sa stará verzia.
- Každá zmena má **module tag** `[Zzz<N>-<X>:NÁZOV]` a v kóde komentár, PREČO je tak,
  nie čo robí. Pri oprave vlastnej chyby sa píše aj to, čo bolo zle.
- **Testy:** `t<N>.py` (Playwright). `t36` je baseline — jeho výstup sa musí zhodovať.
  Po každej zmene beží celá regresia.
- Rozhodnutia, ktoré som ja navrhol a ty si ich prijal, sa zapisujú ako tvoje — ale **to, čo si
  nepovedal, sa nevymýšľa**; radšej prázdne miesto, ktoré povie prečo je prázdne.

---

## 3. NÁVRH DO CUSTOM INSTRUCTIONS (skopíruj do Project → Custom instructions)

```
Verso = jednosúborová CRM (index.html, Supabase, Vercel). Pri každej zmene platí:

1. Základná verzia Versa je PO ANGLICKY — všetky viditeľné popisy, tlačidlá, placeholdery, hlášky.
2. SQL vždy s menom, v samostatnom skopírovateľnom bloku. Keď niečo z DB potrebuješ, hneď daj celé SQL s menom, nie len meno. Meno daj na copy celé ako `nazov.sql`. SQL posielaj po jednom.
3. localStorage je CACHE, nikdy zdroj pravdy. Pravda je v databáze, oprávnenia vynucuje RLS.
4. Chatnote sa VKLADÁ, note sa UKLADÁ. "Save" sa nesmie objaviť na ceste, ktorá do Notes nezapisuje.
5. SUBS = štruktúra, TAGS = vlastnosti.
6. Pevná množina + koná podľa nej stroj → vlastný stĺpec. Otvorená a číta ju len človek → štítok.
7. Taby nesmú mať nikdy rovnaký názov — naprieč všetkými líniami, necitlivo na veľkosť písmen.
8. Okná a workspacy sa nesmú hýbať pri bežnej práci. Moduly sú adaptívne: najprv zmenšiť, zalomiť až
   ako posledné.
9. Nevymýšľaj, čo som nepovedal. Keď na niečo chýba podklad, nechaj to prázdne a napíš prečo.
10. Nikdy nemeň viac, než o čo som žiadal. Zmena mimo zadania sa najprv ohlási.
11. Hlavný Verso modul (layout + hlavná M4 CRM) je hlavný command modul. Gestá ho smú schovať, ale vždy
    musí ostať ovládanie tlačidlami na obrazovke. Workspacy sa otvárajú POD ním, neklonujú ho.
12. Každá položka (note, CL, EL, akákoľvek uložiteľná bunka) má VŽDY umiestnenie — zatiaľ vlastný tab.
    Dostane ho pri vzniku. Umiestnenie je štruktúra a stav: presun nevytvára novú verziu.
13. Register kontaktov = verifikačná databáza (registrácia, RLS). Username vidia všetci, spárovanie vždy
    cez consent. Zoznam kontaktov si buduje každý sám; autorita má kompletný zoznam pre svoj projekt.
14. Owner novej CL je vždy a iba prihlásený user; ten je automaticky aj v USER (consent) aj v
    COMMUNICATION (contacts) a svoj chip si odobrať nemôže.
15. Verifikácia je hlavné overenie pri všetkých úkonoch: každý zápis overuje server podľa overeného
    prihlásenia (verso_jwt_username()), nie appka. Kontrola v appke je len hláška vopred.
```
