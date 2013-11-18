/**
 *
 * Tickmarks
 * Palette Interface Window Example
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
var h = 1;
var n = 60;

var dialog;
var length = 15;
var rot = 0;



function setup() {

  dialog = control.palette('Tickmarks');
  dialog.add(
    'slider',   // type
    'slider1',  // variable name
    length,     // initial value
    // properties
    {
      label: 'Length',
      range: [0, 100],
      valueLabel: true
    }
  );

  dialog.add(
    'slider',   // type
    'slider2',  // variable name
    rot,        // initial value
    // properties
    {
      label: 'Rotation',
      range: [0, 180],
      valueLabel: true
    }
  );

};



function draw() {

  b.layer('generated');
  b.canvasMode(b.PAGE);

  b.translate(b.width / 2, b.height / 2);
  b.rectMode(b.CENTER);

  b.noStroke();
  b.fill(0);

  redraw();

};

function update() {

  length = b.floor(dialog.slider1);
  rot = b.floor(dialog.slider2);

  redraw();

};



function redraw() {

  b.clear(b.layer('generated'));

  for( var i = 0; i < n; i++ ) {

    b.rotate( b.TWO_PI / n );
    b.pushMatrix( );
    b.translate( 100, 0 );
    b.rotate( b.radians(rot) );
    b.rect( 0, 0, length, h );
    b.popMatrix( );

  }

};


b.go();
