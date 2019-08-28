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
      <section className="query-param user-projects">
        <div className="query-title-container">
          <h3>Choose an Existing Project:</h3>
        </div>
        <section className="queries-section">
          {this.props.userProjects.map(project => {
            return (
              <article className="query-radio" key={project.id} id={project.id}>
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
      </section>
    );

    const newProject = (
      <section className="query-param new-project">
        <div className="query-title-container">
          <h3>Name Your Project:</h3>
        </div>
        <label>Project Title:</label>
        <input type="text" />
        <label>Project Description (optional):</label>
        <input type="text" />
      </section>
    );

    const { displayProjects, createNewProject } = this.state;
    return (
      <Fragment>
        <div className="screen" />
        <div className="SavePopup-container">
          <section className="SavePopup">
            <div className="exit-background">
              <button className="save-exit" onClick={this.handleExit}>
                X
              </button>
            </div>
            <div className="title-background">
              <h3 className="editor-title">Save Your Palette</h3>
            </div>
            <form className="palette-form">
              <header>
                <label htmlFor="palette-title">Palette Title:</label>
                <input
                  type="text"
                  maxLength="25"
                  autoComplete="off"
                  name="palette-title"
                />
              </header>
              <section className="palettes-section">{colorOptions}</section>
              <div className="query-buttons">
                <button type="button" onClick={this.displayProjects}>
                  Save to an Existing Project
                </button>
                <button type="button" onClick={this.createNewProject}>
                  Create New Project
                </button>
              </div>
            </form>
          </section>
          <section
            className="save-section"
            style={{
              transform:
                createNewProject || displayProjects
                  ? "translateY(110%)"
                  : "translateY(0%)"
            }}
          >
            <div className="query-inputs">
              {displayProjects && existingProjects}
              {createNewProject && newProject}
            </div>
            {(createNewProject || displayProjects) && (
              <button
                className="submit-btn"
                type="button"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            )}
          </section>
        </div>
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
