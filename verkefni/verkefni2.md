## Verkefni 2: DOM og Events (15%)

### 2.1 Spurningar (4%)

1. Afhverju er `getElementById()` fljótleglegasta aðferðin?
2. Hver er munurinn á static og live NodeList?
3. Hver er munurinn á true og false í AddEventListener?
```javascript
   elem.addEventListener("click", handlerFunction, true);
   elem.addEventListener("click", handlerFunction, false);
```
4. this vísar í Event listener á html element en ekki á object. Þú getur notað `bind()` til að breyta því.
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


### 2.2 DOM (4%)
**Í html:**
```
<p>málsgrein 1</p>
<p>málsgrein 2</p>
<div>div 1</div>
  <p>málsgrein 3</p>
<div>div 2</div>
```

**Í Javascript:**
1. Notaðu `querySelector()` til að velja málsgrein nr 1. og litaðu textann rauðan.
1. Veldu allar málgreinar og breyttu textanum í ensku með textContent aðferðinni.
1. Bættu við efst með `InnerHTML` `<h1>` með textanum Verkefni 2.2.
1. Bættu við neðst með `createElement()` og `append()` málsgrein með nafninu þínu.


### 2.3 QuizApp 7%

1. (2%) Búðu til tvær spurningar (frjálst efnisval) með JavaScript. Útlit (css) er algjört aukaatriði. Spurning 1 á að hafa fjóra svarmöguleika, spurning 2 á að hafa tvo svarmöguleika (true/false). Haltu utan um spurningar, svarmöguleika og rétt svör. 

1. (1%) Birtu fyrstu spurninguna ásamt svarmöguleikum með JavaScript.

1. (2%) Þegar notandi velur svarmöguleika með músasmelli þá á bakgrunnslitur á völdum svarmöguleika að breytast (eða sambærileg upplifun).

1. (2%) Þegar búið er að smella á svarmöguleika þá á spurning ásamt svarmöguleikum að hverfa af skjánum og spurning  nr. 2 ásamt svarmöguleikum að birtast á sömu vefsíðu. Útfærðu þetta með JavaScript.


## Námsmat og skil	
* Gefið er fullt fyrir lið sem er vel útfærður, með rétta lausn eða rétt svar, hálft ef hann er ábótavant. 
* Notaðu Github Pages fyrir lið 2.3
* Skilaðu á Innu Github vefslóð sem inniheldur svör og lausnir.
