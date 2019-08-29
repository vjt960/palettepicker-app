import React from "react";
import ColorBar from "./ColorBar";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

describe("ColorBar", () => {
  let wrapper;
  const handleLockStatus = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <ColorBar
        color={{ hex: "#fff", locked: false }}
        number={4}
        handleLockStatus={handleLockStatus}
      />
    );
  });
  it("should match the snapshot", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it("should display the lock icon if the color is locked", () => {
    const wrapper = shallow(
      <ColorBar color={{ hex: "#fff", locked: true }} number={4} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it("should invoke the handleLockStatus function if the '.lock-button' (while locked:false) is clicked", () => {
    const button = wrapper.find(".color-block");
    button.simulate("click");
    expect(handleLockStatus).toHaveBeenCalled();
  });
  it("should invoke the handleLockStatus function if the '.lock-button' (while locked:true) is clicked", () => {
    const wrapper = shallow(
      <ColorBar
        color={{ hex: "#fff", locked: true }}
        number={4}
        handleLockStatus={handleLockStatus}
      />
    );
    const button = wrapper.find(".color-block");
    button.simulate("click");
    expect(handleLockStatus).toHaveBeenCalled();
  });

  it("should render the hex codes vertically if the vRotate prop is passed in", () => {
    const wrapper = shallow(
      <ColorBar color={{ hex: "#fff", locked: true }} vRotate={true} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
