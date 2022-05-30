
/*--------------------------------------------- Variabler ----------------------------------------------------------------------------*/

//hjelpe liste
liste = [100, 150, 200, 250, 300, 350, 400, 450]
kart = [1, 2, 3, 4, 5, 6]

//Tid
//brukes kjeldent
function wait(time){
    start = millis()
    do{current = millis();}
    while(current < start + time)
}

attacktext = 100;
angrepstekst = 100;
angrepstekst2 = 100;
A1 = 0
A2 = 0

//gravitasjon
var xpos = 100;
var ypos = 200;
var accel;
var velocity = 0;
var mass = 10;
accel = mass * 0.1;

//player variabler/parametere
  jump = 87
  superjump = 32
  crouch = 83  
  left = 65
  right = 68
  interact = 69
  
//var for kart 2
    //tf = true/false
    var tf = 0;
    //boss
    //rect x/y/width/hight
    rx = 700
    ry = 400
    rw = 70
    rh = 70

    //boss
    doorx = rx + 10
    doory = ry
    drw = rw - 10
    drh = rh

    //dørhåndtak
    drex = doorx + 5
    drey = doory + 30
    drd = 5

    //ellipse x/y/width/hight
    ex = 735
    ey = 360
    er = 70

    //trampoline
    //trampoline x/y/width/hight
    trx = 550
    tryv = 460
    trw = 150
    trh = 20

//parametere for line_raindrop
  var l1 = 20;
  var l2 = 200;
  var w1 = 10;
  var w2 = 100;

  var x1 = 1;
  var x2 = 799;
  var y1 = -100;
  var y2 = -100;
  var s1 = 1;
  var s2 = 5;
  var g1 = 0.1;
  var g2 = 0.3;

  var blacknwhite = 255;
  var blues = ["#7CB9E8","#00308F","#F0F8FF","#0066b2","#5072A7","#6699CC","#002244"];
  
  var drops = []; //Liste av dråpene
  var howmany = 20; //mengden dråper i bakgrunen
  var thecolor = blues; /*fargen. Kan legge til flere med flere lister for eksempel
  var thecolor = greens;*/

//generelle parametere
  var btn2x = 100
  var btn2y = 250
  var btn3x =  350
  var btn3y =  250

  var hide = -1000;
  var textvar = 100;
  var textvar2 = 100


/*------------------------------------------------------/////// KLASSER /////////-------------------------------------------------------*/
//Klasser for regndråpene 
//bruker også objekter her
class raindrop {
    constructor(shape,color) {
    this.shape = shape;
    if(this.shape == "line"){
        this.raindrop = new line_raindrop(color);
    } else if(this.shape == "circle") {
        this.raindrop = new circle_raindrop(color);
    } else if(this.shape == "elipse") {
        this.raindrop = new elipse_raindrop(color);
    } else if(this.shape == "ractangle") {
        this.raindrop = new ractangle_raindrop(color);
    } else if(this.shape == "square"){
        this.raindrop = new square_raindrop(color);
    }
    }
    fall() {this.raindrop.fall();}
    show() {this.raindrop.show();}
    hide() {this.raindrop.hide();}
}

class line_raindrop {
    constructor(colors) {
        this.x = random(x1,x2); // start pos 
        this.y = random(y1,y2); // for dråpene
        this.s = random(s1,s2); // fart
        this.c = random(colors); // farge
        this.g = random(g1,g2);
        this.l = random(l1,l2);
        this.w = random(w1,w2);
    }
  
    fall() {
        this.y = this.y + this.s;
        this.s = this.s + this.g;
        if(this.y > height) {
            this.x = random(x1,x2); // start pos 
            this.y = random(y1,y2); // for dråpene
            this.s = random(s1,s2); // fart
            this.g = random(g1,g2);
            this.l = random(l1,l2);
            this.w = random(w1,w2);
        }
    }
    show(){
        strokeWeight(this.w);
        stroke(this.c)
        line(this.x,this.y,this.x,this.y + this.l);
    }
}