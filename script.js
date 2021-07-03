// Author: Paul Araya

// Global UI Variables
//let canvasDiv;

// Global ML variables
//let featureExtractor;

function setup() {
  canvasDiv = createDiv();
  canvas = createCanvas(640, 480);
  canvas.parent(canvasDiv);
  textDiv = createDiv();
  textP = createP("Model Loading, Please wait...");
  textP.parent(textDiv);
  textP2 = createP("[Training data here]");
  textP2.parent(textDiv);
  // build Buttons
  buildButtons();
  // initialize Ups, Downs, Lefts, Rights
  ups = 0;
  down = 0;
  left = 0;
  right = 0;
  // load video
  video = createCapture(VIDEO, videoReady);
}

function draw() {

}

function buildButtons() {

}

function videoReady() {

}

function featureExtractorLoaded() {

}

function gotResults(error, results) {

}
