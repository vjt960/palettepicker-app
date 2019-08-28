import React from "react";
import EditBarFull from "./EditBarFull";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

describe("EditBarFull", () => {
  let wrapper;
  const mockUpdateColors = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <EditBarFull
        updateColors={mockUpdateColors}
        hueLocked={false}
        editable={false}
      />
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
  it("should have transform inline styles if props.editable is true", () => {
    const wrapper = shallow(
      <EditBarFull
        updateColors={mockUpdateColors}
        hueLocked={false}
        editable={true}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
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
    const colorSchemeBtn0 = wrapper
      .find('[name="colorScheme-selection"]')
      .at(0);
    colorSchemeBtn0.simulate("click");
    expect(updateColorScheme).toHaveBeenCalled();
    const colorSchemeBtn1 = wrapper
      .find('[name="colorScheme-selection"]')
      .at(1);
    colorSchemeBtn1.simulate("click");
    expect(updateColorScheme).toHaveBeenCalled();
    const colorSchemeBtn2 = wrapper
      .find('[name="colorScheme-selection"]')
      .at(2);
    colorSchemeBtn2.simulate("click");
    expect(updateColorScheme).toHaveBeenCalled();
    const colorSchemeBtn3 = wrapper
      .find('[name="colorScheme-selection"]')
      .at(3);
    colorSchemeBtn3.simulate("click");
    expect(updateColorScheme).toHaveBeenCalled();
    const colorSchemeBtn4 = wrapper
      .find('[name="colorScheme-selection"]')
      .at(4);
    colorSchemeBtn4.simulate("click");
    expect(updateColorScheme).toHaveBeenCalled();
  });
  it("should invoke the updateVariation function when the variation-selection inputs are clicked", () => {
    const updateVariation = jest.fn();
    wrapper = shallow(<EditBarFull updateVariation={updateVariation} />);
    const variationBtn0 = wrapper.find('[name="variation-selection"]').at(0);
    variationBtn0.simulate("click");
    expect(updateVariation).toHaveBeenCalled();
    const variationBtn1 = wrapper.find('[name="variation-selection"]').at(1);
    variationBtn1.simulate("click");
    expect(updateVariation).toHaveBeenCalled();
    const variationBtn2 = wrapper.find('[name="variation-selection"]').at(2);
    variationBtn2.simulate("click");
    expect(updateVariation).toHaveBeenCalled();
    const variationBtn3 = wrapper.find('[name="variation-selection"]').at(3);
    variationBtn3.simulate("click");
    expect(updateVariation).toHaveBeenCalled();
    const variationBtn4 = wrapper.find('[name="variation-selection"]').at(4);
    variationBtn4.simulate("click");
    expect(updateVariation).toHaveBeenCalled();
    const variationBtn5 = wrapper.find('[name="variation-selection"]').at(5);
    variationBtn5.simulate("click");
    expect(updateVariation).toHaveBeenCalled();
  });
});
