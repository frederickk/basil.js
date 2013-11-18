#targetengine 'basiljs'

#includepath '~/Documents/;%USERPROFILE%Documents';
#include 'basiljs/bundle/basil.js';


var dialog;


function setup() {

  dialog = new b.ui.dialog( b.PALETTE, 'Button Example' );
  dialog.add('button', 'theButton', 'ClickMe!', {
    label: 'Button',
    onClick: function(value) {
      b.println( 'Button was Clicked ' + value + ' time(s)' );
    }
  });

};



b.go();
