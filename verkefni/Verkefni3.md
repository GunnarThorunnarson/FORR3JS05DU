### Verkefni 3: DOM og Events (15%)

#### 3.1 DOM (3%)

**Í html:**
```
<p>málsgrein 1</p>
<p>málsgrein 2</p>
<div>div 1</div>
  <p>málsgrein 3</p>
<div>div 2</div>
```

**Í Javascript:**
1. Notaðu `querySelector()` til að velja málsgrein nr 2. og litaðu textann grænan.
1. Veldu allar málgreinar og breyttu textanum  með textContent aðferðinni.
1. Bættu við neðst með `createElement()` og `append()` málsgrein með nafninu þínu.

---

#### 3.2 DOM og Events. (3%)

1. Hver er munurinn á static og live NodeList?
2. Hver er munurinn á true og false í AddEventListener?
```javascript
   elem.addEventListener("click", handlerFunction, true);
   elem.addEventListener("click", handlerFunction, false);
```
3. this vísar í Event listener á html element en ekki á object. Þú getur notað `bind()` til að breyta því.
Leystu eftirfarandi kóðadæmi með notkun á `bind()` til að birta í console “My name is Sam“ en ekki undefined.
```javascript
let Person = {   
  name: 'Sam',   
  sayName: function(){     
     console.log('My name is '+ this.name);   
  }
 };
buttonEl.addEventListener('click', Person.sayName);
```
---

#### 3.3 JS30 Verkefni (9%):
Skoðaðu eftirfarandi verkefni í [30 Day Vanilla JS Coding Challenge](https://javascript30.com/). Hér eru [kóðaskrárnar](https://github.com/wesbos/JavaScript30):

- Day 1:	Drum kit  (keyCode, data attribute)
- Day 10:	Form (multiple checkboxes, click)
- Day 12:	Key sequence detection (keyboard)
- Day 13:	Slide In on Scroll (scroll)
- Day 15:	LocalStorage and Event Delegation (submit, click)
- Day 16:	Mouse move (mousemove, event object)
- Day 22:	Follow Along Links (DOM Manipulation, mouseenter)
- Day 24: Sticky Nav (scroll)
- Day 25:	Event capture, propagation, bubbling and once
- Day 26:	Stripe Follow Along Dropdown 
- Day 27:	Click and Drag to scroll
- Day 30: Whack a mole game (textContent, setTimeout, click)

<br>

Veldu þér að ofangreindu **3 verkefni** að eigin vali:

1. Breyttu JS kóðanum (hegðun) og CSS í völdum verkefnum og komdu með þína útfærslur á þeim (frjáls útfærsla).
1. Taktu fram efst í kóðaskrám hverju þú breyttir.

---

### Námsmat og skil	
* Gefið er fullt fyrir lið sem er vel útfærður, með rétta lausn eða rétt svar, hálft ef hann er ábótavant. 
  _- Það er ekki nóg að breyta bara gildum í JS og CSS._
* Skilaðu á Innu vefslóð á e. private Github geymslu sem inniheldur svör, kóða og lausnir.



