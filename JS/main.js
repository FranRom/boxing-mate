  var canvas = document.getElementById('ring');
  var ctx = canvas.getContext('2d');
  var myGameArea = new GameArea('rgba(0, 0, 0, 0)');
  var player = new Player(50, 300, 25, myGameArea.ctx);

  myGameArea.draw();
  player.draw();

//Clean the canvas and draw canvas and player again
function updateGameArea() {
 requestAnimationFrame(updateGameArea);
    //UP
    if (player.keys[38]) {
        player.moveUp();
    }
    //DOWN
    if (player.keys[40]) {
        player.moveDown();
    }
    //RIGHT
    if (player.keys[39]) {
        player.moveRight();
    }
    //LEFT
    if (player.keys[37]) {
        player.moveLeft();
    }
    //LEFT PUNCH
    if (player.keys[80]) {
        player.punchLeft();
    }
    //RIGHT PUNCH
    if (player.keys[79]) {
        player.punchRight();
    }


    ctx.clearRect(0, 0, 690, 690);
    myGameArea.draw();
    player.updatePosition();
    player.draw();
};

document.body.addEventListener("keydown", function (e) {
  player.keys[e.keyCode] = true;

});
document.body.addEventListener("keyup", function (e) {
  player.keys[e.keyCode] = false;
});

updateGameArea();
