import Controls from "./controls.js";
import Timer from "./timer.js";
import Sound from "./sounds.js";
import { elements } from "./elements.js";
import Events from "./events.js";

const {
  minutesDisplay,
  secondsDisplay,
  
} = elements;

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
});

const controls = Controls({
  updateTimerDisplay: timer.updateDisplay,
  minutesDisplay,
});

const sound = Sound();

Events({ controls, timer, sound });
