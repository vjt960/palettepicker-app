import React from "react";
import "./App.css";
import LandingPage from "../LandingPage/LandingPage";
import NavBar from "../NavBar/NavBar";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={LandingPage} />
    </div>
  );
}

export default App;
