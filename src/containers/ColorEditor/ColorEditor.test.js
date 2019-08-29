import React from "react";
import ColorEditor from "./ColorEditor";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

describe("ColorEditor", () => {
  let wrapper;
  let ColorEditorInstance;
  const mockPalette = { hex: "#123" };
  const handleColorMock = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <ColorEditor palette={mockPalette} handleColor={handleColorMock} />
    );
    ColorEditorInstance = wrapper.instance();
  });
  it("should match the snapshot", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it("componentDidMount: should pass the prop hex value to color in state", () => {
    expect(ColorEditorInstance.state.color).toBe("#123");
  });
  it("handleChange: should update state.color to the value argument passed in", () => {
    ColorEditorInstance.handleChange({ target: { value: "a" } });
    expect(ColorEditorInstance.state.color).toEqual("a");
  });
  it("should invoke handleChange on 'color-input' change event", () => {
    const input = wrapper.find(".color-input");
    jest.spyOn(wrapper.instance(), "handleChange");
    input.simulate("change", { target: { value: "hello" } });
    expect(wrapper.instance().handleChange).toHaveBeenCalled();
  });
  it("should invoke the handleColor function when the 'update-btn' button is clicked", () => {
    const button = wrapper.find(".update-btn");
    button.simulate("click");
    expect(handleColorMock).toHaveBeenCalled();
  });
  it("should invoke the handleColor function when the 'remove-btn' button is clicked", () => {
    const button = wrapper.find(".remove-btn");
    button.simulate("click");
    expect(handleColorMock).toHaveBeenCalled();
  });
});
