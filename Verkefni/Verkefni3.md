## Verkefni 3 

- 35% af heildareinkunn
- Einstaklingsverkefni

---

### Verkefnalýsing

Búðu til [SPA](https://developer.mozilla.org/en-US/docs/Glossary/SPA) fyrir jarðskjálfta á Íslandi sem inniheldur eftirfarandi viðmót; kort, module, slider og dagatal. Hér er sýnidæmi [Skjálfta Lísa](https://skjalftalisa.vedur.is/index.html#/page/map). Vefappið er sveigjanlegt (e. responsive) og á að virka í tölvu og síma.

<br>

![Wireframe](https://github.com/GunnarThorunnarson/FORR3JS05DU/blob/master/Verkefni/v3_mynd.webp)

---

#### 1. Gögn og fetch (10%)

Jarðskjálftar þurfa að vera að lágmarki 20, með mismunandi stærð (1, 2, 3+), víðsvegar um landið, dreift yfir tímabil (síðustu 30 daga) 

1. [ ] Búðu til JSON sem inniheldur eftirfarandi upplýsingar:
    - Staður (t.d. Askja).
    - Dagsetning og tími.
    - Staðsetning (lengdar- og breiddargráður).
    - Dýpi.
    - Stærð.
1. [ ] Gögnin (JSON) eru sótt með [fetch](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/Asynchronous).
1. [ ] Notaðu raunveruleg gögn frá t.d. [Skjálfta Lísa](https://skjalftalisa.vedur.is/index.html#/page/table_quakes) eða [Skjálftalísa API](https://api.vedur.is/?urls.primaryName=Skj%C3%A1lftal%C3%ADsa).
1. [ ] Gögn eru yfirfærð í array með objects þar sem hvert object geymir upplýsingar um ákveðinn jarðskjálfta.


> [!NOTE]
> - Fetch sækir ekki JSON skrá nema þú notar `local server` eins og [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (extension í VSCode) <br>
> - Ef það vantar staðarheiti þá er hægt að nota lengdar- og breiddargráður með [Reverse Geocoding API](https://www.geoapify.com/tutorial/reverse-geocoding-javascript-tutorial/), [sýnidæmi með leaflet](https://jsfiddle.net/edbuk7tq/1/) <br>
> - [The Definitive Guide to JavaScript Date and Time](https://bugfender.com/blog/javascript-date-and-time/)

<!--
Jarðskálftar data:
- [Allt Ísland - jarðskjálftar siðustur 48klst. (tafla)](https://www.vedur.is/skjalftar-og-eldgos/jardskjalftar#view=table)
- [ArcGIS: skjalftar isn93 - Longterm (Table)](https://www.arcgis.com/home/webmap/viewer.html?url=https%3A%2F%2Fluk.vedur.is%2Farcgis%2Frest%2Fservices%2Fskjalftar%2Fskjalftar_isn93%2FFeatureServer&source=sd)
Reverse geocoding:
- https://www.geoapify.com/tutorial/reverse-geocoding-javascript-tutorial/
- leaflet: https://jsfiddle.net/edbuk7tq/1/
-->

---

#### 2. Kort (20%)
- [ ] Kort sýnir staðsetningu (lengdar- og breiddargráður) allra jarðskjálfta (e. marker). Notaðu [Leaflet](https://leafletjs.com/examples/quick-start/) safnið.
- [ ] Notaðu mismunandi stærð og lit á hring á staðsetningu jarðskjálfta á korti; stærð minni en 1, stærð 1 til 2, stærð 2 til 3, stærri en 3.
- [ ] Notaðu [MarkerCluster](https://github.com/leaflet/Leaflet.markercluster) til að sameina jarðskálfta sem eru á sama svæði. 

---

#### 3. Modal (20%) 
1. [ ] Ef þú smellur á hring (marker) á korti þá opnast [modal](https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/) með nánari upplýsingar um viðkomandi jarðskjálfta. Það er takki (x) til að loka modal.
2. [ ] Modal inniheldur; stað, dýpi, stærð, dagsetningu og tíma. Notaðu DOM manipulation aðferðir eða InnerHTML og template literal til að flétta saman html/css og gögn. 
1. [ ] Notaðu íslenskt sniðmát á dagsetningum og tíma (dæmi: 1.maí 2025 kl: 12:06:03), notaðu [day.js](https://day.js.org/) safnið, sjá einnig þar [i18n](https://day.js.org/docs/en/i18n/i18n) fyrir íslensku.

---

#### 4. Dynamic Range Slider (20%)

Skoðaðu [HTML Range slider](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range). Búðu til síu (e. filter) með notkun [noUiSlider](https://refreshless.com/nouislider/) sem síar út jarðskjálfta útfrá stærð. 

1. [ ] Slider sýnir stærð með þrepum (steps) við notkun á slider sjá td. [onchange vs oninput](https://www.impressivewebs.com/onchange-vs-oninput-for-range-sliders/)
1. [ ] Slider er með svið (e. range) upphafsstöðurnar lægsta og hæsta tala útfrá gögnum sem eru sýnileg (passa að slider handföng séu rétt stillt í upphafi).
1. [ ] Búðu til síu (e. filter) sem tengir jarðskjálfta (objecta) við slider gildi, sjá [Síun](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/S%C3%ADun) 
1. [ ] Notandi á að geta stýrt slider (tvö handföng) sem síar út jarðskjálfta eftir stærð.

> nouislider: `https://cdnjs.com/libraries/noUiSlider`

---

#### 5. Dagatal (15%)

Notaðu [flatpickr](https://flatpickr.js.org/) (JS safn) fyrir dagatal.

1. [ ] Dagsetningar (minDate og maxDate) eru forskráðar í [dagatali](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date) útfrá gögnum og markar svið (e. range) þess.
1. [ ] Notandi á að geta síað út jarðskjálfta útfrá tímabili (frá og til) útfrá dagsetningu og tíma í dagatali (það má **ekki** nota tvö aðskilin dagatöl). 

<!-- > - dagatal: bæta við takka sem hreinsar uppá reload á filter. -->

---

#### 6. Geolocation (15%)
- [ ] Notaðu [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) til að finna þá jarðskjálfta sem eru nálægt þér (prófaðu t.d. 100 km radíus), aðrir eiga að hverfa af korti.
- [ ] Notaðu takka til að virkja Geolocation. 
- [ ] Hægt er að stilla fjarlægð (radíus í km) frá staðsetningunni þinni með input reit.

> Notaðu [Local Port Forwarding í VS Code](https://code.visualstudio.com/docs/editor/port-forwarding) (ath. vera loggaður á símanum líka á GitHub) þegar þú vinnur með Geolocation.

---

### Námsmat og skil

- Skilaðu á Innu möpppu með HTML, CSS, JavaScript skrám.
- Einkunn fyrir hvern lið: 
    - 10 lausn er vel útfærð.
    - 7.5 lausn er smávægilega ábótavant (vantar smá upp á).
    - 5 lausn er ábótavant, helmingur er vel útfærður.
    - 2.5 lausn er stórlega ábótavant, en einhver virkni og kóði til staðar.
    - 0 lausn vantar eða er óunnin.


**Athugaðu!**
> Passaðu að þú getir útskýrt fyrir kennara allan kóða sem þú skilar, getir þú það ekki verður gefið 0 (núll) fyrir verkefnið (þ.e. ef kennari óskar eftir því). 


<!--
#### 5. Leit (15%) **make no sense hhér**  skoða ýpi?.
Notandi á að geta fundið jarðskjálfta með notkun leitarreits útfrá Stað (t.d. Bárðabunga, Borgarnes osfrv.) sjá [sýnidæmi](http://javascriptbook.com/code/c12/filter-search.html). Aðrir jarðskjálftar eiga að hverfa af skjá.

1. [ ] Leitað er eftir Stað (ekki case sensitive).
1. [ ] Leit hefst um leið og notandi slær inn bókstaf.

> **Valkvæmt:** Tengdu allar síur þannig að þær virka saman.
- Modal: [ ] Ef þú smellur á hátíð (e. card) þá opnast [modal](https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/) með nánari upplýsingar um hátíð og takka (x) til að loka modal.
- Notaðu [JavaScript Modules](https://www.freecodecamp.org/news/difference-between-default-and-named-exports-in-javascript/) fyrir kóðaskipulag.

-->
