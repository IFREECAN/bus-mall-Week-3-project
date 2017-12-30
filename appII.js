'use strict';

//create an array of all images
var allImages = ['bag.jpg','bananas.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg',
'bubblegum.jpg', 'chair.jpg', 'cthulu.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg','scissors.jpg',
'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif.jpg', 'water-can.jpg', 'wine-glass.jpg'];

//create an empty array for the objects with data stored in them
var allPictureObjects = [];

var list = [];
if (localStorage.list) {
  list = JSON.purse(localStorage.list);
} else {
  list = [];
}
console.log(list);

//create a CONSTRUCTOR funtion
function imagesConstructor(filepath){
  this.name = filepath.split('.')[0];
  this.filepath = 'img/' + filepath;
  this.numClicks = 0;
  this.numShown = 0;
  allPicture.push(this);
}


//create a function for puducts arrays
var createPicturesArray = function() {
  for(var i = 0; i < allStuff.length; i++){
    new imagesConstructor(allStuff[i]);
  }
  console.log('allPictureObjects :: ', allPictureObjects);
};

//call imagesConstructor to create an array of all objects stored in "allPictureObjects array"
createPicturesArray();

//create global variables for image IDs.
var firstLocation = document.getElementById('firstLocation');
var secondLocation = document.getElementById('secondLocation');
var thirdLocation = document.getElementById('thirdLocation');
var ctx = dociment.getElementById ('chartOne', 'chartTwo').getContext('2d');

var randomOne, randomTwo, randomThree;

//show images on page (i.e. DOM)
var showImages = function(){
  //get random #s from 0-to-20 for firstLocation
  randomOne = Math.floor(Math.random() * allImages.length);
}
