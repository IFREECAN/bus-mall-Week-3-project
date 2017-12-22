
'use strict';

var imagesObjects = [];
var globalcounter = 0;

var shownImages = [frtNum, secNum, thrNum];

var nextImages = [],

//I am declaring these as global variable first and with reassign them later
var frtNum = 0;
var secNum = 0;
var thrNum = 0;


var previousImgs1 = 0;
var previousImgs2 = 0;
var previousImgs3 = 0;


//at 7:43PM can I creat a global variable for all images and setup my while-loop to make say while an image is "True" get another image?
// var allImages = ['bag.jpg','bananas.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg',
// 'bubblegum.jpg', 'chair.jpg', 'cthulu.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg','scissors.jpg',
// 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif.jpg', 'water-can.jpg', 'wine-glass.jpg'];

//Goat.allGoats = [];....//from class
Products.allProducts = [];

//*************************************
// CREATE THE CONSTRUCTOR function
//*************************************
function Products(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.calcimageclicks = 0;
  this.shown = 0; //this is at the very start when no image are shown yet
  imagesObjects.push(this); //this places/pushes each imgae into the "imagesObjects" array.
}

//********************************************
//this is the___________with the agruments
//*******************************************
new Products('bag', 'img/bag.jpg');
new Products('banana', 'img/banana.jpg');
new Products('bathroom', 'img/bathroom.jpg');
new Products('boots', 'img/boots.jpg');
new Products('breakfast', 'img/breakfast.jpg');
new Products('bubblegum', 'img/bubblegum.jpg');
new Products('chair', 'img/chair.jpg');
new Products('cthulhu', 'img/cthulhu.jpg');
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
//create function to generate 3-random numbers
//****************************************************
//make random #
function getRandom(min, max){
  return Math.floor(Math.random() * (max - min) + min);
};
//grab where each image is located
var num = getRandom (0, 20);
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');

var randomProducts = imagesObjects[num];

//12.20 ---- one function that give me three-random numbers  / reassignment of global variables at the top.
function getThreeRandom (){
  frtNum = getRandom(0, 20);
  secNum = getRandom(0, 20);
  thrNum = getRandom(0, 20);

  //crate a rule so non of the images/numbers are the same
  while (secNum === frtNum){
    secNum = getRandom(0, 20);
  }
//the "if" fuction happens one-time and the "while" function happens untile the statement is "false"
  // if (thrNum === frtNum || thrNum === secNum){
  //   thrNum = getRandom(0, 20);
  // }
//the "while" function happens untile the statement is "false"
  while (thrNum === frtNum || thrNum === secNum){
    thrNum = getRandom(0, 20);
  }

};

function imagesChanger(){
//Products.allProducts[getRandom()]; //get random# and this #-value will be the value of the images' position.
  getThreeRandom(); //this function changes the 3-random#s before we use them in the current/"imagesChanger" funtion.
  img1.setAttribute('src',imagesObjects[frtNum].filepath); //...
  img2.setAttribute('src',imagesObjects[secNum].filepath);
  img3.setAttribute('src',imagesObjects[thrNum].filepath);
};
imagesChanger(); //image will load when the page

//add locations.add event lister (add type of action i.e click, add action i.e. function)
img1.addEventListener('click', imagesChanger);
img2.addEventListener('click', imagesChanger);
img3.addEventListener('click', imagesChanger);



//12.20.17 creat a function so that the next three images after a click is not any of the previouls three-images
//function previouImages(){}

//I want this function to run after the firt click on the page... and after every click there after....
// function comparedImages(){
// for (var i = 0; i < shownImages.length; i++){
//   if (shownImages[i] === nextImages[i]
//     getThreeRandom();
// }
// };
//
// //how to empty out current array.... I want this function to run after a click but before the next images load.
// function emptyarray (){
//   shownImages.length = 0;
// }




// using the while loop: if event 2===1 perform another evetn; if event 3===1 or event 3===1 perform a different event::

//********************************************************************************************************************************************
