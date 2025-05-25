let totalSeconds = 0;
let countdown = null;
const input = document.getElementById("timerInput");
const timerDisplay = document.getElementById("timerTime");
const startTimerBtn = document.getElementById("startTimer");
const stopTimerBtn = document.getElementById("stopTimer");
const resetTimerBtn = document.getElementById("resetTimer");
const timerSound = document.getElementById("timerSound");

function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");
  const mins = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
}

function parseTime(str) {
  const parts = str.split(":").map(Number);
  if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  } else if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  } else if (parts.length === 1) {
    return parts[0];
  } else {
    return NaN;
  }
}

function updateTimerDisplay() {
  timerDisplay.textContent = formatTime(totalSeconds);
}

function playAlarm() {
  timerSound.play();
}

function stopAlarm() {
  timerSound.pause();
  timerSound.currentTime = 0;
}

function startTimer() {
  if (countdown !== null) return;

  if (totalSeconds === 0) {
    totalSeconds = parseTime(input.value);
    if (isNaN(totalSeconds) || totalSeconds <= 0) {
      alert("Enter a valid time like 1:20:00 or 15:30");
      input.value = "";
      return;
    }
  }

  input.classList.add("hidden");
  timerDisplay.classList.remove("hidden");
  startTimerBtn.disabled = true;
  resetTimerBtn.disabled = true;
  stopTimerBtn.disabled = false;
  updateTimerDisplay();

  countdown = setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      updateTimerDisplay();
    } else {
      clearInterval(countdown);
      countdown = null;
      playAlarm();
      alert("Time's up!");
      resetTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(countdown);
  countdown = null;
  startTimerBtn.disabled = false;
  resetTimerBtn.disabled = false;
  stopTimerBtn.disabled = true;
}

function resetTimer() {
  clearInterval(countdown);
  countdown = null;
  totalSeconds = 0;
  stopAlarm();
  updateTimerDisplay();
  input.value = "";
  input.classList.remove("hidden");
  timerDisplay.classList.add("hidden");
  startTimerBtn.disabled = false;
  resetTimerBtn.disabled = false;
  stopTimerBtn.disabled = true;
}

updateTimerDisplay();

window.startTimer = startTimer;
window.stopTimer = stopTimer;
window.resetTimer = resetTimer;
