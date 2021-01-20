## Verkefni 2 (15% af heildareinkunn)
- Einstaklingsverkefni

---

#### 2.1 (21%)
Stofnaðu reikning í [freeCodeCamp](https://www.freecodecamp.org/) og haltu utan um framvindu. 
Fylgdu Beau Carnes í Scrimba myndböndunum [Learn modern JavaScript](https://scrimba.com/course/ges6) einnig á [youtube](https://youtu.be/PkZNo7MFNFg). Gerðu samhliða æfingarnar í freeCodeCamp [ES6](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/)
:
1. [Föll II og ES6 (13 æfingar)](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/F%C3%B6ll-II-og-ES6)
1. [Class og Prototype (8 æfingar)](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/Class-og-prototype)
   - _Slepptu síðustu fjórum æfingunum sem eru um Promise_

#### 2.2 Að skilgreina fall (5%)
Eftirfarndi `add` fall er skilgreint á hefðbundin hátt (function declaration):

```javascript
function add(a, b) {
  return a + b;
}
sum = add(1,2);
console.log(sum);
```
1. Skilgreindu `add` fallið með `function expression` útfærslu.
1. Skilgreindu `add` fallið með `arrow function` útfærslu.


#### 2.3 Higher order functions (10%)

```javascript
let numbers = [1, 2, 3, 4, 5];

// kóðinn þinn hér 

console.log(oddNumbers);  // [1,3,5]
```

1. Búðu til nýtt fylki sem heitir `oddNumbers` sem inniheldur oddatölur úr `numbers`. Notaðu m.a. `for` lykkju og `push` aðferðina.
1. Notað núna [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) og arrow aðferðina.

#### 2.4 Object (10%)
1. Búðu til object sem geymir upplýsingar um þig; nafn, fæðingarár og þrjú netföng. Notaðu gagnatag við hæfi.
1. Bættu við aðferð sem skilar streng sem inniheldur nafn og aldur. Notaðu `Template literal`. 

#### 2.5 Prentaðu út með `console.log()` nafnið Nonni (4%)

```javascript
	let family = {
			"parents": 
				{
				"fathers": [{"name":"Jakob"},{"name":"Nonni"}],
				"mothers":[{"name":"Rakel"},{"name":"Sara"}]
				}
		};
```

#### 2.6 Class (10%)
1. Búðu til klasa (class) User sem hefur nafn og netfang. Klasinn á að hafa get og set aðferð fyrir nafn.
1. Búðu til object sem notar klasann og birtu nafn og netfang með `console.log()`. Sjá (3 Methods to Loop Over Object Properties)[https://itnext.io/x1f4f9-3-ways-to-loop-over-object-properties-with-vanilla-javascript-es6-included-efb4a68cfbb]

#### 2.7 Class og erfðir (15%)
Búðu til tvo klasa (class) `Animal` og `Rabbit`. 
- Animal inniheldur `nafn` og `speed = 0` ásamt aðferðina `run()` sem hækkar `speed` um einn.
- Rabbit á að erfa Animal. Rabbit á einnig að kunna að `hoppa`. Búðu til eigindi með tölugildið `0` og `jump` aðferð sem hækkar tölugildið um `1`.

#### 2.8 Prototype (15%)
1. Búðu til smið (e. function constructor) `User` sem geymir nafn og netfang. 
1. Bættu við aðferð `getName` með prototype sem skilar nafni.
1. Búðu til object sem notar `User` smiðinn og birtu upplýsingarnar í console.log().

#### 2.9 (10%)
Þú hefur sett nokkra hluti í körfu í vefverslun í USA.

```javascript
let cart=[
  {name:"Biscuits", type:"regular", category:"food", price: 2.0},
  {name:"Monitor", type:"prime", category:"tech", price: 119.99},
  {name:"Mouse", type:"prime", category:"tech", price: 25.50},
  {name:"dress", type:"regular", category:"clothes", price: 49.90},
]
```
Þú ert með afsláttarkóða sem veitir þér 20% afslátt af öllum `tech` vörum.
Búðu til forrit sem tekur við afsláttarkóðanum `prompt()`og skilar fylki sem inniheldur allar vörur sem þú valdir í körfunni en með uppfærðum verðum. forritið á einnig að skila summu allra hluta í dollurum. Birtu upplýsingarnar í `console.log()`


---

### Námsmat og skil
- **2.1** Námsmat fer fram í kennslustund með skoðun á framvindu í freeCodeCamp.
- Búðu til e. `private repository` sem inniheldur kóðalausnir fyrir **liði; 2.2 - 2.9**. Gefið er hálft fyrir liði sem eru ábótavant.
- Sein skil eru ekki í boði.


