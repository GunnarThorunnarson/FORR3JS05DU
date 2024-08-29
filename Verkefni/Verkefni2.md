## Verkefni 2 

- 25% af heildareinkunn
- Einstaklingsverkefni. 

---

### Verkefnalýsing

Búðu til eftirfarandi 2d útgáfu af [Pac-Man](https://en.wikipedia.org/wiki/Pac-Man) tölvuleik með JavaScript og Canvas API sem er spilanlegur í vafra (chrome) í tölvu. Leikurinn þarf að uppfylla eftirfarandi verkþætti:

1. Umhverfi: **(10%)**  
   - [ ] Canvas nýtur allan vafragluggan, sjá [Resizing your Canvas](https://youtu.be/EO6OkltgudE?list=PLpPnRKq7eNW3We9VdCfx9fprhqXHwTPXL&t=166) og fyllir allan skjáinn í símanum. Sjá [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API) og [sýnidæmi](https://youtu.be/D74Z_0I0CUk?t=786).
   - [ ] Bættu við líf- og skorteljara í Canvas með bakgrunnslit (ekki hvítur). 
1. Power Pellets (powerup item) **(10%)**
   - [ ] Búðu til 4 Power Pellets objecta.
   - [ ] Power Pellets eru hringlaga með einhvern lit og staðsett í hornunum á skjánum.
1. Pac-Man dot (pickup item) **(10%)** 
   - [ ] Búðu til 10 Pac-Man dots objecta með að nota [constructor fall](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects#using_a_constructor_function), notaðu fylki til að geyma objectana.  
   - [ ] Pac-Man dots eru lítil hringlaga, með einhvern lit og gefa 1 stig.
   - [ ] Pac-Man dots eru dreifð random á skjá.
1. Pac-Man (player) **(20%)**
   - [ ] Búðu til object fyrir Pac-Man. PacMan er með hrinlaga form, gulur á lit með auga og munn, [sýnidæmi](https://www.youtube.com/watch?v=ysG37V_j1Xs). Pac-Man er með 3 líf.
   - [ ] PacMan hreyfast í fjórar áttir (N, S, V, A) með lyklaborði [(Keyboard Events)](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/Events#st%C3%BDringar).
   - [ ] PacMan á ekki að komast út fyrir jaðar á Canvas.
   - [ ] Láttu PacMan byrja á miðjum skjánum.
1. Ghosts (npc) **(20%)**  
   - [ ] Búðu til klasa (class) fyrir Ghosts. 
   - [ ] Ghosts eru er með hrinlaga form og eru mismunandi á lit (red, pink, cyan, orange).
   - [ ] Ghost eru staðsettir á mismunandi stöðum á skjá og hreyfa sig á ákveðinn hátt (behavior) t.d. fara í random áttir, fara eftir ákveðinni slóð (path) eða elta PacMan, frjáls útfærsla.
   - [ ] Ghost á ekki að komast út fyrir jaðarinn á Canvas heldur að breyta um átt. Ghost fer í gegnum annan Ghost (ekki collision).
   - [ ] Búðu til eftirfarandi objecta; Blinky (red), Pinky (pink), Inky (cyan) og Clyde (orange). 
1. Árekstur (collision) **(30%)**  
   - [ ] Þegar PacMan nær Pac-Man dots þá fær hann stig, skorteljari hækkar og Pac-Man dot hverfur af skjá. 
   - [ ] Þegar PacMan rekst á Ghost þá á PacMan að missa líf, lífteljari lækkar og PacMan byrja aftur á upphafsreit. 
   - [ ] "Game Over!" texti birtist í Canvas þegar Pac-Man hefur klárað öll lífin sín. Bættu líka við einhverju [hljóði](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio), [sýnidæmi](https://youtu.be/Eg_zUEy_lDE?t=1384). 
   - [ ] Þegar PacMan nær Power Pellet þá gerist eitthvað (einhver virkni), frjáls útfærsla. 

<br>

> **Bónus** (valkvæmt) Útfærðu touch til að stýra áttinni sem Pac-Man á að fara svo hægt sé að spila leikinn líka í síma.

---

### Námsmat og skil	

Einkunn fyrir hvern verkþátt sem er útfærður:
   - 10  allt útfært með fullnægjandi hætti. 
   - 7.5 flest allt útfært, smávægilega ábótavant.
   - 5   ábótavant, helmingur af veigameiri liðum útfærðir. 
   - 2,5 lítil virkni.
   - 0   vantar eða allt stórlega ábótavant.

Skilaðu á Innu möppu með skrám.

<!-- 
Það er **ekki** í boði að vera með lausnir eða útfærslur (t.d. tilemaps) sem samræmist ekki verkefnalýsingu. 
-->
