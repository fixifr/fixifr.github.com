let [seconds, minutes, hours] = [0, 0, 0];
let stopwatchDisplay = document.getElementById("stopwatchDisplay");
let startButton = document.getElementById("startStopwatch");
let stopButton = document.getElementById("stopStopwatch");
let resetButton = document.getElementById("resetStopwatch");
let timer = null;

function updateDisplay() {
  let h = hours.toString().padStart(2, "0");
  let m = minutes.toString().padStart(2, "0");
  let s = seconds.toString().padStart(2, "0");
  stopwatchDisplay.textContent = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function startStopwatch() {
  if (timer !== null) return;
  startButton.disabled = true;
  resetButton.disabled = true;
  stopButton.disabled = false;
  timer = setInterval(stopwatch, 1000);
}

function stopStopwatch() {
  clearInterval(timer);
  stopButton.disabled = true;
  resetButton.disabled = false;
  startButton.disabled = false;
  timer = null;
}

function resetStopwatch() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  updateDisplay();
  timer = null;
}

updateDisplay();

window.startStopwatch = startStopwatch;
window.stopStopwatch = stopStopwatch;
window.resetStopwatch = resetStopwatch;