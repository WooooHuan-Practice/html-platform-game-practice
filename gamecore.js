let gameViewResolution = { x: 640, y: 480 }
let playerSize = { x: 32, y: 32 }
let groundRefHeight = 64;
let groundHeight = gameViewResolution.y - (playerSize.y + groundRefHeight);
let player = document.getElementById("player");
let sprites = [
  document.getElementById("player-idle"),
  document.getElementById("player-move-1"),
  document.getElementById("player-move-2"),
  document.getElementById("player-move-3"),
  document.getElementById("player-jump")
]

let playerPos = { 
    x: (gameViewResolution.x - playerSize.x) * 0.5, 
    y: groundHeight 
}

let lastFrameTime = Date.now();
let currentFrameTime = Date.now();
let deltaTime = 0;

function updateDeltaTime() {
  lastFrameTime = currentFrameTime;
  currentFrameTime = Date.now();
  deltaTime = (currentFrameTime - lastFrameTime) * 0.001;
}
