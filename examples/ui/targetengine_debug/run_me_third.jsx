//
//  Hier nutze ich einen random target engine Name
//  und nun haben wir das erwartete Ergebnis.
//  Also einen Fehler, da 'uiConfig' nicht "definiert" wurde.
//
#targetengine 'qwertyuiop'



#includepath '~/Documents/;%USERPROFILE%Documents';
#include 'basiljs/bundle/basil.js';



var dialog;



function setup() {
  dialog = new b.ui.palette( 'targetengine_debug_3', uiConfig );
};



b.go();

