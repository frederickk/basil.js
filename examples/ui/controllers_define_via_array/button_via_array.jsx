#targetengine 'basiljs'

#includepath '~/Documents/;%USERPROFILE%Documents';
#include 'basiljs/bundle/basil.js';


var dialog;

var uiConfig = {
  theButton: {
    type: 'button',
    label: 'Button',
    value: 'Click Me!',
    onClick: function(value) {
      b.println( 'My Button was clicked ' + value + ' time(s)' );
    }
  }
};



function setup() {

  dialog = new b.ui.prompt( 'Button Example', uiConfig );

};



b.go();
