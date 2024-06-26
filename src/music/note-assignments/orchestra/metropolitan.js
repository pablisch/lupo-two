const assignNoteForMetropolitan = (stationName) => {
  switch (stationName) {
    case 'Amersham':
      return 'C3';
    case 'Chesham':
      return 'D3';
    case 'Chalfont&Latimer':
      return 'E3';
    case 'Chorleywood':
      return 'G3';
    case 'Watford':
      return 'A3';
    case 'Rickmansworth':
      return 'C4';
    case 'Croxley':
      return 'D4';
    case 'MoorPark':
      return 'E4';
    case 'Northwood':
      return 'G4';
    case 'NorthwoodHills':
      return 'A4';
    case 'Pinner':
      return 'C5';
    case 'NorthHarrow':
      return 'C3';
    case 'Uxbridge':
      return 'D3';
    case 'Hillingdon':
      return 'E3';
    case 'Ickenham':
      return 'G3';
    case 'Ruislip':
      return 'A3';
    case 'RuislipManor':
      return 'C4';
    case 'Eastcote':
      return 'D4';
    case 'RaynersLane':
      return 'E4';
    case 'WestHarrow':
      return 'G4';
    case 'Harrow-on-the-Hill':
      return 'A4';
    case 'NorthwickPark':
      return 'C5';
    case 'PrestonRoad':
      return 'C3';
    case 'WembleyPark':
      return 'D3';
    case 'FinchleyRoad':
      return 'E3';
    case 'BakerStreet':
      return 'G3';
    case 'GreatPortlandStreet':
      return 'A3';
    case 'EustonSquare':
      return 'C4';
    case 'KingsCrossStPancras':
      return 'D4';
    case 'Farringdon':
      return 'E4';
    case 'Barbican':
      return 'G4';
    case 'Moorgate':
      return 'A4';
    case 'LiverpoolStreet':
      return 'C3';
    case 'Aldgate':
      return 'D3';
    default:
      return 'C3';
  }
};

export default assignNoteForMetropolitan;
