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
  secondPath = loadTable('yaliana.csv', 'csv', 'header');
  thirdPath = loadTable('Camilo1.csv', 'csv', 'header');
  fourthPath = loadTable('Camilo2.csv', 'csv', 'header');


  // Open Data Buffalo provides locations of fire hydrants
  // https://data.buffalony.gov/Public-Safety/Fire-Hydrants/jxqq-q5cq
  hydrantLocations = loadTable('Trees_data.csv', 'csv', 'header');
    crimeLocations = loadTable('crime2.csv', 'csv', 'header');
      trashLocations = loadTable('TrashOrdinance.csv', 'csv', 'header');
}


function setup() {
  canvas = createCanvas(800, 800);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  myMap.onChange(clear);

  myMap.onChange(drawPath.bind(null, firstPath));
  myMap.onChange(drawPath.bind(null, secondPath));
  myMap.onChange(drawPath.bind(null, thirdPath));
  myMap.onChange(drawPath.bind(null, fourthPath));

  // Create a new function of drawing the hydrants that differs from the drawPath
  myMap.onChange(drawHydrant.bind(null, hydrantLocations));
  myMap.onChange(drawCrime.bind(null, crimeLocations));
  myMap.onChange(drawTrash.bind(null, trashLocations));
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
      ellipse(pos.x, pos.y, 10, 10);
      stroke(255);
      strokeWeight(2);
      line(pos.x, pos.y, pos.x, pos.y);
    }
  }
}

function drawHydrant(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclat'));
    const longitude = Number(path.getString(i, 'reclon'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      noStroke();
      fill(181, 227, 245);
      ellipse(pos.x, pos.y, 5, 5);


      stroke(181, 227, 245);
      strokeWeight(1);
      line(pos.x, pos.y, pos.x, pos.y);
    }
  }
}


function drawCrime(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclat'));
    const longitude = Number(path.getString(i, 'reclon'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      noStroke();
      fill(242, 126, 124);
      ellipse(pos.x, pos.y, 5, 5);


      stroke(242, 126, 124);
      strokeWeight(1);
      line(pos.x, pos.y, pos.x, pos.y);
    }
  }
}

function drawTrash(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclat'));
    const longitude = Number(path.getString(i, 'reclon'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      noStroke();
      fill(204, 181, 245);
      ellipse(pos.x, pos.y, 5, 5);


      stroke(204, 181, 245);
      strokeWeight(1);
      line(pos.x, pos.y, pos.x, pos.y);
    }
  }
}
