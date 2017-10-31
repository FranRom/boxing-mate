// //******************************************************************
// // Player > Construct function
// //******************************************************************
function Player(image, x, y, speed, ctx) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.radius = 50; //poner aquí el tamano de imagen /2 ?
  this.Vx = 0;
  this.Vy = 0;
  this.friction = 0.9;
  this.ctx = ctx;
//  this.color = color; con imagen no hace falta
  this.keys = {};
};

// Draw player
Player.prototype.draw = function () {

  var image = new Image();
  image.src = './images/Face-200.png';
  ctx.drawImage(image, this.x, this.y, 100, 100);
  image.src = './images/Fist100.png';
  ctx.drawImage(image, this.x, (this.y - 60), 75, 57);
  image.src = './images/Fist100.png';
  ctx.drawImage(image, this.x, (this.y + 95), 75, 57);

  // 3 imagenes bien posicionadas(hardcoded) sin moverse
  // var image = new Image();
  // image.src = './images/Face-200.png';
  // ctx.drawImage(image, 50, 300, 100, 100);
  // image.src = './images/Fist100.png';
  // ctx.drawImage(image, 60, 240, 75, 57);
  // image.src = './images/Fist100.png';
  // ctx.drawImage(image, 60, 395, 75, 57);

  //Circulo inicial funcionando
  // this.ctx.beginPath();
  // this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  // this.ctx.strokeStyle = this.color;
  // this.ctx.stroke();
  // this.ctx.fillStyle = 'white';
  // this.ctx.fill();
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
