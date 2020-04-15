// JSON object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON

// JSON Validator
//  JSON Validator: http://jsonlint.com/

/*
 * A common use of JSON is to read data from a web server, and display the data in a web page. Using XMLHttp (AJAX)
 * JSON stands for JavaScript Object Notation. It was named this way because JavaScript was the first language to take advantage of the format.
 * Essentially, JSON is a human readable method of storing arrays and objects with values as strings. 
 * It is used primarily for data transfer (data transfer format)
 * JSON can be parsed by a variety of different languages (er ekki tungumál) JSON doesn’t have variables
 * Commonly it is used when the front-end part of your application requires some data from the back-end without a page reload. 
 * This is normally achieved using JavaScript with an AJAX request.
 * 
*/

// JSON syntax
/* 
 * key/value parasamband
 * Gögn eru aðgreind með kommu
 * {}, Slaufusvigi eru utan um JSON object og innri objecta 
 * [], hornklofi er utan um fylki
 * key verður að vera með tvöföldum gæsalöppum og vera strengur
 * value geta verið; String,numbers (Double, Float), Boolean (true/false), Array, object, null
 * Ekki hægt að commenta í JSON skrá
 * JSON hefur ekki föll
 * JSON strengir verða að vera með tvöföldum gæsalöppum
 * JSON í JS skrá er í formi strengs.
 * JSON skráarsnið er með .json endingu, MIME type fyrir JSON text er "application/json"
 * Þú getur notað JSONLint til að validate JSON. http://jsonlint.com/ 
*/

{"name":"Lushui","species":"Panda","diet":"Green Things","age":7,"colours":["red","brown","white"]}


// eða svona, autt bil (white space skiptir engu máli)
{
    "name": "Lushui",
    "species": "Panda",
    "diet": "Green Things",
    "age": 7,
    "colours": [
        "red",
        "brown",
        "white"
    ]
}

// Dæmi um object literal í JavaScript. Ekki JSON skrá (sérðu muninn?).
var lushui = {
			    name:       'Lushui',
			    species:    'Panda',
			    diet:       'Green Things',
			    age:        7,
			    colours:    ['red', 'brown', 'white']
			};


// Annað dæmi: JSON object containing an object containing an array of objects
{
    "an_object": {
        "an_array_of_objects": [
            { "The": "secret" },
            { "is": "that" },
            { "I": "still" },
            { "love": "shoes!" }
        ]
    }
}

// Ath: Stundum sérðu JavaScript object hafa gæsalappir í key
// en það er til að auðvelda cross-platform, virki með php, c#  þegar unnið er með JSON.

/**
 * Serialize og Deserialize objects
 * To transfer your objects via HTTP or to otherwise convert it to a string, you will need to serialize it. 
 * You can use the JSON.stringify function to serialize your objects (convert it to a string).
 * Then you need to deseralize by using JSON.parse.
 */

// Serialize (stringify) Object to string
	
	// JavaScript object
	var christmasList = {mike:"Book", jason:"sweater", chelsea:"iPad" }

	// breytum JS object í JSON streng. 
	// We cannot access the properties with dot notation (like christmasListStr.mike)
	var christmasListStr = JSON.stringify(christmasList);		// "{"mike":"Book","jason":"sweater","chels":"iPad"}"

	// Skoðum object í console
	console.log(christmasList);

	// Skoðum JSON streng í console
	console.log(christmasListStr);



// Deserialize (JSON.parse) JSON String to object

	// Let’s convert it to an JavaScript object
	var christmasListObj = JSON.parse(christmasListStr); 

	// Now that it is an object, we use dot notation
	console.log(christmasListObj.mike); // Book



// To print a stringified object with formatting, add "null" and "4" as parameters:
console.log(JSON.stringify (christmasList, null, 4));






// JSON vs XML
/* 
 * XML has to be parsed with an XML parser, JSON can be parsed by a standard JavaScript function.
 * 
 * Both JSON and XML is "self describing" (human readable)
 * Both JSON and XML is hierarchical (values within values)
 * Both JSON and XML can be parsed and used by lots of programming languages
 * Both JSON and XML can be fetched with an XMLHttpRequest
 *
 * JSON is quicker to read and write (AJAX)
 * JSON can use arrays
*/