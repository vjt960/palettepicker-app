export const currentPalette = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_CURRENT_PALETTE":
      return action.palette;
    default:
      return state;
  }
};
