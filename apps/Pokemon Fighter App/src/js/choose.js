var buttons = document.getElementsByClassName("pokemon");

function buttonclicked(e){
    var classes = e.className.split(" ");
    var currentPokemon = (((e.src).substr(92,e.src.length)).split("."))[0];
    var holder = pokelist.indexOf(currentPokemon);
    while(holder == pokelist.indexOf(currentPokemon)){
        holder = Math.floor((Math.random() * pokelist.length));
    }
    localStorage.setItem("currentThings", String(currentPokemon+":"+pokelist[holder]));
    window.open("..\\index.html", '_self')
}

for(var i = 0; i < buttons.length; i++){
    buttons[i].onclick = function() {buttonclicked(this);}; 
}

