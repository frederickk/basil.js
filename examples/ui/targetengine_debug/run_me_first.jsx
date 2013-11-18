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
    label: 'Variabel Eins',
    valueType: 'float',
    value: 0.0
  },
  height: {
    type: 'textfield',
    label: 'Variabel Zwei',
    valueType: 'float',
    value: 1.0
  }
};



function setup() {
  dialog = new b.ui.palette( 'targetengine_debug_1', uiConfig );
};



b.go();

