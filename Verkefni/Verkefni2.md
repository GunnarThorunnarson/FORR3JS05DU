## Verkefni 2 

- 25% af heildareinkunn
- Einstaklingsverkefni. 

---

### Verkefnalýsing

Búðu til eftirfarandi 2d útgáfu af [PacMan](https://en.wikipedia.org/wiki/Pac-Man) tölvuleik með JavaScript og Canvas API sem er spilanlegur í vafra (chrome) í **tölvu** og með **síma**. Notaðu [Local Port Forwarding í VS Code](https://code.visualstudio.com/docs/editor/port-forwarding) (ath. vera loggaður á símanum líka á GitHub) þegar þú vinnur með símann. 

Verkþættir:

1. Umhverfi og skjár **(15%)**
   - [ ] Canvas fyllir vefsíðu [Resizing your Canvas](https://youtu.be/EO6OkltgudE?list=PLpPnRKq7eNW3We9VdCfx9fprhqXHwTPXL&t=166), [resizing event](https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event).
   - [ ] Hafðu ramma utan um leikinn og bakgrunnslit og bættu við líf- og skorteljara í Canvas (teikna eða texti í Canvas).
   - [ ] Game Over! og lokaskor birtist í Canvas þegar PacMan hefur klárað öll lífin sín eða náð að borða öll PacMan dots. **Ekki** nota _alert()_.
   - [ ] Passaðu að uppfærslutíðni (Hertz) stýri ekki leikjahraða á mismunandi tækjum (sími og tölva).
1. PacMan dot (pickup item) **(15%)** 
   - [ ] Búðu til c.a. 30 - 50 PacMan dots.
   - [ ] PacMan dots eru lítil hringlaga, með einhvern lit og gefa 1 stig.
   - [ ] PacMan dots eru raðað eftir röðum á skjá.
   - [ ] Notaðu array til að geyma PacMan dots.
1. Ghosts (npc) **(20%)**  
   - [ ] Búðu til **class** fyrir Ghosts. Ghosts eru er með völdu formi, augu og eru mismunandi á lit (red, pink, cyan, orange), hraða og stærð. Búðu til eftirfarandi objecta; Blinky (red), Pinky (pink), Inky (cyan) og Clyde (orange). Ghosts class inniheldur aðferðir eftir þörfum.
   - [ ] Ghost eru staðsettir handahófskennt á skjá og hreyfa sig á mismunandi hátt (frjáls útfærsla).
   - [ ] Ghosts komast ekki útfyrir jaðar á Canvas.
   - [ ] Þegar Ghost er nálægt PacMan þá reynir Ghost að elta PacMan.
1. PacMan (player) **(25%)**
   - [ ] Búðu til **object** fyrir PacMan. PacMan er með 3 líf, hringlaga form, gulur og með munn, sýnidæmi [myndband](https://www.youtube.com/watch?v=ysG37V_j1Xs). PacMan inniheldur aðferðir sem hann þarf. Valkvæmt: Munnur á að opnast og lokast. 
   - [ ] Þegar PacMan snertir Ghost missir PacMan eitt líf, lífteljarinn lækkar, PacMan og Ghosts fara aftur á upphafsreiti (respawn). 
   - [ ] Bættu við völdu [hljóði](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio) þegar PacMan rekst á Ghost, [sýnidæmi](https://youtu.be/Eg_zUEy_lDE?t=1384). 
   - [ ] Þegar PacMan nær PacMan dots þá fær hann stig, skorteljari hækkar og PacMan dot hverfur af skjá.
1. Stjórnun á PacMan **(25%)**
   - [ ] PacMan hreyfast í fjórar áttir (N, S, V, A) með lyklaborði.
   - [ ] PacMan hreyfast í fjórar áttir (N, S, V, A) með fingri í síma, notaðu [Pointer events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events/Using_Pointer_Events) (frjáls útfærsla).
   - [ ] Ef PacMan fer út af skjánum öðrum megin, þá birtist hann aftur hinum megin.
   - [ ] PacMan munnur á að snúa í þá átt sem er stýrt.


<br> **Athugaðu:** Leikurinn á **ekki** að innihalda neina veggi eða Power Pellets.

---

### Námsmat og skil	

Til að fá verkefnið metið til einkunna:

- Það þarf að nota Git og Github frá byrjun á kóðavinnu, og reglulega á tímabilinu 26.01 - 02.02 (lágmark eitt `git push` í hverri kennslustund). Ef þetta er ábótavant þá jafngildir það 0 (núll) í einkunn fyrir verkefnið.
- Það er **ekki** í boði að vera með lausnir eða útfærslur sem samræmist ekki verkefnalýsingu, það jafngildir 0 (núll) í einkunn fyrir verkefnið.
- Þú þarft að geta útskýrt fyrir kennara **allan** kóða sem þú skilar, getir þú það ekki verður gefið 0 (núll) í einkunn fyrir verkefnið.
- Það er ekki í boði að nota gervigreind til að gera kóðavinnuna fyrir þig.

Einkunn fyrir hvern verkþátt sem er útfærður:
   - 10  allt útfært með fullnægjandi hætti. 
   - 7.5 flest allt útfært, smávægilega ábótavant.
   - 5   ábótavant, helmingur af veigameiri liðum útfærðir. 
   - 2,5 lítil virkni.
   - 0   vantar eða allt stórlega ábótavant.

Skilaðu á Innu **v2.html** skrá sem inniheldur JavaScript og CSS. <br>
Skilaðu einnig Github (**private**) vefslóð á verkefnalausn. Mundu að bjóða mér aðgang (collabratorator) að Github repository, notendanafnið mitt er _GunnarThorunnarson_ eða _gus@tskoli.is_.



<!-- 
Í kennslustund verður lagt skriflegt tímaverkefni þar sem þú þarft að breyta kóðavirkni og svara spurningum byggt á ofangreindum verkþáttum. 
-->
