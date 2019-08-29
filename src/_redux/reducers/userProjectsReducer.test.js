import { userProjects } from "./userProjectsReducer";

describe("userProjectsReducer", () => {
  it("should return initial state", () => {
    const expected = [];
    const result = userProjects(undefined, "");
    expect(result).toEqual(expected);
  });

  it("should update the userProjects state with UPDATE_CURRENT_USER", () => {
    const state = [];
    const mockProjects = [{ id: 1 }, { id: 2 }];
    const action = { type: "UPDATE_CURRENT_USER", projects: mockProjects };
    const result = userProjects(state, action);
    expect(result).toEqual(mockProjects);
  });

  it("should update the userProjects state with LOGOUT_USER", () => {
    const state = [];
    const action = { type: "LOGOUT_USER" };
    const result = userProjects(state, action);
    expect(result).toEqual(state);
  });

  it("should update the userProjects state with RELOAD_PROJECTS", () => {
    const state = [];
    const mockProjects = [{ id: 1 }, { id: 2 }];
    const action = { type: "RELOAD_PROJECTS", projects: mockProjects };
    const result = userProjects(state, action);
    expect(result).toEqual(mockProjects);
  });

  it("should update the userProjects state with REMOVE_USER_PROJECT", () => {
    const state = [{ projectId: 89 }];
    const id = 9;
    const action = { type: "REMOVE_USER_PROJECT", id };
    const result = userProjects(state, action);
    expect(result).toEqual(state);
  });

  it("should update the userProjects state with REMOVE_PALETTE", () => {
    const paletteId = 4;
    const projectId = 7;
    const state = [{ projectId: 89 }];
    const action = { type: "REMOVE_PALETTE", paletteId, projectId };
    const result = userProjects(state, action);
    expect(result).toEqual(state);
  });
});
