/*----------------------------------------------------------------------------------------------------------------------------------*/
let options = {
    root: null,
    rootMargin:'0px',
    threshold:1.0
};
let callback = (entries, observer)=>{
    entries.forEach(entry => {
        if(entry.target.id == 'home-video')
        {
            if(entry.isIntersecting){
                entry.target.play();
            }
            else{
                entry.target.pause();
            }
        }
    });
}
let observer = new IntersectionObserver(callback, options);

/*----------------------------------------------------------------------------------------------------------------------------------*/
function changecookie() {
    if (mycookie == false){
        mycookie.set = true;
        console.log("cookie changed", + mycookie)
    }
}
function change_annmerkning() {
    if (annmerkning == false){
        annmerkning.set = true;
        console.log("cookie changed", + annmerkning)
    }
    else {
        return
    }
}

function backaudio(){
    audiovar = `</video> <audio playsinline loop autoplay><source src="audio.mp3" type="audio/mpeg"></audio>`
    document.getElementById("lyd").innerHTML = audiovar
}

/*----------------------------------------------------------------------------------------------------------------------------------*/
function start(){
    out = `<video playsinline autoplay width="100%"> <source src="ferdig_redigert/temp.mp4"/>`
    document.getElementById("home-video").innerHTML = out
}

/*1*/
function vaakne(){
    out = `<video playsinline autoplay width="100%"> <source src="ferdig_redigert/badet_vaaknet.mp4"/> 
    </video>`
    document.getElementById("home-video").innerHTML = out
    changecookie()
    console.log("cookie changed\n cookie is now: ", + mycookie)
}
function sove(){
    out = `<video playsinline autoplay width="100%"> <source src="ferdig_redigert/sove.mp4"/> 
    </video>`
    document.getElementById("home-video").innerHTML = out
}
function game() {
    out = `<video playsinline autoplay width="100%"> <a herf="../p5js/index_game.html"></a> <source src="ferdig_redigert/game.mp4"/>
    </video>`
    document.getElementById("home-video").innerHTML = out
}


/*2*/
function chill() {
    out = `<video playsinline autoplay width="100%"> <source src="ferdig_redigert/chill.mp4"/> 
    </video>`
    change_annmerkning()
    document.getElementById("home-video").innerHTML = out
}

function lop() {
    out = `<video playsinline autoplay width="100%"> <source src="ferdig_redigert/for_sent.mp4"/> 
    </video>`
    document.getElementById("home-video").innerHTML = out
}


/*----------------------------------------------------------------------------------------------------------------------------------*/

function myHandler(e) {
    out = `<!--html kode injected av JS--> 
    <button id="a1_vaakne" class="knapper" onclick="vaakne(), removebutton2(), gameknapp()()">VÅKNE</button>
    <button id="a2_sove" class="knapper" onclick="sove(), removebutton2(), knapplager2()">PRØV Å SOVE IGJEN</button>`
    document.getElementById("button-pos").innerHTML = out
}

function gameknapp() {
    out = `<!--html kode injected av JS--> 
    <button id="a1_game" class="knapper" onclick="game(), removebutton3(), startknappforspill()">GAME</button>
    <button id="a2_game" class="knapper" onclick="game(), removebutton3(), startknappforspill()">GAME</button>`
    document.getElementById("button-pos").innerHTML = out
}

function knapplager2() {
    out =  `<!--html kode injected av JS--> 
    <button id="a1_lop" class="knapper" onclick="lop(), removebutton4(), lop(), gameknapp()"> LØP! </button>
    <button id="a2_chill" class="knapper" onclick="chill(), removebutton4(), chill(), gameknapp()">chill, er for sen uansett</button>`
    document.getElementById("button-pos").innerHTML = out
}

function startknappforspill() {
    out = `<!--html kode injected av JS--> 
    <a href='../p5js/index_game.html'><button id="startspill"  class="knapper">START SPILL</button></a>`
    document.getElementById("button-pos").innerHTML = out
}

/*----------------------------------------------------------------------------------------------------------------------------------*/

var hidden = false;
    function removebutton() {
        hidden = !hidden;
        if(hidden) {
            document.getElementById('startknapp').style.visibility = 'hidden';
        } else {
            document.getElementById('startknapp').style.visibility = 'visible';
        }
    }

    function removebutton2() {
        if(hidden) {
            document.getElementById('a1_vaakne').style.visibility = 'hidden';
            document.getElementById('a2_sove').style.visibility = 'hidden';

        } else {
            document.getElementById('a1_vaakne').style.visibility = 'visible';
            document.getElementById('a2_sove').style.visibility = 'visible';
        }
    }

    function removebutton3() {
        if(hidden) {
            document.getElementById('a1_game').style.visibility = 'hidden';
            document.getElementById('a2_game').style.visibility = 'hidden';

        } else {
            document.getElementById('a1_game').style.visibility = 'visible';
            document.getElementById('a2_game').style.visibility = 'visible';
        }
    }

    function removebutton4() {
        if(hidden) {
            document.getElementById('a1_lop').style.visibility = 'hidden';
            document.getElementById('a2_chill').style.visibility = 'hidden';

        } else {
            document.getElementById('a1_lop').style.visibility = 'visible';
            document.getElementById('a2_chill').style.visibility = 'visible';
        }
    }