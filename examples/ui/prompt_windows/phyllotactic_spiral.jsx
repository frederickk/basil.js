/**
 *
 * Phyllotactic Spiral
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

var dialog;



function setup() {

  dialog = b.ui.palette( 'Phyllotactic Spiral' );

  dialog.add('dropdown', 'drawModus', 'Circles', {
    label: 'Dropdown',
    items: ['Circles', 'Lines']
  });

  dialog.add('separator');

  dialog.add('slider', 'amount', 20, {
    label: 'Dot Count',
    valueLabel: true,
    valueType: 'int',
    range: [10, 100]
  });
  dialog.add('slider', 'spacing', 100, {
    label: 'Dot Spacing',
    valueLabel: true,
    valueType: 'int',
    range: [10, 250]
  });
  dialog.add('textfield', 'radius', -1, {
    label: 'Dot Radius (-1 == auto)',
  });

  dialog.add('separator');

  dialog.add('checkbox', 'bRandomColors', false, {
    label: 'Randomize Color Swatch'
  });

  b.layer('generated');
  b.canvasMode(b.PAGE);

};



function draw() {

  b.noStroke();
  b.fill( 'Black' );

  // draw some spirals
  var spiral = new Phyllotactic(
    b.width/2,
    b.height/2,
    dialog.amount,
    dialog.spacing,
    dialog.radius
  );

  if( dialog.bRandomColors ) {
    // fill with random color from swatch palette
    b.items(spiral, function(item, i) {
      item.fillColor = getRandomSwatch();
    });
  }

};



function update() {

  b.clear(b.layer('generated'));
  draw();

};



//
// Methods
//

/**
 *  Draw Phyllotactic Spiral
 *  http://en.wikipedia.org/wiki/Phyllotaxis
 *
 *  @param {Number} cx       x-coordinate of the spiral's center
 *  @param {Number} cy       y-coordinate of the spiral's center
 *  @param {Number} amount   number of spiral dots
 *  @param {Number} spacing  spacing between dots
 *  @param {Number} radius   radius of spiral's individual dots
 *
 *  @return {Group} Group of Phyllotactic dots
 */
var Phyllotactic = function(cx, cy, amount, spacing, radius) {
  var amount = (amount != undefined)
      ? amount
      : 250,
    spacing = (spacing != undefined)
      ? spacing
      : 10,
    radius = (radius != undefined)
      ? radius
      : -1,
    autoSize = (radius === -1) ? true : false;

  var dots = [],
      rotation = 137.51,
      x, y, r, theta;
  for(var i=1; i<=amount; i++) {
    r = spacing * Math.sqrt(i);
    theta = i * b.radians( rotation );
    x = cx + (r * Math.cos(theta));
    y = cy + (r * Math.sin(theta));

    if(autoSize) {
      // radius = b.map(i, 0,amount, 1,r*0.5);
      radius = b.map(i, 0,amount, r*0.5,1);
    }

    var dot = b.ellipse( x,y, radius,radius );
    dots.push( dot );
  }

  return b.group(dots, 'phyllotactic');
};

var getRandomSwatch = function(start) {
  start = 4 || start;
  return b.color(
    b.doc().swatches.everyItem().name.unique()[ parseInt(b.random(start,b.doc().swatches.length)) ]
  );
};


b.go();