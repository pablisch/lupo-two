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