import React from "react";
import { shallow } from "enzyme";
import { userPopup } from "./userPopup";

describe("userPopup", () => {
  it("matches snapshot", () => {
    // const props = {
    //   currentPalette: [
    //     {
    //       locked: true
    //     }
    //   ],
    //   userProjects: [{ projectId: 8 }]
    // };
    const wrapper = shallow(<userPopup />, {
      disableLifecycleMethods: true
    });
    expect(wrapper).toMatchSnapshot();
  });
});
