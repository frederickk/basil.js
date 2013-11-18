#targetengine 'basiljs'

#includepath '~/Documents/;%USERPROFILE%Documents';
#include 'basiljs/bundle/basil.js';


var dialog;



function setup() {

  dialog = new b.ui.dialog( b.PALETTE, 'Textfield String Example' );
  dialog.add('textfield', 'theTextfield', 'Single-line Textfield', {
    label: 'Textfield',
    onChanging: function(value) {
      b.println( 'My Textfield is changing ' + value );
    }
  });
  dialog.add('textfield', 'theTextfieldMulti', 'Multi-line Textfield', {
    label: 'Textfield',
    multiline: true,
    rows: 3,
    onChanging: function(value) {
      b.println( 'My Textfield Multi-line is changing ' + value );
    }
  });

};



b.go();
