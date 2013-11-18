#targetengine 'basiljs'

#includepath '~/Documents/;%USERPROFILE%Documents';
#include 'basiljs/bundle/basil.js';


var dialog;



function setup() {

  dialog = new b.ui.dialog( b.PALETTE, 'Checkbox Example' );
  dialog.add('checkbox', 'theCheckbox', true, {
    label: 'Checkbox',
    onChange: function(value) {
      b.println( 'My Checkbox has changed ' + value );
    }
  });

};



b.go();
