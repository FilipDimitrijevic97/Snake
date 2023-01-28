/**
 * 
 * Explanation: It's a simple snake game. The snake is controlled by the arrow keys. 
 * The snake grows when it eats the food. The game ends when the snake hits the wall or itself.
 * @Author is @FilipDimitrijevic97
 * @Date 2023-01-27
 * 
 */

var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var snakeX = 250;
var snakeY = 250;
var snakeSize = 10;
var snakeSpeed = 10;
var snakeDirection = "right";
var foodX = Math.floor(Math.random() * 490);
var foodY = Math.floor(Math.random() * 490);
var foodSize = 10;
var snakeBody = [[snakeX, snakeY]];
// add score variable
var score = 0;
// add high score variable
var highScore = 0;

// Draw the snake and the food
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "green";
    for (var i = 0; i < snakeBody.length; i++) {
        ctx.fillRect(snakeBody[i][0], snakeBody[i][1], snakeSize, snakeSize);
    }
    ctx.fillStyle = "red";
    ctx.fillRect(foodX, foodY, foodSize, foodSize);

    // draw score
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 20);

    // draw game over text if the snake hit the wall or itself
    if (snakeX < 0 || snakeX > 490 || snakeY < 0 || snakeY > 490) {
        ctx.fillStyle = "black";
        ctx.font = "20px Arial";
        ctx.fillText("Game Over", 200, 200);
    }
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
    snakeBody.unshift([snakeX, snakeY]);
    snakeBody.pop();

    // Check if the snake hit the food
    if (snakeX >= foodX && snakeX < foodX + foodSize && snakeY >= foodY && snakeY < foodY + foodSize) {
        foodX = Math.floor(Math.random() * 490);
        foodY = Math.floor(Math.random() * 490);
        snakeBody.push([snakeX, snakeY]);
    }

    // Check if the snake hit the wall
    if (snakeX < 0 || snakeX > 490 || snakeY < 0 || snakeY > 490) {
        snakeX = 250;
        snakeY = 250;
        snakeBody = [[snakeX, snakeY]];
        // reset score
        score = 0;
    }

    // update score
    score = snakeBody.length - 1;

}

// Change the snake's direction based on the key pressed
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
