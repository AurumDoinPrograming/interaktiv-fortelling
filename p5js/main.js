function setup() {
    clear()
    //de variablene som ikke kan være i klasser&var.js filen går her
    kart = 0
    started = false;
    vunnet = false;
    tapte = false;
    vunnetoverboss = false;
    taptepgaskudd = false;
    restartgame = createButton('Restart');
    restartgame.position(200, 300);
    restartgame.size(300, 100)
    restartgame.hide()
    hp = 200
    bosshp = 550
    createCanvas(800,500);
      
  // Det som lager selve dråpene
    for(var i = 0; i <= howmany-1; i++ ) {
      drops[i] = new raindrop("line",blues); 
    }
    button1fnc()
}

/*--------------------------------------------- DRAW ----------------------------------------------------------------------------*/
function draw() {
    button1.mousePressed(changeBG);
    restartgame.hide()
    background(60);
// Det som lager selve dråpene
    for(var i = 0; i <= howmany-1; i++ ) {
      drops[i].show();
      drops[i].fall();
    }
  
//gravitasjon
  velocity += accel; 
  ypos += velocity;
    if (ypos > height - mass/2) {
      velocity *= -0.6;
      ypos = height - mass/2;
    }

//bevegelse
    if (keyIsDown(left)) {
      xpos -= 5;
    }

    if (keyIsDown(right)) {
      xpos += 5;
    }

    if (keyIsDown(jump)) {
      ypos -= 3;
    }

    if (keyIsDown(crouch)) {
      ypos += 5;
    }

    else if (keyIsDown(crouch) && keyIsDown(right || left)) {
      xpos += 2;
    }

    
  
//kjøre funksjonene i Draw()
//lager en if setning her isteden for en funksjon
//fordi hvis ikke blir funksjonene lokale
if (started == true){
    player()
    map_one()
    map_all()
  }

if (kart == 2 && vunnetoverboss == false) {
  boss()
}

if (kart == 2 && vunnetoverboss == true) {
  door()
}

else if (bosshp < 400){
  ex = hide
  rx = hide
}

if (tf == 1){
  trampoline()
}

if (tf == 2 && vunnetoverboss == false){
  bossbar()
  attack()
}

if (mycookie == "true" && xpos > doorx && xpos > drw && kart == 2 && vunnetoverboss == true && tapte == false) {
    vunnet = true;
}
else if (mycookie == "false" && xpos > doorx && xpos > drw && kart == 2 && vunnetoverboss == true && tapte == false){
  text("Du har ikke nøkkelen...", liste[0], liste[0])
}

if (vunnet == true){
  textSize(50)
  text("Du vant gratulerer", 10, 300)
  scoreboard()
}

if (kart > 2){
  vunnet = true
  trx = hide
}


if (hp < 50){
  endgame()
}
}
//--draw slutt--//

/*--------------------------------------------- FUNKSJONER ----------------------------------------------------------------------------*/

function button1fnc() {
  button1 = createButton('Start spill');
  button1.position(200, 300);
  button1.style('color', 'blue', "border", "20px")
  button1.size(300, 100)


  restartgame = createButton('Restart');
  restartgame.position(200, 300);
  restartgame.size(300, 100)
  
}

function changeBG() {
  button1.hide();
  howmany = 10;
  started = true;
  kart = 1 ;
}
function player() {
    strokeWeight(5)
    circle(xpos, ypos - 59, mass*2);
    rect(xpos - 10, ypos - 44, 10 + mass);
}
function map_all() {
  strokeWeight(50)
  line(0,500,800,500)
  strokeWeight(10)
  line(50,50,hp, 50)
  textSize(20)
  text("HP", 50,45)
}


//--------------------------------------------- KART 2 I DRAW | FUNKSJONER fortsetter----------------------------------------------------------------------------//
function boss() {
  ellipse(ex,ey,er);
  rect(rx,ry,rw,rh);
}

//helsen til bossen
function bossbar() {
  line(bosshp, 50, 700, 50)
  textSize(20)
  text("BOSS HP", 615, 45)
}

//--helse start--/
function addhp(){
  hp += 30;
}
function removehp(){
  hp -= 30;
}
//--helse slutt--//


//Om boss blir tatt skade på
function removebosshp(){
  if (bosshp < 701){
    bosshp += 1;
  }
  if (bosshp > 700){
    vunnetoverboss = true;
  }
}

//døren som kommer etter å ha slått boss
function door(){
  rect(doorx, doory, drw, drh)
  circle(drex, drey, drd)
}

//Alternativ 1 trampoline
function trampoline() {
  rect(trx,tryv,trw,trh);
}

//Alternativ 2 Angrip
function attack() {
  console.log(A2)
  text("Trykk E for å gjøre et taktiskt spark", attacktext, attacktext)
  //------------skiller mellom alternativ 1 og 2
  text("Trykk F for å ta 360 noscope attack", attacktext, attacktext + 50)
 
  if (keyIsDown(interact) && A2 == 0) {
    A2 = 1
  }

if (A2 == 1 && A1 == 0){
  attacktext = hide
  angrepstekst = 100
  removebosshp()
  text("Du tok all helsen på bossen med kun dette ene angrepet! Bra!", angrepstekst, angrepstekst)
  text("Gå inn døren for å fullføre spillet", angrepstekst, angrepstekst*2)
  A2 == 2
}  

//--------------------------------
  
  if (keyIsDown(70) && A1 == 0 && A2 == 0) {
    A1 = 1
  }

  if (A1 == 1){
    taptepgaskudd = true;
    removehp()
    A1 = 2;
  }

  if (A1 == 2){
    angrepstekst = hide
    if (hp > 49){
      removehp()
      }
  }
}

//tapte
function endgame() {
  tapte = true
  console.log("stop game")
  clear()
  
  background(255, 0, 0);
  textSize(50)
  text("GAME OVER", 400, 400)
  text("Trykk cmd + R for å prøve på nytt", 10, 480)
  textSize(10)
  once = 0
   if (once > 1){
     hp -= 20
   }
  scoreboard()

  if (taptepgaskudd == true){
    attacktext = 80
    textSize(20)
    text("Du siktet ikke og gjorde ingen skade på bossen men med uhell skjøt deg selv :(", attacktext, attacktext - 50)
}
}

//er en funksjon så det kan brukes senere
//Statestikk om hvordan spilleren gjorde det
//Dette kan også utvikles og endres i fremtiden om trengs
function scoreboard() {
  textSize(20)
  text("SCORE BOARD: ", 100, 70)
  text("Nøkkelen funnet: " + mycookie, 100, 100)
  text("helse: " + hp, 100, 130)
  text("vunnet: " + vunnet, 100, 160)
  text("Annmerknig for forsentkomming: " + annmerkning, 100, 190)
  }


function map_one() {
  text("Bruk W A S D tastene for å bevege deg!", textvar, textvar)
  text("Gå mot høyre for å gå videre", 20+textvar, 20+textvar)
  //mindre regndråper
    l1 = random(10,20);
    l2 = random(10,20);
    w1 = random(5,10);
    w2 = random(5,10);

    if (xpos > width && kart == 1){
        textvar = hide;
        xpos = 0;
        kart = 2;
    }


//--------------------------------------------- KART 2 ----------------------------------------------------------------------------//
    if (kart == 2){
      if (xpos < (rx -5) && xpos > 400 && keyIsDown(interact) && tf == 0) {
        textvar2 = hide
        //for at det kun skal kjøre en gang
        tf = 1
      }

      if (xpos < (rx -5) && xpos > 400 && keyIsDown(82) && tf == 0){
        //for at det kun skal kjøre en gang
        tf = 2
      }

      //om spilleren treffer bossen
        if(xpos >= rx && ypos >= 495 && ypos <= (495 + 100) && vunnetoverboss == false) {
          xpos = rx - 10;
      }

      //trampoline
        if (xpos > trx && xpos < (trx + trw) && keyIsDown(superjump) && tf == 1){
          ypos /= 2;
        }

      //Hit-Box Boss
        if(xpos >= rx && xpos <= (xpos + rw) && ypos >= ry && ypos <= (ypos + ey)&& vunnetoverboss == false) {
          xpos = rx -50;
          if (ypos > ey && xpos < rx){
            removehp()
          }
        }

      //Alternativer for kart 2
        if (xpos < (rx -5) && xpos > 400 && tf == 0){
          textSize(20)
          text("Trykk E for å lage en TRAMPOLINE og prøve å hoppe over", liste[0], liste[1])
          text("Trykk R for å ANGRIEPE bossen", liste[0], liste[3])
        }
    }
//om spilleren går mot høyre
    if (xpos > width){
      console.log(kart)
      xpos = 1
      kart = 4
    }

/*--------------------------------------------- KART 3 - A ----------------------------------------------------------------------------*/
    
//gjør neste map rent for alle objecter
    if (kart == 3){
      rx = hide
      trx = -100
    }


/*--------------------------------------------- andre ting ----------------------------------------------------------------------------*/
  //om spilleren går mot venstre
    else if (kart <= 3 && xpos < 0 || kart >= 5 && xpos < 0) {
      xpos = 0;
    }

  //loop for å fortsette å løpe for altid
    else if (kart == (4 || 5) && xpos < 0){
        yVal = 100;
        xpos = 800
    }

  //nyttig for debugging
  //fjern kommentering for å bruke den
    /*
    if (keyIsDown(84)){
      console.log("xpos = ",xpos + "\nypos = ", ypos)
    }*/
  }