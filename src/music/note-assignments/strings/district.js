const assignNoteForDistrict = (stationName) => {
  switch (stationName) {
    case 'Upminster':
      return 'C1';
    case 'UpminsterBridge':
      return 'D1';
    case 'Hornchurch':
      return 'E1';
    case 'ElmPark':
      return 'G1';
    case 'DagenhamEast':
      return 'A1';
    case 'DagenhamHeathway':
      return 'C2';
    case 'Becontree':
      return 'D2';
    case 'Upney':
      return 'E2';
    case 'Barking':
      return 'G2';
    case 'EastHam':
      return 'A2';
    case 'UptonPark':
      return 'C3';
    case 'Plaistow':
      return 'D2';
    case 'WestHam':
      return 'E2';
    case 'Bromley-by-Bow':
      return 'G2';
    case 'BowRoad':
      return 'A2';
    case 'MileEnd':
      return 'C3';
    case 'StepneyGreen':
      return 'C1';
    case 'Whitechapel':
      return 'D1';
    case 'AldgateEast':
      return 'E1';
    case 'TowerHill':
      return 'G1';
    case 'Monument':
      return 'A1';
    case 'CannonStreet':
      return 'C2';
    case 'MansionHouse':
      return 'D2';
    case 'Blackfriars':
      return 'E2';
    case 'Temple':
      return 'G2';
    case 'Embankment':
      return 'A2';
    case 'Westminster':
      return 'C3';
    case 'StJamessPark':
      return 'D1';
    case 'Victoria':
      return 'E1';
    case 'SloaneSquare':
      return 'G1';
    case 'SouthKensington':
      return 'A1';
    case 'GloucesterRoad':
      return 'C2';
    case 'HighStreetKensington':
      return 'C2';
    case 'EarlsCourt':
      return 'D2';
    case 'WestKensington':
      return 'E2';
    case 'BaronsCourt':
      return 'G2';
    case 'Hammersmith(Dist&PiccLine)':
      return 'A2';
    case 'RavenscourtPark':
      return 'C2';
    case 'StamfordBrook':
      return 'D2';
    case 'TurnhamGreen':
      return 'E2';
    case 'Gunnersbury':
      return 'G2';
    case 'KewGardens':
      return 'A2';
    case 'Richmond':
      return 'C3';
    case 'WimbledonPark':
      return 'D1';
    case 'Wimbledon':
      return 'E1';
    case 'WestBrompton':
      return 'G1';
    default:
      return 'C2';
  }
};

export default assignNoteForDistrict;
