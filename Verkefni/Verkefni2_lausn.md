## Verkefni 2 Vor 2021 - lausnir

---

### 2.2.1
```JavaScript
// function expression
let add = function(a,b){return a+b;};  
console.log(add(1,2));
```

### 2.2.2
```JavaScript
// arrow exppression function
let add = (a,b) => a+b;  
console.log(add(1,2));
```

### 2.3.1 
```JavaScript
let numbers = [1, 2, 3, 4, 5];
let oddNumbers = [];
for (let i = 0; i != numbers.length; i++){
    if (numbers[i]%2){
        oddNumbers.push(numbers[i]);
    }
}
console.log(oddNumbers);  // [1,3,5]
```

### 2.3.2 
```JavaScript
let numbers = [1, 2, 3, 4, 5];
// Array.prototype.filter() og arrow expression function
let oddNumbers = numbers.filter( number => number%2 );
console.log(oddNumbers);
```

### 2.4
```JavaScript
const teacher = { 
    name: "Gunnar", 
    birthdate: 1976,
    emails: ["gus@tskoli.is", "fake1@tskoli.is", "fake2@tskoli.is"], 
    getInfo: function() { 
        currentYear = new Date().getFullYear(); // 2021
        return `My name is ${this.name} and I am ${currentYear - this.birthdate} years old`
    }
}
console.log(teacher.getInfo());
```

### 2.5
```JavaScript
let family = {
    "parents": 
        {
        "fathers": [{"name":"Jakob"},{"name":"Nonni"}],
        "mothers":[{"name":"Rakel"},{"name":"Sara"}]
        }
};
console.log(family.parents.fathers[1].name) // Nonni
```

### 2.6
```JavaScript
class User {
    constructor(name, email){
        this._name = name;
        this._email = email;
    }
    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }
}
const gunni = new User("Gunnar", "gus@tskoli.is");
console.log(gunni.name, gunni._email);  // Gunnar gus@tskoli.is
```

### 2.7
```JavaScript
class Animal {
    constructor(name) {
      this._speed = 0;
      this._name = name;
    }
    run() { return `running speed is ${this._speed++} km pr hour.`}
}

const animal = new Animal("Monster");

// Monster running speed is 1 km pr hour.
console.log(animal._name, animal.run()); 

class Rabbit extends Animal {
    constructor(name) {
        super(name);  // vísum á Animal constructor
        this._jump = 1;
    }
    
    jump() { return `Jump height is ${this._jump++} feets.`}
}
  
const rabbit = new Rabbit("White Rabbit");

// White Rabbit running speed is 1 km pr hour. Jump height is 2 feets.
console.log(rabbit._name, rabbit.run(), rabbit.jump()); 
```

### 2.8
```JavaScript
function User(name, email){
    this.name = name;
    this.email = email;
}

User.prototype.getName = function(){
    return this.name;
}; 

const gunni = new User("Gunnar", "gus@tskoli.is");
console.log(gunni.getName()); // Gunnar
```

### 2.9 Dæmi um lausn
```JavaScript

let cart=[
    {name:"Biscuits", type:"regular", category:"food", price: 2.0},
    {name:"Monitor", type:"prime", category:"tech", price: 119.99},
    {name:"Mouse", type:"prime", category:"tech", price: 25.50},
    {name:"dress", type:"regular", category:"clothes", price: 49.90}
]
let cartSum = 0;

function getDiscount(discountCode){
    if (discountCode === "discount20"){
        cart.forEach( function(item) {
            if(item.category === "tech"){
              // toFixed(2) veitir okkur 2 aukastafi en skilar streng
              // parseFloat() breytir streng aftur í float. 
              // strengir og tölur eru immutable (read only)
              item.price = parseFloat((0.8 * item.price).toFixed(2)); // 20% afsláttur 
            }
        })
    } else {
        alert("Sorry discount code is not valid!")  
    }
}

function totalPrice(){
    cart.forEach( function(item) {
        cartSum += item.price; 
    })  
}

function displayCart(){
    cart.forEach(product => {
        console.table(product);    
    });
    console.log("Total: " + formatter.format(cartSum));
}

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})

getDiscount(prompt("afsláttarkóði:"));
totalPrice();
displayCart();
```
