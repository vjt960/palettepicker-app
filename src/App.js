import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="NavBar">
        <p>NavBar</p>
      </header>
      <main className="MainPage">
        <section className="PaletteBox">
          <p>PaletteBox</p>
        </section>
        <section className="PalettesContainer">
          <section className="ProjectBox">
            <article className="Palette">Palette</article>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
