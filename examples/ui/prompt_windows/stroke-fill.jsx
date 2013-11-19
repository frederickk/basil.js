/**
 *
 * Stroke-Fill
 * Prompt Interface Window Example
 *
 */

#targetengine 'basiljs'



//
//  Includes
//
#includepath '~/Documents/;%USERPROFILE%Documents';
#include 'basiljs/bundle/basil.js';



//
// Properties
//

// create a variable for the interface control palette window
var dialog;

var uiConfig = {
  bRandom: {
    type: 'checkbox',
    label: 'Random Swap!',
    value: false
  }
};


function setup() {

  dialog = new b.ui.dialog( b.PROMPT, 'Stroke-Fill', uiConfig );

};



function draw() {

  b.selections( function(item, i) {
    if( item instanceof Group ) {
      b.items(item, function(jtem, j) {
        swapStrokeFill( jtem, dialog.bRandom );
      });
    }
    else {
      swapStrokeFill( item, dialog.bRandom );
    }
  });

};



//
// Methods
//
function swapStrokeFill(obj, randomFlag) {
  var tempStrokeColor = obj.strokeColor,
      tempFillColor = obj.fillColor,
      rand = (randomFlag) ? Math.random()*3 : 0;

  if( rand < 1.0 ) {
    if(obj.strokeColor != null && obj.fillColor == null) {
      obj.fillColor = tempStrokeColor;
      obj.strokeColor = null;
    }
    else if(obj.strokeColor == null && obj.fillColor != null) {
      obj.strokeColor = tempFillColor;
      obj.fillColor = null;
    }
    else if(obj.fillColor != null && obj.strokeColor != null) {
      obj.strokeColor = tempFillColor;
      obj.fillColor = tempStrokeColor;
    }
  }

};



b.go();