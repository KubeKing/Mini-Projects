var table = document.getElementById('menu');

var menus = {'main': ['Fight', 'Bag', 'Pokemon', 'Run'], 'fight': currentPokemon['Move List'], 'wait': ['Wait', 'Wait', 'Wait', 'Wait']}

var buttons = document.getElementsByClassName("buttonDef");

function reset(){
    var btnCon = document.getElementsByClassName("btnName");
    for(var i = 0; i < 4; i++){
        btnCon[i].textContent = menus['main'][i];
    }
    updateBox('reset');
}

function changeMenu(name){
    var btnCon = document.getElementsByClassName("btnName");
    for(var i = 0; i < 4; i++){
        try{btnCon[i].textContent = menus[name][i];}catch(err){btnCon[i].textContent = "";}
    }
}

function buttonclicked(e){
    var classes = e.className.split(" ");
    if(e.textContent == '> Fight'){
        changeMenu('fight');
    }else if(menus['fight'].includes((e.textContent).substr(2,e.textContent.length))){
        attack(currentPokemon, currentOpp, moveSet[(e.textContent).substr(2,e.textContent.length)]);
        changeMenu('wait');
        setTimeout(function(){aiMove()}, 2000);
        setTimeout(function(){reset();}, 3750);
    }else if(e.textContent == '> Run'){
        window.open("html\\closer.htm", '_self');
    }else if(e.textContent == '> Pokemon'){
        window.open("html\\choose.html", '_self');
    }
}

for(var i = 0; i < buttons.length; i++){
    buttons[i].onclick = function() {buttonclicked(this);}; 
}

updateHP();