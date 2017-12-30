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

};
