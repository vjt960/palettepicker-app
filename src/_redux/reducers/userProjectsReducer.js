export const userProjects = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_CURRENT_USER":
      return action.projects;
    case "LOGOUT_USER":
      const resetState = [];
      return resetState;
    case "RELOAD_PROJECTS":
      return action.projects;
    default:
      return state;
  }
};
