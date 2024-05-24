const assignNoteForMetropolitan = (stationName) => {
  switch (stationName) {
    case 'Amersham':
      return 'C4';
    case 'Chesham':
      return 'D4';
    case 'Chalfont&Latimer':
      return 'E4';
    case 'Chorleywood':
      return 'G4';
    case 'Watford':
      return 'A4';
    case 'Rickmansworth':
      return 'C5';
    case 'Croxley':
      return 'D3';
    case 'MoorPark':
      return 'E3';
    case 'Northwood':
      return 'G3';
    case 'NorthwoodHills':
      return 'A3';
    case 'Pinner':
      return 'C4';
    case 'NorthHarrow':
      return 'C2';
    case 'Uxbridge':
      return 'D2';
    case 'Hillingdon':
      return 'E2';
    case 'Ickenham':
      return 'G2';
    case 'Ruislip':
      return 'A2';
    case 'RuislipManor':
      return 'C3';
    case 'Eastcote':
      return 'D3';
    case 'RaynersLane':
      return 'E3';
    case 'WestHarrow':
      return 'G3';
    case 'Harrow-on-the-Hill':
      return 'A3';
    case 'NorthwickPark':
      return 'C4';
    case 'PrestonRoad':
      return 'C4';
    case 'WembleyPark':
      return 'D4';
    case 'FinchleyRoad':
      return 'E4';
    case 'BakerStreet':
      return 'G4';
    case 'GreatPortlandStreet':
      return 'A4';
    case 'EustonSquare':
      return 'C5';
    case 'KingsCrossStPancras':
      return 'D4';
    case 'Farringdon':
      return 'E4';
    case 'Barbican':
      return 'G4';
    case 'Moorgate':
      return 'A4';
    case 'LiverpoolStreet':
      return 'C5';
    case 'Aldgate':
      return 'C2';
    default:
      return 'C4';
  }
};

export default assignNoteForMetropolitan;
