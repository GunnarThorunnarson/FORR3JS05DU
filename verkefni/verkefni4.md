## Verkefni 4 (35%)

### Verkefnalýsing

Búðu til vefapp með JavaScript fyrir viðburði. Hér er sýnidæmi um vefapp [Hvað er í bíó](http://www.hvaderibio.is/).
<br>
![Sýnidæmi](https://github.com/GunnarThorunnarson/FORR3JS05DU/blob/master/verkefni/V4-Vidburd.png)

### Verkefnið þarf að uppfylla eftirfarandi skilyrði:

1. JSON gögn og gagnavinnsla (3%)
   1. Notaðu eftirfarandi [JSON gögn](https://github.com/GunnarThorunnarson/FORR3JS05DU/blob/master/verkefni/data.json) sem grunn til að vinna með en breyttu og bættu við viðburðum (lágmark 12 viðburðir). Notaðu [JsonLint](https://jsonlint.com/) til að kanna villur. Það er einnig í boði að nota eitthvert API.
   1. Gögnin (JSON) eru sótt með fetch aðferð, filteruð (ef þess er þörf) og yfirfærð í viðeigandi [gagnaskipan](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/Gagnaskipan).

1. Birting gagna með DOM vinnslu með Dom manipulation eða InnerHTML.(5%)

   1. Nafn viðburðar
   1. Staðsetning 
   1. Dagsetning 
   1. Mynd

1. Notandi á að geta notað e. [Range slider](https://refreshless.com/nouislider/) til að filtera viðburð eftir tímabili ( dagar eða mánuðir ) (12%)

    1. Stilltu slider þannig að hann sé notendavænn; handföng, step, position, snap, margin, orientation, animation osfrv.
    2. Slider er með range og upphafsstöður (min og max) útfrá tímabili.
    3. Notandi á að geta með gagnvirkum hætti stýrt slider sem birtir viðburði filterað eftir tímabili sjá m.a. [Events](https://refreshless.com/nouislider/events-callbacks/).

1. Notandi á að geta fundið heiti viðburðar með leitarreit (3%)
1. Notandi getur valið viðburði með dagatali. (4%)
1. Íslensk dagsetning: (3%) <br>
   Brjóttu upp framsetningunni á tíma og dagsetningu með [Moment.js](http://momentjs.com/) safninu.

1. Framsetning og viðmót vefapps, virkar vel í síma (e. responsive). CSS framendasöfn og templates eru leyfð. (5%)



### Námsmat og skil
* Búðu til repository með doc möppu sem vefrót sem inniheldur vefappið.
* Í readme. skal vera linkur á vefappið.
* Skrifaðu íslenskar athugasemdir í kóðaskrá.
* Gefið er fullt fyrir fullnægjandi útfærslu á lið, hálft ef hún er ábótavant.
