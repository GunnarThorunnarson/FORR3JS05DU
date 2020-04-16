// Sjá https://refreshless.com/nouislider/

// DOM vísun á slider
let slider = document.getElementById('slider');

// DOM vísun á reit sem mun sýna síðuð gögn frá slider 
let rangeSliderValueElement = document.getElementById('slider-range-value');


// Búum til UI slider með okkar stillingum
noUiSlider.create(slider, {
    	// skalinn 
        range: {
          'min': 0,
          'max': 100
    	},
    	step: 10,
        // lágmarksbil á milli handle, svo skarist ekki
        margin: 10,
    	// upphafsstaða á handföngum
    	start: [20, 80],  
    	// birtum litaða stiku milli handfanga
    	connect: true,
    	// birtum skala
    	pips: {
        	mode: 'steps',
        	stepped: true,
        	density: 4
    	}
});


// EventListener ("on"), bind the handler function to the update event (when the slider value changes)
slider.noUiSlider.on('update', function (values, handle) {
    
    // Birtum e. slider value af því handle sem er valið hverju sinni
    /* rangeSliderValueElement.innerHTML = values[handle]; */
    
    // Birtum bæði slider value í einn streng.
    rangeSliderValueElement.innerHTML = values.join(' - ')

});

