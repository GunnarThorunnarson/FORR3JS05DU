### Callback
Kóðinn er kallaður e. **blocked** þegar við skilyrðum kóðann þannig að skipunin í lína 1 þarf að klárast alveg áður en skipun í línu 2 er framkvæmd. Blocked kóði þýðir að við getum ekkert gert á meðan (t.d notendaaðgerðir; mús, scroll osfrv.), `alert()` er dæmi um fall sem er blockerandi. Blocked kóða bera að forðast, sérstakleg þar sem við getum framkvæmt amk. 8.5 milljón skipanir á 1 sekúndu. <br>

JavaScript er e. synchronous (línu fyrir línu) og e. **non-block** sem þýðir að JavaScript þýðandinn klárar skipunina en hinkrar ekki eftir að aðgerð er kláruð. JS þýðandinn fer strax í næstu línu og framkvæmir næstu skipun. Þetta getur skapað vanda fyrir I/O aðgerðir eins og niðurhal eða HTTP request. <br>

Ef við viljum tryggja að **a** klári áður en **b** er framkvæmt án þessa að stöðva allt forritið á meðan þá þurfum við nota **callback**: 

```javascript
a(b);
c();
```

**a** er framkvæmt fyrst svo **c**. Þegar **a** er búið (einhvern tímann síðar) þá er **b** framkvæmt. <br>
**b** köllum við hér callback fall, þ.e. fall sem er keyrt þegar annað fall hefur klárast. Á meðan gæti vafri verið að keyra önnur föll og að gera ýmislegt.
