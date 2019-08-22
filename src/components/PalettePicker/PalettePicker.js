import React, { Component } from "react";
import ColorScheme from "color-scheme";
import uuidv1 from "uuid/v1";
import ColorBar from "../ColorBar/ColorBar";
import "./PalettePicker.css";

export default class PalettePicker extends Component {
  state = {
    hue: null,
    hueLocked: false,
    colorScheme: "triade",
    variation: "pastel",
    colors: [],
    editable: false
  };

  componentDidMount() {
    this.generateColors();
  }

  toggleEditable = () => {
    const toggle = this.state.editable;
    this.setState({ editable: !toggle });
  };

  updateHue = e => {
    const { value } = e.target;
    this.setState({ hue: value });
  };

  hueLock = () => {
    this.setState({ hueLocked: true });
  };

  hueUnlock = () => {
    this.setState({ hueLocked: false });
  };

  updateColorScheme = e => {
    const { value } = e.target;
    console.log(value);
    this.setState({ colorScheme: value });
  };

  updateVariation = e => {
    const { value } = e.target;
    this.setState({ variation: value });
  };

  updateColors = (e, previousColors) => {
    e.preventDefault();
    this.generateColors(previousColors);
  };

  generateRandomHue = () => {
    return Math.floor(Math.random() * (360 + 1));
  };

  handleLockStatus = (targetColor, lockStatus) => {
    const colorIndex = this.state.colors.findIndex(color => {
      return targetColor === color;
    });
    const colors = this.state.colors.slice();
    colors[colorIndex].locked = lockStatus;
    this.setState({ colors });
  };

  generateColors = async (previousColors = []) => {
    // The possible values are 'mono', 'contrast', 'triade', 'tetrade', and 'analogic'
    const { hue, hueLocked, colorScheme, variation, colors } = this.state;
    const { pColorScheme = "triade" } = this.props;
    let generatedHue;
    if (!hueLocked) {
      generatedHue = this.generateRandomHue();
    }
    const scheme = new ColorScheme();
    scheme
      .from_hue(generatedHue || hue)
      .scheme(colorScheme || pColorScheme)
      .variation(variation);
    const generatedColors = scheme.colors().map(color => {
      return { hex: "#" + color, locked: false };
    });
    if (previousColors.length !== generatedColors.length) {
      this.setState({ colors: generatedColors, hue: generatedHue || hue });
    } else {
      colors.forEach((color, i) => {
        if (color.locked === true) generatedColors.splice(i, 1, color);
      });
      this.setState({ colors: generatedColors, hue: generatedHue || hue });
    }
  };

  render() {
    const editBarActive = {
      transform: "translateY(0%)"
    };
    const colors = this.state.colors.map((color, i) => {
      return (
        <ColorBar
          color={color}
          vRotate={this.props.vRotate}
          number={i}
          handleLockStatus={this.handleLockStatus}
          // key={uuid}
        />
      );
    });

    const PhraseBlock = (
      <section
        className={`${
          !this.state.editable
            ? "PhraseBlock pb-active"
            : "PhraseBlock pd-inactive"
        }`}
      >
        <header className="phrase-background">
          <h2>Choose a color!</h2>
        </header>
        <section className="phrase-block-content">
          <button
            className={
              this.state.hueLocked
                ? "phrase-button locked-btn"
                : "phrase-button"
            }
            onClick={e => this.updateColors(e, this.state.colors)}
          >
            Refresh Colors
          </button>
          <div className="current-format">
            <div className="format-hue">
              <p>{this.state.hue || this.props.hue}</p>
              {this.state.hueLocked ? (
                <i className="fas fa-sm fa-lock" onClick={this.hueUnlock} />
              ) : (
                <i className="fas fa-sm fa-unlock-alt" onClick={this.hueLock} />
              )}
            </div>
            <p>{this.state.colorScheme || this.props.pColorScheme}</p>
            <p>{this.state.variation}</p>
          </div>
        </section>
      </section>
    );

    return (
      <section className="PalettePicker">
        {PhraseBlock}
        <div
          className="edit-block"
          style={this.state.editable ? editBarActive : null}
        >
          <form
            className="edits-form"
            onSubmit={e => this.updateColors(e, this.state.colors)}
          >
            <div className="hue-selection-container">
              <h4>Hue Selection:</h4>
              <div className="hue-selection-inputs">
                <label htmlFor="hue-selection">
                  <input
                    type="text"
                    placeholder="default: random"
                    autoComplete="off"
                    name="hue-selection"
                    value={this.state.hue}
                    onChange={this.updateHue}
                  />
                </label>
                {this.state.hueLocked ? (
                  <button onClick={this.hueUnlock}>Unlock</button>
                ) : (
                  <button onClick={this.hueLock}>Lock</button>
                )}
              </div>
            </div>
            <section className="radio-styles">
              <h4>Color schemes:</h4>
              <label htmlFor="mono">
                mono
                <input
                  type="radio"
                  name="colorScheme-selection"
                  value="mono"
                  onClick={e => this.updateColorScheme(e)}
                />
              </label>
              <label htmlFor="contrast">
                contrast
                <input
                  type="radio"
                  name="colorScheme-selection"
                  value="contrast"
                  onClick={e => this.updateColorScheme(e)}
                />
              </label>
              <label htmlFor="triade">
                triade
                <input
                  type="radio"
                  name="colorScheme-selection"
                  value="triade"
                  defaultChecked
                  onClick={e => this.updateColorScheme(e)}
                />
              </label>
              <label htmlFor="tetrade">
                tetrade
                <input
                  type="radio"
                  name="colorScheme-selection"
                  value="tetrade"
                  onClick={e => this.updateColorScheme(e)}
                />
              </label>
              <label htmlFor="analogic">
                analogic
                <input
                  type="radio"
                  name="colorScheme-selection"
                  value="analogic"
                  onClick={e => this.updateColorScheme(e)}
                />
              </label>
            </section>
            <section className="radio-styles">
              <h4>Color Variations:</h4>
              <label htmlFor="default">
                default
                <input
                  type="radio"
                  name="variation-selection"
                  value="default"
                  onClick={e => this.updateVariation(e)}
                />
              </label>
              <label htmlFor="pastel">
                pastel
                <input
                  type="radio"
                  name="variation-selection"
                  value="pastel"
                  defaultChecked
                  onClick={e => this.updateVariation(e)}
                />
              </label>
              <label htmlFor="soft">
                soft
                <input
                  type="radio"
                  name="variation-selection"
                  value="soft"
                  onClick={e => this.updateVariation(e)}
                />
              </label>
              <label htmlFor="light">
                light
                <input
                  type="radio"
                  name="variation-selection"
                  value="light"
                  onClick={e => this.updateVariation(e)}
                />
              </label>
              <label htmlFor="hard">
                hard
                <input
                  type="radio"
                  name="variation-selection"
                  value="hard"
                  onClick={e => this.updateVariation(e)}
                />
              </label>
              <label htmlFor="pale">
                pale
                <input
                  type="radio"
                  name="variation-selection"
                  value="pale"
                  onClick={e => this.updateVariation(e)}
                />
              </label>
            </section>
            <button className="update-btn">
              <p>Update</p>
            </button>
          </form>
        </div>
        <div className="colors-section">{colors}</div>
        <div className="button-bar">
          <button className="primary-btn" onClick={this.toggleEditable}>
            Edit
          </button>
          <button className="primary-btn">Save</button>
        </div>
      </section>
    );
  }
}
