## Verkefni 5

- 25% af heildareinkunn

---

### Verkefnalýsing

Búðu til [SPA](https://developer.mozilla.org/en-US/docs/Glossary/SPA) (Single-page application) fyrir viðburði. Þú átt að geta séð alla viðburði í byrjun, leitað að viðburðum með leitarreit, dagatali og slider. 
Önnur JavaScript söfn fyrir utan þau sem eru tilgreind í verkefnalýsingu eru **ekki** leyfð. <br>

---

#### 1. Gögn og fetch (10%)

1. [ ] Búðu til JSON skránna `vidburdir.json`. Skráin geymir 10 viðburði (skáldaðu / ChatGPT) sem innihalda eftirfarandi upplýsingar: 
    - nafn á viðburð (titill)
    - stutt lýsing á viðburði (málsgrein)
    - vefslóð á ljósmynd
    - verð á viðburð 
    - dagsetning viðburðar
    - staðsetning viðburðar (staðarheiti og lengdar- og breiddargráður)
1. [ ] Gögnin (JSON) eru sótt með [fetch eða await/async](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/Fetch).
1. [ ] Gögn eru yfirfærð í fylki með objects þar sem hvert object geymir upplýsingar um ákveðinn viðburð.

> [!NOTE]
> hlutir í fylkinu mega ekki vera forraðaðir eftir dagsetningu eða verði. <br>
> Fetch sækir ekki JSON skrá nema þú notar `local server` eins og [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (extension í VSCode)

---

#### 2. Viðmót og uppsetning (20%)
1. [ ] Búðu til [`Card`](https://www.w3schools.com/howto/howto_css_cards.asp) fyrir viðburð sem inniheldur [mynd](https://softauthor.com/javascript-working-with-images/), heiti viðburðar, verð og [dagsetningu](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) með JavaScript. Notaðu DOM manipulation aðferðir eða InnerHTML og template literal til að flétta saman html/css og gögn. 
1. [ ] Birtu alla viðburði í upphafi raðaðir eftir verði (lágt til hátt).
1. [ ] Notaðu CSS fyrir vefuppsetningu (layout) og framsetningu t.d. Flexbox, CSS Grids eða CSS safn að eigin vali. 
1. [ ] Hafðu íslenskt sniðmát á dagsetningum, notaðu [day.js](https://day.js.org/) safnið.

<!--
- Viðburðir eru fyrst raðaðir eftir verði (lágt til hátt) og svo dagsetningu (nýjast fyrst) innbyrðis ef tveir eða fleir viðburðir eru jafndýrir. 
-->

---

#### 3. Dynamic Range Slider (20%)

Skoðaðu [HTML Range slider](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range). Búðu til síu (e. filter) sem með notkun [noUiSlider](https://refreshless.com/nouislider/) (JS safn) sem síar út viðburði eftir verði. 

1. [ ] Slider sýnir verð með þrepum (steps) við notkun á slider sjá td. [onchange vs oninput](https://www.impressivewebs.com/onchange-vs-oninput-for-range-sliders/)
1. [ ] Slider er með svið (e. range) upphafsstöðurnar lægsta og hæsta verð útfrá gögnum sem eru sýnileg (passa að slider handföng séu rétt stillt í upphafi).
1. [ ] Búðu til síu (e. filter) sem tengir viðburð (objecta) við slider gildi, sjá [Síun](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/S%C3%ADun) 
1. [ ] Notandi á að geta stýrt slider (tvö handföng) sem síar út viðburð eftir verði.
1. [ ] **Valkvætt:** Tengdu öll verðin úr gögnum við þrep (steps) í slider.

---

#### 4. Leit (10%) 
Notandi á að geta fundið viðburð með notkun leitarreits, sjá [sýnidæmi](http://javascriptbook.com/code/c12/filter-search.html). Aðrir viðburðir eiga að hverfa af skjá.

1. [ ] Leitað er eftir heiti viðburðar (ekki case sensitive).
1. [ ] Leit hefst um leið og notandi slær inn bókstaf.

---

#### 5. Modal (20%)

- [ ] Ef þú smellur á viðburð (e. card) þá opnast [modal](https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/) með nánari upplýsingar um viðburð (málsgrein), staðsetningu og takka (x) til að loka modal.
- [ ] Kort sýnir staðsetningu (lengdar- og breiddargráður) viðburðar með merki (e. marker). Merkið sýnir staðarheiti. Notaðu [Leaflet](https://leafletjs.com/examples/quick-start/) (JS safn).

---

#### 6. Dagatal (20%)

Notaðu [flatpickr](https://flatpickr.js.org/) (JS safn) fyrir dagatal.

1. [ ] Núverandi dagsetning með íslensku sniði á að vera sjálfgefin í input reit og [dagatali](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date).
1. [ ] Dagsetningar (min og max) eru forskráðar í dagatali útfrá gögnum og markar svið (e. range) þess.
1. [ ] Notandi á að geta síað út viðburði útfrá tímabili (frá og til) með e. _range picker_ í dagatali (það má **ekki** nota tvö aðskilin dagatöl). 
1. [ ] **Valkvætt:** Birtu viðburði útfrá samspili dagatals og slider. þ.e. fyrst útfrá ákveðnu tímabili á dagatali og svo innan þess eftir verðbili með notkun á slider.

---

### Námsmat og skil

* Skilaðu á Innu HTML, CSS , JavaScript og JSON skrá.
* Einkunn fyrir hvern lið: 
    - 4/4 lausn er vel útfærð.
    - 3/4 lausn er smávægilega ábótavant (vantar smá upp á).
    - 2/4 lausn er ábótavant, helmingur er vel útfærður.
    - 1/4 lausn er stórlega ábótavant, en einhver virkni og kóði.
    - 0/4 lausn vantar eða óunnin.
* Sein skil eru ekki í boði.
