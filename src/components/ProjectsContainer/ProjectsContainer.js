import React, { Component } from "react";
import Project from "../Project/Project";
import "./ProjectsContainer.css";

export default class ProjectsContainer extends Component {
  state = {
    projects: [
      {
        projectTitle: "--Send to Steve",
        palettes: [
          {
            paletteTitle: "Ok here is title",
            paletteColors: ["#45CD12", "#DFD442", "#4E3211"]
          },
          { paletteTitle: "Idea - 2 Colors", paletteColors: ["#123456"] },
          {
            paletteTitle: "Serene",
            paletteColors: ["#FEDCBA", "#45CD12", "#3A3A3A", "#123123"]
          },
          {
            paletteTitle: "-- Send to Steve",
            paletteColors: [
              "#FEDCBA",
              "#FEDFED",
              "#ABCABC",
              "#123123",
              "#3A3A3A"
            ]
          }
        ]
      }
    ]
  };
  render() {
    const projects = this.state.projects.map(project => {
      return (
        <Project title={project.projectTitle} palettes={project.palettes} />
      );
    });
    return (
      <div>
        <section className="ProjectsContainer">
          <header className="projects-container-header">
            <p>This area is where your projects will be saved!</p>
          </header>
          {projects}
        </section>
      </div>
    );
  }
}
