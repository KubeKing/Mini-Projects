var box = document.getElementById('dialog');
var aiHP = document.getElementById('AIHP');
var playerHP = document.getElementById('PlayerHP');

aiHP.style.left = '77.5%'; aiHP.style.top = '9.5%';
playerHP.style.left = '26.75%'; playerHP.style.top = '44.5%';

function updateBox(str){
    if(str == 'reset'){
        box.textContent = 'What will '+currentPokemon['Name']+' do?'
    }else{
        box.textContent = str;
    }
}

function updateHP(){
    playerHP.textContent = currentPokemon['HP']+'/'+currentPokemon['Base HP'];
    aiHP.textContent = currentOpp['HP']+'/'+currentOpp['Base HP'];
}

updateBox('reset');
