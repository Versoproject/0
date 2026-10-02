# VERSO — BACKLOG (aktuálny stav)

> **HLAVNÉ INŠTRUKCIE sú v tomto súbore v kapitole C.** Plná verzia (aj s GitHub postupom a blokom do
> custom instructions) je `VERSO-HLAVNE-INSTRUKCIE.md`, verzia 2026-10-02 14:10. Keď pribudne pravidlo,
> zapíše sa na OBE miesta a súbor sa prenáša vždy CELÝ, nikdy len prírastok.


Stav k **2026-09-29**. Toto je živý zoznam toho, čo **nie je postavené**. Keď sa bod postaví, mizne
odtiaľto a zapíše sa do build logu.

Zdroj: pamäťové súbory projektu `planned-backlog` (staršie) a `planned-backlog-2` (od 2026-09-26).

---

## A. TVOJ ZOZNAM Z 29. 9. (06:47 a 06:52)

Číslovanie ostáva pôvodné, aby sa dalo odkazovať na „bod 8".

| # | Čo | Stav |
|---|----|------|
| 1 | Doriešiť čas — „days ago" v chate, dátum/čas v note | ✅ **hotové 29. 9.** |
| 2 | Chips / contact chips | 🟡 **čiastočne** — SHOW bar má chipy (NAME aj USERS), contact chips otvorené |
| 3 | @mentions naviazať cez contact chips + `&user` mentions ONLY | ✅ **hotové 29. 9.** (skupiny a notifikácie → B9, B10) |
| 4 | Rýchly filter/vyhľadávanie v chate podržaním 1–2 s na reply info buttone | ✅ **hotové 29. 9.** |
| 5 | Notes md a notes ack (acknowledgement) | otvorené |
| 6 | Priority buttons — tri typy „zaškrtnutia", ako status | ✅ **hotové 29. 9.** |
| 7 | Doriešiť nastavenie/obmedzenia projektov project ownerom | 🟡 **rozpracované** — okno hotové, matica práv navrhnutá (`VERSO-SUBS-NOTES.md` kap. 11) |
| 8 | CL: MINI button zväčšený → úmerný; ATTACH vždy pod CL | ✅ **hotové 29. 9.** |
| 9 | Zmenšiť chatnote line o cca 20 % | ✅ **hotové 29. 9.** |
| 10 | Zosúladiť privacy/priority checkboxy a reply button s jeho resetom | ✅ **hotové 29. 9.** |

**Hotové 29. 9. — podrobnosti:**

- **Bod 1 `[Zzz1-CN:TIME]`** — v chate krátky tvar: dnes `14:32` (iba čas), včera `yesterday`,
  do 30 dní `N days ago`, staršie `2026-03-13`; plný dátum ostal v nápovede. V Notes okne ostáva
  plný `YYYY-MM-DD HH:MM` — je to evidencia, nie rozhovor.
- **Bod 3 `[Zzz6-F58:MENTIONS]`** — `@meno` v texte je živé označenie (bronzové, bodkovane
  podčiarknuté). Dva stupne jedného gesta: **1–2 s** pripraví párovanie (meno sa pridá do COMMUNICATION
  bunky CL, moje meno do OWNER/USER, ak sú prázdne — **nič sa neposiela**), **3 s** to isté + otázka +
  ENTER do databázy + otvorenie pairing tabov. Keď už je v kontaktoch, urobí sa len oznam
  `"<meno>" is in contact list!`; vlastné meno sa odmietne. Prečo sa 1–2 s neukladá: pridanie kontaktu
  je zápis do DB a ten sa nemá stať podržaním omylom — prvý stupeň je príprava, ktorú vidíš v CL.
  Platí v chate a v Notes workspace; osnova v Notes okne je jedno textové pole, v ňom klikateľný prvok
  byť nemôže. E-mail `a@b.sk` sa za mention nepovažuje.
- **Bod 3 — druhá časť `[Zzz6-F58:MENTIONS-ONLY]`** — dve formy toho istého čísla funkcie:
  - **`@user`** — meno v texte **ostáva viditeľné** a nič sa nemení; pri odoslaní dostane ten user
    **comm consent iba pre tento záznam**, bez ohľadu na to, či je v kontaktoch. Platí pre chatnote
    aj pre ENTER celej CL (hľadá sa v každej textovej bunke).
  - **`&user`** — meno v texte **ostáva a je z neho link** (červenkastý, aby sa odlíšil od `@`), takže sa
    dá podržať a spárovať rovnako ako `@`. Záznam sa adresuje tomu userovi (`note_to`), ten dostane ten
    istý consent, riadok nesie `only: <mená>` aj značku `private` a vnútro riadku má jemne červený nádych.
    **Zmenené 29. 9. o 17:29** oproti pôvodnému „meno sa vystrihne": skryté meno sa nedá podržať, a práve
    podržanie si žiadal. Ochrana sa tým nestratila, len sa presunula — kto záznam vidí, určuje `note_to`,
    nie to, či sa meno v texte dá prečítať. A vidí ho už len autor a menovaní.
  - **Fail-closed:** kým nie je nasadené SQL v10 (`note_to`), adresná správa sa uloží ako
    `is_private = true` — teda radšej ju adresát nevidí, než aby ju videli všetci.
  - Otvorený comm window si po udelení prístupu prekreslí chips (udalosť `zzz6f58-granted`),
    takže si vlastnú zmenu neprepíše starým obsahom bunky.
- **Bod 4 `[Zzz1-CN:CHL-QUICKFILTER]`** — podržanie 1–2 s na bunke s názvom chatu zapne kritérium
  NAME v SHOW module tým menom; je to tá istá cesta, akou by si to naklikal ručne, takže počítadlo na
  SHOW, RESET aj preset o tom vedia. Druhé podržanie filter vypne, bunka medzitým svieti oranžovo.
- **Bod 9 `[Zzz1-CN:CHL-20]`** — celý pás o ~19 % nižší (96 → 78 px) a každá časť úmerne: cieľová
  bunka 28 → 24, meno chatu 22 → 18, ENTER SAVE CHATNOTES 42 → 30, medzery 4 → 3.
  24 + 3 + 18 + 3 + 30 = 78, takže mriežka sedí na pixel a zadokovaná note line ide s cieľovou
  bunkou na 24 px.
- **Bod 7 (časť) `[Zzz1-CN:OWNER-GATE]`** — v hlavičke comm okna vpravo od slova COMMUNICATION je
  strieborný popis `setup` + ozubené koliesko. Prepína, či smie kontakty do **tohto** záznamu pridávať
  aj niekto iný než owner. Prepnúť ho smie iba owner; ostatní ho vidia zamknutý s vysvetlením, a keď je
  vypnutý, pole na pridanie kontaktu im v okne vôbec nie je. **Čo ešte chýba:** hodnota je zatiaľ len
  v localStorage, takže je to dohoda v rámci zariadenia, nie zámok — potrebuje vlastný stĺpec + RLS,
  a s tým to isté rozhodnutie ako pri statuse na entry (zapísať sa musí bez razenia novej verzie).
- **Bod 8 `[Zzz6-F48:MINI-SIZE]` / `[Zzz1-M5:ATTACH-UNDER-CL]`** — MINI nosí triedu určenú pre
  popiskový riadok nad CL (26 px, dvojriadkový text), ale stojí v dátovom riadku, kde má každá bunka
  20 px; trčal o 6 px. Teraz má 20 px, rovnako ATTACH aj placeholder. A attach modul bol v HTML **až
  za** kontajnerom kontextových okien, takže pripnutá CL sa kreslila pod nimi — pri otvorenom comm okne
  až na spodku stránky. Jeho vlastný komentár z 1. 9. pritom hovorí „priamo PRED" ním; poradie sa
  niekedy rozišlo so zámerom. Teraz je hneď pod CL.
- **Bod 10 `[Zzz1-CN:REPLY-PAIR]`** — privacy a priority políčka stoja presne pod sebou. Reply bunka
  a jej reset sú zrastené do jedného prvku (bez medzery, zaoblenie len na vonkajších hranách), takže
  dve `×` v riadku rozlišuje tvar, nie farba. To isté v Notes okne (`to #N` + číslo). Zatváracie `×`
  note line je čierne vyplnené. Pri tom sa našlo a opravilo, že note line v Notes okne si brala šírku
  podľa obsahu (532 px v 412 px okne) a vytekala von z okna.

- **Bod 6 `[Zzz1-CN:PRIO3]`** — tri stupne: **open** (prázdny štvorec), **ATTENTION** (oranžový),
  **URGENT** (červený). Ovládač je **štvorcový** zámerne — v command line je priorita guľôčka, takže sa
  tie dve miesta nepomýlia. Jedno ťuknutie posúva o stupeň ďalej a zo štvrtého je zase prázdny.
  Je v oboch note line (chat aj Notes), v CL aj v M4a klone CRM, v riadku chatu ako slovo s vlastnou
  farbou, a URGENT navyše zafarbí vnútro chatového riadku jemne červenou. V SHOW bare (FILTER aj HIDE)
  **nahradilo jedno PRIORITY dvojicu ATTENTION + URGENT** — „priority" bola odkedy má tri stupne otázka,
  na ktorú sa nedá odpovedať. Zaškrtnutie oboch znamená „oba stupne", nie prienik. Stĺpec `note_priority` je voliteľný — kým nie je nasadený, drží stav dvojstavový
  `is_priority` (ATTENTION aj URGENT = true), takže sa stratí stupeň, nie samotná priorita.

---

## B. OTVORENÉ TÉMY Z PREDCHÁDZAJÚCICH DNÍ

### B1. Outbox — čakajúce zápisy, aby nezahlcovali systém

Stav dnes (zmerané v kóde): položka sa po 25 neúspechoch prestane skúšať, ale **nezahodí sa** — leží
v localStorage navždy; `zzz0ob_pending_count()` existuje, ale nikde sa nevolá, takže user nevidí,
koľko čaká; `zzz1cn_add` nerozlišuje chyby, takže trvalé odmietnutie minie všetkých 25 pokusov.

Poradie prác:
1. Prevencia pred frontou (cieľové `#` existuje — už hotové)
2. Do fronty len to, čo sa môže podariť — známe trvalé kódy (P0001, 23505, 23514, 23502) tam nejdú
3. `42501` (RLS) **patrí** do fronty — často je to len vypršaný token
4. Mŕtva položka sa má označiť (`failed` + dôvod), nie ticho ležať
5. Viditeľnosť fronty — počítadlo + miesto, kde sa dá pozrieť a vyčistiť
6. Deduplikácia
7. Strop veku
8. Nikdy ticho nezahodiť text — platí nad všetkým ostatným

### B2. RLS a privacy strop

**Pravidlo (dohodnuté):** privacy záznamu je **strop**, nie prepínač. Platí prísnejšie z dvoch.

Blokuje to, že PRIVACY toggle v CL (`r7`) **nie je reálne vynútený** — v chatnote logike sa používa
na jedinom mieste, na kreslenie rámu. Dnes je teda „nadradený" prepínač ten slabší.

**Poradie:** najprv RLS na `verso_entries` pre `r7`, až potom strop a akýkoľvek gate nad ním.

### B3. Tretí consent „publish" v CL

Nápad: tretí súhlas (project privacy) v consent line. Sadne do modelu bez zmeny schémy
(`verso_consents.kind = 'publish'`). Závisí na B2.

### B4. „setnotes" — chatnotes mechanizmus pre nastavenia a párovanie

Nerozhodnuté. Odporúčanie: použiť pre veci, ktoré sú **dohodou** alebo majú mať históriu; vlastná
tabuľka `verso_set_notes`, nie miešať do `verso_chat_notes`. Znovu použiť komponent, nie tabuľku.

### B5. Preset pairing — AUTO-ACCEPT

Postavené je všetko okrem auto-accept. Musí byť samostatný prepínač, vypnutý by default a zakázaný
pre Final.

### B6. Pripomienky pred vypršaním consentu

Dnes je odpočet vidieť, len keď je okno už otvorené — consent na spiacom projekte vyprší bez toho,
aby to user videl prísť.

### B7. Unified CONTENT container

Jeden JSON kontajner pre obsah, ktorý sa prepína do interaktívneho režimu. Vrso ho chce navrhnúť
v samostatnom chate a potom integrovať.

### B8. Mentions pre skupiny — `@group` / projektová skupina

Dnes `@meno` aj `&meno` mieria na **jedného** usera. Tvoja veta „samozrejme môže byť vyznačená aj celá
skupina, čo je v kontaktoch, alebo celá projekt skupina" znamená rozbaliť jedno meno na zoznam mien.
Chýba k tomu jediná vec: **zdroj skupín** — kde je zapísané, že „tím A" = títo štyria. Contacts modul
dnes drží ploché mená, nie skupiny.

Poradie prác: najprv povedať, kde skupiny žijú (vlastný stĺpec v projekte? `verso_groups`?), potom
rozbalenie v `zzz6f58_names` — ostatné (consent, strih textu, značka `only:`) už funguje a skupinu
neodlíši od mena.

### B9. Notifikácie pre `&user` a privátny záznam/placement

Tvoja poznámka: „zápis do backlogu, neskôr napojíme na notifikácie... ale aspoň nejaký privátny
záznam/placement by sa zišiel". Dnes adresát dostane prístup, ale **nedozvie sa o tom** — musí sám
otvoriť ten záznam. Treba miesto, kde adresát vidí „toto prišlo mne": buď vlastný pohľad nad
`verso_chat_notes` filtrovaný podľa `note_to`, alebo schránka. Až nad tým má zmysel notifikácia.

### B11. Notifikácie — realtime a Notification workspace

`[Zzz1-CN:NOTIF]` dnes počíta nové správy a kreslí ich v bunke COMMUNICATION. Obnovuje sa **udalosťami**
(zápis chatnote, otvorenie comm okna) a **raz za minútu**, kým je karta vidieť. Na skrytej karte sa
nepýta vôbec — appka v pozadí nemá mlieť dopyty pre nikoho.

**Čo to ešte nie je: realtime.** Správa od niekoho iného rozsvieti bunku až do minúty, nie v tej sekunde.
Skutočný realtime je Supabase subscription nad `verso_chat_notes` — samostatný krok, lebo to nie je
doladenie intervalu, ale iný mechanizmus (kanál, odhlasovanie, správanie pri výpadku siete).

**Notification workspace** (2-layout NOTIFICATIONS button → tab): zoznam „toto prišlo mne" si vie zložiť
z `verso_chat_notes` a značiek v `verso_chat_seen` — dáta už existujú, chýba okno. Sem patrí aj Vrsov
nápad zaznamenávať prezretia formou CL; zatiaľ zámerne nie — značka čítania je strojový údaj, ktorý sa
prepisuje pri každom tuknutí, kým entry je číslovaný, verziovaný a ľudský záznam. Miešať ich by
znamenalo rásť tabuľkou entries pri každom pozretí do chatu.

**Skupinové mentions (B8) sem zasahujú:** keď `@group` raz bude, prioritná notifikácia pôjde každému
členovi skupiny — počítanie sa nemení, len sa rozšíri, koho sa „menovaný" týka.

### B12. Mentions z contacts — výber zo zoznamu namiesto vypisovania

Vrso 30. 9.: *„@username alebo &username pošle chat userovi a namiesto náročného manuálneho vypisovania
potrebujem zadať @ alebo & a k tomu kliknúť z listy (user, group, project — tiež ako skupina userov)."*

Napísať `@` alebo `&` otvorí zoznam z contacts modulu (Users / Groups / Projects), klik doplní meno do
textu a ENTER pošle notifikáciu **tomu userovi alebo všetkým v tej skupine**. Platí všade, kde mentions
fungujú — chat, note line aj bežný CONTENT.

Navyše **`@ALL` / `&ALL`** = všetci vo vybraných contacts daného záznamu.

**Čo k tomu chýba:** zdroj skupín. `zzz6f58_names()` dnes vracia ploché mená a contacts modul drží
zoznam mien, nie skupiny — rozbalenie „skupina → členovia" nemá z čoho čítať. Je to tá istá prekážka
ako pri B8 (`@group`), takže sa obe majú riešiť naraz: najprv povedať, kde skupiny žijú, potom sa
rozbalenie aj našepkávač napoja na ten istý zdroj.

**Čo už hotové je a dá sa použiť:** samotné mentions (`@`/`&`), ich označovanie v texte, párovanie
podržaním, udelenie prístupu k záznamu a adresovanie cez `note_to`. Chýba len výber zo zoznamu a
rozbalenie skupín.

### MIRRORING DATA (pôvodne B13) — zrkadlenie údajov medzi miestami

Vrso 1. 10.: *„B13 nazvi mirroring data alebo tak nejak. Daj do backlogu planned, aj keď sa možno
nepoužije — možno inde."*

**Téma nie je „notes v SUBS", ale všeobecnejšia:** kedy sa má údaj na druhom mieste **zrkadliť**
(automaticky sa ťahať zo zdroja) a kedy sa tam má **vložiť vedome** (kurátorovaný výber). Pre notes
v SUBS je to rozhodnuté — ale tá istá otázka príde pri každom ďalšom mieste, kam sa budú ťahať cudzie
údaje, preto si zaslúži vlastné meno a nie číslo.

**Čo z toho je POSTAVENÉ (1. 10.):**

| | |
|---|---|
| `note:<entry>/<číslo>/<písmeno>` | typ chipu v SUBS, `[Zzz1-CN:SUBS-NOTE]` |
| `ENTER TO SUBS` | jediná cesta dnu — owner, 10 s podržanie, `[Zzz1-CN:ENTER-TO-SUBS]` |
| `entry_refs` | kde odkazy žijú (stav, nie obsah) — `[Zzz1-CN:ENTRY-REFS]` |
| `zzz6f8_all_subs()` | SUBS je jeden pojem, hoci sú to dve miesta |
| Spätné vyhľadanie | odznak `↗N` pri čísle poznámky, `[Zzz1-CN:REF-BACK]` — 1. 10. |
| TAGS vo workspace | zjednotenie slovníkov všetkých viditeľných záznamov, `[Zzz1-CN:TAGS]` — 1. 10. |

**Čo sa ZAHODILO a prečo:** pôvodný bod 4 nižšie navrhoval **automatické zrkadlenie** — riadok SUBS sa
poskladá zo všetkých `is_saved = true` toho záznamu. Vrso to 1. 10. zamietol: *„mám pocit, že ty akoby si
plánovala, že hocikto pridá do subs. To asi nie je reálne, veď to by už bol len akýsi pomiešaný chat…
ja chcem, aby boli notes curated a aj selected"* + *„nech sa do subs dáva iba cez enter to sub"*.
Zrkadlenie je teda **mŕtve pre SUBS** — ostáva zapísané, lebo pre iné miesto môže byť správne.

**Čo ZOSTÁVA planned:**

1. **Zrkadlenie inde** — ak sa niekedy objaví miesto, kde má byť zoznam vždy aktuálny a nie
   kurátorovaný, platí pre neho celá úvaha nižšie. Odvodenie je zadarmo (nič sa neukladá, nič
   nezostarne), cenou je, že sa obsah nedá vybrať.
2. **Rovnaké slovo v dvoch projektoch** — workspace dnes ponúka zjednotenie slovníkov, takže `patent`
   z projektu A a `patent` z projektu B sú pre filter jedno slovo. Rozlíšiť sa dajú len spolu
   s kritériom PROJECT / ENTRY. Ak to začne prekážať, riešenie je ukázať pri chipe, z koľkých
   projektov pochádza — nie slovníky oddeliť (to by filter zneprehľadnilo).
3. **Hromadná zmena cez `↗N`** — odznak dnes len *vypíše*, ktoré záznamy poznámku používajú. Ak bude
   treba, z toho istého miesta sa dá urobiť aj zásah (odobrať ju zo SUBS všetkých naraz).

---

**Pôvodný rozpis (ponechaný, lebo body 1–3 platia a bod 4 je dôvod, prečo zrkadlenie padlo):**

1. **Tretí riadok v SUBS okne, vyhradený pre notes.** Dnes sú dva: horný systémový/needitovateľný
   (`ref-EN`, `ref-ID`, `ref-TAB`, `ref-SRC`) a dolný vlastný/mazateľný (`sub-1, sub-2…`). Notes patria
   do tretieho, lebo sú tretí druh: **odkaz na existujúci záznam** — nedá sa prepísať (ako ref-*), ale dá
   sa odobrať (ako sub-*).
2. **Číslovanie `1, 1-a, 2` áno — ale práve preto vlastný riadok.** `#23-d` je *meno* (stále, pridelené
   databázou, ukazuje navždy na ten istý riadok); `sub-2` je *pozícia* (mení sa pri preradení a mazaní).
   Dve rôzne identity sa nedajú miešať v jednom rade — preto sa nekombinujú, ale oddelia.
3. **SUBS NEbudú iba notes.** Nesú aj veci bez note za nimi — placement, tab, id, zdrojový modul. Sú to
   prepojenia, na ktorých stojí attach/move/placement. Keby SUBS boli notes-only, tá inštalatérska časť
   potrebuje nový domov a vznikne ten istý zoznam pod iným menom. Notes sú v SUBS **ďalší typ**, nie
   jediný obsah. (Že pri projektových záznamoch bude notes riadok ten dôležitý a zvyšok len prepojenia,
   je spôsob používania, nie zmena schémy.)
4. **Notes sa do SUBS NEUKLADAJÚ — riadok sa ODVODÍ.** Zrkadlenie ide opačným smerom, než vyzerá:
   SUBS drží, *ktoré* notes sem patria, nie ich obsah. A pri vlastných notes záznamu netreba držať ani to:
   riadok sa poskladá pri zobrazení z `verso_chat_notes` (všetky `is_saved = true` toho záznamu). Nič sa
   neukladá, nič sa nesynchronizuje, nič nezostarne, a hlavne to **nerazí novú verziu záznamu** pri každom
   uložení poznámky. Do `r8` sa zapíše LEN výnimka — odkaz na note **iného** záznamu (krížový odkaz).

**Prečo notes nesmú žiť priamo v SUBS** (odpoveď na tretiu otázku, dôvody sú vecné):
`r8` je jedno textové pole na jednom zázname. Notes uložené v ňom by stratili **privacy per záznam**
(`is_private`, `note_to` prestanú mať zmysel — pole má viditeľnosť celého záznamu), **číslovanie
databázou** (trigger pracuje nad riadkami, nie nad čiarkami v texte — číslo by sa vrátilo klientovi, čo je
presne tá chyba, ktorú sme odstránili), **pridávanie bez prepisu** (nová správa = prepis `r8` = nová
verzia záznamu, teda nová entry na každú správu) a **súbežný zápis** (dvaja naraz si pole prepíšu celé,
kým dnes má každá poznámka vlastný riadok).

**Väzba na ďalšie body:** hromadné vloženie vyfiltrovaných notes do SUBS (SELECT v Notes okne → tlačidlo)
je najlacnejšia časť a dá sa spraviť hneď po tomto. Krížové odkazy narazia na to isté, čo B10 — zápis do
záznamu bez razenia verzie.

**Členenie (30. 9.):** `#` JE priečinok (jeden domov, prideľuje databáza), `note_name` je priečna téma,
a to, čo chýba, je **štítok** — nový stĺpec `note_tags` na poznámke, nie v `r8`. Dôvod: v `r8` by bol na
jeden záznam a kopíroval/verzioval by sa s ním; na poznámke ide s ňou všade. Meniť sa smie napriek
nemennému textu — trigger menuje nemenné stĺpce a zvyšok autorovi povoľuje (ten istý vzor ako
`note_status`), ale **ownerovej vetve treba dopísať jeden riadok**, inak by mohol preštítkovať cudziu
poznámku. Celé aj s príkladom v `VERSO-SUBS-NOTES.md`, kapitola 8.

**Celý rozpis procesu vrátane poradia prác je v samostatnom dokumente `VERSO-SUBS-NOTES.md`** (30. 9.):
formát chipu `note:<entry>/<číslo>/<písmeno>` (ten istý kľúč ako acknowledgement), odvodený riadok pre
vlastné notes vs. uložený `note:` chip pre cudzie, štyri dôsledky podmienky „nič sa nesmie stratiť"
(mŕtvy odkaz a neviditeľný odkaz sú DVA rôzne stavy), spätné hľadanie, a päť krokov, z ktorých prvé tri
nič neblokuje.

### Zzz5-6 AUTHOR WORKSPACE — stav k 1. 10. večer (neskorší zápis)

**Modul sa po novom značí `Zzz5-6`** (Vrso: „čiže označené dufsm na foto ako Zzz5-6 Author workspace"),
každý tab nesie vlastné označenie v tvare **`Zzz5-6 Tab <názov>`**. Staré `Zzz1-CN:*` názvy funkcií
ostávajú — premenovať 37 000 riadkov kvôli menu by bolo riziko bez úžitku; nové veci sa značia `Zzz5-6`.

**ČO STOJÍ:**
- `[Zzz5-6:OPEN-GOLD]` — AUTHOR CREDITS v top-nav **svieti zlatým písmom**, kým je workspace otvorený,
  a **druhý klik ho zatvorí** — presne princíp TEMPLATES (`[Zzz2-R23:ACTIVE-GOLD]`, tá istá CSS trieda
  `zzz2r23-active`, jedno zlaté pravidlo pre celý top-nav). Zlatá sa nikdy neprepína „sama": vždy sa
  **číta zo stavu** (je okno na stránke?), takže zhasne aj keď okno zavrie niečo iné.
- `[Zzz5-6:TABS]` — prvá línia má **sedem tabov**: NOTES, PRIVATE NOTES, PROJECT NOTES, GROUP NOTES,
  FAVOURITE, OTHER NOTES, AUTHOR CREDITS.
- `[Zzz5-6:USER-TABS]` — **druhá línia** pod prvou: vlastné taby, `+` ich pridáva, ťuknutie **označuje**
  (a to isté ťuknutie odznačuje). Označený vlastný tab má zlatú pätu, aktívny pevný tab celú výplň —
  dve línie, dva stavy. Zdroj pravdy je **tabuľka `verso_note_tabs`** (`verso_note_tabs_v1.sql`,
  NENASADENÉ), localStorage je iba cache, aby línia bola hneď na obrazovke. Po zápise sa línia
  **znovu číta z tabuľky** — nie z toho, čo sa práve odoslalo (zápis mohol prejsť bez vrátenia riadku
  a tab by potom žil iba na obrazovke).
- `[Zzz1-CN:WS-TABLE]` — zoznam je **TABUĽKA**: `PROJECT | ENTRY | SUBS`. Kritériá sú **úzky pevný blok
  vľavo** (owner a názov pod sebou pod hlavičkou PROJECT, pod číslom záznamu jeho CONTENT) a **SUBS berú
  celú zvyšnú šírku**. Dávať kritériám *podiel* šírky bola chyba — pri zázname s dvadsiatimi poznámkami
  ostali tri skoro prázdne stĺpce a poznámky sa tlačili („čo za medzery medzi kritériami a subs? 🤦").
  Stĺpce: **PROJECT NAME** (owner / názov / **číslo projektu** pod sebou, každý vlastná zložka),
  **ENTRY NUMBER**, **SUBS**, **CONTENT** vpravo od SUBS — „má byť v línii, kde sú vždy kritériá všetky,
  aby sa nestalo, že chýba aspoň jedno označenie v rámci obrazovky". Dvojslovné popisy sa lámu na dva
  riadky, ako čierne tlačidlá CRM nad nimi. Hlavička je sticky.
  Poznámka v SUBS je **tlačidlo** s **chat name hore a obsahom pod ním**; číslo, autor a čas patria
  do sub linku (2× ťuk).
  Odkaz na poznámku **iného** záznamu si drží aj jeho číslo (`#201/2-b`), odkaz na vlastnú nie (`#2-b`).
- `[Zzz5-6:TAB-NOTES]` — **trojstupňová reťaz** a každý stupeň má vlastný význam:
  1. **SUB** (tlačidlo v tabuľke) má **štyri povely**, zoradené podľa toho, ako často sa použijú:
     **ťuk** otvorí poznámku **tam, kde bola zapísaná** (Notes okno jej záznamu, zaostrené na ňu);
     **2× ťuk** ukáže **celý sub link** (číslo, autor, **čas aj stav** — info, ktoré v riadku nie je);
     **1–2 s** ju **uloží** do notes window tohto tabu (to isté podržanie ju odtiaľ vyhodí; uložený sub
     má fialový okraj); **3 s** to okno **otvorí**. Rozhoduje sa až pri **pustení** prsta; pri ťuku sa
     čaká 400 ms, či nepríde druhý — bez čakania by sa dvojťuk nikdy neodlíšil.
  2. **NOTES WINDOW** — jeden **na tab**. Samo sa **neotvára**, keď doň niečo padne: pri skladaní výberu
     by vyskakovalo po každom uložení. Že uloženie prešlo, hovorí fialový okraj na sube a hláška.
     Zbierka žije na tabe, nie globálne: tab je dôvod, prečo si človek tie poznámky dáva vedľa seba.
  3. **ATTACH v notes window** — pripne **celý tab** pod notes CRM, tam, kde hlavná CRM drží svoje
     pripnuté riadky (pod MINI) — `[Zzz5-6:NCRM-ATTACH]`. To isté tlačidlo odopína.
- `[Zzz5-6:WS-RETURN]` — Notes okno a workspace sú obe `.zzz1cn-list-window` a `zzz1cn_open_list()`
  najprv všetky zavrie, takže odchod z workspacu znamenal návrat na hlavnú stránku. Teraz si okno
  odkaz „vráť sa sem" **zoberie hneď pri otvorení a globálnu hodnotu vynuluje** — patrí tomu oknu.
  Keby ostala v globále, zatvorenie Notes okna otvoreného z CRM riadku by workspace vytiahlo bez dôvodu.
- `[Zzz5-6:NOTE-ENTRY]` — **každé** Notes okno ukazuje pri NOTE tlačidle **číslo záznamu** ako zlatý
  chip („bude potrebné vo všetkých note windows... priradiť vždy entry number danej entry!!!").
  Pri rozpísanej CL (draft kľúč) sa chip nekreslí — interný kľúč užívateľovi nehovorí nič.
- `[Zzz5-6:BUILD]` — vpravo v riadku vlastných tabov stojí **značka buildu**. Vrso 1. 10. večer trikrát
  testoval staršiu nasadenú verziu a zakaždým sme hľadali chybu v niečom, čo už bolo opravené.
  Zbierka je **v pamäti**, nie v DB: je to pracovný výber pre toto otvorenie okna, nie údaj o poznámke.
  Keď z nej má byť niečo trvalé, bude to vlastná tabuľka — a to zatiaľ nepadlo.
- `[Zzz1-CN:WS-CRIT]` — kritériá sú **zložky na troch úrovniach**: owner > projekt > záznam („keď kliknem
  entry num, otvorí zoznam všetkých subs. Podobne project name a pod. Je to kvázi akoby filter vo
  filtri"). Ťuk na ownera zloží všetko jeho, na projekt všetko z projektu, na číslo len ten záznam.
  Nie je to ďalší filter v SHOW bare: filter rozhoduje, **čo v zozname je**, toto **čo je práve vidno**.
- `[Zzz1-CN:NCRM-SUBS-VALUE]` — bunka **SUBS v notes CRM sa pýta POZNÁMKY**, nie poľa `r8` záznamu:
  hľadá v čísle poznámky (`10-a`) aj v jej názve (chat name). Napísať `x` nájde `#10-a · Xxxxx`
  aj `#15-a · Xxx`. Ostatné stĺpce ostávajú na zázname — PROJECT NAME je vlastnosť záznamu, nie poznámky.
- `[Zzz1-CN:NCRM-REDUCE]` — **PRESET podržaný 3 s** zmrští notes CRM na poznámkové stĺpce
  (PROJECT OWNER / PROJECT NAME / ENTRY NUMBER / SUBS / CONTENT) a to isté späť — „aby bol zosúladený
  (ako mriežka)". Rozšírenie vracia stĺpce **presne tak, ako stáli predtým**, takže nezmaže, čo si
  človek odškrtol v MINI checkliste. Povely PRESET sú teraz: ťuk = HIDE, 1–2 s = FILTER PRESETS, 3 s =
  redukcia; rozhoduje sa až pri **pustení** prsta, časovače sú len na haptiku.
- `[Zzz1-CN:NOTE-MODULE]` — modul je **zrkadlo originálu**: zmenšenie (kruhy 0.82, dashboard 92 px) som
  zrušil, lebo tým prestal byť zrkadlom; na odloženie je povel 2× ťuk. Tlačidlá už nie sú zašedené.
  Dashboard dostal `flex-basis: 0` — má dlhší text než originál a ako flex položka sa rozširoval, takže
  sa celý modul zalamoval inak (teraz 404×141 vs originál 412×141). **Pozor:** `.zzz3-0-dashboard` je
  v súbore definovaný NIŽŠIE, takže pri rovnakej špecificite vyhráva on — preto dve triedy.
- `[Zzz1-CN:NOTE-ATTACH]` — pripnutý je **celý riadok** (číslo, autor, názov, začiatok textu), nie
  skratka. Skratka by bola odkaz, nie pripnutý riadok.
- `[Zzz1-CN:WS-MAX]` — **2× ťuk na tab maximalizuje okno**: skryje sa layout + dashboard, search CRM,
  SHOW bar a tabuľka ostávajú (maximalizuje sa práve preto, aby bolo vidno viac vyfiltrovaného).
  Ten istý dvojťuk oboma smermi. Stav žije v okne, nie v cache.

**ČO ZATIAĽ NEVIE (a prečo, aby sa to nezabudlo):**
- **GROUP NOTES a FAVOURITE sú prázdne z princípu** — poznámka nemá podľa čoho byť „skupinová" ani
  „obľúbená": také príznaky sú na chate, nie na poznámke. Tab to **povie** namiesto toho, aby ukázal
  náhodný výber. Treba rozhodnúť, **z čoho sa majú plniť** (nový stĺpec na `verso_chat_notes`? väzba
  na skupinu z comm?).
- **AUTHOR CREDITS tab** je zatiaľ prázdny — „zatiaľ ostane v tomto tabe", ale čo v ňom má byť, zatiaľ
  nepadlo.
- **PROJECT / OTHER NOTES** sú delené podľa toho, či záznam **má číslo projektu** — delia sa o všetko
  neprivátne, takže nič nevypadne. Ak to má znamenať niečo iné, treba povedať čo.
- **Search CRM + modul stoja zatiaľ len v tabe NOTES** (pôvodné „ale napr. iba v tabe notes zatial").
  Nové taby sa teda správajú ako PRIVATE NOTES. Či ich má dostať aj niektorý ďalší, je otvorené.
- **Vlastný tab zatiaľ nič nefiltruje** — označenie je označenie. Ako sa do neho poznámky dostanú
  (pripnutím? priradením?), ešte nepadlo; preto sa ani nefinguje.
- **Mazanie vlastných tabov** nie je — v comm module to je podržanie 10 s, tu zatiaľ nič.

### NOTE MODULE (Author workspace, tab NOTES) — stav k 1. 10. večer

Postavené v jednom dni, v niekoľkých prepisoch. Zapísané preto, aby sa nestratilo, **čo už padlo a prečo** —
inak sa to o mesiac postaví znova rovnako zle.

**Čo stojí:**

| | |
|---|---|
| `[Zzz1-CN:NOTE-MODULE]` | nad tabmi klon celého `.top-row` (ľavý kruh, Web line, dashboard, pravý kruh) |
| `[Zzz1-CN:NOTES-CRM]` | pod ním duplikát M4a templatu z T2c — MINI + PRESET, CL bunky oranžové (zapnuté hľadanie) |
| `[Zzz1-CN:NCRM-CMD]` | MINI: ťuk nič / 1 s checklist stĺpcov. PRESET: ťuk HIDE / 1–2 s FILTER PRESETS |
| `[Zzz1-CN:WS-CARD]` | nad poznámkami vľavo pod sebou PROJECT OWNER / PROJECT NAME / ENTRY NUMBER, vpravo mini CONTENT |
| `[Zzz1-CN:NOTE-LINK]` | SUBS sa rozbalia klikom na číslo záznamu; chip-odkaz otvorí obsah panelom pod riadkom |
| `[Zzz1-CN:NOTE-ATTACH]` | ATTACH pri texte poznámky, vlastný sklad `zzz1cnNoteAttach` |
| `[Zzz1-CN:WS-SUBS]` | riadok SUBS chipov v SHOW bare — filtrovanie naprieč vyfiltrovanými záznamami |

**Čo padlo a prečo** (tri tvary, než to sadlo):

1. **Vodorovný pás chipov** — na mobile sa zalamoval a poradie sa menilo podľa toho, čo bolo vyplnené,
   takže SUBS skončil hocikde.
2. **Sticky ľavý stĺpec vedľa poznámok** — príslušnosť držal na očiach, ale bral šírku poznámkam a sám
   bol poloprázdny.
3. **Vlastný úzky pruh stĺpcov namiesto duplikátu CRM** — vyzeral inak než šablóna a sedel v hlave
   zoznamu, čím hlava prestala vyzerať ako PRIVATE NOTES vedľa.

**Čaká na rozhodnutie:**

- **Layout modulu nemá funkcie.** `cloneNode` neprenáša obsluhy, takže 32 prebratých tlačidiel je
  zatiaľ len obraz (sú zašedené, aby to aj vyzerali). Treba povedať, **ktoré z nich majú v notes niečo
  znamenať** — vymyslieť im význam by bolo 32 hádaní. *(Vrso 1. 10. 20:29: „zatiaľ aktualizuj ako je
  a nerieš teraz detaily prečo".)*
- **PRESET 3 s** — ťuk a 1–2 s sú obsadené, 3 s ostalo nedopovedané.
- **MINI v notes CRM** — dnes beží checklist stĺpcov; či sa má správať inak, nie je potvrdené.
- **Modul v tabe PRIVATE NOTES** — zatiaľ sa tam nekreslí.
- **Vlastný search bar pri každej bunke read line** — dnes popis otvára okno so šiestimi kritériami
  + rozsah; či má byť doslova panel zo SHOW baru (bez hide), nie je potvrdené.
- **Notes otvárať VŽDY maximalizované, všade** (Vrso 2. 10., 03:04: „rule do backlog: notes vždy
  otváraj maximalizovane všade"). Zatiaľ to platí len pre NOTES TAB okno vložené pod riadkom záznamu
  (`[Zzz5-6:TAB-INLINE]`); ostatné Notes okná sa ešte otvárajú dokované.
- **Acknowledgement pri NOTES TAB** (Vrso 2. 10.: „treba myslieť aj na acknowledgement, aby sa
  minimalizovalo obchádzanie a hlavne bol vždy nejaký log aspoň"). Podržanie subu 1–2 s ho uloží
  **znova** do okna tabu cez `zzz1cn_add()` — kópia nesie len text a meno, **nie pôvodného autora ani
  zdroj** (`#záznam/číslo-časť`) a nepíše `zzz6f22_record_copy_credit` ako sub-poznámka v Notes okne.
  Cudzia poznámka sa tak dá prevziať pod vlastným menom bez stopy. Treba rozhodnúť, kde má log žiť
  (pri kópii samotnej, alebo v acknowledgement bunke) — mechanizmus copy-credit už existuje.

### ÚROVNE OVLÁDANIA A ŠPECIALIZÁCIE MODULOV (Vrso 2. 10., 12:15 — „časom doriešime")

Zapísané tak, ako to Vrso povedal; nič z toho sa zatiaľ nestavia.

- **2, resp. 3 úrovne ovládania** (= inštrukcie systému):
  1. **bez počítača**, ale s **rovnakou organizáciou dát**,
  2. **Verso PC verzia**, ktorá musí byť ovládateľná **iba tlačidlami na obrazovke**,
  3. **komerčná – sofistikovaná**.
- **Špecializácie modulov** môžu existovať popri sebe — napr. jeden modul na ovládanie systému, iný
  rieši projekty (ako nastaviť, …).
- Platí už teraz: gestá sú skratky, tlačidlá na obrazovke ostávajú vždy (pravidlo v kap. C1).

### PLACEMENT — umiestnenie každej položky (Vrso 2. 10., 21:49 — planned)

Pravidlo je v C1 a v rules. Čo treba postaviť:
- **Kde je umiestnenie uložené:** stavový údaj na zázname a na poznámke (nie štítok, nie `fields_json`)
  — návrh: stĺpec `placement` (názov vlastného tabu), SQL s menom pri stavbe.
- **Pri vzniku:** CL/EL dostane tab, ktorý je práve aktívny (označený vlastný tab), inak predvolený tab.
  WORK NOTE poznámky ho majú už dnes (kľúč `tab:<tab>`).
- **Pri uložení CL:** záznam si nesie umiestnenie CL; poznámky idú pod číslo záznamu (`[Zzz1-CN:DRAFT-KEY]`).
- **Presun:** zmena na mieste (stav), s logom kto/kedy.
- **Zobrazenie:** tab ukáže svoje položky podľa umiestnenia; položka bez umiestnenia nesmie vzniknúť
  (staré bez umiestnenia → predvolený tab pri prvom načítaní).

**Krok 1 POSTAVENÝ (2. 10., 22:30, `[Zzz5-6:PLACEMENT]`, SQL `verso_placements_v1`):** umiestnenie je
na každého svoje (vlastné taby má každý svoje) - riadok (user, položka) → tab; bez riadku = NOTES.
Záznam sa presúva podržaním čísla záznamu 3 s; nová CL dostane označený vlastný tab; označený vlastný
tab ukazuje len svoje záznamy, NOTES ukazuje všetko. Zmazaný tab → položky späť v NOTES (nič nie je nikde).

**Ďalšie kroky:** umiestnenie jednotlivej poznámky (nielen záznamu), log presunov, umiestnenie EL mimo
Author workspace, pripnuté notes na mriežke hlavnej CRM (Vrso 22:03: *„ešte počkaj… skôr áno, ale nech
reflektuje notes kategórie - neskôr a oddelene skúsime, čo bude lepšie"*).

**FOLDERS / TECHS (Vrso 2. 10., 22:03 - neskôr):** umiestnením sú zatiaľ taby; môžu pribudnúť **foldre**
(technicky asi to isté) - napr. na technické súčasti projektu: keď niekto využije Verso na programovanie
hry, uložia sa tam dáta, ktoré nie sú reálne využiteľné pre bežných užívateľov. Programátor ich nájde
podľa entry numbers alebo podľa nových subs (pracovný názov **„techs"**).

### AUDIT ZÁPISOV PROTI VERIFIKÁCII (Vrso 3. 10., 00:22 — planned)
Každá tabuľka, do ktorej appka zapisuje, musí na serveri overiť, že zapisujúci je ten, za koho sa vydáva
(`verso_jwt_username()`), a že na to má právo. Stav (3. 10.):

| Tabuľka | Stav |
|---|---|
| `verso_chat_notes` | RLS podľa `verso_jwt_username()` (autor) - OK |
| `verso_comm_users` | trigger `verso_comm_users_can_write` + zákaz eskalácie (v6) - OK |
| `verso_placements` | RLS vlastné riadky (v1) - OK |
| `verso_entries` INSERT | návrh `verso_entries_owner_is_session_v1` (owner = prihlásený) - čaká |
| `verso_entries` UPDATE / SELECT | `true` - návrh `verso_entries_rls_update_v1` čaká; SELECT podľa pravidiel viditeľnosti |
| `verso_entries.comm_setup` | presunúť do vlastnej chránenej tabuľky `verso_comm_setup` - návrh |
| `verso_consents` | RLS neoverené - čaká na výsledok `verso_protected_tables_dump` (SQL dané 3. 10. 00:26) |
| `verso_note_tabs`, `verso_trash`, `verso_audit_log` | neoverené |

### CONTACTS REGISTER (Vrso 2. 10., 23:55 / 3. 10., 00:14)
- **Postavené:** register = verifikačná databáza (registrované usernames, `verso_verification_public`, bez
  emailov); doplňovanie mien v CONTACTS = moje záznamy + registrované usernames (`[Zzz1-R17b:CONTACTS-REGISTRY]`).
  Pokus z 00:20 (register ako záznamy PROJECT 1 / owner Verso / CATEGORY Contacts) je zrušený.
- **Ďalej:** autority - kompletný zoznam + párovanie na vlastný projekt (prístup len k nemu); oddeliť časť
  verifikačnej databázy pre lokálny (offline) prístup; RLS `verso_entries` (SELECT aj UPDATE sú dnes `true`
  - návrh `verso_entries_rls_update_v1` z 3. 10. 00:40 čaká).

### CONTACTS MODULE — PAIRING (Vrso 2. 10., 23:29: „ešte musíme potom doriešiť contacts module pairing hlavne")
- Čaká na zadanie. Stav k 2. 10.: meno sa do kontaktov CL dostane cez bunku COMMUNICATION (CONTACTS riadok,
  zelené písmená = známy user) alebo podržaním @mena; do DB ide až s ENTER. Pomenovaný user potom vidí
  riadok v Preset comm module → Pairing a páruje sa COMM CONSENT. Screenshoty z 23:25-23:27 (Preset comm
  module prázdny, USER okno, CONTACTS pole) sú východisko.

### B10. Ďalšie nedoriešené

- **Zápis do záznamu BEZ razenia novej verzie** — už tri veci to potrebujú: status na entry, owner gate
  (B-bod 7) a krížové odkazy na notes v SUBS (MIRRORING DATA). Tri nezávislé prípady = nie náhoda; záznam potrebuje
  menovite vypísanú množinu polí, ktoré sú jeho **stav**, nie obsah, a smú sa prepísať so stopou
  kto-kedy. Dovtedy na to každá taká funkcia narazí.
- **Nenasadené SQL — appka všetky rozpozná sama, nový `index.html` k nim netreba:**
  - `verso_chat_seen_v1` — **bez nej notifikácie nefungujú vôbec** (nemá sa kam zapísať, pokiaľ sa kto
    dočítal). Appka beží ďalej, len sa nič nepočíta.
  - `verso_chat_notes_v10_note_to` — kým nie je, adresná správa `&user` padá fail-closed do `is_private`
    a adresát ju **nevidí**.
  - `verso_chat_notes_v11_note_priority` — kým nie je, drží sa dvojstavový `is_priority`, takže sa
    ATTENTION od URGENT neodlíši (obe sú „priorita").
  - `verso_comm_users_v4` — **výnimka z pravidla vyššie: túto appka sama neobíde.** Pridáva `can_tags`
    a `can_private` a ruší XOR delegate/exception. Bez nej sa v oknách DELEGATES / USER ROLES dve z
    piatich zaškrtávatiek neuložia a menovanie delegáta zlyhá na starom CHECKu. Migrácia v nej zaseje
    riadky už existujúcich ľudí z matice — **bez toho by nasadenie v4 potichu zobralo práva každému,
    kto už riadok má** (od v4 je riadok nadradený matici).

**Otvorená otázka k ROLE-WINDOWS** (zapísaná 1. 10., nie je chyba — je to voľba):
riadok matice **prepíše všetkých** v tej skupine, takže vlastné zaškrtnutie človeka je úprava **po**
nastavení skupiny a zmena skupiny ju zmaže. Alternatíva by bola trojstav (nenastavené / áno / nie), kde
by sa nedotknuté položky riadili skupinou navždy — to by ale znamenalo ďalšie dva stavy v DB aj v okne.
Ak ti prepisovanie začne prekážať, je to ten smer.
- Rozlíšenie chýb podľa `error.code` v `zzz1cn_add` (viď B1, bod 2)
- Číslovanie chatnote v outboxe stojí na klientskom odhade písmena
- Slovenčina → angličtina vo zvyšku appky (Notes okno je preložené, zvyšok nie)
- Status na ENTRY sa dnes nedá zmeniť bez nového čísla — čaká na jednu vetu od teba, či FINAL
  preberá obe brány z `confirmed`

---

## C. PRAVIDLÁ, KTORÉ PLATIA (nie úlohy, ale záväzné pri každej zmene)

### C0. GITHUB — odkiaľ sa berie a kam sa zapisuje `index.html`

**Repo `Versoproject/0`, vetva `main`.** Vrso index NENAHADZUJE — pracuje sa so súborom priamo z repa.
Na začiatku každého chatu repo naklonuj a rob s jeho `index.html`. Pred každým pushom stručne popíš,
čo sa mení. Keď Vrso napíše **„po starom cez v"** → namiesto pushu pošli súbor na stiahnutie.

**Podmienka:** push funguje len vtedy, keď je repo pridané medzi **sources tej session** (nastavuje sa
pri zakladaní tasku). Bez toho proxy odmietne vydať údaje — *„Versoproject/0 is not in this session's
authorized repository set"*; čítať sa dá, pushovať nie. Nie je to chyba kódu ani tokenu.

**Prvé, čo sa v novom chate robí:** porovnaj posledný commit v repe s tým, čo máš. Značka buildu
(`[Zzz5-6:BUILD]`, vpravo v riadku vlastných tabov) povie, ktorá verzia práve beží.

### C1. Ostatné pravidlá

- **Hlavný Verso modul je HLAVNÝ COMMAND MODUL a vždy musí ísť ovládať tlačidlami na obrazovke**
  (Vrso 2. 10., 12:15). Layout (kruhy povelov, Web line, dashboard) + **hlavná M4 CRM** sú spolu
  s ostatnými ovládacími prvkami jadro ovládania. Workspacy (napr. Author workspace) ich **neprekrývajú
  klonom**, ale otvárajú sa pod nimi, aby nad nimi stál originál so všetkými funkciami
  (`[Zzz5-6:WS-MAIN]`). Gestá ich smú časom schovať, ale **vždy musí ostať aj „jednoduché" ovládanie**
  viditeľnými tlačidlami, keby gesto nefungovalo (iné zariadenie, porucha, nový user). Gesto je skratka,
  nikdy jediná cesta.

- **Základná verzia Versa je po anglicky** — všetky viditeľné popisy, tlačidlá, placeholdery a hlášky
- **SQL vždy s menom**, v samostatnom skopírovateľnom bloku. Keď Claude niečo z DB potrebuje (dump, overenie,
  migráciu), **hneď dá celé SQL s menom na copy**, nikdy len odkaz na meno (Vrso 3. 10., 00:26). Dump je
  read-only a vracia **jeden výsledok** (SQL editor ukáže len posledný).
- Okná a workspacy sa **nesmú hýbať** pri bežnej práci — ani pri **otváraní okien a povelov** (podržanie
  3 s, otvorenie Notes/chat okna, note line): obrazovka nesmie poskočiť, poloha stránky aj scrollu v okne
  sa drží (Vrso 2. 10., 14:08; `[Zzz5-6:NO-JUMP]`)
- Každý modul je **adaptívny** naprieč zariadeniami; najprv zmenšiť, zalomiť až ako posledné
- `cl` = command line (obsadené), `chl`/`chat` = chat line, `nl` = note line, `w` = workspace
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
