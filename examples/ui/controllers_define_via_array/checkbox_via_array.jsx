#targetengine 'basiljs'

#includepath '~/Documents/;%USERPROFILE%Documents';
#include 'basiljs/bundle/basil.js';


var dialog;

var uiConfig = {
  theCheckbox: {
    type: 'checkbox',
    label: 'Checkbox',
    value: true,
    onChange: function(value) {
      b.println( 'My Checkbox has changed ' + value );
    }
  }
};



function setup() {

  dialog = new b.ui.prompt( 'Checkbox Example', uiConfig );

};



b.go();
