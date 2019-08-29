import { userDetails } from "./userDetailsReducer";

describe("userDetailsReducer", () => {
  it("should return initial state", () => {
    const expected = {};
    const result = userDetails(undefined, "");
    expect(result).toEqual(expected);
  });

  it("should update the userDetails state with UPDATE_CURRENT_USER", () => {
    const state = {};
    const mockDetails = { id: 9, name: "Kanye" };
    const action = { type: "UPDATE_CURRENT_USER", userDetails: mockDetails };
    const result = userDetails(state, action);
    expect(result).toEqual(mockDetails);
  });

  it("should update the userDetails state with LOGOUT_USER", () => {
    const state = {};
    const action = { type: "LOGOUT_USER" };
    const result = userDetails(state, action);
    expect(result).toEqual(state);
  });
});
