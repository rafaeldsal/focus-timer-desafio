export default function ({ minutesDisplay, secondsDisplay }) {
  let timerTimeOut;
  let minutes = Number(minutesDisplay.textContent);

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function reset() {
    updateDisplay(minutes, 0);
    clearTimeout(timerTimeOut);
  }

  function countDown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);

      updateDisplay(minutes, 0);

      if (minutes <= 0 && seconds <= 0) {
        updateDisplay(minutes, 0);
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateDisplay(minutes, seconds - 1);

      countDown();
    }, 1000);
  }

  return {
    countDown,
    updateDisplay,
    reset,
  };
}
