/*
Dynamic filter útfært með jQuery.
http://javascriptbook.com/code/c12/dynamic-filter.html

Nálgun:
Í stað þess að smíða/eyða (DOM Manipulation) öll html elements frá grunni (t.d. tafla) í hvert skipti 
sem notandi vill filtera einhver gögn (t.d. með slider), sem hægir á scriptinu þá er betra að búa 
þetta til í smærri einingum (rows) og stýra með CSS show/hide útfrá notandainntaki. 

    1) Búa til html töfluröð fyrir hverja persónu.
    2) Birta röð sem uppfyllir ákv. skilyrði (síun), fela raðir sem uppfylla ekki skilyrði.
    3) Gagnaskipan: 
            1 x fylki (people)sem inniheldur gögn 
            1 x fylki (rows) sem inniheldur html töfluröð og vísun (tengingu) á gögn í people    
*/


// IIFE
(function() {

  // STORE EACH PERSON AS AN OBJECT IN AN ARRAY. It holds name and rate
  var people = [
    { name: 'Casey', rate: 60 },
    { name: 'Camille', rate: 80 },
    { name: 'Gordon', rate: 75 },
    { name: 'Nigel', rate: 120 }
  ];


  // four global variables are created as they are used throughout the script:
      var rows = [],                    // rows array, holds the cross-referencing array 
      $min = $('#value-min'),           // Minimum text input, holds the input to show the minimum rate
      $max = $('#value-max'),           // Maximum text input, holds the input to show the maximum rate
      $table = $('#rates');             // The table that shows results

  // For each person, a new jQuery object called $row is created containing a <tr> element.
  // The person's name and rate are added in <td>s.
  function makeRows() {                 
    people.forEach(function(person) {   // For each person object in people (current object)
      var $row = $('<tr></tr>');        // Create a row for them
      $row.append( $('<td></td>').text(person.name) ); // Add their name, append() insert to the end of each element in the set of matched elements.
      $row.append( $('<td></td>').text(person.rate) ); // Add their rate
      
      // A new object with two properties is added to the rows array
      // Create rows array which links people objects to table rows. 
      // Þegar ákveða hvaða röð skuli birtast (filtering), þá er rate athugað í people array með e. reference í rows array. Sjá update fall.
      rows.push({                       
        person: person,                 // Reference to the person object, not copy
        $element: $row                  // Reference to row as jQuery selection
      });
    });
    
    // Test: Sjáum hvað er komið í rows array 
    console.log(rows);
  }
    

  // Búum til <tbody> og setjum rows í table í html
  function appendRows() {               // Adds rows to the table
    var $tbody = $('<tbody></tbody>');  // Create <tbody> element
    rows.forEach(function(row) {        // For each object in the rows array
      $tbody.append(row.$element);      // Add the HTML for the row
    });
    $table.append($tbody);              // Add the rows to the table, $table er DOM vísun.
  }

  // Update the table content
  // Goes through each of the objects in the rows array and checks if the rate that the person charges 
  // is more than the minimum and less than the maximum rate shown on the slider.
  function update(min, max) {           
    rows.forEach(function(row) {        
      if (row.person.rate >= min && row.person.rate <= max) { // If in range
        row.$element.show();            // Show the row, display: table-row
      } 
      else {                            // Otherwise
        row.$element.hide();            // Hide the row, display:none 
      }
    });
  
  }

  // Start
  function init() {
    // Set up the slide control                     
    $('#slider').noUiSlider({           
      range: [0, 150], start: [65, 90], handles: 2, margin: 20, connect: true,
      serialization: {to: [$min, $max],resolution: 1}
    }).change(function() { update($min.val(), $max.val()); });        // change event kallar á update(), val() les úr input reit.

    makeRows();                           // Create table rows and rows array
    appendRows();                         // Add the rows to the table
    update($min.val(), $max.val());       // Update table to show matches, upphafstaða
  }

  $(init);                                // Call init() when DOM is ready, $(function) is short for $(document).ready(function)
}()); // End IIFE