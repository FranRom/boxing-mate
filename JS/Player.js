// //******************************************************************
// // Player > Construct function
// //******************************************************************
function Player(x, y, speed, radius, ctx, color) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.radius = radius;
  this.Vx = 0;
  this.Vy = 0;
  this.friction = 0.9;
  this.ctx = ctx;
  this.color = color;
  this.keys = {};
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
