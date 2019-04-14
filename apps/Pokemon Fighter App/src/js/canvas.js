//Setup
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

var currentPokemon = pokedex['Pikachu'];

var img = new Image;
img.onload = function(){
    c.drawImage(img,canvas.width*0.25,canvas.height*0.7); // Or at whatever offset you like
  };
img.src = "images\\pokemon\\"+currentPokemon["Name"]+".png";
