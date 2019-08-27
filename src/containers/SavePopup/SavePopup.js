import React, { Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../_redux/actions";
import "./SavePopup.scss";
import ColorEditor from "../../components/ColorEditor/ColorEditor";

function SavePopup(props) {
  const handleExit = () => {
    props.history.push("/");
  };

  const handleColor = (color, format, newColor) => {
    const paletteCopy = props.currentPalette.slice();
    const colorIndex = props.currentPalette.findIndex(
      paletteColor => paletteColor.hex === color.hex
    );
    if (format === "remove") {
      paletteCopy[colorIndex].locked = false;
      props.updateCurrentPalette(paletteCopy);
    } else if (format === "update") {
      paletteCopy[colorIndex].hex = newColor;
      props.updateCurrentPalette(paletteCopy);
    }
  };

  const colorOptions = props.currentPalette
    .filter(palette => palette.locked === true)
    .map(palette => {
      return (
        <ColorEditor
          palette={palette}
          handleColor={handleColor}
          key={palette.hex}
        />
      );
    });

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Submitting");
  };

  return (
    <Fragment>
      <div className="screen" />
      <section className="SavePopup">
        <button className="editor-exit" onClick={handleExit}>
          X
        </button>
        <form className="editor-form" onSubmit={handleSubmit}>
          <h3 className="editor-title">Title</h3>
          <label htmlFor="">Label 1</label>
          <input type="text" />
          <section className="palettes-section">{colorOptions}</section>
          <button className="submit-btn">Submit</button>
        </form>
      </section>
    </Fragment>
  );
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
