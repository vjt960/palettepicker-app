export const userProjects = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER_PROJECTS":
      return action.project;
    case "CREATE_NEW_PROJECT":
      return action.project;
    case "UPDATE_EXISTING_PROJECT":
      return action.project;
    default:
      return state;
  }
};
