setInterval(() => {
  updateDeltaTime();
  updateVelocity();
  updateMovement();
  updatePlayerVisualize();
  resetKeyDown();
  preloadImages();
}, 0);
