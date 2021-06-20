let rightKey = false;
let leftKey = false;
let jumpKey;
let jumpKeyDown;

document.addEventListener('keydown', onKeyDown, false);
document.addEventListener('keyup', onKeyUp, false);

function onKeyDown(e) {
  if (!rightKey) rightKey = (e.code === 'KeyD');
  if (!leftKey) leftKey = (e.code === 'KeyA');
  if (!jumpKey) {
    jumpKey = (e.code === 'Space');
    jumpKeyDown = jumpKey;
  }
}

function onKeyUp(e) {
  if (rightKey) rightKey = !(e.code === 'KeyD');
  if (leftKey) leftKey = !(e.code === 'KeyA');
  if (jumpKey) jumpKey = !(e.code === 'Space');
}

function resetKeyDown() {
  jumpKeyDown = false;
}
