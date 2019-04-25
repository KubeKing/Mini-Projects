//Background Start
var background = document.getElementById('background');
background.width = window.innerWidth; background.height = window.innerHeight;
var cb = background.getContext('2d');
var grassBack = new Image;
grassBack.onload = function(){cb.drawImage(grassBack,0,0, background.width, background.height);};
grassBack.src = "..\\images\\props\\grassBackground.png";
//Background End



//Foreground Start
var foreground = document.getElementById('foreground');
foreground.width = window.innerWidth; foreground.height = window.innerHeight;
var cf = foreground.getContext('2d');
var fightingPad = new Image;
fightingPad.onload = function(){cf.drawImage(fightingPad,0,0, foreground.width, foreground.height);};
fightingPad.src = "..\\images\\props\\fightingGrass.png";
//Foreground End


//MAKE SURE CHROME IS AT 80% ZOOM


//Spirtes Start
var spirtes = document.getElementById('sprites');
spirtes.width = window.innerWidth; spirtes.height = window.innerHeight;
var cs = spirtes.getContext('2d');

//P1
var pokeSpritePlayer = new Image;
pokeSpritePlayer.onload = function(){cs.drawImage(pokeSpritePlayer,foreground.width*0.14,foreground.height*0.45, 80*7.5, 80*7.5);};
pokeSpritePlayer.src = "..\\images\\pokemon\\"+currentPokemon['Name']+".png";

//AI
var pokeSpirteAI = new Image;
pokeSpirteAI.onload = function(){cs.drawImage(pokeSpirteAI, foreground.width*0.7, foreground.height*0.18, 80*3.75, 80*3.75);};
pokeSpirteAI.src = "..\\images\\pokemon\\"+currentOpp['Name']+".png";

//Health bars
var last = 0;

cs.beginPath();
cs.rect(foreground.width*0.7, foreground.height*0.1, 80*3.75, 50);
cs.stroke();

function AIHealthBar(){
    cs.clearRect(foreground.width*0.702, foreground.height*0.103, last+4, 45);
    cs.beginPath();
    cs.fillStyle = "green"
    cs.fillRect(foreground.width*0.702, foreground.height*0.103, (80*3.65)*percentHealthAI, 45);
    last = (80*3.65)*percentHealthAI;
    cs.stroke();
}

AIHealthBar();

//Sprites End
