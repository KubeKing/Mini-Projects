function calcDamage(move, defender){
    var effective = 'normal';
    var dmg = move['DMG'];
    if(defender['Type'] == 'Electric'){
        if(move['Type'] == 'Water'){
            effective = 'normal'
        }else if(move['Type'] == 'Fire'){
            effective = 'normal'
        }else if(move['Type'] == 'Grass'){
            effective = 'normal'
        }else if(move['Type'] == 'Fightning'){
            effective = 'normal'
        }else if(move['Type'] == 'Normal'){
            effective = 'normal'
        }else if(move['Type'] == 'Electric'){
            effective = '-';
        }
    }else if(defender['Type'] == 'Water'){
        if(move['Type'] == 'Water'){
            effective = '-';
        }else if(move['Type'] == 'Fire'){
            effective = '-';
        }else if(move['Type'] == 'Grass'){
            effective = '+';
        }else if(move['Type'] == 'Fightning'){
            effective = 'normal';
        }else if(move['Type'] == 'Normal'){
            effective = 'normal';
        }else if(move['Type'] == 'Electric'){
            effective = '+';
        }
    }else if(defender['Type'] == 'Fire'){
        if(move['Type'] == 'Water'){
            effective = '+';
        }else if(move['Type'] == 'Fire'){
            effective = '-';
        }else if(move['Type'] == 'Grass'){
            effective = '-';
        }else if(move['Type'] == 'Fightning'){
            effective = 'normal';
        }else if(move['Type'] == 'Normal'){
            effective = 'normal';
        }else if(move['Type'] == 'Electric'){
            effective = 'normal';
        }
    }else if(defender['Type'] == 'Grass'){
        if(move['Type'] == 'Water'){
            effective = '-';
        }else if(move['Type'] == 'Fire'){
            effective = '+';
        }else if(move['Type'] == 'Grass'){
            effective = '-';
        }else if(move['Type'] == 'Fightning'){
            effective = 'normal';
        }else if(move['Type'] == 'Normal'){
            effective = 'normal';
        }else if(move['Type'] == 'Electric'){
            effective = '-';
        }
    }else if(defender['Type'] == 'Normal'){
        if(move['Type'] == 'Water'){
            effective = 'normal';
        }else if(move['Type'] == 'Fire'){
            effective = 'normal';
        }else if(move['Type'] == 'Grass'){
            effective = 'normal';
        }else if(move['Type'] == 'Fightning'){
            effective = '+';
        }else if(move['Type'] == 'Normal'){
            effective = 'normal';
        }else if(move['Type'] == 'Electric'){
            effective = 'normal';
        }
    }
    if(effective == 'normal'){
        dmg *= 1;
    }else if(effective == '+'){
        dmg *= 1.5;
    }else if(effective == '-'){
        dmg *= 0.5
    }
    return(dmg);
}

function attack(attacker, defender, move){
    var dmg = calcDamage(move, defender);
    if(defender['HP'] - dmg > 0){
        defender['HP'] -= dmg;
    }else{
        defender['HP'] = 0;
        if(defender['Name'] == currentPokemon['Name']){
            setTimeout(function(){window.open("html\\loose.html", '_self');}, 1250);
        }else{
            setTimeout(function(){window.open("html\\win.html", '_self');}, 1250);
        }
        
    }
    var shakemod = 50 * (dmg/defender['Base HP']);
    defender['Bar']['l'] *= defender['HP']/defender['Base HP'];
    setTimeout(function(){shake("..\\images\\pokemon\\"+defender['Name']+".png", defender, shakemod);}, 300);
    setTimeout(function(){healthBar(defender['Bar']);}, 400);
}

function aiMove(){
    var choice = Math.floor((Math.random() * 3));
    attack(currentOpp, currentPokemon, moveSet[currentOpp['Move List'][choice]]);
}