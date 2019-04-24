var table = document.getElementById('menu');

var menus = {'main': ['Fight', 'Bag', 'Pokemon', 'Run'], 'fight': currentPokemon['Move List']}

var buttons = document.getElementsByClassName("buttonDef");

function reset(){
    var btnCon = document.getElementsByClassName("btnName");
    for(var i = 0; i < 4; i++){
        btnCon[i].textContent = menus['main'][i];
    }
}

function buttonclicked(e){
    var classes = e.className.split(" ");
    var btnCon = document.getElementsByClassName("btnName");
    if(e.textContent == '> Fight'){
        for(var i = 0; i < 4; i++){
            try{btnCon[i].textContent = menus['fight'][i];}catch(err){btnCon[i].textContent = "";}
        }
    }else if(menus['fight'].includes((e.textContent).substr(2,e.textContent.length))){
        console.log('Yeet')
    }
}

for(var i = 0; i < buttons.length; i++){
    buttons[i].onclick = function() {buttonclicked(this);}; 
}