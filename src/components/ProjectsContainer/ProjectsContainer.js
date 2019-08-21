import React, { Component } from "react";
import Project from "../Project/Project";
import "./ProjectsContainer.css";

export default class ProjectsContainer extends Component {
  state = {
    projects: []
  };
  render() {
    return (
      <div>
        <section className="ProjectsContainer">
          <header className="projects-container-header">
            <p>This area is where your projects will be saved!</p>
          </header>
          <Project />
        </section>
      </div>
    );
  }
}
