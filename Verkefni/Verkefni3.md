## Verkefni 3 - 20%
Einstaklingsverkefni <br>

---
### 3.1 Canvas (6%)
Teiknaðu listaverk, sjálfsmynd í [Kandinsky](https://www.wassilykandinsky.net/work-234.php) stíl með [Canvas API](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/Canvas).

Eftirfarandi atriði þurfa að koma fram:
- búðu til nokkra grunnhluti (basic shapes); línur, rétthyrninga. þríhyringa og hringi.
- notaðu `path` til að búta til beinar línur (curves) og rétthyrningar.
- notaðu `arc()` til að búa til augu t.d; mána (fylltan) eða hluta af hring (ófylltur). 
- notaðu `Bezier curves` til að búa til sveigðar línur og flóknari hluti.
- búðu til flókna hluti sem eru holóttir og samsettir, sjá t.d. með `clear` og `clip()`.  
- notaðu mismunandi liti, fill, stroke, rgba, gradient.
- notaðu mismunandi line styles; Linewidth, Linecap, LineJoin. 
- settu litla ljósmynd í ramma í bagrunn. 
- snúðu og stilltu hlutum eftir þörfum með; `translate`, `rotating`, `scaling`, `transform`.
- merktu listaverkið með nafninu þínu, notaðu `font`, `stroke` `shadows` osfrv til að ná þessu fram.

---

### 3.2 Tölvuleikur í vafra með Canvas API (14%)
Búðu til 2d tölvuleik sem er spilanlegur í vafra. Leikurinn er gerður í Canvas API.
Viðfangsefni leiks er frjálst en kóðinn og leikurinn verður að vera þín eigin sköpun.
Skoðaðu t.d. [Leikjagerð](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/Leikjager%C3%B0). <br> 
JavaScript söfn eru **ekki** leyfð.

Leikurinn þarf að uppfylla eftirfarandi atriði:

1. (2%) Umhverfi og útfærslu uppbyggingar leiks, t.d. með fall (e. loop) sem teiknar (e. render) senuna og hermun (game loop).
1. (2%) Notað er class og erfðir fyrir leikjahluti (game objects).
1. (1%) Leikjahlutir eru með mismunandi lögun og útlit (pc, npc, obstacles). Notað er fylki til að halda utan um leikjahlutina.
1. (3%) Leikjastjórnun (e. game controls). Hægt er að stýra aðalspilara (pc) með lyklaborð eða mús sjá `addEventListener()`.
1. (3%) Aukapersónur (non player character) hafa sjálfgefna hegðun eða hreyfingu (frjáls útfærsla)
1. (3%) Árekstur (collision)
   - aðalpersónu og aukapersónur við hindranir og jaðar leiks þá t.d. breyta um stefnu.
   - aðalpersóna og aukapersónur þá t.d. ljúka leik.

#### Leikjahugtök
- Game Loop: Leikjalykkja sjá nánar [Game loop](http://gameprogrammingpatterns.com/game-loop.html)
- Game objects: leikjahlutir (hlutir í leik)
- Player controller (pc): Aðalpersóna sem hægt er að stýra með inntaki frá notanda (stjórntæki).
- Non player character (npc): Aukapersónur stýrt af reikniritum.
- obstacles: Hindranir í leik, t.d. veggur.

---

### Námsmat 
* Verkefnið er metið útfrá vinnuframlagi, málfræðinotkun og ofangreindum atriðum. 
* Gefið er fullt fyrir fullnægjandi útfærslu, hálft ef hún er ábótavant.
* Skrifaðu íslenskar athugasemdir hjá föllum og objectum í kóðaskrá.

---

### Skil
* Skilaðu á Innu vefslóð á **private** Github geymslu sem inniheldur listaverk, leik, kóða og gögn. Mundu að bjóða mér _GunnarThorunnarson_. 
* Í `readme.md` skal koma fram; lýsing tölvuleiks (hvernig á að spila).

<!--
* Notaðu Github Pages til að hýsa leikinn (´docs´ mappa í rót).
-->




