import React from "react";
import "./App.css";
import LandingPage from "../LandingPage/LandingPage";
import NavBar from "../../containers/NavBar/NavBar";
import PaletteEditor from "../PaletteEditor/PaletteEditor";
import SavePopup from "../../containers/SavePopup/SavePopup";
import userPopup from "../../containers/userPopup/userPopup";
import { Route } from "react-router-dom";
/*
  Primary computer broke, had to move everything over the a temporary laptop and rebuild from the ground up. The local git accounts were not the same as the remote which caused an error at push. Went through multiple git rebases and amends to resolve the conflicts, push up a new branch and fixed the merge conflicts. This branch is simply to test that everything now works correctly and future issues are resolved.
*/
function App() {
  return (
    <section className="App">
      <Route path="/" component={NavBar} />
      <Route path="/" component={LandingPage} />
      <Route exact path="/edit-palette" component={PaletteEditor} />
      <Route exact path="/save-palette" component={SavePopup} />
      <Route exact path="/login" component={userPopup} />
      <Route exact path="/register" component={userPopup} />
    </section>
  );
}

export default App;
