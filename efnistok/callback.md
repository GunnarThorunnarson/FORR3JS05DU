### Synchronus vs asynchronous (async)

Hér er dæmi um e. synchronous kóða þar sem lína 1 er keyrð og svo þar á eftir lína 2.
Kóðinn er kallaður e. **blocked** þegar við skilyrðum kóðann þannig að skipunin í lína 1 þarf að klárast alveg áður en skipun í línu 2 er framkvæmd.

Dæmi um blocking-style kóða:
```javascript
a()
b()

let photo = download('http://foo-chan.com/images/sp.jpg')
uploadPhotoTweet(photo, '@maxogden')
```

Blocked kóði þýðir að við getum ekkert gert á meðan (t.d notendaaðgerðir; mús, scroll osfrv.). Blocked kóða bera að forðast, sérstakleg þar sem við getum framkvæmt amk. 8.5 milljón skipanir á 1 sekúndu.

JavaScript er e. synchronous (línu fyrir línu) og e. **non-block** sem þýðir að hún klárar skipunina en hinkrar ekki eftir að aðgerð er kláruð (bíður t.d. ekki eftir download). JS þýðandinn fer strax í næstu línu og framkvæmir næstu skipun.

Dæmi um non- blocking-style kóða:

```javascript
a(b)
c
```

**a** er framkvæmt fyrst svo **c**. Þegar **a** er búið (einhvern tímann síðar) þá er **b** framkvæmt. <br>

**b** köllum við hér callback fall, þ.e. fall sem er keyrt þegar annað fall hefur klárast. Á meðan gæti vafri verið að keyra önnur föll og að gera ýmislegt.
af stað og stendur yfir í 10 sekúndur. Vafrinn mun ekki hinkra í 10 sekúnudur með að lesa inn næstu JavaScript kóða  heldur mun hún keyra næstu skipun eða línu 2 um leið og hún hefur klárað að lesa inn línu 1.  Þannig í raun þá er lína 1 og lína 2 keyrð nánast samtímis.  
