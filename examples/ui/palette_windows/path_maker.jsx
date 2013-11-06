/**
 *
 * Path Maker
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
  pathType: {
    type: 'dropdown',
    label: 'Path Type',
    items: ['rectangle', 'diamond', 'pentagon', 'hexagon', 'ellipse'],
    value: 'rectangle'
  },
  width: {
    type: 'textfield',
    label: 'Width',
    valueType: 'float',
    value: 200
  },
  height: {
    type: 'textfield',
    label: 'Height',
    valueType: 'float',
    value: 100
  },
  // color: {
  //  type: 'color',
  //  label: 'Color',
  //  colorMode: 'rgb',
  //  value: [1, 0.5, 0]
  // }

};



function setup() {
  dialog = new b.ui.palette( 'Path Maker', uiConfig );

  b.layer('generated');
  b.canvasMode(b.PAGE);

  b.ellipseMode(b.CENTER)
  b.rectMode(b.CENTER)
};



function draw() {
};



function update() {
  b.clear(b.layer('generated'));

  b.fill(0);
  if( dialog.pathType === 'rectangle' ) {
    b.rect(b.width/2, b.height/2, dialog.width, dialog.height);
  }
  else if( dialog.pathType === 'diamond' ) {
    polygon(b.width/2, b.height/2, dialog.width, dialog.height, 4);
  }
  else if( dialog.pathType === 'pentagon' ) {
    polygon(b.width/2, b.height/2, dialog.width, dialog.height, 5);
  }
  else if( dialog.pathType === 'hexagon' ) {
    polygon(b.width/2, b.height/2, dialog.width, dialog.height, 6);
  }
  else if( dialog.pathType === 'ellipse' ) {
    b.ellipse(b.width/2, b.height/2, dialog.width, dialog.height);
  }
};



//
// Methods
//
var polygon = function(x, y, w, h, num) {
  b.beginShape();
  for( var i=0; i<num; i++ ) {
    b.vertex(
      x + (w/2) * b.cos(i * 2 * b.PI / num),
      y + (h/2) * b.sin(i * 2 * b.PI / num)
    );
  }
  return b.endShape();
};


b.go();

