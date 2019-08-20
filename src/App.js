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
        <PalettePicker vRotate={0} totalColors={25} pColorScheme="analogic" />
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
