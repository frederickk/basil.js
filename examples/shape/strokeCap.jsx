#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {

	b.strokeWeight(12.0);

	b.strokeCap( b.ROUND );
	b.line(20, 30, 80, 30);

	b.strokeCap( b.SQUARE );
	b.line(20, 50, 80, 50);

	b.strokeCap( b.PROJECT );
	b.line(20, 70, 80, 70);

}

b.go();