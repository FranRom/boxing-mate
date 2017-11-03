// //******************************************************************
// // Punch > Constractor Function
// //******************************************************************

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
      this.x -= this.dirffection;
    }, 900);
  };
  ctx.drawImage(punchImg, this.x, this.y, 50, 38);
};

Punch.prototype.hit = function(numPlayerPunch, faceWidth, oponentPlayer) {
  this.pressed = true;
  return this.checkHit(numPlayerPunch, faceWidth, oponentPlayer);
};

  //Punch in the face
Punch.prototype.checkHit = function(numPlayerPunch, faceWidth, oponentPlayer){
  if(numPlayerPunch === 1){
    if(this.x + 125  >= oponentPlayer.x &&
      this.y >= oponentPlayer.y &&
      this.y + 38 <= oponentPlayer.y + faceWidth){
      return true;
    }
  }
  if(numPlayerPunch === 2){
    if(this.x <= oponentPlayer.x + 125 &&
      this.y >= oponentPlayer.y &&
      this.y + 38 <= oponentPlayer.y + faceWidth){
      return true;
    }
  }
  return false;
  //
  // if(numPlayerPunch === 1){
  //   if(this.x + 125  >= oponentPlayer.x){
  //     return true;
  //   }
  // }
  // if(numPlayerPunch === 2){
  //   if(this.x <= oponentPlayer.x + 125){
  //     return true;
  //   }
  // }
  // return false;

  // if (!(this.x + this.faceWidth < oponentPlayer.x ||
  //       this.x > oponentPlayer.x + oponentPlayer.faceWidth  ||
  //       this.y + this.faceHeight < oponentPlayer.y ||
  //       this.y > oponentPlayer.y + oponentPlayer.faceHeight )) {
          //return true;
  //}
  //return false;
};
