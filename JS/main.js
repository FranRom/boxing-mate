  var canvas = document.getElementById('ring');
  var ctx = canvas.getContext('2d');
  var myGameArea = new GameArea('rgba(0, 0, 0, 0)');
  var imagesPlayer1 =['./images/FacePlayer1.png', './images/GloveLeftOrangePlayer1.png', './images/GloveRightOrangePlayer1.png'];
  var imagesPlayer2 =['./images/FacePlayer2.png', './images/GloveRightGreenPlayer2.png', './images/GloveLeftGreenPlayer2.png'];
  var player1 = new Player(50, 270, 25, myGameArea.ctx,imagesPlayer1);
  var player2 = new Player(470, 270, 25, myGameArea.ctx,imagesPlayer2);
  myGameArea.draw();
  player1.draw();

//Clean the canvas and draw canvas and players again
function updateGameArea() {
 requestAnimationFrame(updateGameArea);
    //UP
    if (player1.keys[87]) player1.moveUp();
    if (player2.keys[38]) player2.moveUp();
    //DOWN
    if (player1.keys[83]) player1.moveDown();
    if (player2.keys[40]) player2.moveDown();
    //RIGHT
    if (player1.keys[68]) player1.moveRight();
    if (player2.keys[39]) player2.moveRight();
    //LEFT
    if (player1.keys[65]) player1.moveLeft();
    if (player2.keys[37]) player2.moveLeft();
    //LEFT PUNCH
    if (player1.keys[82]) player1.punchLeft(player1);
    if (player2.keys[79]) player2.punchLeft(player2);
    //RIGHT PUNCH
    if (player1.keys[84]) player1.punchRight(player1);
    if (player2.keys[80]) player2.punchRight(player2);

    ctx.clearRect(0, 0, 690, 690);
    myGameArea.draw();
    player1.updatePosition();
    player2.updatePosition();
    player1.draw();
    player2.draw();

};

function punchInTheFace() {
  if (player1.draw.punchLeftImg.x + this.rpunch + 50 <= player2.draw.faceImg.x) {
    console.log ("player 1 punched player2");
  };
};

function scorePlayer() {
//  if player1

}

document.body.addEventListener("keydown", function (e) {
  player1.keys[e.keyCode] = true;
  player2.keys[e.keyCode] = true;

});
document.body.addEventListener("keyup", function (e) {
  player1.keys[e.keyCode] = false;
  player2.keys[e.keyCode] = false;
});
punchInTheFace();
updateGameArea();
