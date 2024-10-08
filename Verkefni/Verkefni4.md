## Verkefni 4

- 25% af heildareinkunn

---

### Verkefnalýsing

Búðu til [SPA](https://developer.mozilla.org/en-US/docs/Glossary/SPA) (Single-page application) sem inniheldur leitarreit, dagatal og slider fyrir [top 5 rússibana](https://captaincoaster.com/en/ranking/?filters%5Bcontinent%5D=&filters%5Bcountry%5D=&filters%5BmaterialType%5D=&filters%5BseatingType%5D=&filters%5Bmodel%5D=&filters%5Bmanufacturer%5D=&filters%5BopeningDate%5D=&page=1) í heiminum sem þig langar að próf. Þú átt að geta séð alla rússibanana í upphafi.  

> **Valkvæmt:** Notaðu [JavaScript Modules](https://www.freecodecamp.org/news/difference-between-default-and-named-exports-in-javascript/) fyrir skipulag.


---

#### 1. Gögn og fetch (10%)
1. [ ] Búðu til JSON skránna `russibanar.json`. Skráin geymir upplýsingar um 5 rússibana sem innihalda eftirfarandi: 
    - nafn á rússibana (titill)
    - vefslóð á ljósmynd
    - tegund
    - hæð
    - hraða
    - hröðun (_g_)
    - dagsetning opnunar (ár, mánuður og dagur)
    - staðsetning; staðarheiti, land, lengdar- og breiddargráður. Notaðu Google Maps til að finna hnitin.
1. [ ] Gögnin (JSON) eru sótt með [fetch](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/Fetch).
1. [ ] Gögn eru yfirfærð í fylki með objects þar sem hvert object geymir upplýsingar um ákveðinn viðburð.
1. [ ] Raðaðu gögnunum í fylki eftir hæð með JavaScript.
   
> [!NOTE]
> Fetch sækir ekki JSON skrá nema þú notar `local server` eins og [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (extension í VSCode)

---

#### 2. Viðmót og uppsetning (20%)
1. [ ] Búðu til [`Card`](https://www.w3schools.com/howto/howto_css_cards.asp) fyrir rússibana sem inniheldur [mynd](https://softauthor.com/javascript-working-with-images/), heiti á rússubana (titill), staðarheiti, land og opnunar [dagsetningu](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) með JavaScript. Notaðu DOM manipulation aðferðir eða InnerHTML og template literal til að flétta saman html/css og gögn. 
1. [ ] Birtu alla rússibana í upphafi raðaðir eftir hæð (í lækkandi röð). Gögn í JSON mega ekki vera forröðuð.
1. [ ] Notaðu CSS fyrir vefuppsetningu (layout) og framsetningu t.d. Flexbox, CSS Grids eða CSS safn að eigin vali. 
1. [ ] Hafðu íslenskt sniðmát á dagsetningum, notaðu [day.js](https://day.js.org/) safnið.

---

#### 3. Dynamic Range Slider (20%)

Skoðaðu [HTML Range slider](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range). Búðu til síu (e. filter) sem með notkun [noUiSlider](https://refreshless.com/nouislider/) (JS safn) sem síar út viðburði eftir verði. 

1. [ ] Slider sýnir hraða með þrepum (steps) við notkun á slider sjá td. [onchange vs oninput](https://www.impressivewebs.com/onchange-vs-oninput-for-range-sliders/)
1. [ ] Slider er með svið (e. range) upphafsstöðurnar lægsta og hæsta hraða útfrá gögnum sem eru sýnileg (passa að slider handföng séu rétt stillt í upphafi).
1. [ ] Búðu til síu (e. filter) sem tengir rússibana (objecta) við slider gildi, sjá [Síun](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/S%C3%ADun) 
1. [ ] Notandi á að geta stýrt slider (tvö handföng) sem síar út rússibana eftir hraða.

---

#### 4. Leit (10%) 
Notandi á að geta fundið rússibana með notkun leitarreits, sjá [sýnidæmi](http://javascriptbook.com/code/c12/filter-search.html). Aðrir rússibanar eiga að hverfa af skjá.

1. [ ] Leitað er eftir heiti rússibana (ekki case sensitive).
1. [ ] Leit hefst um leið og notandi slær inn bókstaf.

---

#### 5. Modal (20%)

- [ ] Ef þú smellur á rússibana (e. card) þá opnast [modal](https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/) með nánari upplýsingar og takka (x) til að loka modal.
- [ ] Kort sýnir staðsetningu (lengdar- og breiddargráður) rússibana með merki (e. marker). Merkið sýnir staðarheiti. Notaðu [Leaflet](https://leafletjs.com/examples/quick-start/) (JS safn).

---

#### 6. Dagatal (20%)

Notaðu [flatpickr](https://flatpickr.js.org/) (JS safn) fyrir dagatal.

1. [ ] Dagsetningar (min og max) eru forskráðar í [dagatali](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date) útfrá gögnum og markar svið (e. range) þess.
1. [ ] Notandi á að geta síað út opnunardag rússibana útfrá tímabili (frá og til) með e. _range picker_ í dagatali (það má **ekki** nota tvö aðskilin dagatöl). 

---

### Námsmat og skil

* Skilaðu á Innu HTML, CSS , JavaScript og JSON skrá.
* Einkunn fyrir hvern lið: 
    - 4/4 lausn er vel útfærð.
    - 3/4 lausn er smávægilega ábótavant (vantar smá upp á).
    - 2/4 lausn er ábótavant, helmingur er vel útfærður.
    - 1/4 lausn er stórlega ábótavant, en einhver virkni og kóði.
    - 0/4 lausn vantar eða óunnin.
