export const userDetails = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_CURRENT_USER":
      return action.userDetails;
    case "LOGOUT_USER":
      const resetState = {};
      return resetState;
    default:
      return state;
  }
};
