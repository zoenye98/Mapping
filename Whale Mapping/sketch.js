// https://mappa.js.org/docs/getting-started.html


// Other possible interesting videos:
// Subscribers data: https://www.youtube.com/watch?v=Ae73YY_GAU8&feature=youtu.be
// Earthquake Data: https://www.youtube.com/watch?v=ZiYdOwOrGyc&t=1083s

// For integrating images: https://www.youtube.com/watch?v=FVYGyaxG4To


let myMap;
let canvas;
const mappa = new Mappa('Leaflet');

let options = {
  lat: 0,
  lng: 0,
  zoom: 2,
  style: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
}


function preload() {
  // With this code, you will need to convert your GPX file to CSV
  // Google search online converters and select one to test
  firstPath = loadTable('Whale 1994.csv', 'csv', 'header');
  secondPath = loadTable('Whale 1995.csv', 'csv', 'header');
  thirdPath = loadTable('Whale 1998.csv', 'csv', 'header');
  fourthPath = loadTable('Whale 1999.csv', 'csv', 'header');
  fifthPath = loadTable('Whale 2000.csv', 'csv', 'header');
  sixthPath = loadTable('Whale 2001.csv', 'csv', 'header');
  seventhPath = loadTable('Whale 2002.csv', 'csv', 'header');
  eighthPath = loadTable('Whale 2004.csv', 'csv', 'header');
  ninthPath = loadTable('Whale 2005.csv', 'csv', 'header');
  tenthPath = loadTable('Whale 2006.csv', 'csv', 'header');
  eleventhPath = loadTable('Whale 2007.csv', 'csv', 'header');
twelfthPath = loadTable('Whale 2008.csv', 'csv', 'header');
thirteenthPath = loadTable('Whale1993.csv', 'csv', 'header');

  //secondPath = loadTable('track_points-02.csv', 'csv', 'header');
}


function setup() {
  canvas = createCanvas(800, 800);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  myMap.onChange(clear);

  // myMap.onChange(drawPath(firstPath));
  // myMap.onChange(drawPath(secondPath));
  myMap.onChange(drawPath1.bind(null, firstPath));
  myMap.onChange(drawPath2.bind(null, secondPath));
  myMap.onChange(drawPath3.bind(null, thirdPath));
  myMap.onChange(drawPath4.bind(null, fourthPath));
  myMap.onChange(drawPath5.bind(null, fifthPath));
  myMap.onChange(drawPath6.bind(null, sixthPath));
  myMap.onChange(drawPath7.bind(null, seventhPath));
  myMap.onChange(drawPath8.bind(null, eighthPath));
  myMap.onChange(drawPath9.bind(null, ninthPath));
  myMap.onChange(drawPath10.bind(null, tenthPath));
  myMap.onChange(drawPath11.bind(null, eleventhPath));
  myMap.onChange(drawPath12.bind(null, twelfthPath));
  myMap.onChange(drawPath13.bind(null, thirteenthPath));

}


function draw() {
}


function drawPath1(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclat'));
    const longitude = Number(path.getString(i, 'reclon'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      stroke(224,182,177);
      noFill();
      ellipse(pos.x, pos.y, 10, 10)

      stroke(224, 182, 177);
      strokeWeight(2);
      line(pos.x, pos.y, pos.x, pos.y);
    }
  }
}
function drawPath2(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclat'));
    const longitude = Number(path.getString(i, 'reclon'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      stroke('red');
      noFill();
      ellipse(pos.x, pos.y, 10, 10)

      stroke(224, 182, 177);
      strokeWeight(2);
      line(pos.x, pos.y, pos.x, pos.y);
    }
  }
}
function drawPath3(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclat'));
    const longitude = Number(path.getString(i, 'reclon'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      stroke('blue');
      noFill();
      ellipse(pos.x, pos.y, 10, 10)

      stroke(224, 182, 177);
      strokeWeight(2);
      line(pos.x, pos.y, pos.x, pos.y);
    }
  }
}
function drawPath4(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclat'));
    const longitude = Number(path.getString(i, 'reclon'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      stroke('green');
      noFill();
      ellipse(pos.x, pos.y, 10, 10)

      stroke(224, 182, 177);
      strokeWeight(2);
      line(pos.x, pos.y, pos.x, pos.y);
    }
  }
}
function drawPath5(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclat'));
    const longitude = Number(path.getString(i, 'reclon'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      stroke(255);
      noFill();
      ellipse(pos.x, pos.y, 10, 10)

      stroke(224, 182, 177);
      strokeWeight(2);
      line(pos.x, pos.y, pos.x, pos.y);
    }
  }
}
function drawPath6(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclat'));
    const longitude = Number(path.getString(i, 'reclon'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      stroke('orange');
      noFill();
      ellipse(pos.x, pos.y, 10, 10)

      stroke(224, 182, 177);
      strokeWeight(2);
      line(pos.x, pos.y, pos.x, pos.y);
    }
  }
}
function drawPath7(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclat'));
    const longitude = Number(path.getString(i, 'reclon'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      stroke('yellow');
      noFill();
      ellipse(pos.x, pos.y, 10, 10)

      stroke(224, 182, 177);
      strokeWeight(2);
      line(pos.x, pos.y, pos.x, pos.y);
    }
  }
}
function drawPath8(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclat'));
    const longitude = Number(path.getString(i, 'reclon'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      stroke(100,2,4);
      noFill();
      ellipse(pos.x, pos.y, 10, 10)

      stroke(224, 182, 177);
      strokeWeight(2);
      line(pos.x, pos.y, pos.x, pos.y);
    }
  }
}
function drawPath9(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclat'));
    const longitude = Number(path.getString(i, 'reclon'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      stroke(235,152,189);
      noFill();
      ellipse(pos.x, pos.y, 10, 10)

      stroke(224, 182, 177);
      strokeWeight(2);
      line(pos.x, pos.y, pos.x, pos.y);
    }
  }
}
function drawPath10(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclat'));
    const longitude = Number(path.getString(i, 'reclon'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      stroke(0);
      noFill();
      ellipse(pos.x, pos.y, 10, 10)

      stroke(224, 182, 177);
      strokeWeight(2);
      line(pos.x, pos.y, pos.x, pos.y);
    }
  }
}
function drawPath11(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclat'));
    const longitude = Number(path.getString(i, 'reclon'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      stroke(161,212,166);
      noFill();
      ellipse(pos.x, pos.y, 10, 10)

      stroke(224, 182, 177);
      strokeWeight(2);
      line(pos.x, pos.y, pos.x, pos.y);
    }
  }
}
function drawPath12(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclat'));
    const longitude = Number(path.getString(i, 'reclon'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      stroke('cyan');
      noFill();
      ellipse(pos.x, pos.y, 10, 10)

      stroke(224, 182, 177);
      strokeWeight(2);
      line(pos.x, pos.y, pos.x, pos.y);
    }
  }
}
function drawPath13(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclat'));
    const longitude = Number(path.getString(i, 'reclon'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      stroke(46,103,255);
      noFill();
      ellipse(pos.x, pos.y, 10, 10)

      stroke(224, 182, 177);
      strokeWeight(2);
      line(pos.x, pos.y, pos.x, pos.y);
    }
  }
}
