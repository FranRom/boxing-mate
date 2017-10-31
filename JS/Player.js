// //******************************************************************
// // Player > Construct function
// //******************************************************************
function Player(x, y, speed, ctx) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.radius = 50; 
  this.Vx = 0;
  this.Vy = 0;
  this.friction = 0.9;
  this.ctx = ctx;
  this.keys = {};
};

// Draw player
Player.prototype.draw = function () {

  var face = new Image();
  face.src = './images/Face200.png';
  ctx.drawImage(face, this.x, this.y, 100, 100);
  var punchLeft = new Image();
  punchLeft.src = './images/Fist100.png';
  ctx.drawImage(punchLeft, this.x, (this.y - 60), 75, 57);
  var punchRight = new Image();
  punchRight.src = './images/Fist100.png';
  ctx.drawImage(punchRight, this.x, (this.y + 95), 75, 57);
};

//Moving functions
Player.prototype.moveLeft = function () {
  if (this.Vx > -this.speed) {
      this.Vx--;
  }
  console.log("moveLeft was called");
};

Player.prototype.moveRight = function () {
  if (this.Vx < this.speed) {
      this.Vx++;
  }
  console.log("moveRight was called");
};

Player.prototype.moveUp = function () {
    if (this.Vy > -this.speed) {
        this.Vy--;
  }
  console.log("moveUp was called");
};

Player.prototype.moveDown = function () {
    if (this.Vy < this.speed) {
        this.Vy++;
    }
  console.log("moveDown was called");
};

Player.prototype.updatePosition = function() {
  this.Vy *= this.friction;
  this.y  += this.Vy;
  this.Vx *= this.friction;
  this.x  += this.Vx;

  if(this.y + this.radius <= 50) {
     this.y = 25 + this.radius;
  };
  if(this.y + this.radius > 600) {
     this.y = 575 - this.radius;
   };
  if(this.x + this.radius <= 50) {
     this.x = 25 + this.radius;
  }
  if(this.x + this.radius > 600) {
     this.x = 575 - this.radius;
  }


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
