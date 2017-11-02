// //******************************************************************
// // Punch > Construct function
// //******************************************************************
//
function Punch(image,x, y, direction) {
  this.x = x;
  this.y = y;
  this.direction = direction;
  this.image = image;
  this.pressed = false;

};

Punch.prototype.draw = function(x, height){
  this.x = x;
  this.y = height;
  var punchImg = new Image();
  punchImg.src = this.image;
  if (this.pressed){
    this.x += this.direction;
    this.pressed = false;
    setTimeout(function() {
      this.x -= this.direction;
    }, 200);
  };
  ctx.drawImage(punchImg, this.x, this.y, 50, 38);
};

Punch.prototype.hit = function() {
  this.pressed =true;
  };
