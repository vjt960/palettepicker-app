import React from "react";
import { shallow } from "enzyme";
import { ProjectsContainer } from "./ProjectsContainer";

describe("ProjectsContainer", () => {
  it("matches snapshot", () => {
    const props = {
      userProjects: [
        {
          projectTitle: "t",
          palettes: [],
          projectId: 9,
          removeProject: jest.fn(),
          removePalette: jest.fn()
        }
      ]
    };
    const wrapper = shallow(<ProjectsContainer {...props} />, {
      disableLifecycleMethods: true
    });
    expect(wrapper).toMatchSnapshot();
  });
});
