//
//  Hier nutze ich noch mal den 'basiljs' target engine
//  und kann die Variabeln von 'run_me_first.jsx' abrufen.
//
#targetengine 'basiljs'



#includepath '~/Documents/;%USERPROFILE%Documents';
#include 'basiljs/bundle/basil.js';



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
