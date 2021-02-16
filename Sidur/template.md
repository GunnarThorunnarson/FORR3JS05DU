
State is data at a particular moment in time. It’s the present "state" of your data. You use JavaScript to build the DOM based on the current data state. Given our data, this is how the DOM should look. Then you render an updated layout.

---

### JavaScript aðferðir til að búa til html.
- [innerHTML vs createElement](https://www.javascripttutorial.net/javascript-dom/javascript-innerhtml-vs-createelement/) 
<!--
- [insertAdjacentHTML](https://www.javascripttutorial.net/javascript-dom/javascript-insertadjacenthtml/)
- [Image smiður](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image) 
-->

---

### String concatenation + innerHTML  

```JavaScript
const headingText = 'I am a heading!';
const markup = '<div><h1>' + headingText + '</h1></div>';

// eða ...

const markup = 
  '<div>' +
    '<h1>' + headingText + '</h1>' +
  '</div>';

document.body.innerHTML = markup;
```
Ath. Nota sanitizer fall t.d. [DOMPurify](https://github.com/cure53/DOMPurify) til að koma í veg fyrir XSS árásir þegar notað er innerHTML. 
<br>

---

### [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) + innerHTML 

```JavaScript
const headingText = 'I am a heading!';
const markup = `
    <div>
        <h1> ${headingText} </h1>
    </div>
`;

document.body.innerHTML = markup;
```
---

### Nested Template literals + [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) + [join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join#:~:text=The%20join()%20method%20creates,returned%20without%20using%20the%20separator.) + innerHTML

```JavaScript
const dogs = [
    { name: 'Snickers', age: 2 },
    { name: 'Hugo', age: 8 },
    { name: 'Sunny', age: 1 }
];

/*  
  map skilar fylki. 
  join býr til streng úr stökum í fylki. 
  join með tóman streng fjarlægir kommuna (e. seperator). 
*/
const markup = `
    <ul class="dogs">
        ${dogs.map(dog => `<li> ${dog.name} is ${dog.age * 7} </li>`).join('')}
    </ul>
`;

document.body.innerHTML = markup;
```
Sjá nánari kóðaskýringar á [Templating html with template strings](https://wesbos.com/template-strings-html/)

---

### Template literals + map + [Ternary](https://gomakethings.com/ternary-operators/) + innerHTML



Það er ekki hægt að nota `if` í template literals en það er hægt að nota `ternary`. <br>


```JavaScript
let wizards = ['Hermione', 'Neville', 'Gandalf', 'Radagast'];
let showHeading = true;
let markup = `
    ${showHeading ? '<h1>Awesome Wizards</h1>' : ''}
	<ul>
		${wizards.map( wizard => { return `<li>${wizard}</li>`; } ).join('')}
    </ul>
`;
    
document.body.innerHTML = markup;
```

---

### Template literal + data object + function + innerHTML

```JavaScript

const person = {
    name: 'Gunnar',
    position: 'teacher',
    courses: ['JS', 'HTML', 'CSS']
}

const markup = `
 <div class="person">
    <h3>${person.name}</h3>
    <p>${person.position}</p>
    <ul>
        ${tempList(person.courses)}
    </ul>
 </div>
`;

function tempList(arr) {
    return arr.map( item => { return `<li>${item}</li>`; } ).join('');
}

document.body.innerHTML = markup;
```

---

### createElement + appendChild 

```JavaScript
const headingText = 'I am a heading!';
const container = document.createElement('div');
const heading = document.createElement('h1');
const content = document.createTextNode(headingText)

heading.appendChild(content);
container.appendChild(heading);
document.body.appendChild(container);
```

---

### createElement API + template literal + map 

```JavaScript

// Data object
let data = {
	products: [ { item: 'Vara 1', price: 1000 }, { item: 'Vara 2',  price: 9000 } ]
};

// data er array með item og price
function template(data){
    let ulNode = document.createElement('ul');
    let nodes = data.map(obj => {
    	let li = document.createElement('li');
    	li.textContent = `${obj.item}: ${obj.price} kr.`;
    	return li;
    });
    ulNode.append(...nodes) // Bætum li við ul
    document.body.appendChild(ulNode); // Birtum lista í html.
}
template(data.products);
```

---

### DocumentFragment 

Hægt er að nota document fragments (sem eyðist eftir notkun) í stað þess að búa til div element sem ílát (e. containter).

```JavaScript
let fruits = ['Apple', 'Orange', 'Banana', 'Melon']
let fragment = new DocumentFragment() // document.createDocumentFragment();

fruits.forEach(function (fruit) {
  let li = document.createElement('li')
  li.textContent = fruit
  fragment.appendChild(li)
})

document.body.prepend(fragment);

```
Sjá nánar [DocumentFragment](https://www.javascripttutorial.net/javascript-dom/javascript-documentfragment/)

---

<!--
<br>

# Ítarefni

## Template engines

- [What's a template?](https://mfrachet.github.io/create-frontend-framework/templating/intro.html#template-in-vuejs)
- [Web Components Crash Course (Templates)](https://medium.com/javascript-in-plain-english/web-components-crash-course-b0a2feb11be1)

---
## [Tagged templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Taggedtemplates)

Tags allow you to parse template literals with a function. 

1.  make a function
1.  put the name of function in front of the string you want to run against.

```JavaScript
/* The first argument of a tag function contains an array of string values. The remaining arguments are related to the expressions. 
The tag function can then perform whatever operations on these arguments you wish, ex. return the manipulated string.
*/
const div = (strings, ...args) =>
  strings.reduce(
    (acc, currentString, index) => acc + currentString + (args[index] || ""),
    ""
  );

const firstName = "Marvin";
const lastName = "Frachet";

const template = div`Hello ${firstName} ${lastName} !`;
console.log(template); // prints `Hello Marvin Frachet !`
```

Tagged templates allow developers to create a domain specific language (DSL) that let users only have to worry about writing a string while the library authors deal with the rest


---

## [&lt;template&gt;](https://javascript.info/template-element) 

&lt;template&gt; allows you to keep content that’s not rendered but will be used in JavaScript later on.

A built-in &lt;template&gt; element serves as a storage for HTML markup templates. The browser ignores it contents, only checks for syntax validity, but we can access and use it in JavaScript, to create other elements.

Í index.html skrá:

```html
<body>

<template id="tmpl">
    <div class="message">Hello, world!</div>
 </template>    

</body>
```

Í app.js skrá:

```JavaScript
  // create fragment to hold template
  const fragment = document.createDocumentFragment();
  // Clone the template content to reuse it.
  fragment.append(tmpl.content.cloneNode(true));
  // render tempkate to html
  document.body.append(fragment);
```

---

## JavaScript Templates söfn
- [Mustache (simple)](https://mustache.github.io/)
- [Handlebars (complex)](https://handlebarsjs.com/)

---
-->
