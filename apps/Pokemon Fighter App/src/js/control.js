var currentPokemon = pokedex['Pikachu'];
var currentOpp = pokedex['Charmander'];

var percentHealthAI = currentOpp['HP']/currentOpp['Base HP'];

function attack(attacker, defender, move){
    defender['HP'] -= move['DMG'];
}