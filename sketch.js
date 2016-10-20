

function setup() {
  createCanvas(windowWidth, 800);
  
}

function draw(){

background(250, 150, 155);

textSize(32);
text("x" + mouseX, 10, 30);
text("y" + mouseY, 10, 60);

fill(200);	
rect(600, 320, 150, 150);
rect(575, 50, 200, 200);
rect(575, 260, 200, 40);

fill(150);
rect(600, 60, 150, 10);

fill(200);
rect(650, 300, 55, 20, 10);

fill(255);
ellipse(650, 160, 50, 75);


fill(0);
ellipse(650, 170, 20, 20);
fill(255);

ellipse(700, 160, 50, 75);

fill(0);
ellipse(700, 170, 20, 20);
fill(255);


fill(65,245,60);
rect(605, 250, 145, 10, 10);


fill(200);
ellipse(593, 350, 15, 50);

fill(200);
ellipse(758, 350, 15, 50);

rect(765, 338, 100, 25);

rect(485, 338, 100, 25);


fill(200);
arc(575, 200, 50, 50, PI/2, PI+HALF_PI);
arc(776, 200, 50, 50, PI+HALF_PI, HALF_PI);



beginShape();
vertex(185, 400);
vertex(185, 300);
vertex(345, 300);
vertex(345, 400);
endShape(CLOSE);

beginShape();
vertex(155, 300);
vertex(155, 65);
vertex(375, 65);
vertex(375, 300);
endShape(CLOSE);

fill(0);
beginShape();
vertex(205, 160);
vertex(225, 135);
vertex(225, 135);
vertex(245, 160);
endShape(CLOSE);

fill(0);
beginShape();
vertex(280, 160);
vertex(280, 160);
vertex(300, 135);
vertex(320, 160);
endShape(CLOSE);

fill(255, 0, 0);
beginShape();
vertex(200, 245);
vertex(200, 214);
vertex(320, 214);
vertex(320, 245);
endShape(CLOSE);

fill(255);
beginShape();
vertex(220, 230);
vertex(220, 215);
vertex(240, 215);
vertex(240, 230);
endShape(CLOSE);



}



