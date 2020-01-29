# Verkefni 3 - lausnir


1.	
		a) Búðu til þrjár geimflauga-objecta (f1, f2, f3) með function smið sem hafa mismunandi heiti. Geimflaugarnar eiga einnig að hafa eigindin speed og life með upphafsgildinu 10.

		b) Gefðu geimflaugunum mismunandi speed gildi

		c) Notaðu Prototype til að bæta við nýrri method fly sem hækkar gildið speed um 1, þetta fá allar flaugarnar (f1, f2, f3)


	 **Svar:**  
	```JavaScript
		// liður a) og b)
	    function Spaceship(name, speed = 10, life = 10) {
	      this.name = name;
	      this.speed = speed;
	      this.life = life;
	    }

	    let f1 = new Spaceship("Flaug1");
	    let f2 = new Spaceship("Flaug2", 5);
	    let f3 = new Spaceship("Flaug3", 15);
	    
	    // liður c)
	    Spaceship.prototype.fly = function() {
	      this.speed++;
	    };

		}
		```

2. Gerðu það sama (sambærilegt) og síðasta lið en með notkun class - notaðu eftir þörfum; constructor, get, set, static, extends, super, mix-ins
	**Svar:**  

	```JavaScript

	    class Spaceship {
	      constructor(name, speed = 10, life = 10) {
	        this._name = name;
	        this._life = life;
	        this._speed = speed;
	      }

 		  get name(){
	  	  	return this._name;
		  }

	  	  set name(newname){
	  	  	this._name = newname;
		  }

 		  fly() {
	        this._speed++;
	      }
	    
	    }

	    let f1 = new Spaceship("Flaug1");
	    let f2 = new Spaceship("Flaug2", 5);
	    let f3 = new Spaceship("Flaug3", 15);

	  // prófun
		f1.name = "Flaug0"	// uses a setter function to updates name property
		f1.name;    				// get name, with a getter function

		
		// búum til undirklasa með nýrri aðferð en erfir allt hitt.
	    class SubSpaceships extends Spaceship {
	      constructor(name, type, life, speed) {
	        super(name, life, speed);
	        this._type = type;
	      }

	      // Aukaglegt. flaug f1 hefyr setLife() sem hækkar life um 1. Þessa aðferð eiga hinar flaugarnar ekki að hafa.
	      setLife() {
	        this._life++;
	      }
	    }

	    // Búum til nýja flaug sem hefur setLife()
	    let f4 = new SubSpaceships("Fighter 1", "Fighter");
	    f4.fly();  		// increase _speed by 1
	    f4.setLife();	// increase _life by 1

	    f4._speed;		// skoðum uppfært speed gildi (þurfum ekki að nota get)
	    f4._life;			// skoðum uppfært life gildi (þurfum ekki að nota get)

	```
