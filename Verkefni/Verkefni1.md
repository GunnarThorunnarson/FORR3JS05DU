## Verkefni 1
- 25% af heildareinkunn

### Verkefnalýsing
Búðu til eigin útgáfu af [Pac-Man](https://en.wikipedia.org/wiki/Pac-Man) með Canvas sem er spilanlegur í chrome vafra í Android síma. Það er ekki í boði að skila inn lausn með tilemaps útfærslu og kóðinn þarf að vera þinn eigin (**ekki** tutorial). <br>

Notaðu [Device mode](https://developer.chrome.com/docs/devtools/device-mode/#type) í Developer tools í vafra, sjá einnig [CSS stillingar](https://youtu.be/D74Z_0I0CUk?t=286) til að prófa leikjavirkni í **tölvu**.<br>
Til að prófa leikinn í **síma**:
1. Hægt er að láta Github hýsa kóðann og nota Git (push/pull), public, pínu slow update   
1. Live Server extension í VSCode: [How to use VS Code Live Server Local Host on Mobile phone](https://medium.com/@pavankapoor31/how-to-use-vs-code-live-server-local-host-on-mobile-phone-8b38a62117d2), sími og tölva þurfa bæði að vera á sama private network
1. tengja með usb snúru, ADB Reverse socket  

---

### Leikurinn þarf að uppfylla eftirfarandi:

1. Leikjahlutir (objects) (**20%**)
   - [ ] Notaðu class og fylki til að halda utan um objects.
   - [ ] Pac-Man er með hrinlaga form, lit, auga og munn. Pac-Man er með 3 líf og byjar alltaf á sama stað. 
   - [ ] Ghosts;  Blinky (red), Pinky (pink), Inky (cyan) og Clyde (orange). Ghosts eru staðsettir random á skjá og fara í random áttir en komast ekki út fyrir jaðar skjás heldur skoppast af honum. 
   - [ ] 4 x Pac-Man Power Pellets, staðsettir í hornum sem blikka. 
   - [ ] Pac-Man dots dreift um skjáinn. 
   - [ ] Hindranir, frjáls útfærsla, tilemaps er ekki í boði.
1. Leikjastjórnun. (**25%**)
   - [ ] Hægt er að stýra Pac-Man í allar áttir (N,S,V,A,NA,NV,SV,SA) með lyklaborði. 
   - [ ] Pac-Man á ekki að geta komist út fyrir jaðar á canvas. 
   - [ ] Munnur færist í þá átt sem Pac-Man er stýrt. 
   - [ ] Hægt er að stýra Pac-Man í allar áttir með touch. 
   - [ ] Útfærðu swipe fyrir Pac-Man, lengra swipe skilar meiri hröðun. 
1. Árekstur við leikjahluti. (**25%**)
   - [ ] Þegar Pac-Man safnar Pac-Man dots þá hækkar stigateljari.
   - [ ] Notaðu [Vibration API](https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API) þegar Pac-Man safnar Pac-Man dots. _vibration virkar ekki í Iphone_
   - [ ] Þegar ghost rekst á Pac-Man þá missir Pac-Man líf.
   - [ ] Þegar Pac-Man nær Power Pellet þá breyta ghosts um lit í smá tíma, á þeim tíma getu PacMan drepið þá og fengið stig. Ghosts sem Pac-Man drepur birtast aftur á skjá.
1. Start og Game Over (**20%**)
   - [ ] Leið (t.d. touch) til að byrja leik. 
   - [ ] Leik er lokið þegar Pac-Man hefur safnað öllum Pac-Man dots eða klárað lífin sín.  
   - [ ] Líf- og stigateljari fyrir Pac-Man. 
   - [ ] Notaðu [localStorarage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) til að halda utan um og geyma hæsta leikjaskorið.
1. Skjárinn (**10%**)
   - [ ] Leikur fyllir skjáinn í símanum. [Creating and resizing your Canvas](https://youtu.be/EO6OkltgudE?list=PLpPnRKq7eNW3We9VdCfx9fprhqXHwTPXL&t=166). [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API) og [sýnidæmi](https://youtu.be/D74Z_0I0CUk?t=786). 
   - [ ] leikjaspilun er stillt fyrir landslagsstillingu (landscape) í síma. Sjá t.d. [Screen Orientation API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Orientation_API),  [Window: resize event](https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event) og [sýnidæmi](https://youtu.be/vxljFhP2krI?list=PLpPnRKq7eNW3We9VdCfx9fprhqXHwTPXL&t=1272)

 
 <br>
 
_Það er einnig í boði að vinna með [P5.js](https://p5js.org/) safnið og aðra skynjara t.d. [orientation](https://marmelab.com/blog/2020/02/05/getting-the-ball-rolling-with-devicemotion.html) og gravity með samþykki kennara_

---

### Námsmat og skil	

* Fyrir hvern lið; fullt fyrir fullnægjandi útfærslu, 3/4 ef smávægilega ábótavant, hálft ef ábótavant, ekkert ef stórlega ábótavant.
* Skilaðu á Innu HTML skrá sem inniheldur CSS og JavaScript.

 
