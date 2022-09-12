// <!-- Melaku G.Denbel -->
// <!--WAP assignment -->

window.onload = () => {
  "use strict";
  startOnWindowLoad();
};

function startOnWindowLoad() {
  "use strict";

  let animationTimer;
  let frameSpeed = 250; // default speed
  let currentFrame = 0;

  const startBtn = document.getElementById("start");
  const stopBtn = document.getElementById("stop");
  const turboBtn = document.getElementById("turbo");
  const textArea = document.getElementById("text-area");
  const animationBtn = document.getElementById("animation");
  const fontsizeBtn = document.getElementById("fontsize");

  textArea.style.fontSize = "medium";

  animationBtn.addEventListener("change", setAnimationType);
  startBtn.addEventListener("click", startAnimation);
  stopBtn.addEventListener("click", stopAnimation);
  turboBtn.addEventListener("change", operateTurbo);
  fontsizeBtn.addEventListener("change", setTextSize);

  let animationType = animationBtn.value; // to change the default Blank value
  function setAnimationType(typeofAnimation) {
    textArea.value = ANIMATIONS[typeofAnimation.target.value];
    animationType = typeofAnimation.target.value;
  }

  function stopAnimation() {
    clearInterval(animationTimer);
    animationTimer = undefined;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    animationBtn.disabled = false;
    animationBtn[0].selected = true; 
    fontsizeBtn[2].selected = true; 
  }

  function startAnimation() {
    animationTimer = setInterval(animationFunction, `${frameSpeed}`);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    animationBtn.disabled = true; 
  }

  function animationFunction() {
    
    if (animationType) {
      let animationArr = ANIMATIONS[`${animationType}`].split("=====\n");
      const animationFrameCount = animationArr.length;
      textArea.value = animationArr[currentFrame];
      currentFrame =
        currentFrame == animationFrameCount - 1 ? 0 : ++currentFrame;
    }
  }
 
  function operateTurbo() {
    frameSpeed = turboBtn.checked ? 50 : 250; // turbo speed is 50 ms
    if (animationTimer) {
      clearInterval(animationTimer);
      animationTimer = setInterval(animationFunction, `${frameSpeed}`);
    }
  }

  function setTextSize(e) {
    textArea.style.fontSize = `${e.target.value}`;
  }
}
