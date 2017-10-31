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
  this.rpunch = 0;
  this.lpunch = 0;
  this.keys = {};
};

Player.prototype.draw = function () {

  var faceImg = new Image();
  faceImg.src = './images/Face200.png';
  ctx.drawImage(faceImg, this.x, this.y, 75, 75);

  var punchLeftImg = new Image();
  punchLeftImg.src = './images/Fist100.png';
  ctx.drawImage(punchLeftImg, this.x + this.rpunch, (this.y - 60), 75, 57);

  var punchRightImg = new Image();
  punchRightImg.src = './images/Fist100.png';
  ctx.drawImage(punchRightImg, this.x + this.lpunch, (this.y + 75), 75, 57);
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
//LIMITS  RING
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

//Punch Functions
Player.prototype.punchLeft = function () {
  this.rpunch = 100;
  var that = this;
  setTimeout(function () {
    that.rpunch = 0;
  }, 200);
};

Player.prototype.punchRight = function () {
  this.lpunch = 100;
  var that = this;
  setTimeout(function () {
    that.lpunch = 0;
  }, 200);
};

//Point score function
Player.prototype.scorePoint = function () {

};

//Winner
Player.prototype._checkWinner = function () {

};
