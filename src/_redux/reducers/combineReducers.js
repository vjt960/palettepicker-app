import { combineReducers } from "redux";
import { userProjects } from "./userProjectsReducer";
import { currentPalette } from "./currentPaletteReducer";

export const rootReducer = combineReducers({
  userProjects,
  currentPalette
});
