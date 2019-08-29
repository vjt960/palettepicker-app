import React from "react";
import { PalettePicker } from "./PalettePicker";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

describe("PalettePicker", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PalettePicker />);
    const PalettePickerInstance = wrapper.instance();
  });
  it("should match the snapshot", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  xit("componentDidUpdate: should invoke generateColors", () => {
    PalettePickerInstance.generateColors();
    expect(PalettePickerInstance.state.colors).toBe(true);
  });
});
