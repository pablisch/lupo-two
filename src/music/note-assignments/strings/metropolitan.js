const assignNoteForMetropolitan = (stationName) => {
  switch (stationName) {
    case 'Amersham':
      return 'C2';
    case 'Chesham':
      return 'D2';
    case 'Chalfont&Latimer':
      return 'E2';
    case 'Chorleywood':
      return 'G2';
    case 'Watford':
      return 'A2';
    case 'Rickmansworth':
      return 'C3';
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
      return 'D2';
    case 'Farringdon':
      return 'E2';
    case 'Barbican':
      return 'G2';
    case 'Moorgate':
      return 'A2';
    case 'LiverpoolStreet':
      return 'C2';
    case 'Aldgate':
      return 'D3';
    default:
      return 'C3';
  }
};

export default assignNoteForMetropolitan;
