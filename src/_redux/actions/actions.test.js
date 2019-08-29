import * as actions from "./index";

describe("actions", () => {
  it("should have a type of CREATE_NEW_PROJECT", () => {
    const project = { id: 7 };
    const expectedAction = {
      type: "CREATE_NEW_PROJECT",
      project
    };
    const result = actions.createNewProject(project);
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of UPDATE_CURRENT_PALETTE", () => {
    const palette = { id: 9 };
    const expectedAction = {
      type: "UPDATE_CURRENT_PALETTE",
      palette
    };
    const result = actions.updateCurrentPalette(palette);
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of REMOVE_USER_PROJECT", () => {
    const id = 33;
    const expectedAction = {
      type: "REMOVE_USER_PROJECT",
      id
    };
    const result = actions.removeUserProject(id);
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of UPDATE_CURRENT_USER", () => {
    const userDetails = { id: 3, username: "Kanye" };
    const projects = [{ id: 22 }];
    const expectedAction = {
      type: "UPDATE_CURRENT_USER",
      userDetails,
      projects
    };
    const result = actions.updateCurrentUser(userDetails, projects);
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of LOGOUT_USER", () => {
    const expectedAction = {
      type: "LOGOUT_USER"
    };
    const result = actions.logoutUser();
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of RELOAD_PROJECTS", () => {
    const projects = [{ id: 8 }];
    const expectedAction = {
      type: "RELOAD_PROJECTS",
      projects
    };
    const result = actions.reloadProjects(projects);
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of REMOVE_PALETTE", () => {
    const projectId = 9;
    const paletteId = 3;
    const expectedAction = {
      type: "REMOVE_PALETTE",
      projectId,
      paletteId
    };
    const result = actions.removePalette(projectId, paletteId);
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of ADD_USER_PROJECTS", () => {
    const project = { id: 9 };
    const expectedAction = {
      type: "ADD_USER_PROJECTS",
      project
    };
    const result = actions.addUserProjects(project);
    expect(result).toEqual(expectedAction);
  });
});
