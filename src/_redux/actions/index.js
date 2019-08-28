export const addUserProjects = project => {
  return {
    type: "ADD_USER_PROJECTS",
    project
  };
};

export const createNewProject = project => {
  return {
    type: "CREATE_NEW_PROJECT",
    project
  };
};

export const updateExistingProject = project => {
  return {
    type: "UPDATE_EXISTING_PROJECT",
    project
  };
};

export const updateCurrentPalette = palette => {
  return {
    type: "UPDATE_CURRENT_PALETTE",
    palette
  };
};

export const removeUserProject = id => {
  return {
    type: "REMOVE_USER_PROJECT",
    id
  };
};

export const updateCurrentUser = (userDetails, projects = []) => {
  return {
    type: "UPDATE_CURRENT_USER",
    userDetails,
    projects
  };
};

export const logoutUser = user => {
  return {
    type: "LOGOUT_USER"
  };
};

export const reloadProjects = projects => {
  return {
    type: "RELOAD_PROJECTS",
    projects
  };
};
