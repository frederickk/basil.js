/**
 *
 * Random Tools
 * A palette for generating random(good)ness
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

var uiConfig = {

  //
  // stroke
  //
  stroke: {
    type:  'checkbox',
    label: 'Stroke',
    value: false,
  },

  strokeMin: {
    type:      'text',
    label:     'min',
    value:     0.25,
    valueType: 'float',
    // enabled: false
  },

  strokeMax: {
    type:      'text',
    label:     'max',
    value:     48.0,
    valueType: 'float',
    // enabled: false
  },

  strokeRule: {
    type: 'separator',
    width: 'full'
  },


  //
  // color
  //
  color: {
    type: 'checkbox',
    label: 'Color',
    value: false,
    onChange: function(value) {
    }
  },

  // apply to fills
  colorFill: {
    type: 'checkbox',
    label: 'Fills',
    value: true
  },
  // apply to stroke
  colorStroke: {
    type: 'checkbox',
    label: 'Strokes',
    value: false
  },

  // use swatches
  colorSwatches: {
    type: 'checkbox',
    label: 'Document Swatches',
    value: true
  },

  color_c_min:  {
    type: 'slider',
    label: 'Cyan',
    value: 0,
    range: [0, 100]
  },
  color_c_max:  {
    type: 'slider',
    value: 100,
    range: [0, 100]
  },

  color_m_min:  {
    type: 'slider',
    label: 'Magenta',
    value: 0,
    range: [0, 100]
  },
  color_m_max:  {
    type: 'slider',
    value: 100,
    range: [0, 100]
  },

  color_y_min:  {
    type: 'slider',
    label: 'Yellow',
    value: 0,
    range: [0, 100]
  },
  color_y_max:  {
    type: 'slider',
    value: 100,
    range: [0, 100]
  },

  color_k_min:  {
    type: 'slider',
    label: 'Black',
    value: 0,
    range: [0, 100]
  },
  color_k_max:  {
    type: 'slider',
    value: 100,
    range: [0, 100]
  },

  colorRule: {
    type: 'separator',
    width: 'full'
  },


  //
  // transparency
  //
  transparency: {
    type: 'checkbox',
    label: 'Opacity',
    value: false,
    onChange: function(value) {
    }
  },

  transparencyMin:  {
    type: 'slider',
    label: 'min',
    value: 0,
    range: [0, 100]
  },
  transparencyMax:  {
    type: 'slider',
    label: 'max',
    value: 100,
    range: [0, 100]
  },

  transparencyRule: {
    type: 'separator',
    width: 'full'
  },


  //
  // Invocation
  //
  submit: {
    type: 'button',
    value: 'Apply',
    width: 'full',
    onClick: function() {
      apply();
    }
  }



};



function setup() {
  b.colorMode(b.CMYK);

  dialog = new b.ui.dialog(b.PALETTE, 'Random Tools', controllers);
};



function draw() {

};



function update() {

  b.selections(function(item, i){
    //
    //  stroke
    //
    if( dialog.stroke ) {
      item.strokeWeight = b.random( dialog.strokeMin, dialog.strokeMax );
    }

    //
    //  color
    //
    if( dialog.color ) {
      var color;
      if( dialog.colorSwatches ) {
        // pull a random swatch, start with swatch 3 (typically black)
        color = randomSwatch(3);
      }
      else {
        color = b.color(
          parseInt( b.random( dialog.color_c_min, dialog.color_c_max ) ),
          parseInt( b.random( dialog.color_m_min, dialog.color_m_max ) ),
          parseInt( b.random( dialog.color_y_min, dialog.color_y_max ) ),
          parseInt( b.random( dialog.color_k_min, dialog.color_k_max ) )
        );
      }
      if( dialog.colorFill )   item.fillColor = color;
      if( dialog.colorStroke ) item.strokeColor = color;
    }

    //
    //  transparency
    //
    if( dialog.transparency ) {
      b.opacity( item, b.random( dialog.transparencyMin,dialog.transparencyMax ) );
    }

 });

};


//
// Methods
//
function randomSwatch(start) {
  return b.doc().swatches[ parseInt( b.random(start,b.doc().swatches.length) ) ];
};



b.go();
