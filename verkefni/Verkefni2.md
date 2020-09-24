## Verkefni 2 - 15%
Einstaklingsverkefni <br>
Tími: 2 vikur
---

### Verkefnalýsing
Lærðu á grunnatriðin í [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial) 

Búðu til hermun (e. simulation) með notkun Canvas API og JavaScript. Sjá [Bouncing ball](https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html) sýnidæmi. <br>
Notaðu [Object building practice (part 1 og 2) ](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/Canvas#hermun-e-simulation) sem grunn en með eftirfarandi breytingum og viðbótum:

1. (1%) Canvas uppsetning, breyttu bakgrunninum, notaðu mynd.
1. (1%) Notaðu class í staðinn fyrir Prototype; `Ball` og `Evil` erfa frá `Shape`.
1. (1%) Breyttu `draw()` hjá `Ball` þannig að hlutur hafi aðra lögun (e. shape) en bolti.
1. (4%) `Evil` hefur:
   1. aðra lögun (e. shape) 
   1. nýja hegðun eða hreyfingu. Frjáls útfærsla sjá t.d. [Khan Academy: Natural Simulations](https://www.khanacademy.org/computing/computer-programming/programming-natural-simulations) til að fá hugmyndir.
1. (4%) Við árekstur hlutar við annan hlut þá:
   1. annar hluturinn breytir um hraða og stefnu.
   1. hinn hluturinn deyr.
1. (1%) Notaðu fylki til að halda utan um alla hluti.
1. (2%) Birtu teljara sem sýnir fjölda hluta sem eru á lífi. 
   ```
     // Smá aðstoð með DOM
     const para = document.querySelector('p');   // para geymir vísun á  <p> í html skrá.
     para.textContent = 'Ball count: ' + count;  // textContent skrifar streng í <p> í html skrá
   ```
1. (1%) Búðu til fall (e. loop) sem teiknar (e. render) senuna og hermun. 

**Ath** ekki nota inntak frá notanda, `addEventListener()` í þessu verkefni.
---
### Námsmat og skil
* Námsmat byggir á; notkun með Canvas, JS málfræði og kóðaútfærslum. 
* Gefið er fullt fyrir fullnægjandi útfærslu á lið, hálft ef ábótavant.
* Skilaðu hlekk á github geymslu sem er e. private í Innu. 
* Kóði þarf að vera með íslenskum athugasemdum þar sem það á við.


