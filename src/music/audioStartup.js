import getNoteAssignFunctions from './note-assignments/getNoteAssignFunctions';
import createSamplers from './samplerSetup';

const audioStartup = async (currentInstrument, samplers) => {
  // console.log('Samplers:', samplers);

  const samplersObject = samplers || (await createSamplers(currentInstrument));

  const {
    marimbaSampler,
    violaSampler,
    violinSampler,
    doubleBassSampler,
    celloSampler,
    tubaSampler,
    fhornSampler,
    trumpetSampler,
    harpSampler,
    timpaniSampler,
    oboeSampler,
    gongSampler,
    tubeDrumSampler,
    celloMarcSampler,
    doubleBassMarcSampler,
    celloPizzSampler,
    doubleBassPizzSampler,
    harpsichordSampler,
    violaMarcSampler,
    violaPizzSampler,
    violinColLegnoSampler,
    violinMarcSampler,
    violinPizzSampler,
    lupoIdentSampler,
  } = samplersObject;

  let instruments = {};

  // console.log(`currentInstrument is ${currentInstrument}`);

  if (currentInstrument === 'orchestra') {
    instruments = {
      Bakerloo: violinSampler,
      Central: violaSampler,
      Circle: doubleBassSampler,
      District: celloSampler,
      HammersmithCity: tubaSampler,
      Jubilee: fhornSampler,
      Metropolitan: trumpetSampler,
      Northern: harpSampler,
      Piccadilly: timpaniSampler,
      Victoria: oboeSampler,
      WaterlooCity: gongSampler,
      Pedal: violinSampler,
    };
  } else if (currentInstrument === 'marimba') {
    instruments = {
      Bakerloo: marimbaSampler,
      Central: marimbaSampler,
      Circle: marimbaSampler,
      District: marimbaSampler,
      HammersmithCity: marimbaSampler,
      Jubilee: marimbaSampler,
      Metropolitan: marimbaSampler,
      Northern: marimbaSampler,
      Piccadilly: marimbaSampler,
      Victoria: marimbaSampler,
      WaterlooCity: marimbaSampler,
      Pedal: marimbaSampler,
    };
  } else if (currentInstrument === 'tubeDrums') {
    instruments = {
      Bakerloo: tubeDrumSampler,
      Central: tubeDrumSampler,
      Circle: tubeDrumSampler,
      District: tubeDrumSampler,
      HammersmithCity: tubeDrumSampler,
      Jubilee: tubeDrumSampler,
      Metropolitan: tubeDrumSampler,
      Northern: tubeDrumSampler,
      Piccadilly: tubeDrumSampler,
      Victoria: tubeDrumSampler,
      WaterlooCity: tubeDrumSampler,
      Pedal: tubeDrumSampler,
    };
  } else if (currentInstrument === 'strings') {
    instruments = {
      Bakerloo: celloMarcSampler,
      Central: celloPizzSampler,
      Circle: doubleBassMarcSampler,
      District: doubleBassPizzSampler,
      HammersmithCity: harpsichordSampler,
      Jubilee: violaMarcSampler,
      Metropolitan: violaPizzSampler,
      Northern: violinColLegnoSampler,
      Piccadilly: violinMarcSampler,
      Victoria: violinPizzSampler,
      WaterlooCity: lupoIdentSampler,
      Pedal: celloMarcSampler,
    };
  }

  // getNoteAssignFunctions returns an object with line names as keys and note assign functions as values
  instruments.noteAssignFunctions = getNoteAssignFunctions(currentInstrument);

  return { awaitedInstruments: instruments, samplersObject };
};

export default audioStartup;
