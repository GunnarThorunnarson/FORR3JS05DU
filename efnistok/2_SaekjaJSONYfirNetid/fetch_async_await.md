```JavaScript
// data.json
/*
[{
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
} ...]
*/
let myndir;  // fylki

// Sækja JSON 
async function getData() {
    let url = 'data.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

// Setja allt upp.
async function Setup(){
    myndir = await getData();
    // Raðar eftir verði.
    myndir.sort((a, b) => parseFloat(a.price) - (b.price));
    ...
   
```
