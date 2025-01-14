## Verkefni 2 

- 20% af heildareinkunn
- Einstaklingsverkefni. 

https://www.codeguage.com/courses/js/events-keyboard-events

---

### Verkefnalýsing

Búðu til eftirfarandi 2d útgáfu af [PacMan](https://en.wikipedia.org/wiki/Pac-Man) tölvuleik með JavaScript og Canvas API sem er spilanlegur í vafra (chrome) í tölvu. Leikurinn þarf að uppfylla eftirfarandi verkþætti:

1. Umhverfi: **(10%)**
   - [ ] Canvas fyllir vefsíðu [Resizing your Canvas](https://youtu.be/EO6OkltgudE?list=PLpPnRKq7eNW3We9VdCfx9fprhqXHwTPXL&t=166).
   - [ ] Bættu við líf- og skorteljara í Canvas (teikna) og hafðu svartan bakgrunnslit. 
1. PacMan dot (pickup item) **(10%)** 
   - [ ] Búðu til 10 PacMan dots objecta.  
   - [ ] PacMan dots eru lítil hringlaga, með einhvern lit og gefa 1 stig.
   - [ ] PacMan dots eru dreifð random á skjá.
   - [ ] Notaðu fylki til að geyma objectana.
1. PacMan (player) **(20%)**
   - [ ] Búðu til **object** fyrir PacMan (**ekki class**). PacMan er með hrinlaga form, gulur með auga og munn, sýnidæmi [myndband](https://www.youtube.com/watch?v=ysG37V_j1Xs). Pac-Man er með 3 líf.
   - [ ] PacMan hreyfast í fjórar áttir (N, S, V, A) með lyklaborði.
1. Ghosts (npc) **(20%)**  
   - [ ] Búðu til klasa (class) fyrir Ghosts. Ghosts eru er með hrinlaga form og eru mismunandi á lit (red, pink, cyan, orange). Búðu til eftirfarandi objecta; Blinky (red), Pinky (pink), Inky (cyan) og Clyde (orange). 
   - [ ] Ghost eru staðsettir á mismunandi stöðum á skjá og elta PacMan.
1. Árekstur (collision) **(30%)**
   - [ ] PacMan á ekki að komast út fyrir jaðar á Canvas.
   - [ ] Þegar PacMan nær PacMan dots þá fær hann stig, skorteljari hækkar og PacMan dot hverfur af skjá. 
   - [ ] Þegar PacMan rekst á Ghost þá; missir PacMan eitt líf, lífteljari lækkar, hann stækkar og fer aftur á upphafsreit. 
1. Game Over **(10%)**
   - [ ] "Game Over!" texti birtist í Canvas þegar PacMan hefur klárað öll lífin sín. **Ekki** nota _alert()_.
   - [ ] Bættu við völdu [hljóði](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio) þegar leikur endar, [sýnidæmi](https://youtu.be/Eg_zUEy_lDE?t=1384). 

<br>

<details>
   
<summary>Hints</summary>

- Til að losna við scrollbarinn: `body { margin: 0; overflow: hidden; }`
  
<br>

</details>

<!--
Til að spila leik í síma (valkvæmt):
- [ ] Canvas fyllir allan skjáinn (glugga), sjá [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API) og [sýnidæmi](https://youtu.be/D74Z_0I0CUk?t=786).
- [ ] Útfærðu [touch](https://www.codeguage.com/courses/js/touch-events-introduction) til að stýra áttinni sem PacMan á að fara svo hægt sé að spila leikinn líka í síma.
-->

---

### Námsmat og skil	

Einkunn fyrir hvern verkþátt sem er útfærður:
   - 10  allt útfært með fullnægjandi hætti. 
   - 7.5 flest allt útfært, smávægilega ábótavant.
   - 5   ábótavant, helmingur af veigameiri liðum útfærðir. 
   - 2,5 lítil virkni.
   - 0   vantar eða allt stórlega ábótavant.

Skilaðu á Innu html skrá sem inniheldur CSS og JavaScript ásamt hljóðskrá. <br>
Það er **ekki** í boði að vera með lausnir eða útfærslur (t.d. tilemaps) sem samræmist ekki verkefnalýsingu, það jafngildir 0 í einkunn. 

