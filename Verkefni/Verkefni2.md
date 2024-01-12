## Verkefni 2 
- 15% af heildareinkunn

---

### Verkefnalýsing
Búðu til einfaldan PacMan leik fyrir **tölvu** sem uppfyllir eftirfarandi:

1. Búðu til object fyrir Pac-Man: **(20%)**
   - [ ] Pac-Man er gerður úr [sprites](https://spicyyoghurt.com/tutorials/html5-javascript-game-development/images-and-sprite-animations) með hrinlaga form, gulan lit, auga og munn (sem opnast og lokast).
   - [ ] Pac-Man er með 3 líf.
   - [ ] Láttu PacMan byrja í miðjum skjá og hreyfast með lyklaborði [(Keyboard Events)](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/Events) (N, S, V, A) á skjáborði.
   - [ ] PacMan á ekki að komast út fyrir jaðar á Canvas.
1. Búðu til klasa (class) fyrir dots: **(10%)**
   - [ ] Pac-Man dots eru lítil hringlaga og gul á lit.
   - [ ] Pac-Man dots eru dreifð random á skjá og gefa 1 stig.
   - [ ] Búðu til 50 Pac-Man dots objecta, notaðu fylki.
1. Búðu til klasa (class) fyrir Ghost: **(20%)**  
   - [ ] Ghost eru gerðir úr [sprites](https://spicyyoghurt.com/tutorials/html5-javascript-game-development/images-and-sprite-animations).
   - [ ] Ghost eru staðsettir random á skjá og fara í random áttir.
   - [ ] Ghost á ekki að komast út fyrir jaðarinn á Canvas heldur að skoppast af honum. Ghost fer í gegnum annan Ghost (ekki e. collision).
   - [ ] Búðu til eftirfarandi objecta; Blinky (red), Pinky (pink), Inky (cyan) og Clyde (orange). 
1. Búðu til föll fyrir árekstur (e. collision): **(30%)**  
   - [ ] Þegar PacMan nær Pac-Man dots þá fær hann stig, skorteljari hækkar og Pac-Man dot hverfur af skjá. **(15%)**
   - [ ] Þegar PacMan rekst á Ghost þá á PacMan að missa líf, lífteljari lækkar og PacMan byrja aftur á upphafsreit. **(15%)**
1. Canvas: **(20%)**  
   - [ ] Fall sem sér um að hreinsa, teikna og uppfæra objecta í Canvas með `window.requestAnimationFrame()`. **(5%)**
   - [ ] Canvas nýtur allan vafragluggan, sjá [Resizing your Canvas](https://youtu.be/EO6OkltgudE?list=PLpPnRKq7eNW3We9VdCfx9fprhqXHwTPXL&t=166). **(5%)**
   - [ ] Bættu við skor- og lífteljara í Canvas. **(5%)**
   - [ ] "Game Over!" texti birtist í Canvas þegar Pac-Man hefur safnað öllum PacMan dots eða klárað lífin sín. **(5%)**

<br>

**Ath**. Það er **ekki** í boði að vera með aukalega virkni (t.d. tiles) eða kóðalausnir sem samræmist ekki það sem beðið er um í verkefnalýsingu.

---

### Námsmat og skil	
* Gefið er fullt fyrir lið sem er vel útfærður, hálft ef hann er ábótavant. 
* Skilaðu á Innu html skrá með JavaScript kóðalausn.


<!--
- [myndband](https://www.youtube.com/watch?v=ysG37V_j1Xs).
- taka út pacman teikningu útaf tíma, og draga úr áherslu á canvas teikningar (samt æfing í this og harðkóðun).  
-->
