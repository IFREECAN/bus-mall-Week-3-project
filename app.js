
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
new Products('chair', 'img/chair.jpg');
new Products('cthulhu', 'img/cthulu.jpg');
new Products('dog-duck', 'img/dog-duck.jpg');
new Products('dragon', 'img/dragon.jpg');
new Products('pen', 'img/pen.jpg');
new Products('pet-sweep', 'img/pet-sweep.jpg');
new Products('scissors', 'img/scissors.jpg');
new Products('shark', 'img/shark.jpg');
new Products('sweep', 'img/sweep.png');
new Products('tauntaun', 'img/tauntaun.jpg');
new Products('unicorn', 'img/unicorn.jpg');
new Products('usb', 'img/usb.gif');
new Products('water-can', 'img/water-can.jpg');
new Products('wine-glass', 'img/wine-glass.jpg');
console.log('Products', Products);

//****************************************************
//create function to generate 3-random calcimageclicks
//****************************************************
//make random #
function getRandom(min, max){
  return Math.floor(Math.random() * (max - min) + min);
};
//grab where each image is located
var num = getRandom (0, 20);
var banana = document.getElementById('banana');
var pen = document.getElementById('pen');
var bathroom = document.getElementById('bathroom');

var randomProducts = Products.allProducts[num];

//use while loop to make sure the same image does not show at the same time.... is not 2-of-the-3

//at 7:43PM can I creat a global variable for all images and setup my while-loop to make say while an image is "True" get another image?
var allImages = ['bag','bananas', 'bathroom', 'boots', 'breakfast',
'bubblegum', 'chair', 'cthulu', 'dragon', 'pen', 'pet-sweep','scissors',
'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];



function imagesChanger(){
//Products.allProducts[getRandom()]; //get random# and this #-value will be the value of the images' position.
  banana.setAttribute('src', Products.allProducts[getRandom(0,20)].filepath); //identify banana's filepath, and replace banana with a newer product based on the random # denerated.
  pen.setAttribute('src', Products.allProducts[getRandom(0,20)].filepath);
  bathroom.setAttribute('src', Products.allProducts[getRandom(0,20)].filepath);
};

imagesChanger(); //image will load when the page opens

//add locations.add event lister (add type of action i.e click, add action i.e. function)
banana.addEventListener('click', imagesChanger);
pen.addEventListener('click', imagesChanger);
bathroom.addEventListener('click', imagesChanger);
