import React from "react";
import EditBarPartial from "./EditBarPartial";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

describe("EditBarPartial", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<EditBarPartial hueLocked={true} />);
  });
  it("should match the snapshot", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it("should have pb-inactive rendering if props.editable is true", () => {
    wrapper = shallow(<EditBarPartial editable={true} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it("should have pb-active rendering if props.editable is false", () => {
    wrapper = shallow(<EditBarPartial editable={false} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it("should lock the 'Refresh Colors' button if hue selection is locked", () => {
    const button = wrapper
      .find("button")
      .at(0)
      .hasClass("locked-btn");
    expect(button).toBe(true);
  });
  it("should unlock the 'Refresh Colors' button if hue selection is unlocked", () => {
    const wrapper = shallow(<EditBarPartial hueLocked={false} />);
    const button = wrapper
      .find("button")
      .at(0)
      .hasClass("locked-btn");
    expect(button).toBe(false);
  });
  it("should display the locked icon if the hueLocked prop is true", () => {
    const icon = wrapper
      .find(".format-hue")
      .children("i")
      .hasClass("fa-lock");
    expect(icon).toEqual(true);
  });
  it("should display the unlocked icon if the hueLocked prop is false", () => {
    const wrapper = shallow(<EditBarPartial hueLocked={false} />);
    const icon = wrapper
      .find(".format-hue")
      .children("i")
      .hasClass("fa-unlock-alt");
    expect(icon).toEqual(true);
  });
});
