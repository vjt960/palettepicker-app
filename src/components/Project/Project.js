import React, { Component } from "react";
import "./Project.css";
import Palette from "../Palette/Palette";

export default class Project extends Component {
  // state = {
  //   colors: [
  //     { title: "Ok here is title", colors: ["#45CD12", "#DFD442", "#4E3211"] },
  //     { title: "Idea - 2 Colors", colors: ["#123456"] },
  //     { title: "Serene", colors: ["#654321", "#ABCDEF"] },
  //     {
  //       title: "-- Send to Steve",
  //       colors: ["#FEDCBA", "#FEDFED", "#ABCABC", "#123123", "#3A3A3A"]
  //     }
  //   ]
  // };
  render() {
    const palettes = this.props.palettes.map(palette => {
      return (
        <Palette title={palette.paletteTitle} colors={palette.paletteColors} />
      );
    });
    return (
      <section className="Project">
        <div className="project-title">
          <h2>{this.props.title}</h2>
        </div>
        <div className="delete-wrapper">
          <div className="project-delete">
            <h2>X</h2>
          </div>
        </div>
        {palettes}
        {/* <Palette
          title={this.props.paletteTitle}
          colors={this.props.paletteColors}
        /> */}
      </section>
    );
  }
}
