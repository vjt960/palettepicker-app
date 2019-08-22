import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
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
