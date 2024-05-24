const assignNoteForCircle = (stationName) => {
  switch (stationName) {
    case 'Hammersmith(H&CLine)':
      return 'C4';
    case 'GoldhawkRoad':
      return 'D4';
    case 'ShepherdsBushMarket':
      return 'E4';
    case 'WoodLane':
      return 'G4';
    case 'LatimerRoad':
      return 'A4';
    case 'LadbrokeGrove':
      return 'C5';
    case 'WestbournePark':
      return 'D5';
    case 'RoyalOak':
      return 'E5';
    case 'Paddington(H&CLine)-Underground':
      return 'G5';
    case 'Paddington':
      return 'A5';
    case 'EdgwareRoad(CircleLine)':
      return 'C6';
    case 'BakerStreet':
      return 'C4';
    case 'GreatPortlandStreet':
      return 'D4';
    case 'EustonSquare':
      return 'E4';
    case 'KingsCrossStPancras':
      return 'G4';
    case 'Farringdon':
      return 'A4';
    case 'Barbican':
      return 'C5';
    case 'Moorgate':
      return 'D5';
    case 'LiverpoolStreet':
      return 'E5';
    case 'Aldgate':
      return 'G5';
    case 'TowerHill':
      return 'A5';
    case 'Monument':
      return 'C6';
    case 'CannonStreet':
      return 'C4';
    case 'MansionHouse':
      return 'D4';
    case 'Blackfriars':
      return 'E4';
    case 'Temple':
      return 'G4';
    case 'Embankment':
      return 'A4';
    case 'Westminster':
      return 'C5';
    case 'StJamessPark':
      return 'D5';
    case 'Victoria':
      return 'E5';
    case 'SloaneSquare':
      return 'G5';
    case 'SouthKensington':
      return 'A5';
    case 'GloucesterRoad':
      return 'C6';
    case 'HighStreetKensington':
      return 'C4';
    case 'NottingHillGate':
      return 'D4';
    case 'Bayswater':
      return 'E4';
    default:
      return 'C4';
  }
};

export default assignNoteForCircle;
