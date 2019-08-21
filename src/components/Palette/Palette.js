import React, { Component } from "react";
import "./Palette.css";

export default class Palette extends Component {
  render() {
    const colors = this.props.colors.map(color => {
      return <div className="color" style={{ backgroundColor: color }} />;
    });
    return (
      <article className="Palette">
        <h4 className="palette-title">{this.props.title}</h4>
        {colors}
      </article>
    );
  }
}
