const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Replace with the URL of your sprite sheet
const spriteSheet = new Image();
spriteSheet.src = '../resources/spritesheet.jpg';

// Define variables for animation properties
let frameWidth = 83;
let frameHeight = 94;
let currentFrame = 0;
let animationSpeed = 100;
let spriteX = 0; // New variable for sprite's X position

// Function to draw the animation frame
function drawSprite() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before drawing

  // Calculate source coordinates for the current frame
  const sx = currentFrame * frameWidth;
  const sy = 0; // Assuming all frames are on the first row

  // Draw the current frame onto the canvas, considering spriteX
  ctx.drawImage(spriteSheet, sx, sy, frameWidth, frameHeight, spriteX, 0, frameWidth, frameHeight);
}

// Function to update animation frame and position
function updateAnimation() {
  currentFrame++;

  // Reset frame index if animation reaches the end
  if (currentFrame >= spriteSheet.width / frameWidth) {
    currentFrame = 0;
  }

  // Update spriteX for movement across X-axis
  spriteX += 10; // Adjust the value for desired speed (positive for right, negative for left)

  // Reset spriteX to starting position when it reaches the canvas edge
  if (spriteX + frameWidth > canvas.width) {
    spriteX = 0; // Reset to the left edge (adjust based on your starting position)
  }

  drawSprite();
}

// Load the sprite sheet image
spriteSheet.onload = function() {
  // Start animation loop after the image is loaded
  setInterval(updateAnimation, animationSpeed);
};

