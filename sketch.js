
var angle = 0;
var ma;
var maxD;

function setup() {
	createCanvas(400, 400, WEBGL);
	ma = atan(1/ sqrt(2));
	maxD = dist(0, 0, 200, 200);
	frameRate(30)
}


function draw() {
	background(175);
	ortho(-400, 400, -400, 400, 0, 2500)
	rectMode(CENTER);
	rotateX(PI/4);
	rotateY(ma);
	directionalLight(176,224,230, 1, 0, 1);

	var offset = 0;
	var w = 25;

	for(var z=0; z<height; z+=w){
		for(var x=0; x<width; x+=w){
			push();
			var d = dist(x, z, width/2, height/2);
			var offset = map(d, 0, maxD, -6, 6);
			var h = floor(map(sin(angle - offset), -1, 1, 50, 200));
			ambientMaterial(255);
			translate(x - width/2, 0, z - height/2);
			box(w, h, w);
			pop();
		}
	}
	angle += 0.1;
}
