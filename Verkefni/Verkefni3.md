# Verkefni 3 

- 25% af heildareinkunn
- Einstaklingsverkefni

---

### Verkefnalýsing 

Búðu til [SPA](https://developer.mozilla.org/en-US/docs/Glossary/SPA) fyrir síma sem heldur utan um [páskaeggjaleit í Viðey](https://elding.is/is/600-gestir-i-paskaeggjaleit-i-videy-2025) sem er haldin árlega á Páskadag. 

<img src="https://github.com/GunnarThorunnarson/Kennari-FORR3JS05DU/blob/master/verkefni/V2026/paskaeggjaleit.jpg">

> Valkæmt: Notaðu [JavaScript Modules](https://www.freecodecamp.org/news/difference-between-default-and-named-exports-in-javascript/) fyrir kóðaskipulag.

---

#### 1. Forskráð gögn og fetch (10%)

Til einföldunar þá eru aðeins **10** páskaegg í mismunandi stærðum dreifð um eyjuna.

1. [ ] Búðu til JSON skránna `paskaegg.json` með [páskaeggjum](https://www.noi.is/paskaegg/): 
    - stærð á eggi; 1,2,3,4,5,6,7.
    - upplýsingar hvort páskaegg sé mjólkurlaust.
    - ljósmynd af páskaeggi.
    - fjarlægð páskaeggs í metrum frá Viðeyjarstofu (upphafsreit páskaleitar).
    - lengdar- og breiddargráður af staðsetningu á páskaeggi. Notaðu Google Maps til að finna hnitin.
1. [ ] Gögnin eru sótt með [fetch](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/Asynchronous).
   
> [!NOTE]
> - Fetch sækir ekki JSON skrá nema þú notar `local server` eins og [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (extension í VSCode)
> - Notaðu gervigreind til að hjálpa þér (flýta fyrir) að útbúa gögn.

---

#### 2. Card (20%)

1. [ ] Búðu til [`Card`](https://www.w3schools.com/howto/howto_css_cards.asp) sem inniheldur [mynd](https://softauthor.com/javascript-working-with-images/) af páskaeggi, stærð, innihaldsslýsingu og fjarlægð í metrum frá upphafsreit. 
1. [ ] Notaðu CSS fyrir vefuppsetningu (layout) og framsetningu t.d. Flexbox eða CSS Grids eða CSS safn að eigin vali. 

---

#### 3. Dynamic Range Slider (20%)

1. [ ] Notaðu [noUiSlider](https://refreshless.com/nouislider/) safnið, [hér er CDN (css og js)](https://cdnjs.com/libraries/noUiSlider). Hafðu svið (range) upphafsstöðurnar þ.e. minnstu (min) og mestu (max) fjarlægð út frá gögnum. Upphafstaða á noUiSlider á að vera lengsta fjarlægðin (max). Notaðu steps og label til að sýna fjarlægðir.
1. [ ] Hægt er að nota slider til að birta páskaegg (Card) útfrá fjarlægð frá Viðeyjarstofu (í metrum). Notaðu gildið (value) frá slider til að sía út (filter) páskaegg, sjá [onchange vs oninput](https://www.impressivewebs.com/onchange-vs-oninput-for-range-sliders/).

> [HTML Range slider](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)

---

#### 4. Kort (20%)
Hægt er að skoða sérsniðið kort fyrir páskaleit.

- [ ] Kort sýnir staðsetningu (lengdar- og breiddargráður) allra páskeggja (e. marker). Notaðu [Leaflet](https://leafletjs.com/examples/quick-start/) safnið. Hægt er að sjá hvort páskegg er mjólkurlaust eða ekki, [sýnidæmi](https://www.google.com/maps/d/viewer?mid=11EAQly9JnnG9AuZhL-yHmTD0KsRZB_8&ll=64.14573221690978%2C-21.92584639413263&z=14).
- [ ] Þegar slider er notaður þá uppfærast (birtast eða hverfa) páskaegg á korti.

---

#### 5. Geolocation (15%)
- [ ] Notaðu takka til að virkja [Geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) og til að sýna fjarlægð páskaeggja útfrá staðsetningu þinni.
- [ ] Sýndu uppfærða fjarlægð út frá þinni núverani staðsetninu í Cards.

> [!NOTE]
> - Geolocation þarf http**s**. Notaðu [Local Port Forwarding í VS Code](https://code.visualstudio.com/docs/editor/port-forwarding) (ath. vera loggaður á símanum líka á GitHub).
> - Notaðu gervigreind til að finna kóða eða formúlur sem finna út fjarlægðir í metrum útfrá staðsetningum í lengdar- og breiddargráðum.

---

#### 6. Fjarlægðarmælir (15%)

- [ ] Finndu styðstu leiðina (e. pathfinding) til að ná sem flestum páskaeggjum.
- [ ] Búðu til fjarlægðarmælir og áttavita (frjáls útfærsla) sem hjálpar þér að finna næsta páskaegg útfrá styðstu leið.

---

### Námsmat og skil	

- Það þarf að nota Git og Github frá byrjun á kóðavinnu og gera commit & push reglulega. 
- Þú þarft að geta útskýrt fyrir kennara **allan** kóða sem þú skilar, getir þú það ekki verður gefið 0 (núll) í einkunn fyrir verkefnið.

Einkunn fyrir hvern verkþátt sem er útfærður:
- 10 Lausn er vel útfærð og fullnægjandi.
- 7.5 Góð lausn en smávægilega ábótavant.
- 5 Lausn er hálfnuð eða vantar mikilvæga þætti.
- 2.5 lausn er stórlega ábótavant.
- 0 Óunnið eða vantar.

Skilaðu á Innu möppu með html, JavaScript og CSS skrám. Skilaðu einnig Github (**private**) vefslóð á verkefnalausn. Mundu að bjóða mér aðgang (collabratorator) að Github repository, notendanafnið mitt er _GunnarThorunnarson_ eða _gus@tskoli.is_.
