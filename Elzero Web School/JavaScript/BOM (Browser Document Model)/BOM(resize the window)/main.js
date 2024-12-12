
// This will count the resizing windows each time


let resizeTimeoutId;

window.addEventListener("resize", () => {
  clearTimeout(resizeTimeoutId);
  resizeTimeoutId = setTimeout(() => {
    console.log("Windows resize completed");
  }, 500);
});
