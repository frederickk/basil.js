//
//  Hier nutze ich den gleichen target engine Name
//  wie beim ersten Beispiel ('run_me_first.jsx')
//  und obwohl es keine 'uiConfig' Variable gibt,
//  ist das UI-Fenster trotzdem erfolgreich hergestellt.
//
#targetengine 'basiljs'



#includepath '~/Documents/;%USERPROFILE%Documents';
#include 'basiljs/bundle/basil.js';



var dialog;



function setup() {
  dialog = new b.ui.palette( 'targetengine_debug_2', uiConfig );
};



b.go();

