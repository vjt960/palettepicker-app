import {
  loginUser,
  createUser,
  getProjects,
  createProject,
  deleteProject,
  createPalette,
  deletePalette
} from "./apiCalls";

describe("apiCalls", () => {
  describe("loginUser", () => {
    let mockUser;
    beforeEach(() => {
      mockUser = { id: 1, username: "Jev" };
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockUser)
        });
      });
    });

    it("should be called with the correct url", () => {
      const url = "https://kra-teo-colors-api.herokuapp.com/api/v1/users";
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: "jev", password: "asdf" })
      };
      const expected = [url, options];
      loginUser("jev", "asdf");
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it("should return a user object", async () => {
      const result = await loginUser("jev", "asdf");
      expect(result).toEqual(mockUser);
    });

    it("should return an error if response is not ok", () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.resolve({
          ok: false,
          json: () => Promise.resolve({ error: "Failed" })
        });
      });
      expect(loginUser("jev", "yeet")).rejects.toEqual(Error("Failed"));
    });
  });

  describe("createUser", () => {
    let mockUser;
    beforeEach(() => {
      mockUser = { id: 1, username: "Jev" };
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockUser)
        });
      });
    });

    it("should be called with the correct url", () => {
      const url = "https://kra-teo-colors-api.herokuapp.com/api/v1/users/new";
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: "jev", password: "asdf" })
      };
      const expected = [url, options];
      createUser("jev", "asdf");
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it("should return a user object", async () => {
      const result = await createUser("jev", "asdf");
      expect(result).toEqual(mockUser);
    });

    it("should return an error if response is not ok", () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.resolve({
          ok: false,
          json: () => Promise.resolve({ error: "Failed" })
        });
      });
      expect(createUser("jev", "yeet")).rejects.toEqual(Error("Failed"));
    });
  });

  describe("getProjects", () => {
    let mockProjects;
    let userID;
    beforeEach(() => {
      userID = 9;
      mockProjects = [{ id: 8 }];
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockProjects)
        });
      });
    });

    it("should be called with the correct url", () => {
      const url = `https://kra-teo-colors-api.herokuapp.com/api/v1/users/${userID}/projects`;
      getProjects(userID);
      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it("should return an array of project objects", async () => {
      const result = await getProjects(userID);
      expect(result).toEqual(mockProjects);
    });

    it("should return an error if response is not ok", () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.resolve({
          ok: false,
          json: () => Promise.resolve({ error: "Failed" })
        });
      });
      expect(getProjects(userID)).rejects.toEqual(Error("Failed"));
    });
  });

  describe("createProject", () => {
    let user_id;
    let name;
    let description;
    let mockID;
    beforeEach(() => {
      user_id = 3;
      name = "jev";
      description = "random desc text";
      mockID = { id: 9 };
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockID)
        });
      });
    });

    it("should be called with the correct url", () => {
      const url = `https://kra-teo-colors-api.herokuapp.com/api/v1/users/projects/new`;
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id, name, description })
      };
      const expected = [url, options];
      createProject(user_id, name, description);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it("should return the id of the new project", async () => {
      const result = await createProject(user_id, name, description);
      expect(result).toEqual(mockID.id);
    });

    it("should return an error if response is not ok", () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.resolve({
          ok: false,
          json: () => Promise.resolve({ error: "Failed" })
        });
      });
      expect(createProject(user_id, name, description)).rejects.toEqual(
        Error("Failed")
      );
    });
  });

  describe("deleteProject", () => {
    let user_id, projectID;
    beforeEach(() => {
      user_id = 4;
      projectID = 3;
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(projectID)
        });
      });
    });

    it("should be called with the correct url", () => {
      const url = `https://kra-teo-colors-api.herokuapp.com/api/v1/users/${user_id}/projects/${projectID}`;
      const options = {
        method: "DELETE"
      };
      const expected = [url, options];
      deleteProject(user_id, projectID);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it("should return the id of the deleted project", async () => {
      const result = await deleteProject(user_id, projectID);
      expect(result).toEqual(projectID);
    });

    it("should return an error if response is not ok", () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.resolve({
          ok: false,
          json: () => Promise.resolve({ error: "Failed" })
        });
      });
      expect(deleteProject(user_id, projectID)).rejects.toEqual(
        Error("Failed")
      );
    });
  });

  describe("createPalette", () => {
    let projectID, name, colors, mockID;
    beforeEach(() => {
      projectID = 9;
      name = "New Proj";
      colors = ["#000", "#fff", "#e7e7e7"];
      mockID = 22;
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockID)
        });
      });
    });

    it("should be called with the correct url", () => {
      const url = `https://kra-teo-colors-api.herokuapp.com/api/v1/users/projects/${projectID}/palettes`;
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, colors })
      };
      const expected = [url, options];
      createPalette(projectID, name, colors);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it("should return the id of the new palette", async () => {
      const result = await createPalette(projectID, name, colors);
      expect(result).toEqual(mockID);
    });

    it("should return an error if response is not ok", () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.resolve({
          ok: false,
          json: () => Promise.resolve({ error: "Failed" })
        });
      });
      expect(createPalette(projectID, name, colors)).rejects.toEqual(
        Error("Failed")
      );
    });
  });

  describe("deletePalette", () => {
    let projectID, paletteID, mockID;
    beforeEach(() => {
      projectID = 1;
      paletteID = 4;
      mockID = 99;
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockID)
        });
      });
    });

    it("should be called with the correct url", () => {
      const url = `https://kra-teo-colors-api.herokuapp.com/api/v1/projects/${projectID}/palettes/${paletteID}`;
      const options = {
        method: "DELETE"
      };
      const expected = [url, options];
      deletePalette(projectID, paletteID);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it("should return the id of the deleted palette", async () => {
      const result = await deletePalette(projectID, paletteID);
      expect(result).toEqual(mockID);
    });

    it("should return an error if response is not ok", () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.resolve({
          ok: false,
          json: () => Promise.resolve({ error: "Failed" })
        });
      });
      expect(deletePalette(projectID, paletteID)).rejects.toEqual(
        Error("Failed")
      );
    });
  });
});
