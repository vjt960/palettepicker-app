import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

describe("App", () => {
  it("should match the snapshot", () => {
    const wrapper = shallow(<App />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
