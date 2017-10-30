  var canvas = document.getElementById('ring');
  var ctx = canvas.getContext('2d');
  //we can pass a "color" argument to canvas color here: now transparent
  var myGameArea = new GameArea('rgba(0, 0, 0, 0)');
  //player creation
  var player = new Player(100, 100, 25, 30, myGameArea.ctx, "white");
  myGameArea.draw();
  player.draw();

//Clean the canvas and draw canvas and player again
function updateGameArea() {
 ctx.clearRect(0, 0, 690, 690);
 myGameArea.draw();
 player.draw();
};

// Keyboard detection
// $(document).keydown (function(e) {
//  switch (e.which) {
//    case 38:
//     player.moveUp();
//     console.log('up', player);
//     break;
//
//    case 40:
//     player.moveDown();
//    console.log('down', player);
//     break;
//
//    case 37:
//     player.moveLeft();
//     console.log('left', player);
//     break;
//
//    case 39:
//     player.moveRight();
//    console.log('right', player);
//     break;
//  }
//  updateGameArea();
// });

$(document).keydown (function(e) {
  if (e.keyCode == 39) {
    player.direction[0] = true;
  } else if (e.keyCode == 37) {
    player.direction[1] = true;
  } else if (e.keyCode == 38) {
    player.direction[2] = true;
  } else if (e.keyCode == 40) {
    player.direction[3] = true;
  }
  console.log(player.direction);
  player.updatePlayer();
  updateGameArea();

});

$(document).keyup (function(e) {
  if (e.keyCode == 39) {
    player.direction[0] = false;
  } else if (e.keyCode == 37) {
    player.direction[1] = false;
  } else if (e.keyCode == 38) {
    player.direction[2] = false;
  } else if (e.keyCode == 40) {
    player.direction[3] = false;
  }
});

Player.prototype.updatePlayer = function() {
  if (this.direction[2] == true && this.direction[0] == true) {
    this.moveUp();
    this.moveRight();
  } else if (this.direction[3] == true && this.direction[1] == true) {
    this.moveDown();
    player.moveLeft();
  } else if (this.direction[2] == true && this.direction[1] == true) {
    this.moveUp();
    this.moveLeft();
  } else if (this.direction[3] == true && this.direction[0] == true) {
    this.moveDown();
    this.moveRight();
  } else if (this.direction[2] == true) {
    player.moveUp();
  } else if (this.direction[3] == true) {
    player.moveDown();
  } else if (this.direction[0] == true) {
    player.moveRight();
  } else if (this.direction[1] == true) {
    player.moveLeft();
  }
  console.log("move function was called");
};

//Updating
