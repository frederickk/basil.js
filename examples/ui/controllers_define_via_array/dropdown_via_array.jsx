#targetengine 'basiljs'

#includepath '~/Documents/;%USERPROFILE%Documents';
#include 'basiljs/bundle/basil.js';


var dialog;

var uiConfig = {
  theDropdown: {
    type: 'dropdown',
    label: 'Dropdown',
    items: ['item 1', 'item 2', 'item 3'],
    value: 'item 3',
    onChange: function(value) {
      b.println( 'My Dropdown has changed ' + value );
    }
  }
};



function setup() {

  dialog = new b.ui.prompt( 'Dropdown Example', uiConfig );

};



b.go();
