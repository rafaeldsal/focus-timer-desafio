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
} = elements;

export default function ({ controls, timer, sound }) {
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

  buttonForest.addEventListener("click", function () {
    sound.buttonPressForest();
    buttonForest.classList.add("emphasis");
    buttonRain.classList.remove("emphasis");
    buttonFirePlace.classList.remove("emphasis");
    buttonCoffeeShop.classList.remove("emphasis");
  });
  
  buttonRain.addEventListener("click", function () {
    sound.buttonPressRain();
    buttonRain.classList.add("emphasis");
    buttonForest.classList.remove("emphasis");
    buttonFirePlace.classList.remove("emphasis");
    buttonCoffeeShop.classList.remove("emphasis");
  });
  
  buttonCoffeeShop.addEventListener("click", function () {
    sound.buttonPressCoffeeShop();
    buttonCoffeeShop.classList.add("emphasis");
    buttonForest.classList.remove("emphasis");
    buttonRain.classList.remove("emphasis");
    buttonFirePlace.classList.remove("emphasis");
  });
  
  buttonFirePlace.addEventListener("click", function () {
    sound.buttonPressFirePlace();
    buttonFirePlace.classList.add("emphasis");
    buttonForest.classList.remove("emphasis");
    buttonRain.classList.remove("emphasis");
    buttonCoffeeShop.classList.remove("emphasis");
  });
}
