export const userProjects = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER_PROJECTS":
      return action.project;
    default:
      return state;
  }
};
