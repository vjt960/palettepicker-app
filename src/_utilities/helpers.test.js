import { parseProjects } from "./helpers";

describe("helpers", () => {
  describe("parseProjects", () => {
    let projects, projects2;
    beforeEach(() => {
      projects = [
        {
          title: "proj one",
          id: 4,
          description: "placeholder random text",
          palettes: [
            { id: 8, colors: ["yellow", "red", "blue"], name: "palette1" }
          ]
        }
      ];
      projects2 = [
        {
          title: "proj one",
          id: 4,
          description: "placeholder random text",
          palettes: [{ id: null }]
        }
      ];
    });

    it("parses projects data", () => {
      const result = parseProjects(projects);
      const expected = [
        {
          palettes: [
            {
              paletteColors: ["yellow", "red", "blue"],
              paletteId: 8,
              paletteTitle: "palette1"
            }
          ],
          projectDesc: "placeholder random text",
          projectId: 4,
          projectTitle: "proj one"
        }
      ];
      expect(result).toEqual(expected);
    });

    it("parses projects with an empty palettes array if project has no palettes", () => {
      const result = parseProjects(projects2);
      const expected = [
        {
          palettes: [],
          projectDesc: "placeholder random text",
          projectId: 4,
          projectTitle: "proj one"
        }
      ];
      expect(result).toEqual(expected);
    });
  });
});
