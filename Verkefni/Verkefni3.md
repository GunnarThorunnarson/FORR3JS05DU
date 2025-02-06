## Verkefni 3 

- 35% af heildareinkunn
- Einstaklingsverkefni
  
---

### Verkefnalýsing

Búðu til [SPA](https://developer.mozilla.org/en-US/docs/Glossary/SPA) fyrir bæjar- og útihátíðir sem inniheldur eftirfarandi; leitarreitur, takki, dagatal, kort, slider og card. Vefappið  (e. responsive) þarf að virka með síma og tölvu. Heimildir: [bæjar- og útihátíðir](https://attavitinn.is/stadir/baejar-og-utihatidir/) og [Hátíðir um allt land](https://hatidirumalltland.weebly.com/).

<br>

![Wireframe SPA](https://github.com/GunnarThorunnarson/FORR3JS05DU/blob/master/Verkefni/spa.webp)


---

#### 1. Gögn og fetch (10%)
1. [ ] Búðu til JSON skránna `hatidir.json` fyrir bæjar- og útihátíðir á Íslandi sem innihalda eftirfarandi (lágmark 10 hátíðir): 
    - nafn á hátíð (titill).
    - stutt lýsing (setning eða málsgrein).
    - viðburðir á hátíðinni (t.d. götugrill, tónleikar, sýningar osfrv.).
    - vefslóð á ljósmynd.
    - dagsetning hátíðar.
    - staðsetning; t.d. bæjarheiti, lengdar- og breiddargráður. Notaðu Google Maps til að finna hnitin.
    - vefslóð á hátíð.
1. [ ] Gögnin (JSON) eru sótt með [fetch](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/Fetch).
1. [ ] Gögn eru yfirfærð í array með objects þar sem hvert object geymir upplýsingar um ákveðna hátíð.
   
> [!NOTE]
> Fetch sækir ekki JSON skrá nema þú notar `local server` eins og [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (extension í VSCode)

---

#### 2. Card (20%)
1. [ ] Búðu til [`Card`](https://www.w3schools.com/howto/howto_css_cards.asp) fyrir hátíð sem inniheldur [mynd](https://softauthor.com/javascript-working-with-images/), heiti á hátíð (titill), staðsetning,  [dagsetningu](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) og fjarlægð (km). Notaðu DOM manipulation aðferðir eða InnerHTML og template literal til að flétta saman html/css og gögn. 
1. [ ] Birtu allar hátíðir í upphafi raðaðar eftir fjarlægð frá Reykjavík í km (styðsta fjarlægð kemur fyrst/efst). Gögn í JSON mega ekki vera forröðuð.
1. [ ] Notaðu CSS fyrir vefuppsetningu (layout) og framsetningu t.d. Flexbox, CSS Grids eða CSS safn að eigin vali. 
1. [ ] Notaðu íslenskt sniðmát á dagsetningum (t.d. 1.maí 2025), notaðu [day.js](https://day.js.org/) safnið.

---

#### 3. Leit (15%) 
Notandi á að geta fundið hátíðar með notkun leitarreits útfrá viðburðum á þeim, sjá [sýnidæmi](http://javascriptbook.com/code/c12/filter-search.html). Aðrar hátíðir eiga að hverfa af skjá.

1. [ ] Leitað er eftir heiti viðburðs (ekki case sensitive).
1. [ ] Leit hefst um leið og notandi slær inn bókstaf.

---

#### 4. Dynamic Range Slider (20%)

Skoðaðu [HTML Range slider](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range). Búðu til síu (e. filter) sem með notkun [noUiSlider](https://refreshless.com/nouislider/) sem síar út hátíð eftir verði . 

1. [ ] Slider sýnir hraða með þrepum (steps) við notkun á slider sjá td. [onchange vs oninput](https://www.impressivewebs.com/onchange-vs-oninput-for-range-sliders/)
1. [ ] Slider er með svið (e. range) upphafsstöðurnar lægsta og hæsta tala útfrá gögnum sem eru sýnileg (passa að slider handföng séu rétt stillt í upphafi).
1. [ ] Búðu til síu (e. filter) sem tengir hátíð (objecta) við slider gildi, sjá [Síun](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/S%C3%ADun) 
1. [ ] Notandi á að geta stýrt slider (tvö handföng) sem síar út hátíð eftir fjarlægð.

> nouislider: `https://cdnjs.com/libraries/noUiSlider`

---

#### 5. Dagatal (15%)

Notaðu [flatpickr](https://flatpickr.js.org/) (JS safn) fyrir dagatal.

1. [ ] Dagsetningar (min og max) eru forskráðar í [dagatali](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date) útfrá gögnum og markar svið (e. range) þess.
1. [ ] Notandi á að geta síað út hátíðar útfrá tímabili (frá og til) með e. _range picker_ í dagatali (það má **ekki** nota tvö aðskilin dagatöl). 

<!-- > - dagatal: bæta við takka sem hreinsar uppá reload á filter. -->

---

#### 6. Kort (20%)

- [ ] Kort sýnir staðsetningu (lengdar- og breiddargráður) allra hátíðar með merki (e. marker). Notaðu [Leaflet](https://leafletjs.com/examples/quick-start/) (JS safn).
- [ ] Notaðu [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) til að finna hátíðir sem eru nálægt þér þegar þú notar síma (í staðinn fyrir Reykjavík).
- [ ] Hægt er að stilla fjarlægð frá þér þ.e. radíus (km).

---

### Námsmat og skil

- Skilaðu á Innu HTML, CSS, JavaScript og JSON skrá (mappa).
- Einkunn fyrir hvern lið: 
    - 10 lausn er vel útfærð.
    - 7.5 lausn er smávægilega ábótavant (vantar smá upp á).
    - 5 lausn er ábótavant, helmingur er vel útfærður.
    - 2.5 lausn er stórlega ábótavant, en einhver virkni og kóði til staðar.
    - 0 lausn vantar eða er óunnin.

> **Ath:** Nemandi þarf að geta gert grein fyrir öllum kóða og lausn munnlega til að fá einkunn fyrir verkefni (ef kennari óskar eftir því).

<!--
> **Valkvæmt:** Tengdu allar síur þannig að þær virka saman.
- Modal: [ ] Ef þú smellur á hátíð (e. card) þá opnast [modal](https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/) með nánari upplýsingar um hátíð og takka (x) til að loka modal.
- Notaðu [JavaScript Modules](https://www.freecodecamp.org/news/difference-between-default-and-named-exports-in-javascript/) fyrir kóðaskipulag.
-->
