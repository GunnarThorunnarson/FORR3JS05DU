## Verkefni 5: Leikur (25%) 

- Einstaklingsverkefni. 
- Tími: 3 vikur.

---

### Verkefnalýsing
Búðu til 2d tölvuleik sem er spilanlegur í snjallsíma i vafra. Leikurinn er gerður í Canvas API og notar símaskynjara (device sensors).<br>
Viðfangsefni leiks er frjálst en kóðinn og leikurinn verður að vera þín eigin sköpun (ekki tutorial). Skoðaðu nánar [Leikjagerð](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/Leikjager%C3%B0). <br> 
Söfn eru **ekki** leyfð.

Leikurinn þarf að uppfylla eftirfarandi atriði:

1. Umhverfi og uppsetning (Game loop/engine) (10%)
1. Game objects (player, obstacles, items, NPCs) (10%)
1. Leikjastjórnun (e. game controls). (30%)
   - Notaðu símaskynjara fyrir leikjastýringu ; [Mobile touch controls](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events) (t.d. tapping, swipe), [Device Orientation & DeviceMotion API](https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation) osfrv.
1. [Collision detection](https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection) (20%)
   - Notað er eitt af eftirfarandi við árekstur; Vibration API, Animation eða Mobile audio.
   - Interactions between game objects (stigasöfnun, líf).
1. Start Screen  (15%)
   - leiðbeiningar um spilun.
   - takki til að spila leik. 
   - form til að skrá nafn á spilara.
1. Game Over Screen (15%)
   - Highskor tafla sem sýnir top 5 spilara ásamt stigagjöf.
   - Notaðu [localStorarage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) til að halda utan um og geyma leikjaskor og nafn spilara.
   - takki til að spila aftur leik.

Til að prófa leikinn í síma meðan þú ert að þróa hann þá þarf að nota local vefþjón:
[NodeJS - Setup a Simple HTTP Server / Local Web Server](https://jasonwatmore.com/post/2016/06/22/nodejs-setup-simple-http-server-local-web-server)

---

### Námsmat og skil
* Skilaðu á Innu vefslóð á **private** Github geymslu sem inniheldur leik, kóða og gögn. Mundu að bjóða mér _GunnarThorunnarson_. 
* Notaðu Github Pages til að hýsa leikinn þinn (docs mappa í rót).
* Í readme.md skal koma fram; lýsing tölvuleiks, skýringar t.d. ókláruð virkni og tengill á spilanlegan leik.
* Skrifaðu íslenskar athugasemdir hjá föllum og objectum í kóðaskrá.
* Verkefnið er metið útfrá vinnuframlagi, málfræðinotkun og ofangreindum atriðum. Gefið er fullt fyrir fullnægjandi útfærslu, hálft ef hún er ábótavant.

 
 
