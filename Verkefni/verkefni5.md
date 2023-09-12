## Verkefni 5 
- 15% af heildareinkunn
- Vika 6
- DOM

---

### Verkefnalýsing

Búðu til vefapp ([sýnidæmi](https://javascriptbook.com/code/c06/mutation.html)) í síma sem heldur utan um vörur sem þú þarft að versla inn.  
Skoðaðu vel [Simple Todo List](https://courses.webdevsimplified.com/view/courses/javascript-simplified-beginner/521736-Basic-DOM/1510717-43-Simple-Todo-List) og [Todo App From Start To Finish](https://codingthesmartway.com/building-a-vanilla-javascript-todo-app-from-start-to-finish-ep-1-introduction-project-setup/) (5 myndbönd).

Notaðu eftirfarandi object:

```javascript
let shoppingList = {
items: [
    {name:"pizza", price: 850},
    {name:"t-shirt", price: 3000},
    {name:"bounty", price: 150},
    {name:"coke", price: 250}
  ],
  total: 0
}
```
1. [ ] Búðu til fallið _listTotal_ sem reikna út heildarverð (total) allra vara úr _shoppingList_. **20%**
1. [ ] Vefappið sýnir (HTML og CSS) allar vörur (heiti og verð) ásamt heildarverði allra vara úr shoppingList. **30%**
1. [ ] Notandi á að geta bætt við nýjum vörum á vörulista, heildarverð uppfærist. **15%**
1. [ ] Notandi á að geta fjarlægt vörur af vörulista, heildarverð uppfærist. **15%**
1. [ ] Notaðu [localStorage](https://github.com/GunnarThorunnarson/FORR3JS05DU/wiki/Web-Storage) til að varðveita vörulista í vaframinni. **20%**

---

### Námsmat og skil	
* Gefið er fullt fyrir lið sem er vel útfærður, hálft ef hann er ábótavant. 
* Fjarlægðu allan kóða sem er ekki notaður í lausn sem og aukaleg virkni sem samræmist ekki verkefnalýsingu.
* Skilaðu á Innu html skrá með JavaScript kóðalausn.

<!-- Búðu til fallið _listTotal_ sem tekur objectið _shoppingList_ sem færibreytu (argument). Fallið á að reikna út heildarverð (total) allra vara. -->
