var table = document.getElementById('menu');

//var menus = {'fight': [mainPokemon['Moves']]}

var buttons = document.getElementsByClassName("buttonDef");

function buttonclicked(e){
    var classes = e.className.split(" ")
}

for(var i = 0; i < buttons.length; i++){
    buttons[i].onclick = function() {buttonclicked(this);}; 
}