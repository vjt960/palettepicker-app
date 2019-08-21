import React from "react";
import "./App.css";
import ProjectsContainer from "./components/ProjectsContainer/ProjectsContainer";
import PalettePicker from "./components/PalettePicker/PalettePicker";

function App() {
  return (
    <div className="App">
      <header className="NavBar">
        <h2>PalettePicker</h2>
        <form className="navbar-form">
          <button>Login</button>
          <button>Register</button>
        </form>
      </header>
      <main className="MainPage">
        <PalettePicker />
        <ProjectsContainer />
      </main>
    </div>
  );
}

export default App;
