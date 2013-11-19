#targetengine 'basiljs'

#includepath '~/Documents/;%USERPROFILE%Documents';
#include 'basiljs/bundle/basil.js';


var dialog;

var uiConfig = {
  theTextfield: {
    type: 'textfield',
    label: 'Textfield',
    value: 'Single-line Textfield',
    onChanging: function(value) {
      b.println( 'My Textfield is changing ' + value );
    }
  },
  theTextfieldMulti: {
    type: 'textfield',
    label: 'Textfield',
    value: 'Multi-line Textfield',
    multiline: true,
    rows: 3,
    onChanging: function(value) {
      b.println( 'My Textfield Multi-line is changing ' + value );
    }
  }
};


function setup() {

  dialog = new b.ui.prompt( 'Textfield String Example', uiConfig );

};



b.go();
