import { createFlare } from '../FlareEffect/flareEffects';
import TIMEOUTS from './timeouts';
import * as Tone from 'tone'; // added this to get the Tone.now() function

const flashElement = (elementId) => {
  const element = document.getElementById(elementId);

  // // 👇🏻 ONLY FOR DEBUGGING 👇🏻
  // if (!element) {
  //   console.log(elementId, "not found");
  // }

  element.style.animation = 'full-fade-in 1s forwards';
  setTimeout(() => {
    element.style.animation = 'full-fade-out 1s forwards';
  }, 1500);
};

const getRandomVelocity = () => {
  // A lower minimum velocity results in greater dynamic range / variation
  const minVelocity = 0.8;
  return Math.round((Math.random() * minVelocity + minVelocity) * 10) / 10; // result is 1dp
};

// ⛔️ CHECK THIS FIRST!!! ⛔️
// 💡 TURNING OFF FLARE EFFECTS SEEMS TO CURRENTLY TAKE AN ADDITIONAL CYCLE TO TAKE EFFECT. TRY CONSOLE LOGGING THE VALUE OF FLARE EFFECTS WHEN TRIGGER AUDIO VISUALS IS CALLED FOR THE BATCHES OF TIMEOUTS AFTER THE FLARE EFFECTS ARE TURNED OFF. IS THE VALUE THE SAME AS THE ONE BEING USED INSIDE THE FUNCTION.

// 💡 THE VALUE OF FLARE_EFFECTS IS PASSED INTO THE TIMEOUT FUNCTION WHICH MAY RESULT IN IT BEING OUT OF DATE BY THE TIME THE FUNCTION IS EXECUTED.
// 💡 WOULD HAVE A GLOBAL CONTEXT PRODUCE A DIFFERENT RESULT?

const triggerAudioVisuals = (
  quantisedTubeData,
  instruments,
  flareEffectsOn,
  arrivals
) => {
  // 👇🏻 ONLY FOR DEBUGGING 👇🏻
  console.log('***** flareEffectsOn:', flareEffectsOn, '*****');

  quantisedTubeData.forEach((train) => {
    // console.log(train.stationName, train.lineName);
    const note = instruments.noteAssignFunctions[train.lineName](
      train.stationName
    );
    TIMEOUTS.setTimeout(() => {
      const now = Tone.now(); // the audio context time
      const randomVelocity = getRandomVelocity();
      instruments[train.lineName].triggerAttackRelease(
        note,
        '4n',
        now,
        randomVelocity
      );
      // console.log(`${train.stationName} - ${train.lineName} line. Time To Station: ${train.timeToStation}`);
      flashElement(train.stationName);
      arrivals.push([train.stationName]);
      if (arrivals.length > 10) {
        arrivals.shift();
      }
      createFlare(train.stationName, flareEffectsOn);
    }, train.timeToStation * 1000);
  });
};

export default triggerAudioVisuals;
