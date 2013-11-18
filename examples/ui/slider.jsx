#targetengine 'basiljs'

#includepath '~/Documents/;%USERPROFILE%Documents';
#include 'basiljs/bundle/basil.js';


var dialog;



function setup() {

  dialog = new b.ui.dialog( b.PALETTE, 'Slider Example' );
  dialog.add('slider', 'theSlider', 100, {
    label: 'Slider',
    onChanging: function(value) {
      b.println( 'My Slider is changing ' + value );
    }
  });

};



b.go();