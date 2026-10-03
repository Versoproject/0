# VERSO — INSTRUCTIONS (používanie appky)

**Verzia: 2026-10-03 02:50** · build appky v čase zápisu: `2026-10-03 02:50`

> **Na čo je tento súbor.** Ako sa Verso POUŽÍVA: postupy krok po kroku, gestá, pravidlá a riešenie
> problémov. Je to podklad pre **support** (človek aj AI), pre návody a pre kontrolu, či appka robí to,
> čo má. Nie je to zoznam úloh (to je `VERSO-BACKLOG.md`) ani pravidlá spolupráce
> (to je `VERSO-HLAVNE-INSTRUKCIE.md`).
>
> **Zatiaľ pokrýva:** Author workspace a Notes (chatnotes, poznámky, WORK NOTE, split screen, ATTACH,
> kopírovanie). Ďalšie moduly sa dopisujú ako nové kapitoly v rovnakej štruktúre.
>
> **Ako sa udržiava:** je JEDEN a prepisuje sa CELÝ. Každá zmena správania v appke, ktorá mení postup
> alebo gesto, sa sem zapíše v tom istom kroku ako zmena kódu. Pri každom bode je module tag
> `[Zzz…]` - podľa neho sa dá v `index.html` nájsť kód aj komentár, PREČO je to tak.

---

## 0. AKO S TÝMTO DOKUMENTOM PRACUJE SUPPORT / AI

1. **Najprv zisti build.** Značka buildu je vpravo v riadku *your own tabs* v Author workspace
   (`[Zzz5-6:BUILD]`). Ak je staršia ako verzia v hlavičke tohto súboru, používateľ má starú verziu:
   najprv obnoviť stránku (pri novej verzii navrchu vyskočí pás „NEW VERSION - tap to reload").
2. **Pomenuj vec rovnako ako appka.** Tlačidlá sú po anglicky (`+add NOTE`, `ENTER CHATNOTE`,
   `ATTACHED` …). V odpovedi používaj presne tieto nápisy.
3. **Postup daj ako kroky** (kap. 4). Gesto vždy s dĺžkou: *ťuk*, *2x ťuk* (dva ťuky do 0,4 s),
   *podržať 1–2 s*, *podržať 3 s*, *podržať 5 s*.
4. **Pri „nefunguje"** prejdi kap. 7 (riešenie problémov) skôr, než niečo navrhneš meniť.
5. **Nevymýšľaj funkcie.** Čo tu nie je, appka nevie alebo to ešte nie je zapísané - povedz to.

---

## 1. POJMY

| Pojem | Význam |
|---|---|
| **Entry / záznam** | jeden záznam v CRM, má číslo (`#156`), ownera, projekt, CONTENT |
| **Chatnote** | jeden riadok diskusie k záznamu. Každý zápis je chatnote. |
| **Note / poznámka** | chatnote, ktorý je **uložený do Notes** (`is_saved`). Chatnote sa VKLADÁ, note sa UKLADÁ. |
| **Sub note** | poznámka priradená k inej: `#2-a`, `#2-b` sú sub notes poznámky `#2` |
| **Číslo a @poradie** | `#5-a` je číslo poznámky; `@2` je poradie v celom uloženom zozname |
| **Notes window** | okno poznámok jedného záznamu (alebo tabu) - hore lišta, vľavo čísla, vpravo text, dole note line |
| **Note line / chatnote line** | riadok na písanie dole v Notes okne |
| **WORK NOTE** | vlastné poznámky **tabu** (nie záznamu) - pracovný zápisník tabu, kľúč `tab:<tab>` |
| **COMMUNICATION okno (comm window)** | chat záznamu - celá diskusia nad jeho CL |
| **CL** | command line - riadok CRM so stĺpcami záznamu |
| **Dok** | spodná časť Author workspace, kde sú otvorené Notes okná |
| **Split screen** | dve okná v doku naraz: WORK NOTE hore, okno záznamu pod ním |
| **ATTACH / ATTACHED** | pripnutie poznámok pod hlavnú M4 CRM (fialový pás) |
| **Acknowledgement** | záznam o prevzatí cudzieho textu (kto, odkiaľ) - vzniká automaticky |
| **Privacy** | privátnu poznámku vidí len jej autor |
| **Priority** | tri stupne: bez, `attention`, `urgent` |

---

## 2. AKO SÚ DÁTA ULOŽENÉ (čo musí support vedieť)

- **Chat aj Notes sú tá istá tabuľka** (`verso_chat_notes`). Rozdiel je len príznak `is_saved`:
  uložená = je v Notes; neuložená = je len v chate. Nič sa nekopíruje medzi „chatom" a „notes".
- **Kľúč (entry_key)** hovorí, ku komu poznámka patrí:
  číslo (`156`) = záznam · `draft-…` = rozpísaná CL, ešte neuložený záznam · `tab:<tab>` = WORK NOTE tabu.
- **Číslo poznámky prideľuje databáza** (aby dvaja ľudia naraz nedostali rovnaké). Okno ukáže skutočné
  číslo až po uložení. Pri offline zápise je číslo dočasné, kým sa neodošle (outbox).
- **Upravovať a mazať smie len autor** (stráži to databáza, nie appka). Cudziu poznámku nejde
  premenovať, zmazať ani zmeniť jej privacy.
- **Privátne poznámky** môže owner v zázname vypnúť. Potom je políčko *privacy* zasedené a všetko
  napísané v tom zázname je zdieľané.
- **Adresná poznámka** (`&meno` v texte) je viditeľná adresátovi; `@meno` len spomína.
- **Poznámky sa nemenia.** HIDE, FILTER, zbalenie sú len pohľad. Pôvodný text ostáva v databáze.

---

## 3. AUTHOR WORKSPACE - ROZLOŽENIE

Otvára sa tlačidlom **AUTHOR CREDITS** v hornom páse. Zhora nadol:

1. **Hlavný Verso modul** (layout s kruhmi povelov + hlavná M4 CRM). Ostáva vždy navrchu a ovláda sa
   tlačidlami - workspace sa otvára POD ním (`[Zzz5-6:WS-MAIN]`).
2. **Pás ATTACHED** (len keď je niečo pripnuté) - fialový, vo výške MINI riadku, stĺpce zarovnané
   s tabuľkou nižšie (`[Zzz5-6:ATTACH-GRID]`).
3. **Taby**: NOTES, PRIVATE NOTES, PROJECT NOTES, GROUP NOTES, FAVOURITE, OTHER NOTES, AUTHOR CREDITS.
   Pod nimi **your own tabs** (`+` = pridať vlastný tab) a vpravo **značka buildu**.
4. **Lišta zoznamu (SHOW bar)**: `NOTES` · `SHOW` · prepínač `NOTE|CONTENT` · `‹ search ›` · `×` ·
   `SELECT` · `COPY` · `COPY ALL` · `×` (zavrie workspace). Na úzkom displeji (Fold) je v dvoch radoch.
5. **Tabuľka tabu**: `ATTACH | PROJECT OWNER | PROJECT NAME | ENTRY NUMBER | SUB NOTES | CONTENT`.
   Stĺpec ATTACH je široký ako MINI a stojí presne pod pásom ATTACHED (`[Zzz5-6:ATTACH-COL]`).
   Jeden riadok = jeden záznam, v SUB NOTES sú jeho poznámky ako tlačidlá (meno + text).
6. **Dok** - otvorené Notes okná (na polovicu výšky; pri WORK NOTE alebo split screene prekryje zoznam).

---

## 4. POSTUPY

### 4.1 Otvoriť, maximalizovať, zavrieť workspace
1. Ťuk na **AUTHOR CREDITS** → workspace sa otvorí pod hlavným modulom.
2. **2x ťuk na tab** (alebo na voľné miesto lišty) → workspace cez celú obrazovku, aj cez hlavný modul.
   Znova 2x ťuk → hlavný modul je späť navrchu (`[Zzz1-CN:WS-MAX]`).
3. **×** vpravo v lište zoznamu → zavrie workspace.

### 4.2 Nájsť poznámku v tabe
1. **Hľadanie**: napíš do `search` → `‹ ›` skáče medzi zásahmi, číslo ukazuje *ktorý / z koľkých*,
   `×` vymaže hľadanie.
2. **NOTE|CONTENT** (`[Zzz5-6:SEARCH-MODE]`) - kde sa hľadá, ukazuje farba:
   - `NOTE` (oranžové, východzie) → hľadá v poznámkach; hľadanie je oranžové,
   - `CONTENT` (fialové) → hľadá len v CONTENT záznamov (zásah sa označí na kocke `CONT`); pole, `‹ ›`,
     počítadlo aj `×` sú fialové a v SHOW > LIMIT sa automaticky objaví fialové pole CONTENT.
   Aktívna polovica prepínača je plná, neaktívna biela.
3. **SHOW** otvorí okno filtrov s oddielmi:
   - **LIMIT** (strieborný) - obmedzenie podľa polí záznamu (ENTRY NUMBER, PROJECT OWNER, PROJECT NAME,
     PROJECT NUMBER, SUBS, TAG, PRIVACY, SCHEDULE, PROJECT CATEGORY, THEME, DESCRIPTION, ENTRY DATE,
     LOCALIZATION, CONTENT, SIZE, PRIORITY, LINK, USER, COMMUNICATION, AMOUNT, CURRENCY,
     ACKNOWLEDGEMENT, STATUS). Čiarka = ALEBO (`156, 157`).
   - **PRESET** (strieborný), **FILTER** (oranžový), **HIDE** (koralový - čo sa NEZOBRAZÍ, napr. meno, dátum).
   - 2x ťuk na SHOW okno → cez celú obrazovku.
4. **Zbaliť podľa kritéria**: ťuk na ownera / názov projektu / číslo projektu v tabuľke zbalí všetko pod
   ním (zobrazí „▸ N sub notes"); ťuk znova rozbalí. Ťuk na `▸ N sub notes` rozbalí všetky úrovne.

### 4.3 Otvoriť poznámky záznamu (napr. #156)
- **Ťuk na sub note** v tabuľke → okno záznamu sa otvorí v doku a postaví sa na tú poznámku.
- **Podržať číslo záznamu (#156) 1–2 s** v tabuľke → Notes okno záznamu cez celé okno (× vráti do workspace).
- **Ťuk na číslo záznamu** → zbalí / rozbalí jeho sub notes.
- V doku je naraz najviac **jedno okno záznamu** - ďalšie ho nahradí (nikdy nie dve #156).

### 4.4 Napísať poznámku alebo chat (note line)
1. V Notes okne **ťuk na `+add NOTE`** → dole sa otvorí note line:
   `new` · `to #` · `name (chat)` · `note text…` · `privacy` · `priority` · `☑ SAVE` · `ENTER CHATNOTE` · `×`.
2. **to #** prázdne = nová poznámka s novým číslom; číslo (napr. `4`) = sub note k #4 (`4-a`, `4-b`…).
3. **name** = voliteľný názov (zobrazí sa v tabuľke namiesto čísla).
4. **text** - pole rastie s textom (do 40 % výšky, potom scroll). Vložený viacriadkový blok si drží
   riadky a uloží sa ako **jedna** poznámka (`[Zzz5-6:NL-MULTI]`).
5. **SAVE je prepínač** (`[Zzz5-6:NL-SAVE-TOGGLE]`):
   - `☑ SAVE` (zlatý) → odoslanie ide do chatu **a** uloží sa do Notes tohto okna,
   - `☐ SAVE` (bledý) → len do chatu.
   Pri otvorení okna je zapnutý; okno si stav pamätá, kým je otvorené.
6. **Odoslať**: `ENTER CHATNOTE` alebo klávesa **Enter**. Nový riadok v texte = **Shift+Enter**.
7. `×` alebo Escape → riadok zavrie bez uloženia.

### 4.5 Odpovedať na konkrétnu poznámku (sub note)
- **Podržať číslo poznámky v ľavom stĺpci 1–2 s** → note line s pevným cieľom `to #N` (výsledok `N-a`).
- **Podržať `+add NOTE` 1–2 s** → sub note k označenej poznámke (ak nie je označená, k poslednej).
- Pri sub note na **cudziu** poznámku sa zapíše acknowledgement.

### 4.6 WORK NOTE tabu (pracovný zápisník)
- **Ťuk na `NOTES`** (prvé tlačidlo lišty zoznamu) → WORK NOTE aktívneho tabu sa otvorí v doku na polovicu;
  zoznam tabu nad ním ostáva a dá sa scrollovať. Cez celú obrazovku ide až 2x ťukom (kap. 4.8).
  (Od 2. 10. 20:30 WORK NOTE zoznam už neprekrýva - `[Zzz5-6:WORK-COVER]` zrušené.)
- **Pás WORK NOTE** vyzerá ako pri zázname (`[Zzz5-6:WORK-STRIP]`): zlatý chip s názvom tabu, `OWNER` = ty,
  `PROJECT not assigned`. K projektu sa poznámky dostanú kópiou (COPY TO), nie prepisom.
- **Podržať sub note v tabuľke 1–2 s** → WORK NOTE s otvorenou note line; štítok vľavo `re #156/2-a` ukazuje
  väzbu, pole na text je **prázdne** a odkaz `[#156/2-a]` sa doplní na začiatok až pri uložení
  (`[Zzz5-6:REF-ON-SAVE]`). **Ťuk na štítok** väzbu zruší (bude to obyčajná nová poznámka). Ak comm setup
  záznamu nedovoľuje kopírovanie, odkaz sa nevytvorí a hláška povie prečo.
- **CHAT v páse WORK NOTE** → COMMUNICATION okno nad rozpísanou CL (`[Zzz5-6:WORK-COMM]`). To isté robí
  podržanie `+add NOTE` 3 s a podržanie `SAVE` 3 s vo WORK NOTE. (Režim chatu v okne zo 17:06 je zrušený.)

### 4.7 Chat záznamu (COMMUNICATION okno)
- V okne záznamu **ťuk na `CHAT`** (pás hore) → COMMUNICATION okno tohto záznamu (`[Zzz5-6:STRIP-CHAT-COMM]`).
- Rovnako **podržať `+add NOTE` 3 s** alebo **podržať `SAVE` v note line 3 s** (`[Zzz5-6:SAVE-3S-COMM]`) -
  zrkadlo COMMUNICATION okna, kde `SAVE` 3 s otvára Notes okno. Vo WORK NOTE a nad rozpísanou CL otvorí
  COMMUNICATION okno nad CL (chatnote module).
- **Podržať `NOTES` 1–2 s** (lišta zoznamu) → chatnote module (COMMUNICATION okno nad rozpísanou CL).
- V COMMUNICATION okne: `ENTER CHATNOTE` = len chat, `SAVE NOTE` = uložiť do Notes. Čierny pás
  COMMUNICATION ukazuje, ku ktorému záznamu chat patrí (`#entry` + owner · projekt · názov,
  alebo „CL - not saved yet").
- **SAVE CHATNOTE** na vlastnom chatnote ho uloží do Notes **na mieste** (nevznikne kópia); na cudzom
  vznikne sub kópia + acknowledgement (`[Zzz1-CN:SAVE-IN-PLACE]`).

### 4.8 Split screen a maximalizácia (`[Zzz5-6:DOCK-PAIR]`, `[Zzz5-6:DOCK-FULL]`)
- V doku môžu byť naraz **dve** okná (WORK NOTE a okno záznamu), každé polovicu doku; zoznam tabu nad nimi
  ostáva. **Novo otvorené okno ide navrch, to, ktoré už bolo otvorené, ostáva dole na svojom mieste**
  (`[Zzz5-6:PAIR-ORDER]`). Nahradenie okna (napr. #156 → #157) drží jeho miesto.
- **2x ťuk na `+add NOTE`** (alebo na voľné miesto okna: lišta, ľavý stĺpec, spodný pás, pás s #entry):
  - jedno okno → cez **celú obrazovku** (aj cez hlavný modul a taby),
  - dve okná → celá obrazovka rozdelená **napoly** (split screen): spodné okno ide na spodnú polovicu,
    druhé na hornú.
  - Znova 2x ťuk → späť.
- **×** na jednom z dvoch → druhé ostáva. Po zavretí posledného sa vráti bežný pohľad.

### 4.9 Označiť a kopírovať
1. **SELECT** v Notes okne → režim označovania; ťuk na čísla vľavo ich označí (`COPY (3)`).
   Bez SELECT ťuk na číslo skočí na text poznámky.
2. **COPY** (ťuk) → do schránky ide: označené poznámky; ak nič, text označený v poli.
   Na začiatku je riadok pôvodu `[Verso entry #156 / owner …]`.
3. **COPY ALL** → všetko, čo je vidno (vrátane HIDE), s riadkom pôvodu.
4. **COPY TO = podržať COPY 1–2 s** (`[Zzz5-6:COPY-TO]`):
   - **čo:** označené (SELECT); ak nič, to, čo je práve vidno po FILTER / HIDE,
   - **kam:** druhé okno v split screene; ak nie je, WORK NOTE aktívneho tabu (otvorí sa vedľa),
   - **ako:** každá poznámka = nová samostatná poznámka v cieli, autor si ty, na začiatku odkaz
     `[#156/2-a]`, meno a priorita idú s ňou, uložená do Notes,
   - **privátna / adresná** ostane privátna; ak cieľ privátne nedovoľuje, **preskočí sa** a hláška to povie.
5. **Ručne:** FILTER/HIDE → COPY ALL → vložiť do note line v cieľovom okne → jedna poznámka s celým blokom.
6. Pri každom kopírovaní cudzej poznámky sa zapíše **acknowledgement**.

### 4.10 Pripnúť (ATTACH) pod hlavnú CRM (`[Zzz5-6:ATTACH-SEL]`, `[Zzz5-6:ATTACH-GRID]`, `[Zzz5-6:SUB-ATTACH]`)
0. **Jednotlivý sub z tabuľky: podržať ho 3 s** → pripne sa pod CRM (ďalšie podržané sa pridávajú
   k nemu). To isté gesto na pripnutom ho odopne. Ak bolo predtým pripnuté celé okno, nahradí ho tento výber.
1. V Notes okne **ťuk na `ATTACH`** (pás hore vpravo):
   - nič označené → pripne sa **celé okno**, zbalené (`▸ N sub notes`),
   - označené (SELECT) → pripnú sa **len označené**, každá ako mini sub.
   **Celý záznam z tabuľky:** ťuk na `ATTACH` v prvom stĺpci riadku → pripnú sa všetky jeho poznámky
   (zbalené); znova ťuk → odopne.
2. Pod hlavnou M4 CRM sa objaví fialový pás (`[Zzz5-6:ATTACH-MINI]`, `[Zzz5-6:ATTACH-COL]`) - riadok
   na tej istej mriežke ako tabuľka: **`ATTACHED`** (pod MINI, presný tvar a veľkosť MINI) | owner | projekt |
   `#156` | poznámky | `CONT`.
   - **Ťuk na `ATTACHED`** → otvorí poznámky, z ktorých attachment je (#156 alebo WORK NOTE tabu) v doku;
     pri jednotlivo pripnutých suboch ich rozbalí / zbalí.
   - **Podržať `ATTACHED` 1–2 s** → poznámky sa zbalia do jednej klikateľnej bunky `▸ N sub notes`;
     znova 1–2 s → rozbalia sa.
3. Ťuk na `▸ N sub notes` → rozbalí / zbalí; ťuk na sub → otvorí ho v doku; ťuk na `#156` → Notes
   záznamu v doku; `CONT` → obsah záznamu. Bez obsahu (napr. WORK NOTE) je vpravo hore `▾ / ▴` =
   rozbaliť / zbaliť (`[Zzz5-6:ATTACH-FIT]`).
   Pás má strop (asi 4 riadky); viac rozbalených poznámok sa scrolluje vnútri pásu, workspace pod ním
   ostáva použiteľný.
4. **Odpojiť** (rovnako ako ATTACH v hlavnej CRM): **podržať `ATTACHED` 3 s** alebo **podržať MINI 3 s**
   (MINI odpojí aj pripnuté command lines). V okne poznámok ťuk na `ATTACHED` v páse hore.

### 4.10b Právo kopírovať (comm setup) (`[Zzz5-6:COPY-RIGHT]`)
- V COMMUNICATION okne → comm setup je stĺpec **`copy`** (popri cont / chats / tags / priv / ment).
- Riadi, kto smie z poznámok záznamu **kopírovať**: COPY, COPY ALL, COPY TO a odkaz na poznámku vo WORK NOTE.
- Úrovne ako ostatné stĺpce: owner má vždy; zaškrtnuté delegate = aj delegáti; zaškrtnuté users = všetci.
  Menovitý človek môže mať právo navyše (riadok v USER ROLES / delegát) - na to treba SQL `verso_comm_users_v5`.
- **Východzie je „všetci"** (rovnako ako priv), aby nové pravidlo nezamklo existujúce projekty; prísnosť
  si owner zapne sám.
- Bez práva sú `COPY` a `COPY ALL` v Notes okne zasedené; klik/podržanie povie dôvod. V liste tabu sa
  poznámky zo zakázaných záznamov pri kopírovaní preskočia (hláška povie koľko).
- Pozn.: je to ochrana v appke. Text, ktorý človek vidí na obrazovke, sa úplne zastaviť nedá - preto sa
  pri každom kopírovaní cudzieho textu zapisuje aj acknowledgement.

### 4.10c Umiestnenie (placement) - kam záznam patrí (`[Zzz5-6:PLACEMENT]`)
- **Pravidlo:** každá položka má vždy umiestnenie. Zatiaľ sú to **vlastné taby** (your own tabs);
  čo nie je inde, je v predvolenom **NOTES**. Umiestnenie je na každého svoje.
- **Presunúť záznam:** v tabuľke **podržať číslo záznamu (#156) 3 s** → zoznam `NOTES (default)` + vlastné
  taby → ťuk na cieľ. Aktuálny tab je zlatý.
- **Ťuk na vlastný tab** (riadok your own tabs) → zoznam ukáže **len záznamy umiestnené v ňom**; nová CL,
  uložená kým je tab označený, sa do neho umiestni sama. Ťuk znova → späť všetko.
- **Zmazaný tab** → jeho záznamy sú späť v NOTES (nič nezostane „nikde").
- Presun je zmena stavu - **nevytvára novú verziu** záznamu.

### 4.11 Premenovať, privacy, priority, TAG, DELETE
- **Premenovať**: podržať číslo poznámky **3 s**, alebo **podržať `+add NOTE` 5 s** (označená, inak posledná
  poznámka) → riadok s menom (len vlastné; prázdne = bez mena). Meno sa zmení v celom vlákne - v chate aj
  v Notes (`[Zzz5-6:ADD-RENAME]`). Preset sa prepína v SHOW okne.
- **Privacy / priority**: nastavujú sa v note line pred odoslaním.
- **TAG**: označené vlastné poznámky dostanú štítok (zdieľané len zo slovníka záznamu, privátne čokoľvek).
- **DELETE**: zčervená, keď je niečo označené; zmaže len **vlastné** označené po potvrdení
  (cudzie sa preskočia).

### 4.12 Prihlásenie (login) - čo appka ukáže (`[Zzz6-F36:LOGIN-QUIET]`, `[Zzz10-R1:USERNAME-GUARD]`)
- **Postup:** SETTINGS → Login setup → USER + heslo → LOGIN. Server (`verso-auth-gate`) overí heslo a vydá
  podpísaný token; odvtedy každý zápis do DB server overuje proti tomuto loginu (`verso_jwt_username()`).
- **Úspešný login nemá hlášku (toast).** Poznáš ho podľa toho, že:
  - meno v ľavom kruhu je **zelené**,
  - otvorí sa **Login setup** s LOG OUT a CHANGE PASSWORD,
  - CL má predvyplnené PROJECT OWNER, USER (a COMMUNICATION) na prihláseného.
- **Iné meno než naposledy na tomto zariadení:** meno v kruhu je **5 s červené**, potom normálne. Je to
  len upozornenie (napr. Verso → Vrso), nie chyba; hláška sa už neukazuje.
- **Databáza nedostupná pri logine:** jediná hláška, ktorá ostala - „prihlaseny lokalne … oranzovy ram".
  Meno má oranžový rám, appka beží lokálne a zápisy do DB počkajú.
- **Čo server pri logine zapíše:** `login_event` do verifikačnej databázy - smie ho zapísať len prihlásený
  sám za seba (`verso_verification_insert_check_v1`, 3. 10.).

### 4.13 Verifikačná databáza - čo do nej smie appka zapísať (od 3. 10.)
Kontrola na serveri (trigger `zz_verso_verification_check_insert_trg`):
- **registrácia** (`register-meno`) - len ak meno už má heslo na serveri (vytvára ho `verso-auth-gate` pri
  REGISTER ešte pred týmto zápisom). Falošné meno v registri kontaktov tak nevznikne;
- **login** a **potvrdenie čísla záznamu** - len prihlásený za seba;
- **rezervácia mena** - cez serverovú funkciu `write_username_reservation`;
- **iné typy** - len serverové funkcie.
Ak support vidí chybu „…write refused" / „…only for yourself", appka sa pokúsila zapísať za iné meno
alebo bez loginu - riešenie: odhlásiť, prihlásiť a zopakovať.

### 4.13b Kto vidí záznam (`verso_entries_select_visible_v1`, 3. 10.)
- **Bez prihlásenia** appka nedostane zo servera žiadny záznam.
- **Prihlásený** vidí záznam, ak: je jeho owner (autor alebo PROJECT OWNER), je v USER alebo COMMUNICATION, je
  delegát záznamu, alebo je záznam verejný (PRIVACY = áno). Platí pre všetky kategórie vrátane Templates / System.
- Support: „záznam zmizol" = user nie je v žiadnej z týchto skupín; owner ho môže pridať do USER / COMMUNICATION
  (nová verzia) alebo nastaviť PRIVACY.

### 4.14 Kôš a obnova (`[Zzz6-F35:TRASH-RESTORE]`)
- **Do koša:** DELETE na označenom zázname, alebo **←** hneď po ENTER (vráti posledný zápis). Záznam sa nemaže,
  len dostane príznak kôš (`is_trashed`) a zmizne z Database Workspace.
- **Pravidlo:** ← vracia kroky tejto relácie (úpravy v CL, ENTER). Záznam daný do koša cez **DELETE** sa vracia
  cez **TRASH → RESTORE**, nie šípkou (rozhodnutie 3. 10.).
- **Obnova (odporúčaná):** **TRASH** → pri vlastnom zázname zelené **RESTORE** → záznam sa vráti do Database
  Workspace. Cudzí záznam RESTORE nemá; server to aj tak dovolí len ownerovi.
- **Obnova šípkou →** (`[Zzz6-F39:FORWARD-HISTORY]`, `[Zzz6-F39:FORWARD-UNTRASH]`): najprv z pamäte krokov tejto relácie
  (vráti len príznak koša, obsah záznamu sa neposiela znova - server by ho neprepustil). Keď je pamäť prázdna
  (reload, login, nová úprava v CL), → sa pozrie do histórie na serveri: ak bol tvoj posledný krok na záznamoch presun
  do koša, opýta sa „restore #N from Trash?" a ukáže hlavné bunky záznamu (PROJECT NUMBER / NAME, OWNER,
  CATEGORY, začiatok CONTENT, USER) - funguje aj po obnovení stránky a na inom zariadení.
- **Poradie:** šípky vracajú kroky odzadu. Ak po ← vrátiš aj úpravy v CL, → ich najprv vráti späť a obnova záznamu
  príde ako ďalší krok →.
- Keď → aj tak nemá čo vrátiť, hláška povie **čo pamäť vyprázdnilo a kedy** (napr. „edit of CL cell R10" / „new ENTER").
- Dvojitý dotyk na ← / → sa ignoruje, kým predošlý krok ešte beží (čaká na server).
- **Stopa:** server každý presun do koša aj obnovu zapíše do histórie (`verso_history`: `trash` / `restore`, kto a
  kedy). Support si ju pozrie SQL `verso_history_last_v1.sql`.
- **Natrvalo zmazať** sa dá len z koša (vlastný záznam, nie Verso, bez aktívneho PERMANENT); kópia ide do ARCHIVE.

### 4.15 LOG OUT - čo ostane v zariadení (`[Zzz10-R2:LOGOUT-WIPE]`)
- **Pred odhlásením** appka skúsi odoslať všetko neodoslané (záznamy, potvrdenia čísel, presuny do koša, chatnotes).
- **Otázka „Log out anyway?"** príde, keď niečo ostalo neodoslané (ostane v zariadení a odošle sa po ďalšom
  prihlásení tu) alebo je v CL rozpísaný text (zmaže sa - najprv daj ENTER). Cancel = ostaneš prihlásený.
- **Po odhlásení sa zmaže:** CL na obrazovke, posledné prihlasovacie údaje v pamäti, pamäť krokov a osobné cache
  v prehliadači (chatnotes, comm setup, refs, slovník štítkov, taby, kontaktné presety, posledné auto-meno).
  Všetko sa po prihlásení znova načíta zo servera.
- **Ostáva:** fronty neodoslaných údajov, rozloženie okien a UI (presety okien, MINI, zoznam kategórií), strážca
  zariadenia (posledné prihlásené meno - červené meno pri inom userovi).
- **Režim zariadenia** (`[Zzz10-DM:DEVICE-MODE]`) - riadok **DEVICE** pod prihlásením (LOG IN okno), volí sa pred ENTRY:
  - **MY DEVICE** (predvolené) - ako vyššie.
  - **TRUSTED** (PC v práci, rodinný mobil) - ako MY, pri LOG OUT sa navyše zmaže strážca zariadenia (posledné meno)
    a vlastné kategórie. Zariadenie si TRUSTED zapamätá ako predvoľbu.
  - **FOREIGN** (cudzie) - appka do zariadenia **nič nezapíše**, všetko je len v pamäti otvorenej stránky. Pri LOG OUT
    (aj pri zatvorení / obnovení stránky) zmizne všetko; neodoslané sa stratí - LOG OUT na to upozorní. FOREIGN sa
    ako predvoľba nezapamätá (ďalší user začne na MY DEVICE).
  - Keď si prihlásený, riadok len ukazuje zvolený režim; zmena = LOG OUT a nové prihlásenie.
  - Na FOREIGN sa appka po **15 minútach bez dotyku / klávesy** sama odhlási (najprv skúsi odoslať neodoslané)
    - `[Zzz10-DM:FOREIGN-IDLE]`.
- **Fronty patria userovi** (`[Zzz0-Q:OWNER]`): každá neodoslaná položka nesie meno toho, kto ju vytvoril. Odosiela sa
  len položka prihláseného usera; položky iného usera na tom istom zariadení čakajú na neho. Neodoslaný záznam si
  drží celý obsah, takže prežije aj obnovenie stránky (predtým sa po reloade stratil).
- **Audit log** (`verso_audit_log_check_v1`, 3. 10.): meno a čas zápisu dopĺňa server podľa overeného loginu.
  - Neskôr: na FOREIGN pôjde neodoslané do `.verso` (backlog I2).

---

## 4C. CONTACTS - KONTAKTY A PÁROVANIE

### 4C.0 Register kontaktov (pravidlo)
- **Register kontaktov = verifikačná databáza.** Každý user sa do nej dostane **registráciou** (USERNAME +
  EMAIL + ACTIVATION CODE + PASSWORD) - nič iné netreba zakladať.
- **Username vidia všetci**, ale vidieť meno nie je spárovanie - spojenie vždy vyžaduje consent (4C.3).
- **Zoznam kontaktov si buduje každý sám** (mená z jeho záznamov); doplňovanie mien navyše pozná všetkých
  registrovaných (`[Zzz1-R17b:CONTACTS-REGISTRY]`).
- **Autorita** má kompletný zoznam, aby si vedela spárovať userov na svoj projekt - prístup len k nemu.

### 4C.1 Pridať kontakt do CL (komu je záznam určený / s kým sa o ňom komunikuje)
1. V hlavnej CRM ťukni na bunku **COMMUNICATION** (nie USER - USER je zoznam užívateľov projektu).
   Otvorí sa okno s riadkom `CONTACTS` a oranžovým poľom `+`.
2. Do poľa napíš meno (`[Zzz1-R17b:CONTACT-MATCH]`):
   - **zelené písmená** = registrovaný user (alebo meno z tvojich záznamov); **červené** = taký user nie je
     (alebo preklep) - pridal by sa len text; ten človek sa musí najprv zaregistrovať (4C.0),
   - keď celé meno sedí, ukáže sa pod poľom zoznam → **ťuk na meno** ho pridá ako chip,
   - **podržať pole 1,5 s** → zoznam všetkých userov (aj s prázdnym poľom), stiahne sa nanovo.
3. Potvrdenie: ťuk na meno v zozname, Enter, alebo ťuk mimo poľa. Kláves „Ďalší" na mobile nemusí fungovať
   ako Enter - preto radšej ťuk na meno.
4. Odobrať kontakt: `×` na chipe (len kto smie upravovať - owner, alebo podľa comm setup „cont").
5. **Uložiť: zelené `ENTER`.** Dovtedy sú kontakty len v rozpísanej CL; do databázy idú až so záznamom.
- **Prihlásený user je v kontaktoch vždy** - pridá sa sám a jeho chip **nemá ×** (bodkovaný zlatý rám);
  odobrať sa nedá ani omylom (`[Zzz0-R1:SELF-CHIP]`). To isté v okne USER.
- **PROJECT OWNER novej CL = vždy prihlásený user.** Ak je v bunke iné meno, pri ENTER sa prepíše a hláška to
  povie (`[Zzz0-R1:OWNER-IS-ME]`). Záznam za iného usera vložiť nejde.
- Cudzí kontakt má bronzový rám, vlastný zlatý (`[Zzz1-R17b:FOREIGN-BRONZE]`).
- Pridať NOVÉ meno smie len ten, kto smie pridávať kontakty (comm setup „cont"); menovať už prítomných
  v chate (`@meno`) smie každý (`[Zzz6-F58:MENTION-GATE]`).

### 4C.2 Iné cesty k contacts
- Tlačidlo **`CONTACTS`** v tom istom okne: **ťuk** = contacts module (Communication workspace),
  **podržať 2 s** = Communication Pairing (`[Zzz1-R17b:CONTACTS-LINK]`).
- V chate **`@meno` podržať 1–2 s** = meno sa pridá do COMMUNICATION; **3 s** = po potvrdení sa rovno založí
  párovací záznam a otvoria sa pairing taby (`[Zzz6-F58]`).

### 4C.3 Párovanie (pairing) - čo sa stane po uložení
1. Pomenovaný user po tvojom `ENTER` uvidí riadok vo svojom **Preset comm module → Pairing**
   („entry lines appear once you are named in a saved COMMUNICATION cell").
2. Zapne **COMM CONSENT** (prípadne PERMANENT) → ste spárovaní; riadok prejde do **Paired**.
3. Taby modulu: Preset pairing / Pairing / Paired / Unpaired / Trashed / Blocked users. Nič sa z nich
   nemaže - presúva sa (pravidlo v rules).
- Pairing v contacts module sa ešte dorába (backlog „CONTACTS MODULE — PAIRING").

## 5. GESTÁ - PREHĽAD

| Kde | Ťuk | 2x ťuk | Podržať 1–2 s | Podržať 3 s | Podržať 5 s |
|---|---|---|---|---|---|
| Tab workspacu | prepne tab | maximalizuje workspace | – | – | – |
| `NOTES` (lišta zoznamu) | WORK NOTE tabu | maximalizuje workspace | chatnote module (comm) | – | – |
| Sub note v tabuľke | okno záznamu v doku | – | WORK NOTE + note line s odkazom | pripnúť / odopnúť pod CRM | – |
| Číslo záznamu v tabuľke | zbalí / rozbalí subs | – | Notes okno záznamu | presunúť do tabu (placement) | – |
| `+add NOTE` | nová poznámka | celá obrazovka / split | sub note k označenej | COMMUNICATION okno (záznam / CL) | premenovať (edit chat name) |
| `SAVE` v note line | SAVE zap/vyp | – | – | COMMUNICATION okno (záznam / CL) | – |
| `ATTACHED` (pás pod CRM) | otvorí jeho poznámky | – | zbaliť / rozbaliť subs | odpojiť | – |
| `ATTACH` (1. stĺpec tabuľky) | pripnúť / odopnúť celý záznam | – | – | – | – |
| `MINI` (hlavná CRM) | (CRM) | – | – | odpojiť všetko vrátane poznámok | – |
| `CHAT` v páse okna | COMMUNICATION okno (záznam / CL) | – | – | – | – |
| Číslo poznámky (ľavý stĺpec) | skok na text (v SELECT: označí) | – | sub note k nej | premenovať | – |
| `COPY` | do schránky | – | **COPY TO** | – | – |
| Voľné miesto Notes okna | – | celá obrazovka / split | – | – | – |

Pohyb prsta viac ako ~10 px počas ťuku/podržania = scroll, nie povel.

---

## 6. PRAVIDLÁ SPRÁVANIA (čo je zámer, nie chyba)

- **Obrazovka nesmie poskočiť** pri otvorení okna ani povelu (`[Zzz5-6:NO-JUMP]`).
- **Hlavný Verso modul je vždy ovládateľný tlačidlami**; prekryje ho len vedomá maximalizácia (2x ťuk).
- **Jedno okno záznamu + jeden WORK NOTE** v doku naraz, nikdy dve rovnaké.
- **Rozpísaná note line sa nemaže** samovoľným prekreslením (`[Zzz5-6:LINE-LIVE]`).
- **Cudzí text = acknowledgement** pri kopírovaní, sub note aj uložení.
- **Privátne sa nikdy potichu nezverejní** - radšej sa preskočí s hláškou.
- **Pás nového buildu** (`[Zzz5-6:NEW-VERSION]`): pre vývojárov (Verso, Verso1) visí, kým neťuknú;
  ostatným sa ukáže len na chvíľu.

---

## 7. RIEŠENIE PROBLÉMOV (support)

| Príznak | Príčina | Postup |
|---|---|---|
| Na screenshote iné správanie, než opisuje tento súbor | stará verzia v otvorenej karte | porovnať značku buildu, obnoviť stránku |
| „Not signed in" v prázdnom zozname | používateľ nie je prihlásený | prihlásiť sa, otvoriť workspace znova |
| „load error" v zozname | databáza nedostupná / chyba spojenia | skúsiť znova; pretrváva → nahlásiť |
| Poznámka nie je v Notes, ale v chate áno | odoslaná s `☐ SAVE` | SAVE CHATNOTE na nej (vlastná sa uloží na mieste) |
| Políčko privacy je sivé | owner vypol privátne poznámky v zázname | všetko tu je zdieľané - info, nie chyba |
| COPY TO preskočil poznámky | privátne/adresné a cieľ nedovoľuje privátne | skopírovať do cieľa, ktorý privátne dovoľuje |
| COPY TO: „Open the target notes window…" | cieľ = to isté okno | otvoriť cieľ vedľa (split screen) |
| Nejde zmazať / premenovať | poznámka nie je vlastná | len autor - zámer |
| Ťuk na sub neotvorí okno, ale scrolluje | prst sa pohol | ťuknúť bez posunu |
| Vložený text sa zlepil do riadku | starý build (pred 17:05) | obnoviť stránku |
| Na mobile nejde v note line odriadkovať | Shift+Enter na klávesnici nie je | vložený text riadky drží; ručné odriadkovanie je otvorená otázka (kap. 8) |
| Okno „poskočilo" pri otvorení | porušenie `[Zzz5-6:NO-JUMP]` | nahlásiť so screenshotom a buildom |

---
| Registrácia: pole PASSWORD sa nedá vyplniť | heslo sa odomkne až keď USERNAME + EMAIL + ACTIVATION CODE sedia s posledným odoslaným kódom | vyplniť **aj EMAIL** (ten istý, na ktorý prišiel kód) a kód; od 23:50 to funguje aj po obnovení stránky (appka si kód overí v databáze, `[Zzz10-V1:GATE-RECOVER]`) |
| Pri pridávaní kontaktu sú písmená červené | taký user nie je registrovaný (alebo preklep) | user sa musí zaregistrovať; potom podržať pole 1,5 s = čerstvý zoznam |
| Po zatvorení COMMUNICATION okna ostal contacts modul „visieť" | opravené 23:50 | contacts modul otvorený z okna sa teraz zavrie spolu s oknom (`[Zzz5-W5:OVER-COMM-CLOSE]`) |

## 8. OTVORENÉ (ešte nerozhodnuté)

- Na mobile: má Enter v note line robiť nový riadok a odosielať len `ENTER CHATNOTE`?
- `#entry` tlačidlá v páse okna a v COMMUNICATION páse zatiaľ nemajú povel.
- Gesto na opätovné uloženie poznámky do tabu (re-save + acknowledgement) - kam ho dať.
- Úrovne ovládania (bez počítača / PC len tlačidlami / komerčná) - pozri `VERSO-BACKLOG.md`.
