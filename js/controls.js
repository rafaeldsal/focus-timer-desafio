export default function Controls({
  updateTimerDisplay,
  minutesDisplay,
}) {
  const minutes = Number(minutesDisplay.textContent)

  function addFiveMinutes() {
    let minutes = Number(minutesDisplay.textContent) + 5;
    updateTimerDisplay(minutes, 0);
  }

  function removeFiveMinutes() {
    let newMinutes = Number(minutesDisplay.textContent) - 5;
    if (newMinutes >= 0) {
      updateTimerDisplay(newMinutes)
    }
  }

  function getMinutes() {
    let newMinutes = prompt("Quantos minutos?");
    if (!newMinutes) {
      return false;
    }
    return newMinutes = Number(newMinutes);
  }

  return {
    getMinutes,
    addFiveMinutes,
    removeFiveMinutes,
  };
}
