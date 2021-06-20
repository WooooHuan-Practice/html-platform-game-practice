function updatePlayerVisualize() {

  let idleImg = 'url("images/idle.png")';
  let moveImgs = [
    'url("images/move_1.png")',
    'url("images/move_2.png")',
    'url("images/move_3.png")'
  ]
  let jumpImg = 'url("images/jump.png")';

  function update() {
    player.style.backgroundImage = getSprite();
    updatePlayerTransform();
  }

  function getSprite() {
    if (!grounded) return jumpImg;
    if (Math.abs(velocity.x) < 0.1) {
      return idleImg;
    } else {
      let index = Math.abs(Math.round(playerPos.x * 0.1) % 3);
      return moveImgs[index];
    }
  }

  function updatePlayerTransform() {
    let translate = `translate(${playerPos.x}px, ${playerPos.y}px)`;
    let scaleX = `scaleX(${facingDirection})`;
    player.style.transform = translate + scaleX;
  }

  update();
}
