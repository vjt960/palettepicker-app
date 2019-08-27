import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../_redux/actions";
import "./SavePopup.scss";
import ColorEditor from "../../components/ColorEditor/ColorEditor";

class SavePopup extends Component {
  state = {
    displayProjects: false,
    createNewProject: false
  };

  handleExit = () => {
    this.props.history.push("/");
  };

  handleColor = (color, format, newColor) => {
    const paletteCopy = this.props.currentPalette.slice();
    const colorIndex = this.props.currentPalette.findIndex(
      paletteColor => paletteColor.hex === color.hex
    );
    if (format === "remove") {
      paletteCopy[colorIndex].locked = false;
      this.props.updateCurrentPalette(paletteCopy);
    } else if (format === "update") {
      paletteCopy[colorIndex].hex = newColor;
      this.props.updateCurrentPalette(paletteCopy);
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Submitting");
  };

  displayProjects = () => {
    this.setState({ displayProjects: true, createNewProject: false });
  };

  createNewProject = () => {
    this.setState({ displayProjects: false, createNewProject: true });
  };

  render() {
    const colorOptions = this.props.currentPalette
      .filter(palette => palette.locked === true)
      .map(palette => {
        return (
          <ColorEditor
            palette={palette}
            handleColor={this.handleColor}
            key={palette.hex}
          />
        );
      });

    const existingProjects = (
      <section className="user-projects">
        {this.props.userProjects.map((project, i) => {
          return (
            <article key={i}>
              <input
                type="radio"
                name="user-project"
                value={project.projectTitle}
              />
              <label>{project.projectTitle}</label>
            </article>
          );
        })}
      </section>
    );

    const newProject = (
      <section className="new-project">
        <label>Project Title:</label>
        <input type="text" />
        <label>Project Description (optional):</label>
        <input type="text" />
      </section>
    );

    return (
      <Fragment>
        <div className="screen" />
        <section className="SavePopup">
          <button className="editor-exit" onClick={this.handleExit}>
            X
          </button>
          <h3 className="editor-title">Save Your Palette</h3>
          <form className="palette-form">
            <label htmlFor="palette-title">Palette Title</label>
            <input type="text" name="palette-title" />
            <section className="palettes-section">{colorOptions}</section>
            {this.state.displayProjects && existingProjects}
            {this.state.createNewProject && newProject}
            <button type="button" onClick={this.handleSubmit}>
              Submit
            </button>
            <button type="button" onClick={this.displayProjects}>
              Save to an Existing Project
            </button>
            <button type="button" onClick={this.createNewProject}>
              Create New Project
            </button>
          </form>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = store => ({
  currentPalette: store.currentPalette,
  userProjects: store.userProjects
});

const mapDispatchToProps = dispatch => ({
  updateCurrentPalette: palette =>
    dispatch(actions.updateCurrentPalette(palette))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavePopup);
