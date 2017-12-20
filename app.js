
'use strict';

var images = [];
var globalcounter = 0;




//Goat.allGoats = [];....//from class
Products.allProducts = [];

//*************************************
// CREATE THE CONSTRUCTOR function
//*************************************
function Products(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.calcimageclicks = 0;
  this.shown = false; //this is at the very start when no image are shown yet
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

//****************************************************
//create function to generate 3-random calcimageclicks
//****************************************************

//make random #
function getRandom(min, max){
  return Math.random() * (max - min) + min;
};

//grab where each image is located
var banana = document.getElementById('banana');
var pen = document.getElementById('pen');
var bathroom = document.getElementById('bathroom');

function imagesChanger(){
//Products.allProducts[getRandom()]; //get random# and this #-value will be the value of the images' position.
  banana.src = Products.allProducts[getRandom()].filepath; //identify banana's filepath, and replace banana with a newer product based on the random # denerated.

};
//imagesChanger();

//add locations.add event lister (add type of action i.e click, add action i.e. function)
banana.addEventListener('click', imagesChanger);

testing testing
