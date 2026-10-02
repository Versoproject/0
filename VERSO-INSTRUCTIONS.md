# VERSO — INSTRUCTIONS (používanie appky)

**Verzia: 2026-10-02 21:05** · build appky v čase zápisu: `2026-10-02 21:00`

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
2. **NOTE|CONTENT**: zapnutý `CONTENT` hľadá len v CONTENT záznamov (zásah sa označí na kocke `CONT`).
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
- **Podržať sub note v tabuľke 1–2 s** → WORK NOTE s otvorenou note line, predvyplnenou odkazom
  `[#156/2-a] ` a menom poznámky - ukladá sa do WORK NOTE tabu (`[Zzz5-6:SUB-WORKLINE]`).
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

### 4.11 Premenovať, privacy, priority, TAG, DELETE
- **Premenovať**: podržať číslo poznámky **3 s**, alebo **podržať `+add NOTE` 5 s** (označená, inak posledná
  poznámka) → riadok s menom (len vlastné; prázdne = bez mena). Meno sa zmení v celom vlákne - v chate aj
  v Notes (`[Zzz5-6:ADD-RENAME]`). Preset sa prepína v SHOW okne.
- **Privacy / priority**: nastavujú sa v note line pred odoslaním.
- **TAG**: označené vlastné poznámky dostanú štítok (zdieľané len zo slovníka záznamu, privátne čokoľvek).
- **DELETE**: zčervená, keď je niečo označené; zmaže len **vlastné** označené po potvrdení
  (cudzie sa preskočia).

---

## 5. GESTÁ - PREHĽAD

| Kde | Ťuk | 2x ťuk | Podržať 1–2 s | Podržať 3 s | Podržať 5 s |
|---|---|---|---|---|---|
| Tab workspacu | prepne tab | maximalizuje workspace | – | – | – |
| `NOTES` (lišta zoznamu) | WORK NOTE tabu | maximalizuje workspace | chatnote module (comm) | – | – |
| Sub note v tabuľke | okno záznamu v doku | – | WORK NOTE + note line s odkazom | pripnúť / odopnúť pod CRM | – |
| Číslo záznamu v tabuľke | zbalí / rozbalí subs | – | Notes okno záznamu | – | – |
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

## 8. OTVORENÉ (ešte nerozhodnuté)

- Na mobile: má Enter v note line robiť nový riadok a odosielať len `ENTER CHATNOTE`?
- `#entry` tlačidlá v páse okna a v COMMUNICATION páse zatiaľ nemajú povel.
- Gesto na opätovné uloženie poznámky do tabu (re-save + acknowledgement) - kam ho dať.
- Úrovne ovládania (bez počítača / PC len tlačidlami / komerčná) - pozri `VERSO-BACKLOG.md`.
