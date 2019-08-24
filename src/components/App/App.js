import React from "react";
import "./App.css";
import LandingPage from "../LandingPage/LandingPage";
import NavBar from "../NavBar/NavBar";
import PaletteEditor from "../PaletteEditor/PaletteEditor";
import SavePopup from "../../containers/SavePopup/SavePopup";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavBar} />
      <Route exact path="/edit-palette" component={PaletteEditor} />
      <Route exact path="/save-palette" component={SavePopup} />
      <Route path="/" component={LandingPage} />
    </div>
  );
}

export default App;
