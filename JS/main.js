



$(document).ready(function() {

//Start Canvas

  var canvas = document.getElementById('ring');
  var ctx = canvas.getContext('2d');
  var myGameArea = new GameArea('#307351');
  var player = new Player(100, 100, 30, myGameArea.ctx, "#ffffff");

  myGameArea.draw();
  player.draw();

//Clean the canvas and draw canvas and player again
function updateGameArea() {

 ctx.clearRect(0, 0, 800, 600);
 myGameArea.draw();
 player.draw();
};


$(document).keydown (function(e) {
  switch (e.which) {
    case 38:
     player.moveUp();
     console.log('up', player);
     break;

    case 40:
     player.moveDown();
    console.log('down', player);
     break;

    case 37:
     player.moveLeft();
     console.log('left', player);
     break;

    case 39:
     player.moveRight();
    console.log('right', player);
     break;
  }
  updateGameArea();
});
});
