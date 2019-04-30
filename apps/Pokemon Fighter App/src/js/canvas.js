//SETUP
//Set Zoom to 90%
var currentThings = (localStorage.getItem("currentThings")).split(":");
var currentPokemon = pokedex[currentThings[0]];
var currentOpp = pokedex[currentThings[1]];

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

pokedex[currentPokemon['Name']]['IMG'] = {'XPOS': foreground.width*0.14, 'YPOS': foreground.height*0.45, 'W':80*7.5, 'H':80*7.5};
pokedex[currentOpp['Name']]['IMG'] = {'XPOS': foreground.width*0.7, 'YPOS': foreground.height*0.18, 'W':80*3.75, 'H':80*3.75};

//MAKE SURE CHROME IS AT 80% ZOOM

/////Status
var indicate = document.getElementById('status');
indicate.width = window.innerWidth; indicate.height = window.innerHeight;
var ss = indicate.getContext('2d');


//Health bars

//AI
ss.beginPath();
ss.rect(foreground.width*0.7, foreground.height*0.1, 80*3.75, 50);
ss.stroke();

//Player
ss.beginPath();
ss.rect(currentPokemon['IMG']['XPOS']*1.245, currentPokemon['IMG']['YPOS'], 80*5, 60);
ss.stroke();

function healthBar(bar){
    ss.clearRect(bar['x'], bar['y'], bar['base']+1, bar['h']+1);
    ss.beginPath();
    ss.fillStyle = "green"
    ss.fillRect(bar['x'], bar['y'], bar['l'], bar['h']);
    ss.stroke();
}

currentPokemon['Bar'] = {'x': currentPokemon['IMG']['XPOS']*1.245+(3.8), 'y': currentPokemon['IMG']['YPOS']+2.5, 'l': 80*4.9, 'h': 54, 'base': 80*4.9};
currentOpp['Bar'] = {'x': foreground.width*0.702, 'y': foreground.height*0.103, 'l': 80*3.65, 'h': 45, 'base': 80*3.65};
healthBar(currentOpp['Bar']);
healthBar(currentPokemon['Bar']);
///////Status End

///////Spirtes Start
var spirtes = document.getElementById('sprites');
spirtes.width = window.innerWidth; spirtes.height = window.innerHeight;
var cs = spirtes.getContext('2d');

//P1
var pokeSpritePlayer = new Image;
pokeSpritePlayer.onload = function(){cs.drawImage(pokeSpritePlayer,currentPokemon['IMG']['XPOS'], currentPokemon['IMG']['YPOS'], currentPokemon['IMG']['W'], currentPokemon['IMG']['H']);};
pokeSpritePlayer.src = "..\\images\\pokemon\\"+currentPokemon['Name']+".png";

//AI
var pokeSpirteAI = new Image;
pokeSpirteAI.onload = function(){cs.drawImage(pokeSpirteAI, foreground.width*0.7, foreground.height*0.18, 80*3.75, 80*3.75);};
pokeSpirteAI.src = "..\\images\\pokemon\\"+currentOpp['Name']+".png";

//////Sprites End

//Sprites End
function shake(imgSrc, pokeMod, shakemod){
    var img = new Image, last = 0;
    img.src = imgSrc;
    img.addEventListener('load', function () {
        var interval = setInterval(function() {
          var x = pokeMod['IMG']['XPOS'], y = pokeMod['IMG']['YPOS']; modWidth = pokeMod['IMG']['W'], modHeight = pokeMod['IMG']['H'];
          return function () {
            cs.clearRect(x, y, modWidth, modHeight);
            cs.drawImage(img, x, y, modWidth, modHeight);
            if(last == 0){
                x += shakemod;
                last = 1;
            }else{
                x -= shakemod;
                last = 0;
            }
          };
        }(), 1000/40);
        setTimeout(function(){clearInterval(interval); cs.clearRect(pokeMod['IMG']['XPOS'], pokeMod['IMG']['YPOS'], pokeMod['IMG']['W'], pokeMod['IMG']['H']); cs.drawImage(img, pokeMod['IMG']['XPOS'], pokeMod['IMG']['YPOS'], pokeMod['IMG']['W'], pokeMod['IMG']['H']);}, 400); 
    }, false);
}
