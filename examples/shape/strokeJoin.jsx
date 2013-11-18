#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {

	b.noFill();
	b.strokeWeight(10.0);

	b.strokeJoin( b.ROUND );
	b.beginShape();
	b.vertex(35, 20);
	b.vertex(65, 50);
	b.vertex(35, 80);
	b.endShape();

	b.strokeJoin( b.MITER );
	b.beginShape();
	b.vertex(35, 120);
	b.vertex(65, 150);
	b.vertex(35, 180);
	b.endShape();

	b.strokeJoin( b.BEVEL );
	b.beginShape();
	b.vertex(35, 220);
	b.vertex(65, 250);
	b.vertex(35, 280);
	b.endShape();

}

b.go();