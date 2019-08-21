import React from "react";
import "./Project.css";
import Palette from "../Palette/Palette";

const Project = props => {
  const palettes = props.palettes.map(palette => {
    return (
      <Palette title={palette.paletteTitle} colors={palette.paletteColors} />
    );
  });
  return (
    <section className="Project">
      <div className="project-title">
        <h2>{props.title}</h2>
      </div>
      <div className="dotted-line" />
      <div className="delete-wrapper">
        <div className="project-delete">
          <h2>X</h2>
        </div>
      </div>
      {palettes}
    </section>
  );
};

export default Project;
