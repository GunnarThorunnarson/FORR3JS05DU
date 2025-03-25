## Verkefni 2 _(spönn 2)_

- 20% af heildareinkunn
- Einstaklingsverkefni. 

---

### Verkefnalýsing

Búðu til eftirfarandi 2d útgáfu af [PacMan](https://en.wikipedia.org/wiki/Pac-Man) tölvuleik með JavaScript og Canvas API sem er spilanlegur í vafra (chrome) í **síma**. Notaðu [Local Port Forwarding í VS Code](https://code.visualstudio.com/docs/editor/port-forwarding) (ath. vera loggaður á símanum líka á GitHub) þegar þú vinnur með símann. <br>

Leikurinn þarf að uppfylla eftirfarandi verkþætti:

1. Umhverfi **(20%)**
   - [ ] Canvas fyllir vefsíðu [Resizing your Canvas](https://youtu.be/EO6OkltgudE?list=PLpPnRKq7eNW3We9VdCfx9fprhqXHwTPXL&t=166), [resizing event](https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_even).
   - [ ] Canvas fyllir allan skjáinn í landscape (glugga), sjá [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API) og [sýnidæmi](https://youtu.be/D74Z_0I0CUk?t=786).
   - [ ] Hafðu ramma utan um leikinn og bakgrunnslit.
   - [ ] Bættu við líf- og skorteljara í Canvas (teikna).
   - [ ] Þegar PacMan nær PacMan dots þá fær hann stig, skorteljari hækkar og PacMan dot hverfur af skjá. 
   - [ ] "Game Over!" texti birtist í Canvas þegar PacMan hefur klárað öll lífin sín eða náð að borða öll PacMan dots. **Ekki** nota _alert()_.
1. PacMan dot (pickup item) **(20%)** 
   - [ ] Búðu til amk 30 PacMan dots með function.
   - [ ] PacMan dots eru lítil hringlaga, með einhvern lit og gefa 1 stig.
   - [ ] PacMan dots eru röðuð eftir röndum (lárétt og lóðrétt) á skjá.
   - [ ] Notaðu fylki til að geyma PacMan dots.
1. PacMan (player) **(20%)**
   - [ ] Búðu til klasa (class) fyrir PacMan. PacMan er með 3 líf, hringlaga form, gulur og með munn, sýnidæmi [myndband](https://www.youtube.com/watch?v=ysG37V_j1Xs).
   - [ ] PacMan object inniheldur aðferðir sem þarf t.d. `draw()`, `update()`, `handleEvent()`
   - [ ] Þegar PacMan rekst á Ghost þá; missir PacMan eitt líf, lífteljari lækkar og PacMan fer aftur á upphafsreit (athugaðu tilfellið ef draugur er í upphafreit).
   - [ ] Bættu við [tritringi](https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API) þegar PacMan rekst á draug. 
1. Ghosts (npc) **(20%)**  
   - [ ] Búðu til klasa (class) fyrir Ghosts. Ghosts eru er með hrinlaga form, augu og eru mismunandi á lit (red, pink, cyan, orange) og hraða. Búðu til eftirfarandi objecta; Blinky (red), Pinky (pink), Inky (cyan) og Clyde (orange).
   - [ ] Ghosts class inniheldur aðferðir sem þarf t.d. `draw()`, `update()`, `handleEvent()`.
   - [ ] Ghost eru staðsettir á mismunandi stöðum á skjá og elta PacMan með mismunandi hætti (t.d. hraða).
1. Stjórnun á PacMan **(20%)**
   - [ ] PacMan hreyfast í fjórar áttir (N, S, V, A) með fingri, notaðu [Pointer events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events/Using_Pointer_Events).
   - [ ] PacMan á ekki að komast út fyrir jaðar á Canvas.
   - [ ] PacMan munnur á að snúa í þá átt sem er stýrt. <!-- munnur opnast og lokast -->

   
<br>

<details>
   
   
<summary>Punktar</summary>

- til að resize virki dýnamískt þá þarf að **hlusta** á resize atburð 
  ```JavaScript
   window.addEventListener('resize', function(){
       width = canvas.width = window.innerWidth;
       height = canvas.height = window.innerHeight;
       init();  // stillingar 
    })
    init();
  ``` 
- Til að losna við scrollbarinn (css): `body { margin: 0; overflow: hidden; }`
- Til að láta border vaxa innávið (css): `canvas { box-sizing: border-box; }`

<br>

</details>

<!--
Til að spila leik í síma (valkvæmt):
- [ ] Útfærðu [touch](https://www.codeguage.com/courses/js/touch-events-introduction) til að stýra áttinni sem PacMan á að fara svo hægt sé að spila leikinn líka í síma.
- [ ] Bættu við völdu [hljóði](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio) og [tritringi](https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API) þegar PacMan rekst á draug, [sýnidæmi](https://youtu.be/Eg_zUEy_lDE?t=1384). 

-->

---

### Námsmat og skil	

Einkunn fyrir hvern verkþátt sem er útfærður:
   - 10  allt útfært með fullnægjandi hætti. 
   - 7.5 flest allt útfært, smávægilega ábótavant.
   - 5   ábótavant, helmingur af veigameiri liðum útfærðir. 
   - 2,5 lítil virkni.
   - 0   vantar eða allt stórlega ábótavant.

Skilaðu á Innu html skrá sem inniheldur CSS og JavaScript.<br>

**Athugaðu!**
> Passaðu að þú getir útskýrt fyrir kennara allan kóða sem þú skilar, getir þú það ekki verður gefið 0 (núll) fyrir verkefnið (þ.e. ef kennari óskar eftir því). <br>
> Það er **ekki** í boði að vera með lausnir eða útfærslur (t.d. tilemaps) sem samræmist ekki verkefnalýsingu (nema það sé með fyrirfram gefnu leyfi frá kennara). 
