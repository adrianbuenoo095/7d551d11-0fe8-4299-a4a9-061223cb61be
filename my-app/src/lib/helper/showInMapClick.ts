export const showInMapClicked = (direction: string) => {
  window.open(`https://www.google.com/maps/search/?api=1&query=${direction}`);
};
