#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {

	b.strokeWeight(4.0);

	b.strokeCap( b.ROUND );
	b.line(20, 30, 80, 30);

	b.strokeCap( b.SQUARE );
	b.line(20, 50, 80, 50);

	b.strokeCap( b.PROJECT );
	b.line(20, 70, 80, 70);


	b.noStrokeCap();


	b.strokeCap( ArrowHead.SIMPLE_ARROW_HEAD );
	b.line(20, 90, 80, 90);

	b.noStrokeCap();
	b.strokeCap( ArrowHead.SIMPLE_ARROW_HEAD, b.LEFT );
	b.line(100, 90, 160, 90);

	b.noStrokeCap();
	b.strokeCap( ArrowHead.SIMPLE_ARROW_HEAD, b.RIGHT );
	b.line(180, 90, 240, 90);

	b.strokeCap( ArrowHead.SIMPLE_WIDE_ARROW_HEAD );
	b.line(20, 110, 80, 110);

	b.noStrokeCap();
	b.strokeCap( ArrowHead.SIMPLE_WIDE_ARROW_HEAD, b.LEFT );
	b.line(100, 110, 160, 110);

	b.noStrokeCap();
	b.strokeCap( ArrowHead.SIMPLE_WIDE_ARROW_HEAD, b.RIGHT );
	b.line(180, 110, 240, 110);

	b.strokeCap( ArrowHead.TRIANGLE_ARROW_HEAD );
	b.line(20, 130, 80, 130);

	b.noStrokeCap();
	b.strokeCap( ArrowHead.TRIANGLE_ARROW_HEAD, b.LEFT );
	b.line(100, 130, 160, 130);

	b.noStrokeCap();
	b.strokeCap( ArrowHead.TRIANGLE_ARROW_HEAD, b.RIGHT );
	b.line(180, 130, 240, 130);

	b.strokeCap( ArrowHead.TRIANGLE_WIDE_ARROW_HEAD );
	b.line(20, 150, 80, 150);

	b.noStrokeCap();
	b.strokeCap( ArrowHead.TRIANGLE_WIDE_ARROW_HEAD, b.LEFT );
	b.line(100, 150, 160, 150);

	b.noStrokeCap();
	b.strokeCap( ArrowHead.TRIANGLE_WIDE_ARROW_HEAD, b.RIGHT );
	b.line(180, 150, 240, 150);

	b.strokeCap( ArrowHead.BARBED_ARROW_HEAD );
	b.line(20, 170, 80, 170);

	b.noStrokeCap();
	b.strokeCap( ArrowHead.BARBED_ARROW_HEAD, b.LEFT );
	b.line(100, 170, 160, 170);

	b.noStrokeCap();
	b.strokeCap( ArrowHead.BARBED_ARROW_HEAD, b.RIGHT );
	b.line(180, 170, 240, 170);

	b.strokeCap( ArrowHead.CURVED_ARROW_HEAD );
	b.line(20, 190, 80, 190);

	b.noStrokeCap();
	b.strokeCap( ArrowHead.CURVED_ARROW_HEAD, b.LEFT );
	b.line(100, 190, 160, 190);

	b.noStrokeCap();
	b.strokeCap( ArrowHead.CURVED_ARROW_HEAD, b.RIGHT );
	b.line(180, 190, 240, 190);

	b.strokeCap( ArrowHead.CIRCLE_ARROW_HEAD );
	b.line(20, 210, 80, 210);

	b.noStrokeCap();
	b.strokeCap( ArrowHead.CIRCLE_ARROW_HEAD, b.LEFT );
	b.line(100, 210, 160, 210);

	b.noStrokeCap();
	b.strokeCap( ArrowHead.CIRCLE_ARROW_HEAD, b.RIGHT );
	b.line(180, 210, 240, 210);

	b.strokeCap( ArrowHead.CIRCLE_SOLID_ARROW_HEAD );
	b.line(20, 230, 80, 230);

	b.noStrokeCap();
	b.strokeCap( ArrowHead.CIRCLE_SOLID_ARROW_HEAD, b.LEFT );
	b.line(100, 230, 160, 230);

	b.noStrokeCap();
	b.strokeCap( ArrowHead.CIRCLE_SOLID_ARROW_HEAD, b.RIGHT );
	b.line(180, 230, 240, 230);

	b.strokeCap( ArrowHead.SQUARE_ARROW_HEAD );
	b.line(20, 250, 80, 250);

	b.noStrokeCap();
	b.strokeCap( ArrowHead.SQUARE_ARROW_HEAD, b.LEFT );
	b.line(100, 250, 160, 250);

	b.noStrokeCap();
	b.strokeCap( ArrowHead.SQUARE_ARROW_HEAD, b.RIGHT );
	b.line(180, 250, 240, 250);

	b.strokeCap( ArrowHead.SQUARE_SOLID_ARROW_HEAD );
	b.line(20, 270, 80, 270);

	b.noStrokeCap();
	b.strokeCap( ArrowHead.SQUARE_SOLID_ARROW_HEAD, b.LEFT );
	b.line(100, 270, 160, 270);

	b.noStrokeCap();
	b.strokeCap( ArrowHead.SQUARE_SOLID_ARROW_HEAD, b.RIGHT );
	b.line(180, 270, 240, 270);

	b.strokeCap( ArrowHead.BAR_ARROW_HEAD );
	b.line(20, 290, 80, 290);

	b.noStrokeCap();
	b.strokeCap( ArrowHead.BAR_ARROW_HEAD, b.LEFT );
	b.line(100, 290, 160, 290);

	b.noStrokeCap();
	b.strokeCap( ArrowHead.BAR_ARROW_HEAD, b.RIGHT );
	b.line(180, 290, 240, 290);

}

b.go();