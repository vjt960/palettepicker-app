import React from "react";
import "./Palette.css";

const Palette = props => {
  const colors = props.colors.map((color, i) => {
    return (
      <div
        className="color"
        key={i}
        style={{ backgroundColor: color }}
        onClick={() => console.log("open box")}
      />
    );
  });
  return (
    <article className="Palette">
      <button className="palette-delete">X</button>
      <h4 className="palette-title">{props.title}</h4>
      {colors}
    </article>
  );
};

export default Palette;
