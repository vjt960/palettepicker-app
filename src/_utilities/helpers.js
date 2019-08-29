export const parseProjects = projects => {
  return projects.map(project => {
    if (!project.palettes[0].id) {
      return {
        projectTitle: project.title,
        projectId: project.id,
        projectDesc: project.description,
        palettes: []
      };
    }
    return {
      projectTitle: project.title,
      projectId: project.id,
      projectDesc: project.description,
      palettes: project.palettes.map(palette => {
        return {
          paletteTitle: palette.name,
          paletteColors: palette.colors,
          paletteId: palette.id
        };
      })
    };
  });
};
