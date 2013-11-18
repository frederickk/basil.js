//
//  Einfaches Beispiel um eine UI Palette herzustellen.
//  dem target engine Name 'basiljs'.
//
#targetengine 'basiljs'



#includepath '~/Documents/;%USERPROFILE%Documents';
#include 'basiljs/bundle/basil.js';



var dialog;

var uiConfig = {
  v1: {
    type: 'textfield',
    label: 'Variable Eins',
    valueType: 'float',
    value: 100.0
  },
  v2: {
    type: 'textfield',
    label: 'Variable Zwei',
    valueType: 'float',
    value: 200.0
  }
};



function setup() {
  dialog = new b.ui.palette( 'targetengine_debug_1', uiConfig );
};



b.go();

