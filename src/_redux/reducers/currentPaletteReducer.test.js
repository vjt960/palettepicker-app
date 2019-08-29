import { currentPalette } from "./currentPaletteReducer";

describe("currentPaletteReducer", () => {
  it("should return initial state", () => {
    const expected = [];
    const result = currentPalette(undefined, "");
    expect(result).toEqual(expected);
  });

  it("should update the currentPalette state with UPDATE_CURRENT_PALETTE", () => {
    const state = [];
    const mockPalette = { id: 9, colors: [] };
    const action = { type: "UPDATE_CURRENT_PALETTE", palette: mockPalette };
    const result = currentPalette(state, action);
    expect(result).toEqual(mockPalette);
  });
});
