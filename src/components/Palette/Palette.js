import React from "react";
import "./Palette.css";

const Palette = props => {
  const colors = props.colors.map(color => {
    return <div className="color" style={{ backgroundColor: color }} />;
  });
  return (
    <article className="Palette">
      <h4 className="palette-title">{props.title}</h4>
      {colors}
    </article>
  );
};

export default Palette;
