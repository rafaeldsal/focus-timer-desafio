export default function () {
  const buttonPressAudioForest = new Audio("/audio/floresta.wav");

  const buttonPressAudioRain = new Audio("/audio/chuva.wav");

  const buttonPressAudioCoffeeShop = new Audio("/audio/cafeteria.wav");

  const buttonPressAudioFirePlace = new Audio("/audio/lareira.wav");

  buttonPressAudioForest.loop = true;
  buttonPressAudioRain.loop = true;
  buttonPressAudioCoffeeShop.loop = true;
  buttonPressAudioFirePlace.loop = true;

  function buttonPressForest() {
    buttonPressAudioForest.play();
    buttonPressAudioRain.pause();
    buttonPressAudioCoffeeShop.pause();
    buttonPressAudioFirePlace.pause();
  }

  function buttonPressRain() {
    buttonPressAudioRain.play();
    buttonPressAudioForest.pause();
    buttonPressAudioCoffeeShop.pause();
    buttonPressAudioFirePlace.pause();
  }

  function buttonPressCoffeeShop() {
    buttonPressAudioCoffeeShop.play();
    buttonPressAudioForest.pause();
    buttonPressAudioRain.pause();
    buttonPressAudioFirePlace.pause();
  }

  function buttonPressFirePlace() {
    buttonPressAudioFirePlace.play();
    buttonPressAudioForest.pause();
    buttonPressAudioRain.pause();
    buttonPressAudioCoffeeShop.pause();
  }

  function pauseAllSounds() {
    buttonPressAudioFirePlace.pause();
    buttonPressAudioForest.pause();
    buttonPressAudioRain.pause();
    buttonPressAudioCoffeeShop.pause();
  }

  return {
    buttonPressForest,
    buttonPressRain,
    buttonPressCoffeeShop,
    buttonPressFirePlace,
    pauseAllSounds,
  };
}
