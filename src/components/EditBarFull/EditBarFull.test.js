import React from "react";
import EditBarFull from "./EditBarFull";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

describe("EditBarFull", () => {
  it("should match the snapshot with all data passed in correctly", () => {
    const wrapper = shallow(<EditBarFull updateColors={jest.fn()} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it("should updateColors when the form onSubmit event occurs", () => {
    const mockUpdateColors = jest.fn();
    const wrapper = shallow(<EditBarFull updateColors={mockUpdateColors} />);
    const form = wrapper.find(".edits-form");

    const children = form
      .render()
      .children()
      .children();
    form.simulate("submit", { target: { children } });
    expect(mockUpdateColors).toHaveBeenCalled();
  });
});
