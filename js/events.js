import { elements } from "./elements.js";

const {
  buttonPlay,
  buttonStop,
  buttonSet,
  buttonUpMinutes,
  buttonDownMinutes,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFirePlace,
  rootCSS,
  buttonLightMode,
  buttonDarkMode,
  inputVolumeForest,
  inputVolumeRain,
  inputVolumeCoffeeShop,
  inputVolumeFireplace,
} = elements;

export default function ({ controls, timer, sound }) {
  let valueVolume;

  buttonPlay.addEventListener("click", function () {
    timer.countDown();
  });

  buttonStop.addEventListener("click", function () {
    timer.reset();
    sound.pauseAllSounds();
  });

  buttonUpMinutes.addEventListener("click", function () {
    controls.addFiveMinutes();
  });

  buttonDownMinutes.addEventListener("click", function () {
    controls.removeFiveMinutes();
  });

  buttonSet.addEventListener("click", function () {
    let newMinutes = controls.getMinutes();
    if (!newMinutes) {
      timer.reset();
      return;
    }
    timer.updateDisplay(newMinutes, 0);
  });

  // Eventos de configuração da cor do card e dos input de volume
  buttonForest.addEventListener("click", function () {
    sound.buttonPressForest();
    // Destaque para o card
    buttonForest.classList.add("emphasis");
    buttonRain.classList.remove("emphasis");
    buttonFirePlace.classList.remove("emphasis");
    buttonCoffeeShop.classList.remove("emphasis");

    // Destaque para o controle de volume
    inputVolumeForest.classList.add("emphasis-volume");
    inputVolumeRain.classList.remove("emphasis-volume");
    inputVolumeFireplace.classList.remove("emphasis-volume");
    inputVolumeCoffeeShop.classList.remove("emphasis-volume");
  });

  buttonRain.addEventListener("click", function () {
    sound.buttonPressRain();
    buttonRain.classList.add("emphasis");
    buttonForest.classList.remove("emphasis");
    buttonFirePlace.classList.remove("emphasis");
    buttonCoffeeShop.classList.remove("emphasis");

    // Destaque para o controle de volume
    inputVolumeForest.classList.remove("emphasis-volume");
    inputVolumeRain.classList.add("emphasis-volume");
    inputVolumeFireplace.classList.remove("emphasis-volume");
    inputVolumeCoffeeShop.classList.remove("emphasis-volume");
  });

  buttonCoffeeShop.addEventListener("click", function () {
    sound.buttonPressCoffeeShop();
    buttonCoffeeShop.classList.add("emphasis");
    buttonForest.classList.remove("emphasis");
    buttonRain.classList.remove("emphasis");
    buttonFirePlace.classList.remove("emphasis");

    // Destaque para o controle de volume
    inputVolumeForest.classList.remove("emphasis-volume");
    inputVolumeRain.classList.remove("emphasis-volume");
    inputVolumeFireplace.classList.remove("emphasis-volume");
    inputVolumeCoffeeShop.classList.add("emphasis-volume");
  });

  buttonFirePlace.addEventListener("click", function () {
    sound.buttonPressFirePlace();
    buttonFirePlace.classList.add("emphasis");
    buttonForest.classList.remove("emphasis");
    buttonRain.classList.remove("emphasis");
    buttonCoffeeShop.classList.remove("emphasis");

    // Destaque para o controle de volume
    inputVolumeForest.classList.remove("emphasis-volume");
    inputVolumeRain.classList.remove("emphasis-volume");
    inputVolumeFireplace.classList.add("emphasis-volume");
    inputVolumeCoffeeShop.classList.remove("emphasis-volume");
  });

  // Evento de configuração do volume dos audios
  inputVolumeForest.addEventListener("input", (e) => {
    valueVolume = e.target.value;
    sound.controlVolumeForest(valueVolume);
  });

  inputVolumeRain.addEventListener("input", (e) => {
    valueVolume = e.target.value;
    sound.controlVolumeRain(valueVolume);
  });

  inputVolumeCoffeeShop.addEventListener("input", (e) => {
    valueVolume = e.target.value;
    sound.controlVolumeCoffeeShop(valueVolume);
  });

  inputVolumeFireplace.addEventListener("input", (e) => {
    valueVolume = e.target.value;
    sound.controlVolumeFirePlace(valueVolume);
  });

  // Configuração dark-mode
  const getStyle = (element, style) =>
    window.getComputedStyle(element).getPropertyValue(style);

  const initialColors = {
    bg: getStyle(rootCSS, "--bg"),
    colorTimer: getStyle(rootCSS, "--color-timer"),
    colorControls: getStyle(rootCSS, "--color-controls"),
    colorCard: getStyle(rootCSS, "--color-card"),
    colorIcon: getStyle(rootCSS, "--color-icon"),
    colorEmphasis: getStyle(rootCSS, "--color-emphasis"),
    colorVolume: getStyle(rootCSS, "--color-volume"),
  };

  const darkMode = {
    bg: "#000000",
    colorTimer: "#FFFFFF",
    colorControls: "#C4C4CC",
    colorCard: "#29292E",
    colorIcon: "#C4C4CC",
    colorEmphasis: "#0A3442",
    colorVolume: "#FFFFFF",
  };

  const transformKey = (key) =>
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

  const changeColor = (colors) => {
    Object.keys(colors).map((key) =>
      rootCSS.style.setProperty(transformKey(key), colors[key])
    );
  };

  buttonLightMode.addEventListener("click", () => {
    buttonLightMode.classList.add("hide");
    buttonDarkMode.classList.remove("hide");
    changeColor(darkMode);
  });

  buttonDarkMode.addEventListener("click", () => {
    buttonDarkMode.classList.add("hide");
    buttonLightMode.classList.remove("hide");
    changeColor(initialColors);
  });
}
