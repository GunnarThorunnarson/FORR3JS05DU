## Verkefni 6: Vefapp (20%) 

Búðu til [SPA (Single-page application)](https://developer.mozilla.org/en-US/docs/Glossary/SPA) fyrir viðburði. Þú átt að geta séð alla viðburði í byrjun, leitað að viðburði (síun) með leitarreit, skráð og eytt viðburð. JavaScript söfn eru **ekki** leyfð.

Hér er tutorial sem vert er að skoða (5 myndbönd) [Building A Vanilla JavaScript Todo App From Start To Finish ](https://codingthesmartway.com/building-a-vanilla-javascript-todo-app-from-start-to-finish-ep-1-introduction-project-setup/)

---

#### 5.1 - Gögn og fetch (20%)

1. Búðu til JSON skrá `vidburdir.json` og hýstu hana í Gist á Github. Skráin geymir 5 viðburði (skáldaðu) sem innihalda eftirfarandi upplýsingar: 
    - nafn á Viðburð
    - dagsetning
    - staðsetning
    - vefslóð á ljósmynd
2. Gögnin (JSON) eru sótt með [fetch aðferð](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/JSON-og-Fetch).

---

#### 5.2 Viðmót (30%)

1. [Template](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/Template) 
   1. Notaðu Dom manipulation aðferðir eða InnerHTML og template literal til að flétta saman html/css og gögn. 
   1. Birtu alla viðburði í HTML með JavaScript. 
   1. Notaðu CSS fyrir framsetningu (layout) og útlit. 
   
---

#### 5.3 - Að eyða og búa til viðburð (30%) 
Notandi á að geta með viðmóti: [sjá sýnidæmi](http://todomvc.com/examples/vanillajs/) 
1. eytt (delete) viðburð. 
  - Það þarf samt ekki að eyða viðburð úr JSON skrá.
1. bætt (create) við viðburð. 
  - Það þarf ekki að bæta viðburð í JSON skrá.

---

#### 5.4 - Leit (20%) 

Notandi á að geta fundið viðburð með notkun leitarreits, sjá [sýnidæmi](http://javascriptbook.com/code/c12/filter-search.html).
1. Leitað er eftir heiti viðburðar.
1. Leit hefst um leið og notandi slær inn bókstaf.
1. Aðrir viðburðri eiga að hverfa af skjá.

---

### Námsmat og skil

* Notaðu  **private** Github geymslu sem inniheldur kóðaskrár og gögn. Mundu að bjóða mér _GunnarThorunnarson_ ef þú hefur ekki þegar gert það. 
* Taktu fram efst í `app.js` það sem þú náðir að útfæra.
* Skrifaðu íslenskar athugasemdir hjá föllum og objectum í kóðaskrá.
* Gefið er fullt fyrir fullnægjandi útfærslu á lið, hálft ef ábótavant.


<!--
#### 5.5 - Localstorage (20%)
Notað er LocalStorage til að vista gögn (viðburði), sjá [Web Storage](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/Web-Storage).

-->
