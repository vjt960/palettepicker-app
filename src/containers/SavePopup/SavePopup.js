import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../_redux/actions";
import "./SavePopup.scss";
import ColorEditor from "../../components/ColorEditor/ColorEditor";

class SavePopup extends Component {
  state = {};

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

    return (
      <Fragment>
        <div className="screen" />
        <section className="SavePopup">
          <button className="editor-exit" onClick={this.handleExit}>
            X
          </button>
          <h3 className="editor-title">Save Your Palette</h3>
          <form className="palette-form" onSubmit={this.handleSubmit}>
            <label htmlFor="palette-title">Palette Title</label>
            <input type="text" name="palette-title" />
            <section className="palettes-section">{colorOptions}</section>
            <button>Save to Existing Project</button>
            <button type="button">Create New Project</button>
          </form>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = store => ({
  currentPalette: store.currentPalette
});

const mapDispatchToProps = dispatch => ({
  updateCurrentPalette: palette =>
    dispatch(actions.updateCurrentPalette(palette))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavePopup);
