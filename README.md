# LUPO

## Sound creation

### Samples

Instrument notes samples are stored in `public/samples/<instrument>_samples`.
Each instrument has its own folder.
Each samples is an `mp3` file.

**INSERT IMAGE OF FILE STRUCTURE HERE - snapshot taken**

### Samplers

The `audioStartup.js` file creates the samplers one by one.
In the original LUPO, it created samplers whether they would be used or not and then recreated all of them whenever the instrument set changed.

This leaves some obvious choices:

1. Create all samplers at the beginning and keep them in memory.
2. Create samplers only when they are needed and destroy them when they are not.
3. Create samplers only when they are needed and keep them in memory in case they are needed again.

For the time being, I will create all samplers at the beginning and keep them in memory.

## Code Journeys in LUPO

### Audio setup

**NOTE:** IN this current version of LUPO, the audio setup has been separated from the fetching if TfL data.

Due to browser restrictions, audio can only be played after a user interaction. In the orginal app, there was a landing page and then, once on the main page, the user would need to click on the `tap-in` button to start the audio context. Unfortunately, theis meant that none of the background working, e.g. setting up the instrument samplers, could be done prior to the main page loading.

In this version, the audio setup begins as soon as any part of the landing page is clicked. If any part of the landing page is clicked before the link to the main page, then all the audio setup will have been done by the time the main page is loaded.

_LandingPage.jsx_

```javascript
<div onClick={initialSoundSetup} className="landing-page">
```

_App.jsx_

```javascript
const initialSoundSetup = () => {
  setAudioContext(true);
};
```

`initialSoundSetup` is a function in `App.jsx` that is called when the landing page is clicked. It sets `audioContext` to `true` which in turns sets of a `useEffect` in `App.jsx` that sets up the audio context.

```javascript
useEffect(() => {
  if (audioContext) loadInstrumentSet(currentInstrumentSet);
}, [audioContext]);
```

`loadInstrumentSet` is a function in `App.jsx` that calls the `audioStartup` function in `audioStartup.js` and sets `instrumentSet` to the returned `awaitedInstruments` value. The function currently returns an object containing `awaitedInstruments` and `samplersObject` (all of the samples in a JS object).

```javascript
const loadInstrumentSet = async (instrumentSet) => {
  const awaitedInstruments = await audioStartup(instrumentSet);
  setInstrumentSet(awaitedInstruments);
};
```

### Initial TfL Data Fetch
