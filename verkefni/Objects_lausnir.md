
1.Búðu til JS object með upplýsingar um þig; nafn, kennitala, heimilisfang, heimasími og gsm.

```javascript

	var me = {
				name:"Gunnar",
				kennitala: 123456,
				heimilisfang: "Tækniskólinn",
				phones:[5551234,8881234]
			};

```

2. Notaðu for…in lykkjuna til að birta öll eigindin (e. property) ásamt gildum í objectinu í lið 1.
```javascript
for (let property in me) {
    console.log(`${property}: ${me[property]}`);
}
```
3. Bættu við aðferð í objectið sem þú gerðir í lið 1. Aðferðin á að skila streng sem inniheldur nafn og aldur.
```javascript
me.age = 20; // add age and value to object

me.info = function() {
    return `${this.name}, ${this.age}`;
}
```
4. Prentaðu út með console.log() nafnið Nonni
```javascript
	var family = {
			"parents": 
				{
				"fathers": [{"name":"Jakob"},{"name":"Nonni"}],
				"mothers":[{"name":"Rakel"},{"name":"Sara"}]
				}
		};
	console.log(family.parents.fathers[1].name);
	// console.log(family["parents"]["fathers"][1]["name"]);
```
5.Leystu lið 8 í lesson 7 (Objects) á Udacity https://classroom.udacity.com/courses/ud803/
```javascript
		let breakfast = {name: "The Lumberjack", price: "$9.95", 
	    ingredients: [
	        "eggs",
	        "sausage",
	        "toast",
	        "hashbrowns",
	        "pancakes"
	    ]};
```

6.Leystu lið 9 í lesson 7 (Objects) á Udacity https://classroom.udacity.com/courses/ud803/
```javascript
		let savingsAccount = {
	    balance: 1000,
	    interestRatePercent: 1,
	    deposit: function addMoney(amount) {
	        if (amount > 0) {
	            savingsAccount.balance += amount;
	        }
	    },
	    withdraw: function removeMoney(amount) {
	        var verifyBalance = savingsAccount.balance - amount;
	        if (amount > 0 && verifyBalance >= 0) {
	            savingsAccount.balance -= amount;
	        }
	    },
	    // your code goes here
	    printAccountSummary: function () {
	        return "Welcome! \n" +
	        "Your balance is currently $" + this.balance + " and your interest rate is " + this.interestRatePercent + "%.";
	    }
	};
	window.console.log(savingsAccount.printAccountSummary());
```

7.Leystu lið 12 í lesson 7 (Objects) á Udacity https://classroom.udacity.com/courses/ud803/
```javascript	
		let donuts = [
	    { type: "Jelly", cost: 1.22 },
	    { type: "Chocolate", cost: 2.45 },
	    { type: "Cider", cost: 1.59 },
	    { type: "Boston Cream", cost: 5.99 }
		];

		// your code goes here

		donuts.forEach(function (donut) {
		    window.console.log(donut.type + " donuts cost $" + donut.cost + " each");
		});
```
8. Eru öll eigindi (e. properties) í sömu röð og þeim var bætt í object, rökstuddu? 
Í gegn um tíðina hafa mismunandi vafrar höndlað þetta á mismunandi hátt en í ES2015 er uppröðunin eftirfarandi:

* Lyklar sem eru heiltölur (eða er hægt að breyta í heiltölur), í hækkandi röð(0-1-2)
* Venjulegir strengjalyklar, í þeirri röð sem þeir eru settir inn
* Symbols, í þeirri röð sem þau eru sett inn

9. Útskýrðu hvað eftirfarandi kóði gerir.
```javascript
	let user = { name: "John" };
	let admin = user;
```
Breytan user er skilgreind sem hlutur með einu eigindi (e. property), name, sem hefur gildið "John". Breytan admin er skilgreind sem vísun í sama hlut og user. admin er því ekki afrit af user heldur benda báðar breytur á sama hlutinn. Þegar hlutur er afritaður þá er tilvísunin (Reference) afrituð en ekki hluturinn (Object) sjálfur. Verið er að afrita addressuna með hjálp pointera.

10. Afhverju virkar eftirfarandi? 
```javascript
	const user = {
  	name: "John"
	};

	user.age = 25; 
	alert(user.age); // 25
```
`const` er lykilorð í JavaScript sem notað er til að skilgreina fasta (e. constants). Það hljómar rökrétt að ekki sé hægt að breyta hlutum sem tilheyra breytum sem eru skilgreindar með const. Það er hins vegar misskilningur. const kemur ekki í veg fyrir að hlutnum sé breytt heldur breytunni. Þegar eigindi er bætt við hlut breytist breytan ekkert, hún bendir enn á sama hlutinn. Ef maður ætlar hins vegar að gefa breytunni nýtt gildi, t.d. með því að segja `user = 5`, þá virkar það ekki.