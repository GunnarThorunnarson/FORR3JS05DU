# Verkefni 3 

- 30% af heildareinkunn
- Einstaklingsverkefni

---

### Verkefnalýsing 🎃

Búðu til [SPA](https://developer.mozilla.org/en-US/docs/Glossary/SPA) sem heldur utan um Hrekkjavöku í hverfinu þínu. Hrekkjavakan er haldin hátíðleg 31. október ár hvert með nammileit venjulega frá kl. 17 - 19. Vefappið á að virka í síma og tölvu. 

> Valkæmt: Notaðu [JavaScript Modules](https://www.freecodecamp.org/news/difference-between-default-and-named-exports-in-javascript/) fyrir kóðaskipulag.

---

#### 1. Forskráð gögn og fetch (10%)

1. [ ] Búðu til JSON skránna `halloween.json` sem inniheldur eftirfarandi fyrir hvert hús sem vill taka þátt í að dreifa nammi (lágmark 10 skráningar): 
    - heimilisfang, húsnúmer og íbúðanúmer, póstnúmer.
    - lengdar- og breiddargráður af staðsetningu á húsi. Notaðu Google Maps til að finna hnitin.
    - upplýsingar um hvernig á að hringja bjöllunni (t.d nafn á bjöllunni eða númer).
    - skrá ef boðið er uppá mjólkurlaust eða hnetulaust sælgæti.
    - tímasetning hvenær nammi er í boði sem er mismunandi (t.d 18:00 - 19:00). 
    - ljósmynd af skreyttu húsi eða útihurð.
1. [ ] Gögnin eru sótt með [fetch](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/Asynchronous).
   
> [!NOTE]
> - Fetch sækir ekki JSON skrá nema þú notar `local server` eins og [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (extension í VSCode)

<!--  - staðan á nammminu, búið eða ekki (skráðu 2 hús þannig að nammið er búið í JSON skránni) -->

---

#### 2. Card (20%)

Hægt er að skoða myndir og helstu upplýsingar um hús.

1. [ ] Búðu til [`Card`](https://www.w3schools.com/howto/howto_css_cards.asp) fyrir hvert hús sem inniheldur [mynd](https://softauthor.com/javascript-working-with-images/) af húsi eða útihurð, heimilisfang, ofnæmisupplýsingar, tímasetningu fyrir nammileit og fjarlægð frá þér í metrum. 
1. [ ] Notaðu íslenskt sniðmát fyrir tíma t.d. kl: 17:00 - 19:00. Sjá t.d. [The Definitive Guide to JavaScript Date and Time](https://bugfender.com/blog/javascript-date-and-time/).
1. [ ] Notaðu CSS fyrir vefuppsetningu (layout) og framsetningu t.d. Flexbox eða CSS Grids eða CSS safn að eigin vali. 

> Byrjaðu á því að harðkóða allar fjarlægðir áður en unnið er með geolocation (lið 6).

---

#### 3. Dynamic Range Slider (20%)

Notaðu [HTML Range slider](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) til að sýna hús útfrá fjarlægð frá þér. 

1. [ ] Slider er með svið (e. range) upphafsstöðurnar lægsta og hæsta tala út frá gögnum sem eru sýnileg.
1. [ ] Slider sýnir hraða með þrepum (steps) við notkun á slider sjá td. [onchange vs oninput](https://www.impressivewebs.com/onchange-vs-oninput-for-range-sliders/)
1. [ ] Notaðu gildið (e. value) frá slider til sía út (e. filter) húsin sem eru sýnd (Cards).
1. [ ] Notandi á að geta stýrt slider sem síar út hús eftir fjarlægð frá þér.

> Byrjaðu á því að harðkóða allar fjarlægðir áður en unnið er með geolocation (lið 6).

---

#### 4. Nammileit og tími (15%)

Notandi getur séð húsin út frá tímabili þegar nammi er í boði fyrir nammileitina (t.d. milli 17:00 og 19:00).

1. [ ] Notaðu [flatpickr: time-picker](https://flatpickr.js.org/examples/#time-picker) (JS safn) 
1. [ ] Tímasetningar eru forskráðar útfrá gögnum úr JSON og markar svið (e. range) þess.
1. [ ] Notandi á að geta síað út heimilisföng útfrá tíma (frá og til) til að sjá hvaða hús bjóða uppá nammi á því tímabili. 

> [time](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/time)

---

#### 5. Kort (20%)
Hægt er að skoða sérsniðið kort fyrir nammileit.

- [ ] Kort sýnir staðsetningu (lengdar- og breiddargráður) allra húsa (e. marker). Notaðu [Leaflet](https://leafletjs.com/examples/quick-start/) safnið.
- [ ] Teiknaðu mörkin utan um leitarsvæðið þ.e. hverfið. 
- [ ] Hægt er að sjá hús sem bjóða nammi fyrir þau sem eru með ofnæmi, [sýnidæmi](https://www.google.com/maps/d/viewer?mid=11EAQly9JnnG9AuZhL-yHmTD0KsRZB_8&ll=64.14573221690978%2C-21.92584639413263&z=14)
- [ ] Teiknaðu á kortið línur á milli allra húsa sem sýnir styðstu leiðina (e. pathfinding).

<!-- - [ ] hægt er að taka út hús af korti þar sem nammið hefur klárast (forskráð í JSON). -->

---

#### 6. Geolocation (15%)
- [ ] Notaðu takka til að virkja Geolocation.
- [ ] Notaðu [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) til að sýna fjarlægð í metrum á húsum sem eru næst þér í Cards.

<!--
> Notaðu [Local Port Forwarding í VS Code](https://code.visualstudio.com/docs/editor/port-forwarding) (ath. vera loggaður á símanum líka á GitHub) þegar þú vinnur með Geolocation.
-->

---

### Námsmat og skil

- Skilaðu á Innu möpppu með HTML, CSS og JavaScript skrár.
- Einkunn fyrir hvern lið: 
    - 10 lausn er vel útfærð.
    - 7.5 lausn er smávægilega ábótavant (vantar smá upp á).
    - 5 lausn er ábótavant, helmingur er vel útfærður.
    - 2.5 lausn er stórlega ábótavant, en einhver virkni og kóði til staðar.
    - 0 lausn vantar eða er óunnin.

<br>

**Athugaðu!**
Það er **ekki í boði** að nota gervigreind til að vinna kóðann fyrir þig! <br>
- Passaðu að þú getir útskýrt fyrir kennara allan kóða sem þú skilar.
- Ennfremur átt þú að geta lagfært kóðabút (fall eða 1-4 línur) úr lausn ef kennari fjarlægir hann.
- Getir þú ekki útskýrt kóða eða lagfært kóðabút verður gefið 0 (núll) fyrir verkefnið. 


<!-- Það þarf **ekki** að tengja allar síur þannig að þær virki saman. -->

