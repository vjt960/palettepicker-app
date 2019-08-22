import React from "react";
import "./Project.css";
import Palette from "../Palette/Palette";

const Project = props => {
  const palettes = props.palettes.map(palette => {
    return (
      <Palette
        title={palette.paletteTitle}
        colors={palette.paletteColors}
        key={palette.paletteId}
      />
    );
  });
  return (
    <section className="Project">
      <div className="project-title">
        <h2>{props.title}</h2>
      </div>
      <div className="dotted-line" />
      <div className="delete-wrapper">
        <button
          onClick={() => console.log("Delete this Project")}
          className="project-delete"
        >
          <h2>X</h2>
        </button>
      </div>
      {palettes}
    </section>
  );
};

export default Project;
