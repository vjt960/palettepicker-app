import React from "react";
import Project from "./Project";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

describe("Project", () => {
  let wrapper;
  const mockPalette = [{ paletteTitle: "ItsMe!", paletteColors: ["#111"] }];
  const removeProjectMock = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <Project palettes={mockPalette} removeProject={removeProjectMock} />
    );
  });
  it("should match the snapshot", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it("should invoke the 'removeProject' function when '.project-delete' is called", () => {
    const button = wrapper.find(".project-delete");
    button.simulate("click");
    expect(removeProjectMock).toHaveBeenCalled();
  });
});
