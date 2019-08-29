import React from "react";
import { Palette } from "./Palette";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

describe("Palette", () => {
  let wrapper;
  const historyMock = { push: jest.fn() };
  const removePaletteMock = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <Palette
        history={historyMock}
        colors={["#111"]}
        removePalette={removePaletteMock}
      />
    );
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
  it("should invoke the onClick function when the '.palette-delete' is clicked", () => {
    const button = wrapper.find(".palette-delete");
    button.simulate("click");
    expect(removePaletteMock).toHaveBeenCalled();
  });
});
