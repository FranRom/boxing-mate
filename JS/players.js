// //******************************************************************
// // Players
// //******************************************************************


var player;


function Player(x, y, radius, ctx, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.ctx = ctx;
  this.color = color;

};

// Draw player
Player.prototype.draw = function () {

  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  this.ctx.strokeStyle = this.color;
  this.ctx.stroke();
  this.ctx.fillStyle = this.color;
  this.ctx.fill();
};

// Moving functions

Player.prototype.moveLeft = function () {
  if (this.x > this.radius){
    this.x -= 25;
  }
  console.log("Left was called");
};
//si cambio 800 por canvas.width no funciona, lo mismo con canvas.height
Player.prototype.moveRight = function () {
  if (this.x > 0 && this.x < 800 - this.radius){
    this.x += 25;
  }
  console.log("Right was called");
};

Player.prototype.moveUp = function () {
  if (this.y > this.radius){
    this.y -= 25;
  }
  console.log("Up was called");
};

Player.prototype.moveDown = function () {
  if (this.y > 0 && this.y < 600 - this.radius){
    this.y += 25;
  }
  console.log("Right was called");
};



//Punch Function
Player.prototype.punch = function () {

};

//Point score function
Player.prototype.scorePoint = function () {

};

//Winner
Player.prototype._checkWinner = function () {

};
