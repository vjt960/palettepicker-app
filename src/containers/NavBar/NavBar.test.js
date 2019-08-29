import React from "react";
import { NavBar } from "./NavBar";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

describe("NavBar", () => {
  let wrapper;
  let mockUserDetails = { username: "steve", id: 123 };
  const mockHandleLogout = jest.fn();
  const historyMock = { push: jest.fn() };
  beforeEach(() => {
    wrapper = shallow(
      <NavBar
        userDetails={mockUserDetails}
        logoutUser={jest.fn()}
        handleLogout={mockHandleLogout}
        history={historyMock}
      />
    );
  });
  it("should match the snapshot", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it("handleClick method should push to the '/' path if no argument is provided (logout)", () => {
    const button = wrapper.find('[data-test="logout"]');
    button.simulate("click", { preventDefault() {} });
    expect(historyMock.push.mock.calls[0]).toEqual(["/"]);
  });
  it("handleClick: should update the url path to login if login passed as argument", () => {
    const wrapper = shallow(<NavBar userDetails={{}} history={historyMock} />);
    const button = wrapper.find('[data-test="login"]');
    button.simulate("click", {
      preventDefault: () => {},
      destination: "login"
    });
    expect(historyMock.push.mock.calls[1]).toEqual(["/login"]);
  });
});
