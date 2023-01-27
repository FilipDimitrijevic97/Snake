/**
 * This is a simple snake game.
 */

// Initialize the game variables
var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var snakeX = 250;
var snakeY = 250;
var snakeSize = 10;
var snakeSpeed = 10;
var snakeDirection = "right";
var foodX = Math.floor(Math.random() * 490);
var foodY = Math.floor(Math.random() * 490);

// Draw the snake and the food
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "green";
    ctx.fillRect(snakeX, snakeY, snakeSize, snakeSize);
    ctx.fillStyle = "red";
    ctx.fillRect(foodX, foodY, snakeSize, snakeSize);
}

// Update the snake's position based on the direction
function update() {
    if (snakeDirection == "right") {
        snakeX += snakeSpeed;
    } else if (snakeDirection == "left") {
        snakeX -= snakeSpeed;
    } else if (snakeDirection == "up") {
        snakeY -= snakeSpeed;
    } else if (snakeDirection == "down") {
        snakeY += snakeSpeed;
    }

    // Check if the snake hit the food
    if (snakeX >= foodX && snakeX < foodX + snakeSize && snakeY >= foodY && snakeY < foodY + snakeSize) {
        foodX = Math.floor(Math.random() * 490);
        foodY = Math.floor(Math.random() * 490);
        snakeSize += 1;
    }

}


// Handle arrow key presses to change the snake's direction
document.onkeydown = function(event) {
    if (event.keyCode == 37 && snakeDirection != "right") {
        snakeDirection = "left";
    } else if (event.keyCode == 38 && snakeDirection != "down") {
        snakeDirection = "up";
    } else if (event.keyCode == 39 && snakeDirection != "left") {
        snakeDirection = "right";
    } else if (event.keyCode == 40 && snakeDirection != "up") {
        snakeDirection = "down";
    }
}

// Call the update and draw functions every 100 milliseconds
setInterval(update, 100);
setInterval(draw, 100);










