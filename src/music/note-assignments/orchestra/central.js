const assignNoteForCentral = (stationName) => {
  switch (stationName) {
    case 'WestRuislip':
      return 'C2';
    case 'RuislipGardens':
      return 'D2';
    case 'SouthRuislip':
      return 'E2';
    case 'Northolt':
      return 'G2';
    case 'Greenford':
      return 'A2';
    case 'Perivale':
      return 'C3';
    case 'HangerLane':
      return 'D3';
    case 'NorthActon':
      return 'E3';
    case 'EastActon':
      return 'G3';
    case 'WhiteCity':
      return 'A3';
    case 'ShepherdsBush(Central)':
      return 'C4';
    case 'HollandPark':
      return 'C4';
    case 'NottingHillGate':
      return 'D4';
    case 'Queensway':
      return 'E4';
    case 'LancasterGate':
      return 'G4';
    case 'MarbleArch':
      return 'A4';
    case 'BondStreet':
      return 'C5';
    case 'OxfordCircus':
      return 'C4';
    case 'TottenhamCourtRoad':
      return 'E4';
    case 'Holborn':
      return 'G4';
    case 'ChanceryLane':
      return 'A4';
    case 'St.Pauls':
      return 'C5';
    case 'Bank':
      return 'C3';
    case 'LiverpoolStreet':
      return 'D3';
    case 'BethnalGreen':
      return 'E3';
    case 'MileEnd':
      return 'G3';
    case 'Stratford':
      return 'A3';
    case 'Leyton':
      return 'C4';
    case 'Leytonstone':
      return 'D4';
    case 'Wanstead':
      return 'E4';
    case 'Redbridge':
      return 'G4';
    case 'GantsHill':
      return 'A4';
    case 'NewburyPark':
      return 'C4';
    case 'Barkingside':
      return 'C4';
    case 'Fairlop':
      return 'D4';
    case 'Hainault':
      return 'E4';
    case 'GrangeHill':
      return 'G4';
    case 'Chigwell':
      return 'A4';
    case 'RodingValley':
      return 'C5';
    case 'Snaresbrook':
      return 'D2';
    case 'SouthWoodford':
      return 'E2';
    case 'Woodford':
      return 'G2';
    case 'BuckhurstHill':
      return 'C3';
    case 'Loughton':
      return 'C3';
    case 'Debden':
      return 'D3';
    case 'TheydonBois ':
      return 'E3';
    case 'Epping':
      return 'G3';
    default:
      return 'C4';
  }
};

export default assignNoteForCentral;
