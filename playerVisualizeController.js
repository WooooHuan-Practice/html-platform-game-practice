let idleImg = 'url("images/idle.png")';
let moveImgs = [
  'url("images/move_1.png")',
  'url("images/move_2.png")',
  'url("images/move_3.png")'
]
let jumpImg = 'url("images/jump.png")';

function updatePlayerVisualize() {

  function update() {
    hiddenSprites();
    showSprite();
    updatePlayerTransform();
  }

  function showSprite() {
    if (!grounded) {
      sprites[4].style.display = 'block';
      return;
    }
    if (Math.abs(velocity.x) < 0.1) {
      sprites[0].style.display = 'block';
      return;
    } else {
      let index = Math.abs(Math.round(playerPos.x * 0.1) % 3);
      sprites[index + 1].style.display = 'block';
    }
  }

  function hiddenSprites() {
    sprites.map(e => e.style.display = 'none');
  }

  function updatePlayerTransform() {
    let translate = `translate(${playerPos.x}px, ${playerPos.y}px)`;
    let scaleX = `scaleX(${facingDirection})`;
    player.style.transform = translate + scaleX;
  }

  update();
}
