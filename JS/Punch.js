// //******************************************************************
// // Punch > Construct function
// //******************************************************************
//
function Punch(image,x, y) {
  this.x = x;
  this.y = y ;
  this.image = image;
  this.pressed = false;
};

Punch.prototype.draw = function(x, height){
  this.x = x;
  this.y = height;
  var punchImg = new Image();
  punchImg.src = this.image;
  if (this.pressed){
    this.x += 75;
    this.pressed = false;
    setTimeout(function() {
      this.x -= 75;
    }, 200);
  }
  ctx.drawImage(punchImg, this.x, this.y, 50, 38);
};

Punch.prototype.hit = function() {
  this.pressed =true;
  };
