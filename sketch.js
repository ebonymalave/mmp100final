var camo=0; //colors blending together
var fade=0; //lowers opacity



function setup() {
	createCanvas(500, 500); //size of canvas
	background(49,22,103); //dark purple


}


function draw() {
  background(fade,camo,103); //dark purple
  stroke(20,6,33); //dark purple
  strokeWeight(10);
  fill(255,camo,93); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(random(width),random(height),100,100); // center of canvas, 20px dia
  
  fill(255,camo,93);
  ellipse(random(width),random(height),mouseX,mouseY,90,90);
  stroke(255,208,108)
  strokeWeight(10);
  textSize(50);
  textFont("Bodoni MT");
  textStyle(BOLD);
  textAlign(CENTER);
  text("Dreadful",200,camo);

}

function mousePressed(){
	if(camo>150){
		camo=0;
	}else{
		camo=camo+10;
	}
	if(fade>0){
		fade=-30;
	}
}