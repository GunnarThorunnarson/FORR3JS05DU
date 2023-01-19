### Synchronus vs asynchronous (async)

Hér er dæmi um synchronous kóða þar sem lína 1 er keyrð og svo þar á eftir lína 2.
Kóðinn er kallaður e. **blocked** þegar við skilyrðum kóðann þannig að skipunin í lína 1 þarf að klárast alveg (download tíminn), áður en skipun í línu 2 er framkvæmd.

```javascript
// Dæmi um blocking-style kóða:
a()
b()

let photo = download('http://foo-chan.com/images/sp.jpg')
uploadPhotoTweet(photo, '@maxogden')
```

blocked kóði þýðir að við getum ekkert gert á meðan (t.d notendaaðgerðir; mús, scroll osfrv.). Blocked kóða bera að forðast, sérstakleg þar sem við getum framkvæmt amk. 8.5 milljón skipanir á 1 sekúndu.

JavaScript er synchronous (línu fyrir línu) og e. **non-block** sem þýðir að hún klárar skipunina en hinkrar ekki eftir að aðgerð er kláruð (bíður ekki eftir download). JS þýðandinn fer strax í næstu línu og framkvæmir næstu skipun.


```javascript
// Dæmi um non- blocking-style kóða:
a(b)
c
```

1.  **a** er framkvæmt fyrst svo **c** 
1. Þegar a er búið (einhvern tímann síðar) þá er b framkvæmt (b kallast callback fal)
1. b fer þá í röð og er hleypt á callstack (til að framkvæma) þegar hann er tómur, t.d þegar c er búið að framkvæmast.

---

### Callback 
Callback er fall sem er sent inn sem e. parameter (færibreyta) til annars falls og er keyrt eftir að ytra fall (e. parent function) hefur lokið.. Callbacks  eru sérstök að því leyti að þau bíða með keyrslu þar til ytra fall hefur klárað. Á meðan gæti vafri veri að keyra önnur föll og að gera ýmislegt.

Venjulega þá eru effectar keyrðir á sama tíma.  En hvað ef við viljum það ekki.

```javascript
// jQuery dæmi:
$('#photo').fadeIn(10000);
$('h2').fadeOut('slow');  
```

fadeIn() fer fyrst af stað og stendur yfir í 10 sekúndur. Vafrinn mun ekki hinkra í 10 sekúnudur með að lesa inn næstu JavaScript kóða  heldur mun hún keyra næstu skipun eða línu 2 um leið og hún hefur klárað að lesa inn línu 1.  Þannig í raun þá er lína 1 og lína 2 keyrð nánast samtímis.  

**chain function** gæti verið lausn í einhverjum tilfellum en aðeins ef við erum að vinna með sama selector.

```javascript
// jQuery dæmi:	
$('#photo').fadeIn(10000).fadeOut('slow');
```
En það á ekki við í þessu tilfelli þar sem við erum með tvo sitthvora selectora (#photo og h2).
Til að leysa þetta dæmi þá þurfum við að nota callback.

Callback er kóði sem er keyrður eftir að effect hefur klárað það sem honum var ætlað að gera.  
Callback er þá sendur sem annar eða þriðji parameter sem nafnlaust fall.

```javascript
// jQuery dæmi:
$('#element').fadeIn('slow', fucntion() {
	// callback function
});
```

Þetta er kall til jQuery’s fadeIn() aðferð. Þessi aðferð tekur inn tvö argumentss: Hraða á fade-in og callback fall sem þú getur útfært að vild.

