//
//  Hier nutze ich noch mal den 'basiljs' target engine
//  und kann die Variabeln von 'run_me_fourth.jsx' abrufen,
//  aber nich von 'run_me_first.jsx', weil dialog in
//  'run_me_fourth.jsx' neu definiert wurde.
//
#targetengine 'basiljs'



#includepath '~/Documents/;%USERPROFILE%Documents';
#include 'basiljs/bundle/basil.js';


function setup() {
  b.noStroke();
  b.fill( 255,0,0 );
  b.rect(
    0,0,
    dialog.v3, dialog.v4
  );
};


b.go();
