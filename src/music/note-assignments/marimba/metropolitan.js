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
      return 'D5';
    case 'MoorPark':
      return 'E5';
    case 'Northwood':
      return 'G5';
    case 'NorthwoodHills':
      return 'A5';
    case 'Pinner':
      return 'C6';
    case 'NorthHarrow':
      return 'C4';
    case 'Uxbridge':
      return 'D4';
    case 'Hillingdon':
      return 'E4';
    case 'Ickenham':
      return 'G4';
    case 'Ruislip':
      return 'A4';
    case 'RuislipManor':
      return 'C5';
    case 'Eastcote':
      return 'D5';
    case 'RaynersLane':
      return 'E5';
    case 'WestHarrow':
      return 'G5';
    case 'Harrow-on-the-Hill':
      return 'A5';
    case 'NorthwickPark':
      return 'C6';
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
      return 'D5';
    case 'Farringdon':
      return 'E5';
    case 'Barbican':
      return 'G5';
    case 'Moorgate':
      return 'A5';
    case 'LiverpoolStreet':
      return 'C6';
    case 'Aldgate':
      return 'C4';
    default:
      return 'C4';
  }
};

export default assignNoteForMetropolitan;
