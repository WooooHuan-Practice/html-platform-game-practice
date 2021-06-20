let velocity = { x: 0, y: 0 }
let grounded = true;
let direction = 0;
let facingDirection = 1;

function updateVelocity() {

  let gravity = 1440;
  let jumpForce = -640;

  let maxSpeed = 270;
  let accelerate = 1080;

  function update() {
    let direction = getDirection();
    velocity.x = getVelocityX(direction);
    velocity.y = getVelocityY();
    updateFacingDirection();
  }

  function getDirection() {
    direction = 0;
    if (rightKey) direction += 1;
    if (leftKey) direction -= 1;
    return direction;
  }

  function getVelocityX(direction) {
    let x = velocity.x;
    let targetV = direction * maxSpeed;
    let acc = accelerate * deltaTime;

    if (velocity.x > targetV) {
      x = Math.max(targetV, x - acc);
    }
    if (velocity.x < targetV) {
      x = Math.min(targetV, x + acc);
    }

    return x;
  }

  function getVelocityY() {
    grounded = (playerPos.y === groundHeight);
    let y = velocity.y;
    let acc = gravity * deltaTime;
    y += acc;

    if (grounded) velocity.y = 0;
    if (jumpKeyDown && grounded) y = jumpForce;

    return y;
  }

  function updateFacingDirection() {
    if (direction === 1) facingDirection = 1;
    if (direction === -1) facingDirection = -1;
  }

  update();
}

function updateMovement() {

  function update() {
    updateMovementX();
    updateMovementY();
  }

  function updateMovementX() {
    let refWidth = gameViewResolution.x + playerSize.x;
    let x = (playerPos.x + playerSize.x + (velocity.x * deltaTime)) % refWidth;
    if (x < 0) x = refWidth - x;
    x -= playerSize.x;
    playerPos.x = x;
  }

  function updateMovementY() {
    playerPos.y += velocity.y * deltaTime;
    playerPos.y = Math.max(0, playerPos.y);
    playerPos.y = Math.min(groundHeight, playerPos.y);
  }

  update();
}