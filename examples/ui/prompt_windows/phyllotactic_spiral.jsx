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

// create a variable for the interface control palette window
var dialog;

var uiConfig = {
  spacing: {
    type: 'slider',
    label: 'Dot spacing',
    value: 100,
    valueLabel: true,
    valueType: 'int',
    range: [10, 250]
  },

  radius: {
    type: 'textfield',
    label: 'Dot Radius (-1 == auto)',
    value: -1
  },

  separator: {
    type: 'separator'
  },

  drawModus: {
    type: 'dropdown',
    label: 'Drawing Mode',
    items: ['Circles', 'Lines'],
    value: 'Circles'
  },

  separator: {
    type: 'separator'
  },

  amount: {
    type: 'slider',
    label: 'Number of points',
    value: 20,
    valueLabel: true,
    valueType: 'int',
    range: [10, 100]
  },

  separator: {
    type: 'separator'
  },

  bRandomColors: {
    type: 'checkbox',
    label: 'Randomize Color Swatch',
    value: false
  }

};



function setup() {

  dialog = b.ui.prompt( 'Phyllotactic Spiral', uiConfig );
  // dialog = b.ui.palette( 'Phyllotactic Spiral', uiConfig );
  // dialog.add('slider', 'spacing', 100, {
  //   label: 'Dot spacing',
  //   valueLabel: true,
  //   valueType: 'int',
  //   range: [10, 250]
  // });
  // dialog.add('textfield', 'radius', -1, {
  //   label: 'Dot Radius (-1 == auto)',
  // });

  // dialog.add('separator');

  // dialog.add('dropdown', 'drawModus', 'Circles', {
  //   label: 'Drawing Mode',
  //   items: ['Circles', 'Lines']
  // });

  // dialog.add('separator');

  // dialog.add('slider', 'amount', 20, {
  //   label: 'Number of points',
  //   valueLabel: true,
  //   valueType: 'int',
  //   range: [10, 100]
  // });

  // dialog.add('separator');

  // dialog.add('checkbox', 'bRandomColors', false, {
  //   label: 'Randomize Color Swatch'
  // });

  b.layer('generated');
  b.canvasMode(b.PAGE);

};



function draw() {

  if( dialog.drawModus === 'Circles' ) {
    b.noStroke();
    b.fill( 'Black' );
  }
  else {
    b.noFill();
    b.stroke( 'Black' );
  }

  // draw some spiral
  var spiral = new Phyllotactic(
    b.width/2,
    b.height/2,
    dialog.amount,
    dialog.spacing,
    dialog.radius,
    dialog.drawModus
  );

  if( dialog.bRandomColors ) {
    // fill with random color from swatch palette
    b.items(spiral, function(item, i) {
      if( dialog.bRandomColors ) {
        if( dialog.drawModus === 'Circles' ) {
          item.fillColor = getRandomSwatch();
        }
        else {
          item.strokeColor = getRandomSwatch();
        }
      }
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
 *  @param {String} mode     'Circles' or 'Lines'
 *
 *  @return {Group} Group of Phyllotactic dots
 */
var Phyllotactic = function(cx, cy, amount, spacing, radius, mode) {
  var amount = amount || 250,
      spacing = spacing || 10,
      radius = radius || -1,
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

    var dot;
    if( mode === 'Lines' ) {
      b.strokeWeight( radius );
      dot = b.line(
        x,y,
        cx + (spacing * Math.sqrt(i-1) * Math.cos( (i-1) * b.radians( rotation ) )),
        cy + (spacing * Math.sqrt(i-1) * Math.sin( (i-1) * b.radians( rotation ) ))
      );
      dot.endCap = EndCap.ROUND_END_CAP;
      dot.endJoin = EndJoin.ROUND_END_JOIN;
    }
    else {
      dot = b.ellipse( x,y, radius,radius );
    }
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