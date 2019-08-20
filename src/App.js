import React from "react";
import "./App.css";
import PalettePicker from "./components/PalettePicker/PalettePicker";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";

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
        <PalettePicker vRotate={0} totalColors={25} />
        <section className="PalettesContainer">
          <article className="palettes-header">
            <p>This area is where your projects will be saved!</p>
          </article>
          <ProjectContainer />
          {/* <ProjectContainer />
          <ProjectContainer /> */}
        </section>
      </main>
    </div>
  );
}

export default App;
