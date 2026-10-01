# !!!!! VERSO — CLAUDE: PUSH, GIT + PROJECT INFOS

**Verzia: 2026-10-02 02:00**

> Prikladá sa na začiatok každého nového chatu. Platí na celý chat.
> Názov začína `!!!!!`, aby bol v repe vždy prvý. Do 2. 10. 01:58 sa volal `VERSO-CLAUDE-GIT-PUSH.md`.

---

## 0. PROJEKT

- **Verso** je jednosúborová CRM: `index.html` (~38 000 riadkov), dáta v **Supabase**, nasadené na
  **Vercel** (`0-gold-seven.vercel.app`).
- **Rules** (záväzné pravidlá, ako spolu pracujeme, návrh do Custom instructions) sú v
  `VERSO-HLAVNE-INSTRUKCIE.md`. Prečítaj ich skôr, než začneš niečo meniť.
- **claude.ai Project:** „Verso-5-Workspace". Project docs: `claude/VERSO-HLAVNE-INSTRUKCIE.md`
  (kópia rules). Fotky a náčrty nahráva do Project files Vrso.
- **Značka buildu** je vpravo v riadku vlastných tabov v Author workspace (`[Zzz5-6:BUILD]`).
  Keď na screenshote nesedí s posledným commitom, testuje sa stará verzia.
- Každá zmena má **module tag** `[Zzz<N>-<X>:NÁZOV]` a v kóde komentár, PREČO je tak.
- **Testy:** `t<N>.py` (Playwright), baseline `t36`. Zatiaľ nie sú v repe (pozri kap. 5).

---

## 1. ODKIAĽ SA BERIE index.html

- **Repo: `Versoproject/0`, vetva `main`.** Vrso index nenahadzuje.
- Na začiatku chatu repo naklonuj a pracuj s `index.html` priamo z neho, nikdy nie s voľnou kópiou
  v kontajneri:
  ```
  git clone https://github.com/Versoproject/0
  ```

## 1a. ČO SA SMIE PUSHOVAŤ (Vrso 2. 10., 01:53)

**Nepushuje sa každý súbor.** Do repa idú **iba** tieto súbory:

| Súbor | Čo to je |
|---|---|
| `index.html` | appka |
| `VERSO-HLAVNE-INSTRUKCIE.md` | **rules** |
| `!!!!!CLAUDE-PUSH-GIT-PROJECT-INFOS.md` | tento súbor |
| *ideas (planned)* | až keď bude vytvorený, názov sa sem dopíše |
| *nextup (todo)* | až keď bude vytvorený, názov sa sem dopíše |

- Súbory **rules, ideas a nextup** sa pushujú **automaticky** pri každej ich zmene, bez pýtania. Pred
  pushom sa aj tak stručne napíše, čo sa mení.
- Ďalší `.md` pribudne do repa **iba keď ho Vrso pomenuje**. Potom sa zapíše do tabuľky vyššie.
- **Vždy sa PREPISUJE.** Push nahradí súbor na tej istej ceste. Nikdy nevzniká kópia s novým menom
  (`index-v2.html`, `rules-novy.md` …). Staré verzie drží história gitu.
- Pracovné súbory (testy, skripty, screenshoty, poznámky) **nepatria do repa**. Patria do scratchpadu
  mimo repa. Ak by ležali v repe, hook na konci odpovede si vynúti ich commit. Tak sa 2. 10. o 01:49
  dostal do repa `VERSO-CLAUDE-GIT-PUSH.md` skôr, než Vrso odpovedal.
- `VERSO-BACKLOG.md` je v repe (nahral ho Vrso). **Neprepisuje sa**, kým Vrso nepovie, či je to
  *ideas (planned)*.

## 2. PRVÉ, ČO SA V CHATE ROBÍ (v tomto poradí)

1. **Naklonuj repo.**
2. **Over, či pôjde push:**
   ```
   git push --dry-run origin main
   ```
   - Výsledok `Everything up-to-date` znamená, že push funguje.
   - Ak príde chyba *„Versoproject/0 is not in this session's authorized repository set"*, **zavolaj
     nástroj `add_repo`** (owner `Versoproject`, repo `0`, access `push`). Potom repo naklonuj
     znova a dry-run zopakuj. Takto sa to 2. 10. o 01:46 opravilo **v tom istom chate**, nový chat
     nebol potrebný.
   - Až keď zlyhá aj `add_repo`, povedz to Vrsovi presnými slovami chyby. Kým sa to nevyrieši, posielaj
     súbor na stiahnutie.
3. **Porovnaj posledný commit s tým, čo máš:**
   ```
   git log -5 --format='%h %ad %s' --date=iso
   grep -o "BUILD = '[^']*'" index.html
   ```
   Povedz Vrsovi tri veci:
   - kedy bol posledný commit,
   - kedy sa naposledy menil `index.html`,
   - či značka buildu (`[Zzz5-6:BUILD]`) sedí s časom toho commitu.

   1. 10. večer sa trikrát testovala stará verzia a chyba sa hľadala v niečom, čo už bolo opravené.

## 3. PRED KAŽDÝM PUSHOM

1. **Stručne popíš, čo sa mení.** Stačí pár riadkov: ktoré module tagy a prečo.
2. **Posuň značku buildu** (`BUILD = 'RRRR-MM-DD HH:MM'`, `[Zzz5-6:BUILD]`) na aktuálny čas.
   Bez toho Vrso na screenshote nespozná, či už beží nová verzia.
3. **Stiahni najnovší `main`** (`git pull --rebase origin main`). Vrso medzitým mohol niečo nahrať cez
   GitHub (napr. `.md` súbory).
4. Commit správa v tvare, ktorý už v repe je:
   ```
   update index.html RRRR-MM-DD_HH:MM
   ```
5. `git push origin main`, potom potvrď hash commitu.

## 4. „PO STAROM CEZ V"

Keď Vrso napíše **„po starom cez v"**, **nepushuj**. Pošli `index.html` na stiahnutie.
Značku buildu posuň aj vtedy.

## 5. ČO V REPE (2. 10.) NIE JE

- Testy `t<N>.py` a baseline `t36` v repe nie sú. Regresiu odtiaľto spustiť nejde, kým ich Vrso
  nenahrá alebo kým sa nenapíšu nanovo. Ak sa test nespustil, treba to povedať, nie tváriť sa, že prešiel.
