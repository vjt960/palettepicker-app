import React from "react";
import EditBarFull from "./EditBarFull";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

describe("EditBarFull", () => {
  let wrapper;
  const mockUpdateColors = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <EditBarFull updateColors={mockUpdateColors} hueLocked={false} />
    );
  });
  it("should match the snapshot with all data passed in correctly", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it("should updateColors when the form onSubmit event occurs", () => {
    const form = wrapper.find(".edits-form");
    const children = form
      .render()
      .children()
      .children();
    form.simulate("submit", { target: { children } });
    expect(mockUpdateColors).toHaveBeenCalled();
  });
  it("should render the 'Lock' button when the hueLocked prop is false", () => {
    const lockedButton = wrapper
      .find("button")
      .at(0)
      .text();
    expect(lockedButton).toEqual("Lock");
  });
  it("should render the 'Unlock' button when the hueLocked prop is true", () => {
    const wrapper = shallow(<EditBarFull hueLocked={true} />);
    const unLockedButton = wrapper
      .find("button")
      .at(0)
      .text();
    expect(unLockedButton).toEqual("Unlock");
  });
  it("should invoke the updateColorScheme function when the colorScheme-selection inputs are clicked", () => {
    const updateColorScheme = jest.fn();
    wrapper = shallow(<EditBarFull updateColorScheme={updateColorScheme} />);
    const colorSchemeBtn = wrapper.find('[name="colorScheme-selection"]').at(0);
    colorSchemeBtn.simulate("click");
    expect(updateColorScheme).toHaveBeenCalled();
  });
  it("should invoke the updateVariation function when the variation-selection inputs are clicked", () => {
    const updateVariation = jest.fn();
    wrapper = shallow(<EditBarFull updateVariation={updateVariation} />);
    const variationBtn = wrapper.find('[name="variation-selection"]').at(0);
    variationBtn.simulate("click");
    expect(updateVariation).toHaveBeenCalled();
  });
});
