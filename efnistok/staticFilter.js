/*
 * Að finna einstaklinga sem rukka milli $65 og $90 og bæta þeim við nýtt fylki.
 * Sýnidæmi (jQuery útfærsla með töflu): http://javascriptbook.com/code/c12/filter-filter.html
*/  

// DATA, Array of objects.
const people = [
		{ name:'Casey', rate: 60 },
		{ name:'Camille', rate: 80 },
		{ name:'Gordon', rate : 75 },
		{ name:'Nigel', rate: 120 }
];
       
function priceRange(person) {        
	return (person.rate >= 65) && (person.rate <= 90);     // skilar true ef skilyrði eru uppfyllt
};

// filter fylkjaaðferðin, býr til nýtt fylki (results), með öllum stökum sem uppfylla skilyrði fallsins priceRange.
// priceRange fallið er keyrt á hvert stak í fylkinu people.
// Ef priceRange skilar true, þá er object vísun afrituð í results fylki, annars ekki ef það er false.
let results = people.filter(priceRange); 

console.log(people);  	// [{ name: 'Casey', rate: 60 },{ name: 'Camille', rate: 80 },{ name: 'Gordon', rate : 75 },{ name : 'Nigel', rate: 120 }]
console.log(results); 	// [{ name: 'Camille', rate: 80 },{ name: 'Gordon', rate : 75 }]

