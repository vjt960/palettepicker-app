import React from "react";
import { withRouter } from "react-router-dom";
import "./Palette.css";

export const Palette = props => {
  const openEditor = () => {
    props.history.push("edit-palette");
  };
  const colors = props.colors.map((color, i) => {
    return (
      <div
        className="color"
        key={i}
        style={{ backgroundColor: color }}
        onClick={openEditor}
      />
    );
  });
  return (
    <article className="Palette">
      <button
        className="palette-delete"
        onClick={() => props.removePalette(props.projectId, props.id)}
      >
        X
      </button>
      <h4 className="palette-title">{props.title}</h4>
      {colors}
    </article>
  );
};

export default withRouter(Palette);
