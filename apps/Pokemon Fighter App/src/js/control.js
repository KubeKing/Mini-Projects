var currentPokemon = pokedex['Pikachu'];
var currentOpp = pokedex['Charmander'];

var percentHealthAI = 1;
var percentHealthPlayer = 1;

function attack(attacker, defender, move){
    if(defender['HP'] - move['DMG'] > 0){
        defender['HP'] -= move['DMG'];
        percentHealthAI = currentOpp['HP']/currentOpp['Base HP'];
        percentHealthPlayer = currentPokemon['HP']/currentPokemon['Base HP'];
        AIHealthBar()
    }else{
        defender['HP'] = 0;
        percentHealthAI = currentOpp['HP']/currentOpp['Base HP'];
        percentHealthPlayer = currentPokemon['HP']/currentPokemon['Base HP'];
        AIHealthBar()
        console.log('You win!');
    }
}