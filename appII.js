'use strict';

//create an array of all images
var allImages = ['bag.jpg','bananas.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg','bubblegum.jpg', 'chair.jpg', 'cthulu.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg','scissors.jpg','shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif.jpg', 'water-can.jpg', 'wine-glass.jpg'];

//create an empty array for the objects with data stored in them
var allPictureObjects = [];

var counter = 0;

var list = [];
if (localStorage.list) {
  list = JSON.purse(localStorage.list);
} else {
  list = [];

}
console.log(list);

//create a CONSTRUCTOR funtion
function ImagesConstructor(filepath){
  this.name = filepath.split('.')[0];
  this.filepath = 'img' + filepath;
  this.numClicks = 0;
  this.numShown = 0;
  allPicture.push(this);
}

//create a function for puducts arrays
var createPicturesArray = function() {
  for(var i = 0; i < allImages.length; i++){
    new ImagesConstructor(allImages[i]);
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
  //display firstLocation images
  firstLocation.src = allPictureObjects[firstLocation].filepath;
  // + firstLocation to numShown globalcounter in allPictureObjects array
  allPictureObjects[randomOne].numShown += 1;

  //reapeate above step but add logic for secondLocation not= firstLocation thirdLocation
  randomTwo = Math.floor(Math.random() * allImages.length);
  while (randomOne === randomTwo) {
    randomTwo = Math.floor(Math.random() * allImages.length);
  };

  secondLocation.src = allPictureObjects[randomTwo].filepath;
  allPictureObjects[randomTwo].numShown += 1;

  //reapeate above step but add logic for secondLocation not= firstLocation and secondLocation
  randomThree = Math.floor(Math.random() * allImages.length);
  //display secondLocation images & setup to not= firstLocation and thirdLocation
  while (randomOne === randomTwo || randomTwo === randomThree) {
    randomThree = Math.floor(Math.random() * allImages.length);
  }

  thirdLocation.src = allPictureObjects[randomThree].filepath;
  allPictureObjects[randomThree].numShown += 1;

  console.log([randomOne, randomTwo, randomThree]);
};

//call showImages function
showImages();

//var counter = 0;--- moved to top/ good location for global variables

//create event listeners and set agains function
firstLocation.addEventListener('click', function(){
  allPictureObjects[randomOne].numClicks += 1;
  counter += 1;
  if (counter >= 25) {
    //remove the imagesChanger
    save();
    document.getElementById('images').remove();
    //collect data
    collectData();
    console.log('numberOfTimesShown :: ', numberOfTimesShown);
    console.log('numberOfTimesClicked :: ', numberOfTimesClicked);
    // Show chart
    showMyChart();
    showMyCharttwo();
  }
  showImages();
});

secondLocation.addEventListener('click', function(){
  allPictureObjects[randomTwo].numClicks += 1;
  counter += 1;
  if (counter >= 25) {
    //remove the images
    save();
    document.getElementById('images').remove();
    //collect data
    collectData();
    console.log('numberOfTimesShown :: ', numberOfTimesShown);
    console.log('numberOfTimesClicked :: ', numberOfTimesClicked);
    // Show chart
    showMyChart();
    showMyCharttwo();
  }
  showImages();
});

thirdLocation.addEventListener('click', function(){
  allPictureObjects[randomThree].numClicks += 1;
  counter += 1;
  if (counter >= 25) {
    //remove the images
    save();
    document.getElementById('images').remove();
    //collect data
    collectData();
    console.log('numberOfTimesShown :: ', numberOfTimesShown);
    console.log('numberOfTimesClicked :: ', numberOfTimesClicked);
    // Show chart
    showMyChart();
    showMyCharttwo();
  }
  showImages();
});

var numberOfTimesShown = [];
var numberOfTimesClicked = [];

function numberOfTimesClickedOut(){
  return numberOfTimesClicked;
};
numberOfTimesClickedOut();

//*********************************************************************************//
var collectData = function() {
  for (var i = 0; i < allPictureObjects.length; i++) {
    numberOfTimesShown.push(allPictureObjects[i].numShown);
    numberOfTimesClicked.push(allPictureObjects[i].numClicks);
  };
};
//var dataStringified = JSON.stringify(numberOfTimesClicked);
// var myBarChart = new Chart(ctx, {
//     type: 'bar',
//     data: data,
//     options: options
// });

//var canvas = document.getElementById('chart1');
//var ctx = canvas.getContext('2d');
function showMyChart (){
  console.log('INSIDE CHART', numberOfTimesClicked);
  new Chart(ctx, {

    type: 'bar',
    data: {
      labels:['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'],
      datasets: [{
        label: ['Times Clicked'],
        data: numberOfTimesClicked,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'

        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1
      }]
    },
    maintainAspectRatio: true,
    options: {
      responsive: true,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
};

function showMyCharttwo (){
  console.log('INSIDE CHART', numberOfTimesShown);
  new Chart(ctx, {

    type: 'bar',
    data: {
      labels:['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'],
      datasets: [{
        label: ['Times Shown'],
        data: numberOfTimesShown,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1
      }]
    },
    maintainAspectRatio: false,
    options: {
      responsive: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
};

function save(){
  localStorage.list = JSON.stringify(allPictureObjects);
}
