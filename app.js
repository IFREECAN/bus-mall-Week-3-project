
'use strict';

var video = document.getElementById('images');

//create click-button for html
var start = document.getElementById('audio-start');
var pause = document.getElementById('audio-pause');

function handleAudioStart() {
  video.play();
}

function handleAudioPause() {
  video.pause();
}

start.addEventListener('click', handleAudioStart);
pause.addEventListener('click', handleAudioPause);


//Goat.allGoats = [];....//from class
Products.allProducts = [];

//*************************************
// CREATE THE CONSTRUCTOR function
//*************************************
function Products(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.calcimageclicks = [];
  this.calctotalimageclicks = ;

  Products.allProducts.push(this);
}

//NOTES FROM CLASS
//new Goat('cool goat', 'img/cool-goat.png');
//new Goat('mean goat', 'img/mean-goat.png');
//console.log(Goat.allGoats);

//********************************************
//this is the___________with the agruments
//*******************************************
new Products('bag', 'img/bag.jpg');
new Products('banana', 'imb/banana.jpg');
new Products('bathroom', 'img/bathroom.jpg');
new Products('boots', 'img/boots.jpg');
new Products('breakfast', 'img/breakfast.jpg');
new Products('bubblegum', 'img/bubblegum.jpg');
new Prodcuts('chair', 'img/chair.jpg');
new Products('cthulhu', 'img/cthulu.jpg');
new Products('dog-duck', 'img/dog-duck.jpg');
new Products('dragon', 'img/dragon.jpg');
new Products('pen', 'img/pen.jpg');
new Products('pet-sweep', 'img/pet-sweep.jpg');
new Products('scissors', 'img/scissors.jpg');
new Products('shark', 'img/shark.jpg');
new Products('sweep', 'img/sweep.jpg');
new Products('tauntaun', 'img/tauntaun.jpg');
new Products('unicorn', 'img/unicorn.jpg');
new Products('usb', 'img/usb.jpg');
new Products('water-can', 'img/water-can.jpg');
new Products('wine-glass', 'img/wine-glass.jpg');
console.log(Products, allProducts);
