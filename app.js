const themeButton = document.querySelector("#themeButton");
const pulseButton = document.querySelector("#pulseButton");
const themeLabel = document.querySelector("#themeLabel");
const clickCount = document.querySelector("#clickCount");

const PULSE_ANIMATION_DURATION_MS = 220;

let count = 0;

themeButton.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  themeLabel.textContent = isDark ? "深色模式" : "清爽模式";
});

pulseButton.addEventListener("click", () => {
  count += 1;
  clickCount.textContent = String(count);
  pulseButton.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.06)" },
      { transform: "scale(1)" }
    ],
    { duration: PULSE_ANIMATION_DURATION_MS, easing: "ease-out" }
  );
});
