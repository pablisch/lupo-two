import * as Tone from 'tone';
import NOTES from './instrumentNoteRanges';

const getUrls = (notes, instrument) => {
  return notes.reduce((acc, note) => {
    acc[note] = `${instrument}_${note.toLowerCase()}.mp3`;
    return acc;
  }, {});
};

const createSampler = (
  notes,
  instrument,
  baseUrl,
  connection,
  displayName = instrument,
  maxVolume = -13
) => {
  const sampler = new Tone.Sampler({
    urls: getUrls(notes, instrument),
    release: 1,
    baseUrl,
  }).connect(connection);
  sampler.maxVolume = maxVolume;
  sampler.volume.value = sampler.maxVolume;
  sampler.displayName = displayName;
  return sampler;
};

const createSamplers = async (instrumentSet) => {
  await Tone.start();

  // console.log('Setting up samplers for the first time!');

  const reverb = new Tone.Reverb(2.5).toDestination(); // decay time as arg
  reverb.wet.value = 0.4; // 1 == 100% reverb. 0 == no reverb

  const toDestination = Tone.Destination;

  const celloMarcSampler = createSampler(NOTES.celloMarc, 'cello_marc', '/samples/cello_marc_samples/', toDestination, 'Cello Marcato');

  const celloPizzSampler = createSampler(NOTES.celloPizz, 'cello_pizz', '/samples/cello_pizz_samples/', toDestination, 'Cello Pizzicato');

  const celloSampler = createSampler(NOTES.cello, 'cello_legato', '/samples/cello_samples/', toDestination, 'Cello Legato', -6);

  const doubleBassMarcSampler = createSampler(
    NOTES.doubleBassMarc,
    'doublebass_marc',
    '/samples/doublebass_marc_samples/',
    toDestination,
    'Double Bass Marcato'
  );

  const doubleBassPizzSampler = createSampler(
    NOTES.doubleBassPizz,
    'doublebass_pizz',
    '/samples/doublebass_pizz_samples/',
    toDestination,
    'Double Bass Pizzicato'
  );

  const doubleBassSampler = createSampler(
    NOTES.doublebass,
    'doublebass_legato',
    '/samples/doublebass_samples/',
    toDestination,
    'Double Bass Legato',
  );
  
  const fhornSampler = createSampler(
    NOTES.fhorn,
    'fhorn_stacc',
    '/samples/fhorn_samples/',
    toDestination,
    'French Horn'
  );
  
  const gongSampler = new Tone.Sampler({
    urls: {
      C4: 'gong_c4.mp3',
    },
    release: 1,
    baseUrl: '/samples/gong_samples/',
  }).toDestination();
  gongSampler.maxVolume = -6;
  gongSampler.volume.value = gongSampler.maxVolume;
  gongSampler.displayName = 'Gong';

  const harpSampler = createSampler(
    NOTES.harp,
    'harp_pluck',
    '/samples/harp_samples/',
    toDestination,
    'Harp'
  );
  
  const harpsichordSampler = createSampler(
    NOTES.harpsichord,
    'harpsichord',
    '/samples/harpsichord_samples/',
    toDestination,
    'Harpsichord'
  );
  
  const lupoIdentSampler = new Tone.Sampler({
    urls: {
      A4: 'LUPO_ident.mp3',
    },
    release: 1,
    baseUrl: '/samples/lupo_ident_samples/',
  }).toDestination();
  lupoIdentSampler.maxVolume = -12;
  lupoIdentSampler.volume.value = lupoIdentSampler.maxVolume;
  lupoIdentSampler.displayName = 'LUPO';

  const marimbaSampler = createSampler(
    NOTES.marimba,
    'marimba',
    '/samples/marimba_hits/',
    reverb,
    'Marimba',
    -6
  );
  
  const oboeSampler = createSampler(
    NOTES.oboe,
    'oboe_legato',
    '/samples/oboe_samples/',
    toDestination,
    'Oboe',
  );
  
  const timpaniSampler = createSampler(
    NOTES.timpani,
    'timp_hit',
    '/samples/timpani_samples/',
    toDestination,
    'Timpani'
  );
  
  const trumpetSampler = createSampler(
    NOTES.trumpet,
    'trumpet_stacc',
    '/samples/trumpet_samples/',
    toDestination,
    'Trumpet Stacatto'
  );
  
  const tubaSampler = createSampler(
    NOTES.tuba,
    'tuba_marc',
    '/samples/tuba_samples/',
    toDestination,
    'Tuba Marcato'
  );
  
  const tubeDrumSampler = createSampler(
    NOTES.tubeDrum,
    'tube_drum',
    '/samples/tubeDrum_samples/',
    toDestination,
    'Tube Drum',
    -10
  );
  
  const violaMarcSampler = createSampler(
    NOTES.violaMarc,
    'viola_marc',
    '/samples/viola_marc_samples/',
    toDestination,
    'Viola Marcato'
  );
  
  const violaPizzSampler = createSampler(
    NOTES.violaPizz,
    'viola_pizz',
    '/samples/viola_pizz_samples/',
    toDestination,
    'Viola Pizzicato'
  );
  
  const violaSampler = createSampler(
    NOTES.viola,
    'viola_legato',
    '/samples/viola_samples/',
    reverb,
    'Viola Legato',
    -6
  );
  
  const violinColLegnoSampler = createSampler(
    NOTES.violinColLegno,
    'violin_col_legno',
    '/samples/violin_col_legno_samples/',
    toDestination,
    'Violin Col Legno'
  );
  
  const violinMarcSampler = createSampler(
    NOTES.violinMarc,
    'violin_marc',
    '/samples/violin_marc_samples/',
    toDestination,
    'Violin Marcato'
  );
  
  const violinPizzSampler = createSampler(
    NOTES.violinPizz,
    'violin_pizz',
    '/samples/violin_pizz_samples/',
    toDestination,
    'Violin Pizzicato'
  );

  const violinSampler = createSampler(
    NOTES.violin,
    'violin_legato',
    '/samples/violin_samples/',
    reverb,
    'Violin Legato',
    -6
  );
  
  return {
    celloMarcSampler,
    celloPizzSampler,
    celloSampler,
    doubleBassMarcSampler,
    doubleBassPizzSampler,
    doubleBassSampler,
    fhornSampler,
    gongSampler,
    harpSampler,
    harpsichordSampler,
    lupoIdentSampler,
    marimbaSampler,
    oboeSampler,
    timpaniSampler,
    trumpetSampler,
    tubaSampler,
    tubeDrumSampler,
    violaMarcSampler,
    violaPizzSampler,
    violaSampler,
    violinColLegnoSampler,
    violinMarcSampler,
    violinPizzSampler,
    violinSampler,
  };
};

export default createSamplers;