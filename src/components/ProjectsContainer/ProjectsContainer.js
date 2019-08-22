import React, { Component } from "react";
import Project from "../Project/Project";
import "./ProjectsContainer.css";

export default class ProjectsContainer extends Component {
  state = {
    user: { userId: "123ddEad2199E", username: "Elliot" },
    projects: [
      {
        projectTitle: "--Send to Steve",
        projectId: "asd3213ey1u",
        projectDesc: "Palettes that Steve requested ...",
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
      },
      {
        projectTitle: "My Favorites!",
        projectId: "3ykuyOP23eeE",
        projectDesc: "A list of my favorite palettes.",
        palettes: [
          {
            paletteTitle: "For Mary",
            paletteColors: ["#568111", "#512612", "#EA31EA"]
          },
          { paletteTitle: "Idea - ???", paletteColors: ["#123456", "#99EE32"] },
          {
            paletteTitle: "Iteration 2",
            paletteColors: ["#FEDCBA", "#FFFFDD", "#AABBE1", "#3A3A3A"]
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
    const textMessage = this.state.projects.length ? (
      <p>Here are your projects!</p>
    ) : (
      <p>This area is where your projects will be saved!</p>
    );

    return (
      <div>
        <section className="ProjectsContainer">
          <React.Fragment>
            <header
              className={`projects-container-header ${
                this.state.projects.length ? null : "header-hidden"
              }`}
            >
              {textMessage}
            </header>
            {projects}
          </React.Fragment>
        </section>
      </div>
    );
  }
}
