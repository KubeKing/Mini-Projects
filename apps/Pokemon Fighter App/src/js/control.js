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
    return([Math.floor(dmg), effective]);
}

function attack(attacker, defender, move){
    if(Math.floor((Math.random() * 9)) < 8){        
        var dmg = calcDamage(move, defender);
        if(defender['HP'] - dmg[0] > 0){
            defender['HP'] -= dmg[0];
        }else{
            defender['HP'] = 0;
            if(defender['Name'] == currentPokemon['Name']){
                setTimeout(function(){window.open("html\\loose.html", '_self');}, 1250);
            }else{
                setTimeout(function(){window.open("html\\win.html", '_self');}, 1250);
            }
            
        }
        var shakemod = 40 * (dmg[0]/defender['Base HP']);
        defender['Bar']['l'] *= defender['HP']/defender['Base HP'];
        if(dmg[1] == '+'){
            updateBox(attacker['Name']+' used '+move['Name']+' and it was super effective!');
        }else if(dmg[1] == '-'){
            updateBox(attacker['Name']+' used '+move['Name']+' and it was not very effective.');
        }else if(dmg[1] == 'normal'){
            updateBox(attacker['Name']+' used '+move['Name']+'!');
        }
    }else{
        updateBox(attacker['Name']+' used '+move['Name']+', but it MISSED!');
    }
    setTimeout(function(){shake("..\\images\\pokemon\\"+defender['Name']+".png", defender, shakemod);}, 300);
    setTimeout(function(){healthBar(defender['Bar']); updateHP();}, 400);

}

function aiMove(){
    var choice = Math.floor((Math.random() * 3));
    attack(currentOpp, currentPokemon, moveSet[currentOpp['Move List'][choice]]);
}