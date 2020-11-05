// https://mappa.js.org/docs/getting-started.html


// Other possible interesting videos:
// Subscribers data: https://www.youtube.com/watch?v=Ae73YY_GAU8&feature=youtu.be
// Earthquake Data: https://www.youtube.com/watch?v=ZiYdOwOrGyc&t=1083s

// For integrating images: https://www.youtube.com/watch?v=FVYGyaxG4To


let myMap;
let canvas;
const mappa = new Mappa('Leaflet');

let options = {
  lat: 42.8759,
  lng: -78.8473,
  zoom: 12,
  style: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
}


function preload() {
  // With this code, you will need to convert your GPX file to CSV
  // Google search online converters and select one to test
  firstPath = loadTable('zoe.csv', 'csv', 'header');
  //secondPath = loadTable('track_points-02.csv', 'csv', 'header');

  // Open Data Buffalo provides locations of fire hydrants
  // https://data.buffalony.gov/Public-Safety/Fire-Hydrants/jxqq-q5cq
  hydrantLocations = loadTable('Trees_data.csv', 'csv', 'header');
}


function setup() {
  canvas = createCanvas(800, 800);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  myMap.onChange(clear);

  myMap.onChange(drawPath.bind(null, firstPath));
  //myMap.onChange(drawPath.bind(null, secondPath));

  // Create a new function of drawing the hydrants that differs from the drawPath
  myMap.onChange(drawHydrant.bind(null, hydrantLocations));
}


function draw() {
}


function drawPath(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclat'));
    const longitude = Number(path.getString(i, 'reclon'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      noStroke();
      fill(20, 255, 255, 20);
      ellipse(pos.x, pos.y, 5, 5);

      stroke('blue');
      strokeWeight(2);
      line(pos.x, pos.y, pos.x, pos.y);
    }
  }
}

function drawHydrant(path) {
  // for (let i = 0; i < 5; i++) { // Note, when  parsing through data, it helps to isolate a few lines before loading the entire dataset
  for (let i = 0; i < path.getRowCount() - 1; i++) {

    // Accessing the column with the header 'the_geom'
    // You can also open the csv file to see what the different headers are
    const hydrantLatLng = path.getString(i, 'the_geom');
    // console.log(hydrantLng); // Tip: sometimes it is helpful to see how your data is written
    // console.log(typeof hydrantLatLng); // typeof reveals how the computer understands hydrantLatLng. In this case, it is a string.


    // The data comes in as a string.
    // A string is a data primitive.
    // p5.js info on strings: https://p5js.org/reference/#/p5/string
    // For a more expansive list in handling strings in JS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

    // I am splitting up the string to try and access the number value. First, I split with a space which is written as ' '.
    var segments = hydrantLatLng.split(' ');
    // console.log(segments) // You will see that the segments will be returned as an array.
    // console.log(segments[1].replace('(', '')) // You can access the array to get the longitude.
    // console.log(segments[2].replace(')', '')) // You can access the array to get the latitude.

    // When you console.log the typeof, you can still see the computer reads this as a STRING and not a NUMERICAL VALUE.
    // console.log(typeof segments[1]);
    // console.log(typeof segments[2]);


    // There are 2 operations in the following:
    // 1. I am getting rid of the paranethesis in each by replacing the symbol with nothing.
    // 2. I am turning the resultant STRING into a NUMBER. This is a JavaScript method: https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/
    // It may be helpful to read up on NaN or 'Not a Number'
    const hydrantLng = Number(segments[1].replace('(', ''));
    const hydrantLat = Number(segments[2].replace(')', ''));


    // Convert the hydrantLat and hydrantLng into an X and Y coordinate on the screen.
    if (myMap.map.getBounds().contains({lat: hydrantLat, lng: hydrantLng})) {
      const pos = myMap.latLngToPixel(hydrantLat, hydrantLng);
      // Control and design the graphics here.
      stroke(255);
      strokeWeight(0.25);
      fill(20, 255, 255, 20);
      ellipse(pos.x, pos.y, 5, 5);
    }
  }
}
