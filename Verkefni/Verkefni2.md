## Verkefni 2 (12% af heildareinkunn)
- Einstaklingsverkefni

---
#### 2.1 (26%)
Fylgdu Beau Carnes í Scrimba myndböndunum [Learn modern JavaScript](https://scrimba.com/course/ges6). <br>
Gerðu eftirfarandi æfingar [Föll II (13 æfingar)](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/F%C3%B6ll-II) í freeCodeCamp [ES6](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/).

#### 2.2 (4%)

Hver er munurinn á `let` og `var`? Komdu með kóðasýnidæmi sem sýnir muninn.

#### 2.3 Að skilgreina fall (10%)
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

#### 2.4 Higher order functions (10%)

```javascript
let numbers = [1, 2, 3, 4, 5];

// kóðinn þinn hér 

console.log(oddNumbers);  // [1,3,5]
```

1. Búðu til nýtt fylki sem heitir `oddNumbers` sem inniheldur oddatölur úr `numbers`. Notaðu m.a. `for` lykkju eða `forEach` fylkja aðferð ásamt `push` aðferðina.
1. Notað núna [`filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) og arrow aðferðina.


#### 2.5 Object (10%)
1. Búðu til object sem geymir upplýsingar um þig; nafn, fæðingarár og þrjú netföng. Notaðu gagnatag við hæfi.
1. Object á að hafa aðferð sem skilar streng sem inniheldur nafn og aldur. Notaðu `Template literal`. 
<!--
1. Birtu allar upplýsingarnar í console, sjá [3 Methods to Loop Over Object Properties](https://itnext.io/x1f4f9-3-ways-to-loop-over-object-properties-with-vanilla-javascript-es6-included-efb4a68cfbb)
-->

#### 2.6 Prentaðu út með `console.log()` nafnið Sara (5%)

```javascript
	let family = {
			"parents": 
				{
				"fathers": [{"name":"Jakob"},{"name":"Nonni"}],
				"mothers":[{"name":"Rakel"},{"name":"Sara"}]
				}
		};
```


#### 2.7 (35%)

Þú hefur sett nokkra hluti í körfu í vefverslun. Þú ert með afsláttarkóða "discount10" sem veitir þér 10% afslátt af öllum `tech` vörum.

```javascript
let cart=[
  {name:"candy", category:"food", price: 2.0},
  {name:"Monitor", category:"tech", price: 99.99},
  {name:"Mouse", category:"tech", price: 25.50},
  {name:"shirt", category:"clothes", price: 19.90},
]
```

1. Búðu til forrit sem tekur við afsláttarkóða og skilar fylki sem inniheldur allar vörur sem þú valdir í körfunni með uppfærðum verðum. (20%)
1. forritið á einnig að skila summu allra hluta. (10%)
1. Birtu upplýsingarnar í `console.log()` (5%)

<!--
**ath.** `prompt()` virkar í console í vafra en ekki í VS Code.
-->
---

### Námsmat og skil
- **2.1** Námsmat fer fram í kennslustund með skoðun á framvindu í freeCodeCamp.
- Búðu til e. `private repository` sem inniheldur kóðalausnir fyrir **liði; 2.2 - 2.7**. Gefið er hálft fyrir liði sem eru ábótavant.
- Sein skil eru ekki í boði.

