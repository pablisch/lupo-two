// Get location of element and create two circle elements at that location with css effects
export const createFlare = (stationName, flareEffectsAreOn, lineName) => {
  if (!flareEffectsAreOn) return;

  const newElement = document.getElementById(`${stationName}Loc${lineName}`);
  if (newElement) console.log('newElement =', `${stationName}Loc${lineName}`);

  const element = document.getElementById(`${stationName}Loc${lineName}`);
  const rect = element.getBoundingClientRect();

  // Get the position and dimensions of section element with thre id of root
  const rootDiv = document.querySelector('#root');
  // const svg = document.querySelector("svg");
  const svgRect = rootDiv.getBoundingClientRect();

  // Calculate the center position of the circle within the SVG canvas
  const centerX = rect.left - svgRect.left + rect.width / 2;
  const centerY = rect.top - svgRect.top + rect.height / 2;

  const randomFlareEffect = Math.floor(Math.random() * 6) + 1;

  // Use the center coordinates to position the circle element
  const flare = document.createElement('div');
  flare.style.width = '5px';
  flare.style.height = '5px';
  // flare.style.backgroundColor = "rgba(255, 0, 0, 0.4";
  flare.style.borderRadius = '50%';
  flare.style.position = 'absolute';
  flare.style.transform = 'translate(-50%, -50%) scale(1)';
  flare.style.top = `${centerY}px`;
  flare.style.left = `${centerX}px`;
  flare.style.zIndex = '1';
  flare.classList.add(`createArrival${randomFlareEffect}`);

  // Append the circle element to the parent container
  const container = document.querySelector('#root');
  container.appendChild(flare);

  const randomAfterShockEffect = Math.floor(Math.random() * 6) + 1;

  let afterShock;
  // create a duplicate element in the same place after 0.1 seconds
  setTimeout(() => {
    afterShock = document.createElement('div');
    afterShock.style.width = '5px';
    afterShock.style.height = '5px';
    afterShock.style.borderRadius = '50%';
    afterShock.style.position = 'absolute';
    afterShock.style.transform = 'translate(-50%, -50%) scale(1)';
    afterShock.style.top = `${centerY}px`;
    afterShock.style.left = `${centerX}px`;
    afterShock.style.zIndex = '1';
    afterShock.classList.add(
      `createArrivalAfterShock${randomAfterShockEffect}`
    );
    container.appendChild(afterShock);
  }, 400);

  // remove both elements after 1 second
  setTimeout(() => {
    flare.remove();
  }, 2000);

  setTimeout(() => {
    afterShock.remove();
  }, 6000);
};

// NOT SURE OF THE ORGINAL PURPOSE OF THE BELOW CODE SO KEEPING IT FOR THE TIME BEING

// // Apply css effects to the circle elements that exist in the svg already
// const arrivalFlareEffectTransform = (stationName) => {
//   const centreEl = document.getElementById(stationName);
//   // const outerEl = document.getElementById(arrivalPointOuter);
//   //add the class of "active" to the element
//   centreEl.classList.add('arrivalInner');
//   // outerEl.classList.add("arrivalOuter");

//   //remove the class of "active" after 1 second
//   setTimeout(function () {
//     centreEl.classList.remove('arrivalInner');
//     // outerEl.classList.remove("arrivalOuter");
//   }, 1500);
//   console.log(centreEl.id);
// };
