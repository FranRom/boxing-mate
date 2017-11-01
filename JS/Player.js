// //******************************************************************
// // Player > Construct function
// //******************************************************************
function Player(x, y, speed, ctx, images,facePositionX) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.radius = 50; //depending of head size to control limits
  this.Vx = 0;
  this.Vy = 0;
  this.friction = 0.9;
  this.rpunch = 0;
  this.lpunch = 0;
  this.keys = {};
  this.images = images;
  this.score = 0;
  this.facePosition = facePositionX;
  this.faceWidth = 75;
  this.faceHeight = 75;

};
Player.prototype.draw = function () {

  var punchLeftImg = new Image();
  punchLeftImg.src = this.images[1];
  ctx.drawImage(punchLeftImg, this.x + this.lpunch, (this.y - 40), 50, 38);

  var punchRightImg = new Image();
  punchRightImg.src = this.images[2];
  ctx.drawImage(punchRightImg, this.x + this.rpunch, (this.y + 75), 50, 38);

  var faceImg = new Image();
  faceImg.src = this.images[0];
  ctx.drawImage(faceImg, this.x + this.facePosition, this.y, this.faceWidth, this.faceHeight);
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
//LIMITS  RING with bounce effect
  if(this.y + this.radius <= 107) {
     this.y = 30 + this.radius;
     this.Vy = 5;
  };
  if(this.y + this.radius > 520) {
     this.y = 460 - this.radius;
     this.Vy = 5;
   };
  if(this.x + this.radius <= 50) {
     this.x = this.x + this.radius;
     this.Vx = 5;
  }
  if(this.x + this.radius > 590) {
     this.x = 500 - this.radius;
     this.Vx = 5;
  }
};

//Punch Functions
Player.prototype.punchLeft = function (player) {
  if(player == player1) this.rpunch = 75;
  else this.rpunch = -75;
  var that = this;
  setTimeout(function () {
    that.rpunch = 0;
  }, 200);
};

Player.prototype.punchRight = function (player) {
  if(player == player1) this.lpunch = 75;
  else this.lpunch = -75;
  var that = this;
  setTimeout(function () {
    that.lpunch = 0;
  }, 200);
};

//Point score function
Player.prototype.scorePoint = function () {
this.score++;
};

//Winner
Player.prototype._checkWinner = function () {

};
