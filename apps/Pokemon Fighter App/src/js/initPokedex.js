var moveSet = {
    'Quick Attack': {'Name': 'Quick Attack', 'Type': 'Normal', 'DMG': 10},
    'Thunder Shock': {'Name': 'Thunder Shock', 'Type': 'Electric', 'DMG': 10},
    'Double Kick': {'Name': 'Double Kick', 'Type': 'Fighting', 'DMG': 7.5},
    'Thunderbolt': {'Name': 'Thunderbolt', 'Type': 'Electric', 'DMG': 22.5},
    'Scratch': {'Name': 'Scratch', 'Type': 'Normal', 'DMG': 10},
    'Ember': {'Name': 'Ember', 'Type': 'Fire', 'DMG': 10},
    'Slash': {'Name': 'Slash', 'Type': 'Normal', 'DMG': 17.5},
    'Flamethrower': {'Name': 'Flamethrower', 'Type': 'Fire', 'DMG': 22.5}
};


var pokedex = {
    'Pikachu': {'Name': 'Pikachu', 'Type': 'Electric', 'HP': 35, 'Base HP': 35, 'Moves': [moveSet['Quick Attack'], moveSet['Thunder Shock'], moveSet['Thunderbolt'], moveSet['Double Kick']], 'Move List': []},
    'Charmander': {'Name': 'Charmander', 'Type': 'Fire', 'HP': 39, 'Base HP': 39, 'Moves': [moveSet['Scratch'], moveSet['Ember'], moveSet['Slash'], moveSet['Flamethrower']], 'Move List': []}
};

for (const [key1, value1] of Object.entries(pokedex)) {
    for (const [key2, value2] of Object.entries(pokedex[key1]['Moves'])){
        //console.log(key1, key2, value1, value2);
        pokedex[key1]['Move List'].push(value2['Name']);
    }
}