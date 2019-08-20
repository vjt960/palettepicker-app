import React from "react";
import "./App.css";
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
        <PalettePicker vRotate={0} totalColors={25} />
        <section className="PalettesContainer">
          <article className="palettes-header">
            <p>This area is where your projects will be saved!</p>
          </article>
          <section className="ProjectBox">
            <div className="project-title">
              <h2>Project 5</h2>
            </div>
            <div className="delete-wrapper">
              <div className="project-delete">
                <h2>X</h2>
              </div>
            </div>
            <article className="Palette">Palette</article>
            <article className="Palette">Palette</article>
            <article className="Palette">Palette</article>
          </section>
          <section className="ProjectBox">
            <div className="project-title">
              <h2>Happy Colors!</h2>
            </div>
            <div className="delete-wrapper">
              <div className="project-delete">
                <h2>X</h2>
              </div>
            </div>
            <article className="Palette">Palette</article>
            <article className="Palette">Palette</article>
          </section>
          <section className="ProjectBox">
            <div className="project-title">
              <h2>Main Site colors</h2>
            </div>
            <div className="delete-wrapper">
              <div className="project-delete">
                <h2>X</h2>
              </div>
            </div>
            <article className="Palette">
              <h4 className="palette-title">Very Cool Long Title</h4>
              <div className="color" />
              <div className="color" />
            </article>
          </section>
          <section className="ProjectBox">
            <div className="project-title">
              <h2>Alts -- send to steve</h2>
            </div>
            <div className="delete-wrapper">
              <div className="project-delete">
                <h2>X</h2>
              </div>
            </div>
            <article className="Palette">
              <h4 className="palette-title">An Especially Long Title</h4>
              <div className="color" />
              <div className="color" />
              <div className="color" />
              <div className="color" />
              <div className="color" />
            </article>
            <article className="Palette">
              <h4 className="palette-title">Untitled</h4>
              <div className="color" />
              <div className="color" />
              <div className="color" />
            </article>
            <article className="Palette">
              <h4 className="palette-title">Design Primary</h4>
              <div className="color" />
            </article>
            <article className="Palette">
              <h4 className="palette-title">Design Alt</h4>
              <div className="color" />
              <div className="color" />
              <div className="color" />
              <div className="color" />
              <div className="color" />
              <div className="color" />
              <div className="color" />
              <div className="color" />
              <div className="color" />
              <div className="color" />
              <div className="color" />
              <div className="color" />
              <div className="color" />
              <div className="color" />
              <div className="color" />
              <div className="color" />
            </article>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
