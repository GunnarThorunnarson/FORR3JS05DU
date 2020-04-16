/*
Static filtering		
	Verkefnið: Að finna einstaklinga sem rukka milli $65 og $90 og bæta þeim við nýtt fylki.
	Sýnidæmi (jQuery útfærsla með töflu): http://javascriptbook.com/code/c12/filter-filter.html
*/  

// DATA, Array of objects.
const people = [
		{ name:'Casey', rate: 60 },
		{ name:'Camille', rate: 80 },
		{ name:'Gordon', rate : 75 },
		{ name:'Nigel', rate: 120 }
];
       
/* 
	 The filter() array method creates a new array with all elements that pass the test implemented by the provided function.
	 filter notar callback (kall á fallið priceRange) á hvert object í fylkinu people.
	 Ef priceRange fallið skilar true þá er object úr people afritað í results fylkið.
*/ 

// results er fylki sem geymir síuð gögn, person er object í fylkinu people
let results = people.filter(person => {
	return (person.rate >= 65) && (person.rate <= 90); 	// skilar true ef skilyrði eru uppfyllt
}) 

console.log(people);  	// [{ name: 'Casey', rate: 60 },{ name: 'Camille', rate: 80 },{ name: 'Gordon', rate : 75 },{ name : 'Nigel', rate: 120 }]
console.log(results); 	// [{ name: 'Camille', rate: 80 },{ name: 'Gordon', rate : 75 }]


/* 
	// önnur kóðaritun
	let	results = people.filter(priceRange); 	
		function priceRange(person) {        
					return (person.rate >= 65) && (person.rate <= 90); 	
		};
*/