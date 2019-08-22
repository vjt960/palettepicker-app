import React, { Fragment } from "react";
import "./PaletteEditor.css";

export default function PaletteEditor() {
  return (
    <Fragment>
      <div className="screen" />
      <section className="PaletteEditor">
        <button className="editor-exit">X</button>
        <form className="editor-form" action="">
          <h3 className="editor-title">Title</h3>
          <label htmlFor="">Label 1</label>
          <input type="text" />
          <label htmlFor="">Label 2</label>
          <input type="text" />
        </form>
      </section>
    </Fragment>
  );
}
