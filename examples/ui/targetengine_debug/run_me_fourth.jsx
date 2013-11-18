//
//  Einfaches Beispiel um eine UI Palette herzustellen.
//  dem target engine Name 'basiljs'.
//
#targetengine 'basiljs'



#includepath '~/Documents/;%USERPROFILE%Documents';
#include 'basiljs/bundle/basil.js';



var dialog;

var uiConfig = {
  width: {
    type: 'textfield',
    label: 'Variable Drei',
    valueType: 'float',
    value: 2.0
  },
  height: {
    type: 'textfield',
    label: 'Variable Vier',
    valueType: 'float',
    value: 3.0
  }
};



function setup() {
  dialog = new b.ui.palette( 'targetengine_debug_4', uiConfig );
};



b.go();

