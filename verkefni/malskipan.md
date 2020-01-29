
1. Hvað er null og undefined?

  	`null` og `undefined` þýða í raun bæði það sama, ekkert!
  	`undefined` breyta hefur ekki verið úthlutað þ.e.a.s. það vantar gildi (type undefined with value undefined).


     ```javascript
        var b;        // breyta er búin til með upphafsgildið undefined (sem þýðir að breytan vantar gildi).
        typeof(b)     // undefined, tegundin (e. type) er líka undefined.
     ```

    fall (e. function) skilar undefined ef gildi er ekki skilað (vantar `return`).
     
     ```javascript
      console.log(b);   // console.log() fallið sjálft birtir b, en skilar undefined.
                        // sem þýðir að engu var skilað (e. returned).
     ```

    Margar aðgerðir í máli skila engum merkingalegum gildum en verða að skila einhverju og nota þá <em>undefined</em>.
     
    ```javascript
      var x = 5;        // = virkin (e. operator) skilar undefined, ekki gildi 
    ```
    Athyglisvert er að gera `typeof()` á breytu með null gildi, því það skilar `object` sem er í raun galli í ECMAScript og ætti að vera null. `undefined == null` skilar `true`, en `undefined === null` skilar false.

2. Hvað gerir 'use strict' í JavaScript kóða?

    "use strict" er segð sem ECMAScript 5 skilur, en ekki eldri útgáfur. Með "use strict" er þýðandinn strangari og leyfir ekki ákveðna hluti eins og að nota breytur sem hafa ekki verið skilgreindar. 

3. Hver er munurinn á let og var?

  `let` kom með ES2015.

    **Global:**
    They are very similar when used like this outside a function block
    ```javascript
      let me = 'go';  // globally scoped
      var i = 'able'; // globally scoped

    ```
    However, global variables defined with `let` will not be added as properties on the global windowobject like those defined with `var`.

    ```javascript
      console.log(window.me); // undefined
      console.log(window.i);  // 'able'

    ```
    **Function:**
    They are identical when used like this in a function block.
  ```javascript
      function f() {
        let a = 'local';    // function block scoped
        var b = 'me too!';  // function block scoped
      }

  ```
    **Block:**
  Here is the difference. let is only visible in the for() loop and var is visible to the whole function.  
  ```javascript
   function a() {
      // i is not visible out here
      for( let i = 0; i < 5; i++ ) {
          // i is only visible in here (and in the for() parentheses)
          // and there is a separate i variable for each iteration of the loop
      }
      // i is not visible out here 
    }

    function b() {
        // t is visible out here
        for( var t = 0; t < 5; t++ ) {
            // t is visible to the whole function
        }
        // t is visible out here
    }
    // t is not visible out here, because of function scope


  ```

4. Endurskrifaðu eftirfarandi kóða með for lykkjunni.

  ```javascript
    let x = 9;
    while (x >= 1) {
      console.log("hello " + x);
      x = x - 1;
}
    // Lausn
     for (let x = 9; x >= 1; x--){
           console.log("hello " + x);
    }

  ```
  

#### Spurningar (ekki svör)
* Hver er munurinn á == og === í JavaScript? 
* Hvað er Template literals? komdu með dæmi! 
* Hvað er call stack og hvað er heap? 
* Hvað er hoisting í JavaScript, komdu með dæmi? 
