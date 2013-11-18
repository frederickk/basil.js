#targetengine 'basiljs'

#includepath '~/Documents/;%USERPROFILE%Documents';
#include 'basiljs/bundle/basil.js';


var dialog;

var uiConfig = {
  theCheckbox: {
    type: 'checkbox',
    label: 'Checkbox',
    value: 100,
    onChange: function(value) {
      b.println( 'My Checkbox has changed ' + value );
    }
  }
};



function setup() {

  dialog = new b.ui.palette( 'Checkbox Example', uiConfig );

};



b.go();
