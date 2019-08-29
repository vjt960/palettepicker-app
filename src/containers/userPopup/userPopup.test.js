import React from "react";
import { shallow } from "enzyme";
import { userPopup } from "./userPopup";

describe("userPopup", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<userPopup />, {
      disableLifecycleMethods: true
    });
    expect(wrapper).toMatchSnapshot();
  });
});
