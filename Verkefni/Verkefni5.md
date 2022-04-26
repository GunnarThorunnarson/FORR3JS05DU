## Verkefni 5

- Vefapp
- 35% af heildareinkunn

---

### Verkefnalýsing
Búðu til [SPA](https://developer.mozilla.org/en-US/docs/Glossary/SPA) sem inniheldur myndaalbúm. Notandi á að geta síað út ljósmyndir með leitarreit, [HTML Range slider](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) og dagatali. JavaScript söfn eru **ekki** leyfð. Skoðaðu [Todo App From Start To Finish](https://codingthesmartway.com/building-a-vanilla-javascript-todo-app-from-start-to-finish-ep-1-introduction-project-setup/) (5 myndbönd).
<!-- 
[JavaScript DOM Crash Course](https://www.youtube.com/watch?v=i37KVt_IcXw&list=PLillGF-RfqbYE6Ik_EuXA2iZFcE082B3s&index=5).
-->

---

#### 1. Gögn (5%)
Notaðu fylki til að halda utan um 5 hluti (objecta) eða fleiri sem innihalda eftirfarandi upplýsingar; heiti myndar, höfund, dagsetning, verð og vefslóð á mynd, sjá t.d. [Using images](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images). **Ath.** hlutir í fylkinu mega ekki vera raðaðir í röð eftir verði.

---


#### 2. Dynamic Range Slider (15%)

Búðu til síu (e. filter) sem með notkun [HTML Range slider](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) sem síar út myndir eftir verði. 

1. Búðu til notendavænan e. range slider sem getur unnið með inntaksgildi, sjá td. [onchange vs oninput](https://www.impressivewebs.com/onchange-vs-oninput-for-range-sliders/)
1. Slider sýnir verð við notkun á slider. 
1. Slider er með range upphafsstöðurnar lægsta og hæsta verð útfrá gögnum.


---

#### 3. Síun með Dynamic Range Slider (15%)

1. Búðu til síu (e. filter) sem tengir myndagögn (ljósmynd, heiti, höfund) við slider gildi, sjá [Síun](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/S%C3%ADun)
1. Notandi á að geta með gagnvirkum hætti stýrt slider sem síar út myndagögn eftir verði.  
1. Myndir birtast síuð, röðuð eftir verði (lágt til hátt).

<!-- 
Valkvæmt: tengja step og gögn (verð) saman, [Dynamic step size slider with fill effect | JavaScript
](https://scotch.io/@gitedy/dynamic-step-size-slider-with-fill-effect-javascript) 
-->

---

#### 4. Viðmót (20%)
1. Notaðu Dom manipulation aðferðir eða InnerHTML og template literal til að flétta saman html/css og gögn. 
1. Birtu allar myndir; heiti, höfund og verð í HTML með JavaScript. Notaðu m.a. `div` html stök. Listar (`<ul>` og `<li>`) eru ekki leyfðir.
1. Notaðu CSS fyrir útlit og framsetningu (layout) td. Flexbox eða CSS Grids.
   
---

#### 5. Leit (15%) 
Notandi á að geta fundið ákveðna mynd með notkun leitarreits, sjá [sýnidæmi](http://javascriptbook.com/code/c12/filter-search.html). Aðrar myndir eiga að hverfa af skjá.

1. Leitað er eftir höfund myndar.
1. Leit hefst um leið og notandi slær inn bókstaf.

---

#### 6. Dagatal (15%)

1. Notandi á að geta síað út ljósmyndir útfrá dagsetningu með GUI dagatali. Sjá nánar [input type="date"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date) og [Date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).
1. Notandi á að geta síað út ljósmyndir útfrá tímabili. 

---

#### 7. JSON (15%)

1. Búðu til JSON skrá sem inniheldur gögnin. Notaðu [JsonLint](https://jsonlint.com/) til að kanna villur. Vistaðu JSON skrá á Github.
1. Gögnin (JSON) eru sótt með [fetch aðferð](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/JSON-og-Fetch).
1. Gögn eru yfirfærð í viðeigandi gagnaskipan (fylki með objects) í JavaScript.

---

### Námsmat og skil
* Skrifaðu athugasemdir í kóðaskrá eftir þörfum.
* Gefið er fullt fyrir fullnægjandi útfærslu á lið, hálft ef ábótavant.
* Skilaðu á Innu HTML skrá sem inniheldur CSS og JavaScript.

---

<!--
**Dæmi um hvernig hægt er að tækla verkefnið í skrefum:**

1. Setja upp [HTML Range Slider](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) með value, min, max og step
1. Fá slider til að virka með JavaScript, sjá [input vs change event](https://www.impressivewebs.com/onchange-vs-oninput-for-range-sliders/), skoða lesa og skrifa í `value`.
1. Búa til data objects sem inniheldur gögn (skoðaðu gögn í console.log)
1. Finna hæsta verð, nota [array aðferð](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/S%C3%ADun#array-a%C3%B0fer%C3%B0ir) við hæfi. 
1. Sía, prófa [static filter](https://github.com/GunnarThorunnarson/FORR3JS05DU/blob/master/efnistok/staticFilter.js) (skoðaðu síuð gögn í console.log)
1. Tengja síu (e. filter) við  HTML Range Slider og dataobject, sjá [Síun](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/S%C3%ADun).  (skoða niðurstöður í console)
1. Búa til html. Nota InnerHTML eða DOM manipulation (t.d. createElement osfrv.) og blanda við gögn, sjá [Template](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/Template)
1. birta í html skrá.
-->


