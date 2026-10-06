/*
   Description: Lesson 5 - Specific Input example
   Author: Mr. Kowalczewski
   Date of last edit: September 23, 2026
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
  background(255);

  // ----- key -----
  // If a key is being pressed AND the key is "r"
  // What about capital letters???
  if (keyIsPressed == true && key == 'r') {
    fill(255, 0, 0);
  }

  // If the last pressed key is "g"
  else if (key == 'g' || key == 'G') {
    fill(0, 255, 0);
  }

  // ----- keyCode -----
  else if (keyCode == ENTER) {
    fill(0, 0, 255);
  }

  else {
    fill(0);
  }

  ellipse(width / 2, height / 2, 200, 200);

  // ----- mouseButton -----
  if (mouseButton == LEFT) {
    rect(0, 0, 100, 100);
  }
}
