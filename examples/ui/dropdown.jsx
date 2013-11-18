#targetengine 'basiljs'

#includepath '~/Documents/;%USERPROFILE%Documents';
#include 'basiljs/bundle/basil.js';


var dialog;



function setup() {

  dialog = new b.ui.dialog( b.PALETTE, 'Dropdown Example' );
  dialog.add('dropdown', 'theDropdown', 'item 3', {
    label: 'Dropdown',
    items: ['item 1', 'item 2', 'item 3'],
    onChange: function(value) {
      b.println( 'My Dropdown has changed ' + value );
    }
  });

};



b.go();
