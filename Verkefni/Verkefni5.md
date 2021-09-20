### Verkefni 5 - DOM og Events (15% af heildareinkunn)

---

#### 5.1 Búðarlisti (25%)

Þú ert með eftirfarandi lista í html: 
```html
<ul id="vorur">
  <li class="mikilvaegt"><a href="/item">sykur</a></li> 
  <li><a href="/item">smjör</a></li>
  <li><a href="/item">hunang</a></li>
  <li><a href="/item">vanilludropar</a></li>
</ul>

```

Það má ekki gera neinar breytingar beint í html. 
Notaðu eingöngu JavaScript til að gera eftirfarandi:

1. bættu við klasann `mikilvaegt` við smjör. (5%)
1. láttu klasann `mikilvaegt` hafa rauðan lit. (5%)
1. breyttu hunang í sýróp. (5%)
1. búðu til vöru að eigin vali og bættu henni fremst í listann. (10%)
<!-- 1. eyddu völdum hlut sem þú smellir á (click) í listanum.  -->

---


#### 5.2 Drum kit (30%) 
Skoðaðu **Day 1: JavaScript Drum kit** í [30 Day Vanilla JS Coding Challenge](https://javascript30.com/). Hér er [kóðaskráin](https://github.com/wesbos/JavaScript30/tree/master/01%20-%20JavaScript%20Drum%20Kit).

Breyttu eða bættu við eftirfarandi virkni:

1. Breyttu bakgrunnslit, eða bakgrunnsmynd í takt við smelli. (15%)
1. Útfærðu `click` meðhöndlun til að spila hljóð með músarsmell. (15%)

---

#### 5.3 Binding this (5%)
`this` vísar í Event listener á html element en ekki á object. Þú getur notað `bind()` til að breyta því.
Leystu eftirfarandi kóðadæmi með notkun á bind() til að birta í console "My name is Gunnar" en ekki `undefined`.

```JavaScript
let Person = {
  name: 'Gunnar',
  sayName: function(){
    console.log('My name is '+ this.name);
  }
};

buttonEl.addEventListener('click', Person.sayName);
```

---

#### 5.4 QuizApp (40%)

1. (10%) Búðu til tvær spurningar (frjálst efnisval) með JavaScript. Spurning nr. 1 á að hafa fjóra svarmöguleika og spurning nr. 2 á að hafa tvo svarmöguleika (true/false). Notaðu fylki til að Haldu utan um gögnin (objects); spurningar, svarmöguleika og rétt svör. 
1. (10%) Birtu í html skrá fyrstu spurninguna ásamt svarmöguleikum með JavaScript.
1. (10%) Þegar notandi velur svarmöguleika með músasmelli þá á bakgrunnslitur á völdum svarmöguleika að breytast (grænt fyrir rétt, annars rautt).
1. (10%) Þegar búið er að smella á svarmöguleika þá á spurning ásamt svarmöguleikum að hverfa af skjánum og spurning nr. 2 ásamt svarmöguleikum að birtast í sömu html skrá, útfærðu þetta með JavaScript.

_Ath. útlit (css) er algjört aukaatriði._

---

### Námsmat og skil	
* Gefið er fullt fyrir lið sem er vel útfærður, hálft ef hann er ábótavant. 
* Skilaðu á Innu vefslóð á e. private Github geymslu sem inniheldur kóða og lausnir.



