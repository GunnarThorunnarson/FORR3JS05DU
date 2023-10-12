## Verkefni 6

- 30% af heildareinkunn
- Vika 7 og 8
- Vefapp


### Verkefnalýsing

Búðu til [SPA](https://developer.mozilla.org/en-US/docs/Glossary/SPA) (Single-page application) fyrir viðburði. Þú átt að geta séð alla viðburði í byrjun, leitað að viðburðum með leitarreit, dagatali og slider. JavaScript söfn eru **ekki** leyfð.<br>


---

#### 1. Gögn og fetch (10%)

1. [ ] Búðu til [JSON](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/JSON-og-Fetch) skrá `vidburdir.json`. Skráin geymir 10 viðburði (skáldaðu / ChatGPT) sem innihalda eftirfarandi upplýsingar: 
    - nafn á viðburð
    - verð á viðburð
    - dagsetning viðburðar
    - staðsetning viðburðar
    - vefslóð á ljósmynd fyrir viðburð
1. [ ] Gögnin (JSON) eru sótt með [fetch eða await/async](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/JSON-og-Fetch). 
1. [ ] Gögn eru yfirfærð í viðeigandi gagnaskipan (fylki með objects) í JavaScript.

> **Note**
> hlutir í fylkinu mega ekki vera forraðaðir eftir dagsetningu eða verði. <br>
> Fetch sækir ekki JSON skrá  nema þú notar `local server` eins og [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (extension í VSCode)

---

#### 2. Viðmót og uppsetning (20%)
1. [ ] Notaðu Dom manipulation aðferðir eða InnerHTML og template literal til að flétta saman html/css og gögn. 
1. [ ] Birtu alla viðburði; [myndir](https://softauthor.com/javascript-working-with-images/), heiti, verð, staðsetningu og dagsetningu í HTML með JavaScript. Notaðu `div` html stök. <br> Listar (`<ul>` og `<li>`) eru ekki leyfðir.
1. [ ] Viðburðir eru raðaðir eftir verði (lágt til hátt) eða eftir dagsetningu (nýjast fyrst).
1. [ ] Notaðu CSS fyrir responsive uppsetningu (layout) og framsetningu t.d. Flexbox, CSS Grids eða CSS safn að eigin vali. 
1. [ ] Hafðu íslenskt sniðmát á dagsetningum.

---

#### 3. Dynamic Range Slider (20%)

Búðu til síu (e. filter) sem með notkun [HTML Range slider](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) sem síar út viðburði eftir verði. 

1. [ ] Slider sýnir verð með þrepum (steps) við notkun á slider sjá td. [onchange vs oninput](https://www.impressivewebs.com/onchange-vs-oninput-for-range-sliders/)
1. [ ] Slider er með range upphafsstöðurnar lægsta og hæsta verð útfrá gögnum sem eru sýnileg.
1. [ ] Búðu til síu (e. filter) sem tengir viðburð (objecta) við slider gildi, sjá [Síun](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/S%C3%ADun) 
1. [ ] Viðburðir eru raðaðir eftir verði (lágt til hátt) eða eftir dagsetningu (nýjast fyrst).
1. [ ] Notandi á að geta stýrt slider sem síar út viðburð eftir verði.

<!--
> _Valkvæmt: Tengdu verð við þrep (steps) í slider._
 [Dynamic step size slider with fill effect | JavaScript](https://scotch.io/@gitedy/dynamic-step-size-slider-with-fill-effect-javascript) 
-->

---

#### 4. Leit (20%) 
Notandi á að geta fundið viðburð með notkun leitarreits, sjá [sýnidæmi](http://javascriptbook.com/code/c12/filter-search.html). Aðrir viðburðir eiga að hverfa af skjá.

1. [ ] Leitað er eftir heiti viðburðar (ekki case sensitive).
1. [ ] Leit hefst um leið og notandi slær inn bókstaf.

---

#### 5. Dagatal (20%)

1. [ ] Notandi á að geta síað út viðburðir útfrá tímabili með GUI dagatali (date picker). Sjá [sýnidæmi](https://stackblitz.com/edit/typescript-mpgufu?file=index.ts), [input type="date"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date) og [Date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).

<!--
> _Valkvæmt: Dagsetningar (elsta og nýjasta) eiga að vera forskráðar í dagatöl útfrá gögnum._ 
-->

---

#### 6. Dagatal + Range slider (10%)

1. [ ] Birtu viðburði útfrá samspili dagatals og slider t.d. útfrá ákveðnu tímabili og verðbili.

---

### Námsmat og skil

* Gefið er fullt fyrir fullnægjandi útfærslu á lið, hálft ef ábótavant. 
* Fjarlægðu allan kóða sem er ekki notaður í lausn sem og aukaleg virkni sem samræmist ekki verkefnalýsingu.
* Skilaðu á Innu HTML skrá með CSS og JavaScript.



