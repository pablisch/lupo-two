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

Due to browser restrictions, audio can only be played after a user interaction. In the orginal app, there was a landing page and then, once on the main page, the user would need to click on the `tap-in` button to start the audio context. Unfortunately, theis meant that none of the background working, e.g. setting up the instrument samplers, could be done prior to the main page loading.

In this version, the audio setup begins as soon as any part of the landing page is clicked. If any part of the landing page is clicked before the link to the main page, then all the audio setup will have been done by the time the main page is loaded.

```javascript
const handleSoundPrep = () => {
  if (!soundOn) setIsSoundOn(true);
}

<div onClick={handleSoundPrep} className="landing-page">
```

`soundOn` is a bit of a throwback from the original app and it may be removed in the future. Currently, it is tied into different parts of the app in conditional rendering so I have retained it.