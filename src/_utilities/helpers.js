export const parseProjects = projects => {
  projects.map(project => {
    return {
      projectTitle: project.name,
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
