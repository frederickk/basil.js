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

  dialog.add('slider', 'spacing', 100, {
    label: 'Dot spacing',
    valueLabel: true,
    valueType: 'int',
    range: [10, 250]
  });
  dialog.add('textfield', 'radius', -1, {
    label: 'Dot Radius (-1 == auto)',
  });

  dialog.add('separator');

  dialog.add('dropdown', 'drawModus', 'Circles', {
    label: 'Drawing Mode',
    items: ['Circles', 'Lines']
  });

  dialog.add('separator');

  dialog.add('slider', 'amount', 20, {
    label: 'Number of points',
    valueLabel: true,
    valueType: 'int',
    range: [10, 100]
  });

  dialog.add('separator');

  dialog.add('checkbox', 'bRandomColors', false, {
    label: 'Randomize Color Swatch'
  });

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

  // draw some spirals
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

    var dot;
    if( mode === 'Lines' ) {
      b.strokeWeight( radius );
      dot = b.line(
        x,y,
        cx + (spacing * Math.sqrt(i-1) * Math.cos( (i-1) * b.radians( rotation ) )),
        cy + (spacing * Math.sqrt(i-1) * Math.sin( (i-1) * b.radians( rotation ) ))
      );

      // TODO: add stroke options to core
      // http://forums.adobe.com/thread/470458
      // http://jongware.mit.edu/idcs5/pc_ObjectStyle.html
      //
      /* END CAPS */
      // dot.endCap = EndCap.BUTT_END_CAP;
      dot.endCap = EndCap.ROUND_END_CAP;
      // dot.endCap = EndCap.PROJECTING_END_CAP;
      //
      /* END JOINS */
      // dot.endJoin = EndJoin.MITER_END_JOIN;
      dot.endJoin = EndJoin.ROUND_END_JOIN;
      // dot.endJoin = EndJoin.BEVEL_END_JOIN;
      //
      /* ARROW HEADS */
      // dot.leftLineEnd = ArrowHead.NONE;
      // dot.leftLineEnd = ArrowHead.SIMPLE_ARROW_HEAD;
      // dot.leftLineEnd = ArrowHead.SIMPLE_WIDE_ARROW_HEAD;
      // dot.leftLineEnd = ArrowHead.TRIANGLE_ARROW_HEAD;
      // dot.leftLineEnd = ArrowHead.TRIANGLE_WIDE_ARROW_HEAD;
      // dot.leftLineEnd = ArrowHead.BARBED_ARROW_HEAD;
      // dot.leftLineEnd = ArrowHead.CURVED_ARROW_HEAD;
      // dot.leftLineEnd = ArrowHead.CIRCLE_ARROW_HEAD;
      // dot.leftLineEnd = ArrowHead.CIRCLE_SOLID_ARROW_HEAD;
      // dot.leftLineEnd = ArrowHead.SQUARE_ARROW_HEAD;
      // dot.leftLineEnd = ArrowHead.SQUARE_SOLID_ARROW_HEAD;
      // dot.leftLineEnd = ArrowHead.BAR_ARROW_HEAD;
      //
      // dot.rightLineEnd = ArrowHead.NONE;
      // dot.rightLineEnd = ArrowHead.SIMPLE_ARROW_HEAD;
      // dot.rightLineEnd = ArrowHead.SIMPLE_WIDE_ARROW_HEAD;
      // dot.rightLineEnd = ArrowHead.TRIANGLE_ARROW_HEAD;
      // dot.rightLineEnd = ArrowHead.TRIANGLE_WIDE_ARROW_HEAD;
      // dot.rightLineEnd = ArrowHead.BARBED_ARROW_HEAD;
      // dot.rightLineEnd = ArrowHead.CURVED_ARROW_HEAD;
      // dot.rightLineEnd = ArrowHead.CIRCLE_ARROW_HEAD;
      // dot.rightLineEnd = ArrowHead.CIRCLE_SOLID_ARROW_HEAD;
      // dot.rightLineEnd = ArrowHead.SQUARE_ARROW_HEAD;
      // dot.rightLineEnd = ArrowHead.SQUARE_SOLID_ARROW_HEAD;
      // dot.rightLineEnd = ArrowHead.BAR_ARROW_HEAD;
      //
      /* ALIGNMENT */
      // dot.strokeAlignment = StrokeAlignment.CENTER_ALIGNMENT
      // dot.strokeAlignment = StrokeAlignment.INSIDE_ALIGNMENT
      // dot.strokeAlignment = StrokeAlignment.OUTSIDE_ALIGNMENT
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