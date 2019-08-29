import React from "react";
import PaletteEditor from "./PaletteEditor";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

describe("PaletteEditor", () => {
  let wrapper;
  const historyMock = { push: jest.fn() };
  beforeEach(() => {
    wrapper = shallow(<PaletteEditor history={historyMock} />);
  });
  it("should match the snapshot", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it("should return to the previous page when 'editor-exit' has been clicked", () => {
    const button = wrapper.find(".editor-exit");
    button.simulate("click");
    expect(historyMock.push.mock.calls[0]).toEqual(["/"]);
  });
});
