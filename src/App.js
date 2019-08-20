import React from "react";
import "./App.css";
import PalettePicker from "./components/PalettePicker/PalettePicker";

function App() {
  return (
    <div className="App">
      <header className="NavBar">
        <p>NavBar</p>
      </header>
      <main className="MainPage">
        <PalettePicker vRotate={1} totalColors={25} />
        <section className="PalettesContainer">
          <article className="palettes-header">
            <p>This area is where your projects will be saved!</p>
          </article>
          <section className="ProjectBox">
            <div className="project-title">
              <h2>Project 5</h2>
            </div>
            <article className="Palette">Palette</article>
            <article className="Palette">Palette</article>
            <article className="Palette">Palette</article>
          </section>
          <section className="ProjectBox">
            <div className="project-title">
              <h2>Happy Colors!</h2>
            </div>
            <article className="Palette">Palette</article>
            <article className="Palette">Palette</article>
          </section>
          <section className="ProjectBox">
            <div className="project-title">
              <h2>Main Site colors</h2>
            </div>
            <article className="Palette">Palette</article>
          </section>
          <section className="ProjectBox">
            <div className="project-title">
              <h2>Alts -- send to steve</h2>
            </div>
            <article className="Palette">Palette</article>
            <article className="Palette">Palette</article>
            <article className="Palette">Palette</article>
            <article className="Palette">Palette</article>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
