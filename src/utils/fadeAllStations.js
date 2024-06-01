import allStations, {someStations} from '../data/stations';


const testStations = [
  ["Hampstead",
    "Neasden"],
  ["Archway", "SevenSisters", "Highgate"],
]

const fadeAllStations = () => {
  // console.log('fade all stations')

  // // allStations.forEach((line) => {
  // someStations.forEach((line) => {
  //   line.forEach((station) => {
  //     document.getElementById(station
  //       .replace(/ *\([^)]*\) */g, "")
  //       .replace(/\s|\.''/g, '')
  //       .replace(/\./g, '')
  //       .replace(/'/g, '')
  //       .replace(/UndergroundStation/g, '')
  //       .replace(/-Underground/g, '')
  //       .replace(/&/g, '_'),)
  //     .style.opacity = "0%";
  //   });
  // });

  // allStations.forEach((line) => {
  someStations.forEach((line) => {
    line.forEach((station) => {
      const el = document.getElementById(station
        .replace(/ *\([^)]*\) */g, "")
        .replace(/\s|\.''/g, '')
        .replace(/\./g, '')
        .replace(/'/g, '')
        .replace(/UndergroundStation/g, '')
        .replace(/-Underground/g, '')
        .replace(/&/g, '_'),);

      if (!el) {
        console.log(station, "not fadable");
      } else {
        el.style.opacity = "0%";
      }
      // el.style.opacity = "0%";
    });
  });
}

export default fadeAllStations;