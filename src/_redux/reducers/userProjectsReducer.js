export const userProjects = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_CURRENT_USER":
      return action.projects;
    case "LOGOUT_USER":
      const resetState = [];
      return resetState;
    case "RELOAD_PROJECTS":
      return action.projects;
    case "REMOVE_USER_PROJECT":
      return state.filter(project => project.projectId !== action.id);
    case "REMOVE_PALETTE":
      return state.map(project => {
        if (project.projectId !== action.projectId) {
          return project;
        } else {
          return {
            projectTitle: project.projectTitle,
            projectId: project.projectId,
            projectDesc: project.projectDesc,
            palettes: project.palettes.filter(
              palette => palette.paletteId !== action.paletteId
            )
          };
        }
      });
    default:
      return state;
  }
};
