#targetengine 'basiljs'

#includepath '~/Documents/;%USERPROFILE%Documents';
#include 'basiljs/bundle/basil.js';


var dialog;

var uiConfig = {
  theSlider: {
    type: 'slider',
    label: 'Slider',
    value: 100,
    onChanging: function(value) {
      b.println( 'My Slider is changing ' + value );
    }
  }
};



function setup() {

  dialog = new b.ui.prompt( 'Slider Example', uiConfig );

};



b.go();
