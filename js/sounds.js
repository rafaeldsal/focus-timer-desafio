export default function () {
  const buttonPressAudioForest = new Audio("/audio/floresta.wav");

  const buttonPressAudioRain = new Audio("/audio/chuva.wav");

  const buttonPressAudioCoffeeShop = new Audio("/audio/cafeteria.wav");

  const buttonPressAudioFirePlace = new Audio("/audio/lareira.wav");

  buttonPressAudioForest.loop = true;
  buttonPressAudioRain.loop = true;
  buttonPressAudioCoffeeShop.loop = true;
  buttonPressAudioFirePlace.loop = true;

  function controlVolumeForest(value) {
    buttonPressAudioForest.volume = value;
  }

  function controlVolumeRain(value) {
    buttonPressAudioRain.volume = value;
  }

  function controlVolumeCoffeeShop(value) {
    buttonPressAudioCoffeeShop.volume = value;
  }

  function controlVolumeFirePlace(value) {
    buttonPressAudioFirePlace.volume = value;
  }

  function buttonPressForest() {
    buttonPressAudioForest.play();
    buttonPressAudioForest.volume = 0.5;
    buttonPressAudioRain.pause();
    buttonPressAudioCoffeeShop.pause();
    buttonPressAudioFirePlace.pause();
  }

  function buttonPressRain() {
    buttonPressAudioRain.play();
    buttonPressAudioRain.volume = 0.5;
    buttonPressAudioForest.pause();
    buttonPressAudioCoffeeShop.pause();
    buttonPressAudioFirePlace.pause();
  }

  function buttonPressCoffeeShop() {
    buttonPressAudioCoffeeShop.play();
    buttonPressAudioCoffeeShop.volume = 0.5;
    buttonPressAudioForest.pause();
    buttonPressAudioRain.pause();
    buttonPressAudioFirePlace.pause();
  }

  function buttonPressFirePlace() {
    buttonPressAudioFirePlace.play();
    buttonPressAudioFirePlace.volume = 0.5;
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
    controlVolumeCoffeeShop,
    controlVolumeFirePlace,
    controlVolumeRain,
    controlVolumeForest
  };
}
