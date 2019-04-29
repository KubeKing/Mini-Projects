var DAMAGEMOD = 0.25;

var moveSet = {
    'Quick Attack': {'Name': 'Quick Attack', 'Type': 'Normal', 'DMG': 40*DAMAGEMOD},
    'Thunder Shock': {'Name': 'Thunder Shock', 'Type': 'Electric', 'DMG': 40*DAMAGEMOD},
    'Double Kick': {'Name': 'Double Kick', 'Type': 'Fighting', 'DMG': 30*DAMAGEMOD},
    'Thunderbolt': {'Name': 'Thunderbolt', 'Type': 'Electric', 'DMG': 90*DAMAGEMOD},
    'Scratch': {'Name': 'Scratch', 'Type': 'Normal', 'DMG': 40*DAMAGEMOD},
    'Ember': {'Name': 'Ember', 'Type': 'Fire', 'DMG': 40*DAMAGEMOD},
    'Slash': {'Name': 'Slash', 'Type': 'Normal', 'DMG': 70*DAMAGEMOD},
    'Flamethrower': {'Name': 'Flamethrower', 'Type': 'Fire', 'DMG': 90*DAMAGEMOD},
    'Tackle': {'Name': 'Tackle', 'Type': 'Normal', 'DMG': 40*DAMAGEMOD},
    'Vine Whip': {'Name': 'Vine Whip', 'Type': 'Grass', 'DMG': 45*DAMAGEMOD},
    'Take Down': {'Name': 'Take Down', 'Type': 'Normal', 'DMG': 60*DAMAGEMOD},
    'Razor Leaf': {'Name': 'Razor Leaf', 'Type': 'Grass', 'DMG': 55*DAMAGEMOD},
    'Bubble': {'Name': 'Bubble', 'Type': 'Water', 'DMG': 40*DAMAGEMOD},
    'Water Gun': {'Name': 'Water Gun', 'Type': 'Water', 'DMG': 50*DAMAGEMOD},
    'Bite': {'Name': 'Bite', 'Type': 'Normal', 'DMG': 60*DAMAGEMOD},
    'Pound': {'Name': 'Pound', 'Type': 'Normal', 'DMG': 40*DAMAGEMOD},
    'Peck': {'Name': 'Peck', 'Type': 'Normal', 'DMG': 40*DAMAGEMOD},
    'Acrobatics': {'Name': 'Acrobatics', 'Type': 'Normal', 'DMG': 55*DAMAGEMOD},
    'Fire Spin': {'Name': 'Fire Spin', 'Type': 'Fire', 'DMG': 35*DAMAGEMOD},
    'Leaf Storm': {'Name': 'Leaf Storm', 'Type': 'Grass', 'DMG': 65*DAMAGEMOD}
};


var pokedex = {
    'Pikachu': {'Name': 'Pikachu', 'Type': 'Electric', 'HP': 35, 'Base HP': 35, 'Moves': [moveSet['Quick Attack'], moveSet['Thunder Shock'], moveSet['Thunderbolt'], moveSet['Double Kick']], 'Move List': []},
    'Charmander': {'Name': 'Charmander', 'Type': 'Fire', 'HP': 39, 'Base HP': 39, 'Moves': [moveSet['Scratch'], moveSet['Ember'], moveSet['Slash'], moveSet['Flamethrower']], 'Move List': []},
    'Bulbasaur': {'Name': 'Bulbasaur', 'Type': 'Grass', 'HP': 45, 'Base HP': 45, 'Moves': [moveSet['Tackle'], moveSet['Vine Whip'], moveSet['Take Down'], moveSet['Razor Leaf']], 'Move List': []},
    'Squirtle': {'Name': 'Squirtle', 'Type': 'Water', 'HP': 44, 'Base HP': 44, 'Moves': [moveSet['Bubble'], moveSet['Water Gun'], moveSet['Tackle'], moveSet['Bite']], 'Move List': []},
    'Turtwig': {'Name': 'Turtwig', 'Type': 'Grass', 'HP': 55, 'Base HP': 55, 'Moves': [moveSet['Tackle'], moveSet['Razor Leaf'], moveSet['Bite'], moveSet['Leaf Storm']], 'Move List': []},
    'Piplup': {'Name': 'Piplup', 'Type': 'Water', 'HP': 53, 'Base HP': 53, 'Moves': [moveSet['Pound'], moveSet['Bubble'], moveSet['Peck'], moveSet['Water Gun']], 'Move List': []},
    'Chimchar': {'Name': 'Chimchar', 'Type': 'Fire', 'HP': 44, 'Base HP': 44, 'Moves': [moveSet['Scratch'], moveSet['Ember'], moveSet['Acrobatics'], moveSet['Fire Spin']], 'Move List': []}
};

var pokelist = [];

for (const [key1, value1] of Object.entries(pokedex)) {
    for (const [key2, value2] of Object.entries(pokedex[key1]['Moves'])){
        //console.log(key1, key2, value1, value2);
        pokedex[key1]['Move List'].push(value2['Name']);
        if(pokelist.indexOf(pokedex[key1]['Name']) < 0){
            pokelist.push(pokedex[key1]['Name']);
        }
    }
}