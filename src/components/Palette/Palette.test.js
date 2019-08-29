import React from "react";
import { Palette } from "./Palette";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

describe("Palette", () => {
  let wrapper;
  const historyMock = { push: jest.fn() };
  beforeEach(() => {
    wrapper = shallow(<Palette history={historyMock} colors={["#111"]} />);
  });
  it("should match the snapshot", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it("should invoke the openEditor function when clicked", () => {
    jest;
    const button = wrapper.find(".color");
    button.simulate("click");
    expect(historyMock.push.mock.calls[0]).toEqual(["edit-palette"]);
  });
  xit("should invoke the onClick function when the '.palette-delete' is clicked", () => {
    // UPDATE WITH MERGE
    const button = wrapper.find(".palette-delete");
    button.simulate("click");
    expect(button).toHaveBeenCalled();
  });
});
