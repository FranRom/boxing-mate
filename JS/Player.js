// //******************************************************************
// // Player > Construct function
// //******************************************************************

function Player(x, y, speed, ctx, images, facePositionX, direction) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.radius = 50; //depending of head size to control limits
  this.Vx = 0;
  this.Vy = 0;
  this.friction = 0.9;
  this.keys = {};
  this.images = images;
  this.score = 0;
  this.facePosition = facePositionX;
  this.faceWidth = 75;
  this.faceHeight = 75;
  this.rpunch = new Punch(this.images[1], this.x, this.y, direction);
  this.lpunch = new Punch(this.images[2], this.x, this.y, direction);
};


Player.prototype.draw = function () {

  var faceImg = new Image();
  faceImg.src = this.images[0];
  ctx.drawImage(faceImg, this.x + this.facePosition, this.y, this.faceWidth, this.faceHeight);
  this.lpunch.draw(this.x, this.y + 75);
  this.rpunch.draw(this.x, this.y - 40);

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


//Point score function
Player.prototype.scorePoint = function () {
this.score++;
};

//Winner
Player.prototype._checkWinner = function () {

};
