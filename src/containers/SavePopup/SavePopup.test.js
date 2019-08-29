import React from "react";
import { shallow } from "enzyme";
import { SavePopup } from "./SavePopup";

describe("SavePopup", () => {
  it("matches snapshot", () => {
    const props = {
      currentPalette: [
        {
          locked: true
        }
      ],
      userProjects: [{ projectId: 8 }]
    };
    const wrapper = shallow(<SavePopup {...props} />, {
      disableLifecycleMethods: true
    });
    expect(wrapper).toMatchSnapshot();
  });
});
