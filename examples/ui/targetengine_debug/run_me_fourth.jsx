//
//  Einfaches Beispiel um eine UI Palette herzustellen.
//  dem target engine Name 'basiljs'.
//
#targetengine 'basiljs'



#includepath '~/Documents/;%USERPROFILE%Documents';
#include 'basiljs/bundle/basil.js';



// nur als weiterer Beweis
var newUiConfig = {
  v3: {
    type: 'textfield',
    label: 'Variable Drei',
    valueType: 'float',
    value: dialog.v1
  },
  v4: {
    type: 'textfield',
    label: 'Variable Vier',
    valueType: 'float',
    value: dialog.v2
  }
};



function setup() {
  dialog = new b.ui.palette( 'targetengine_debug_4', newUiConfig );
};



b.go();
