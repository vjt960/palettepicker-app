import React, { Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../_redux/actions";
import "./SavePopup.scss";

function SavePopup(props) {
  const handleExit = () => {
    props.history.push("/");
  };

  const removeColor = color => {
    const paletteCopy = props.currentPalette.slice();
    const colorIndex = props.currentPalette.findIndex(
      paletteColor => paletteColor.hex === color.hex
    );
    paletteCopy[colorIndex].locked = false;
    props.updateCurrentPalette(paletteCopy);
  };

  const colorOptions = props.currentPalette
    .filter(palette => palette.locked === true)
    .map(palette => {
      return (
        <article className="palette-details" key={palette.hex}>
          <section className="palette-inputs">
            <div
              className="palette-color"
              style={{
                backgroundColor: palette.hex
              }}
            ></div>
            <input type="text" defaultValue={palette.hex} />
          </section>
          <button
            className="remove-btn"
            type="button"
            onClick={() => removeColor(palette)}
          >
            Remove
          </button>
        </article>
      );
    });
  return (
    <Fragment>
      <div className="screen" />
      <section className="SavePopup">
        <button className="editor-exit" onClick={handleExit}>
          X
        </button>
        <form className="editor-form">
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
