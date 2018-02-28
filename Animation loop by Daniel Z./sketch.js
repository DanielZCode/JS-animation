var cloudX;
var birdX = 50;
var birdY = 30;
var birdSpeed = 1;
function preload(){
    img = loadImage('resources/billy.png');
    img2 = loadImage("resources/billy copy.png");
}
var s = 120;
var snowflakes = [];
var baseSnowflake;
function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
     for(i= 0; i< s; i++) {
        baseSnowflake = new Snowflake();
        snowflakes.push(baseSnowflake);
        
    }

    
}

function draw() {
    background(150,150,200);
     //grass
    for (j = 0; j< 25; j++) {
        noStroke();
        if(j%2){
            fill(240 ,230, 240); 
            rect(j*25, 370, 27, 75);
        }
        else {
            fill(200, 200, 200);
            rect(j*25, 370, 27, 75);
        }
        
    }
    //base house
    strokeWeight(1);
    stroke(50);
    fill(200, 135, 80 );
    rect(200, 275, 200, 175);
    fill(122,82,48);
    for(var x = 110; x < 300; x+=20) {
        for(var y = 200; y <380; y+= 27) {
        rect (x, y, 20, 20);
        }
    }   
    fill(150, 60, 60);
    triangle(75, 200, 325,200, 200, 100);
    rect(200, 335, 25, 50)
    fill(175, 175, 175);
    rect(260, 150, 30, 60);
    
    //windows
    strokeWeight(1.5);
    for(var k = 0; k < 7; k++){
        if (k%2) {
            fill(255, 200, 30);
            rect(125+ k* 25, 275, 25, 25);
        }
        else {
            fill(70, 110, 150);
            rect(125 + k*25, 235, 35, 25);
        }
    };
    //clouds
    strokeWeight(0.75);
    cloudX = 0;
    for(i = 0; i< 6; i++) {
        cloudX = (i*75);
        if (i%2){
            fill(255,255,255);
            ellipse(cloudX, 50, 75, 40);
        }
        else {
            fill(200, 200, 200);
            ellipse(cloudX, 20, 75, 23);
        }
    
    }
    
    for (i = 0; i<snowflakes.length; i++) {
        snowflakes[i].run();
    };
    
    if (birdSpeed > 0) {
        drawBird(birdX, birdY);
    }
    else {
        drawBird2(birdX, birdY);
    }

    birdX+= birdSpeed;
    if (birdX > width | birdX < 0){
        birdSpeed = birdSpeed *-1;
    }
}

class Snowflake {
    constructor(){
        this.y = random(1,399);
        this.x = random(1, 399)
        this.speed = random(1,2)
    }
    
    run(){
        noStroke;
        fill(255);
        ellipse(this.x, this.y, 10, 10);
        if (this.y > height){
            this.y = 0;
            this.x = random(1, 399)
        } else {
            this.y = this.y + this.speed;
        }
    }
}

var drawBird = function(x, y){
    image(img, x, y, 60, 60);
    
    
}

var drawBird2 = function(x, y){
    image(img2, x, y, 60, 60);
    
    
}
