import React, { Component } from "react";
import "./Project.css";

export default class Project extends Component {
  render() {
    return (
      <section className="Project">
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
    );
  }
}
