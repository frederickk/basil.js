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
  width: {
    type: 'number',
    label: 'Width',
    value: 200
  },
  height: {
    type: 'number',
    label: 'Height',
    value: 100
  },
  radius: {
    type: 'number',
    label: 'Corner Radius',
    radius: 10
  },
  // color: {
  //  type: 'color',
  //  label: 'Circle Color',
  //  colorMode: 'rgb',
  //  value: [1, 0.5, 0]
  // },

  // The create button, with an onClick() handler that creates the
  // rectangle for us:
  create: {
    type: 'button', value: 'Create',
    onClick: function() {
      // Create a RoundRectangle at coordinate 0, 0, with the
      // size defined by values.widht and values.height, and
      // a corner radius of values.radius.
      // Note: The radius needs to be converted to a size,
      // as horizontal and vertical corner size is defined
      // seperately
      var path = new Path.RoundRectangle(
          new Point(0, 0), // topLeft corner
          new Size(values.width, values.height), // size
          new Size(values.radius)); // round corner size
      // Set the fill color to the color selected by the user
      path.fillColor = values.color;
    }
  }
};



function setup() {
  dialog = new b.ui.palette( 'Path Maker', uiConfig );

  b.layer('generated');
  b.canvasMode(b.PAGE);
};



function draw() {
};



function update() {
};



b.go();

