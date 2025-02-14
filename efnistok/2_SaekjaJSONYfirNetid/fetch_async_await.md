```JavaScript
// data.json
/*
[
    {
        "painting": "Sunflowers",
        "artist": "Vincent Van Gogh",
        "date": "1888-06-13",
        "price": 3000,
        "img": "https://iiif.micr.io/HVTVF/full/800,/0/default.webp"
    },
    {
        "painting": "The Girl with a Pearl Earring",
        "artist": "Jan Vermeer",
        "date": "1881-07-27",
        "price": 2000,
        "img": "https://en.most-famous-paintings.com/Art.nsf/O/8XYC2C/$File/Jan-Vermeer-The-Girl-with-a-Pearl-Earring.jpg"
    }
]
*/

let myndir;  // array

// Sækja JSON 
async function getData() {
    let url = 'data.json';
    try {
        let response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

// Setja allt upp fyrst.
async function setup(){
    myndir = await getData();
    // Gera eitthvað við gögnin 
    myndir.sort((a, b) => parseFloat(a.price) - (b.price)); // raða eftir verði
}
setup();
   
```
