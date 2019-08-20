import React, { Component } from "react";
import ColorScheme from "color-scheme";
import uuidv1 from "uuid/v1";
import ColorBar from "../ColorBar/ColorBar";
import "./PalettePicker.css";

export default class PalettePicker extends Component {
  state = {
    hue: null,
    colorScheme: null,
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

  updateColorScheme = e => {
    const { value } = e.target;
    console.log(value);
    this.setState({ colorScheme: value });
  };

  updateVariation = e => {
    const { value } = e.target;
    this.setState({ variation: value });
  };

  updateColors = e => {
    e.preventDefault();
    this.generateColors();
  };

  generateRandomHue = () => {
    return Math.floor(Math.random() * (360 + 1));
  };

  generateColors = () => {
    // The possible values are 'mono', 'contrast', 'triade', 'tetrade', and 'analogic'
    const { hue, colorScheme, variation } = this.state;
    const { pColorScheme = "mono" } = this.props;
    const scheme = new ColorScheme();
    scheme
      .from_hue(hue || this.generateRandomHue())
      .scheme(colorScheme || pColorScheme)
      .variation(variation);
    const colors = scheme.colors().map(color => {
      return "#" + color;
    });
    this.setState({ colors });
  };

  // createColorBlocks = () => {
  //   const generatedColors = this.generateColors();
  //   const colors = generatedColors.splice(0, this.props.totalColors);
  // };

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
          // key={uuid}
        />
      );
    });

    const PhraseBlock = (
      <div
        className={`${
          !this.state.editable
            ? "PhraseBlock pb-active"
            : "PhraseBlock pd-inactive"
        }`}
      >
        <div className="phrase-background">
          <h2>Choose a color!</h2>
        </div>
      </div>
    );

    return (
      <section className="PalettePicker">
        {PhraseBlock}
        <div
          className="edit-block"
          style={this.state.editable ? editBarActive : null}
        >
          <form className="edits-form" onSubmit={e => this.updateColors(e)}>
            <div>
              <h4>Hue Selection:</h4>
              <label htmlFor="hue-selection">
                <input
                  type="text"
                  placeholder="default: random"
                  autoComplete="off"
                  name="hue-selection"
                  onChange={this.updateHue}
                />
              </label>
            </div>
            <section className="radio-styles">
              <h4>Color schemes:</h4>
              <label htmlFor="mono">
                mono
                <input
                  type="radio"
                  name="colorScheme-selection"
                  value="mono"
                  defaultChecked
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
            Edit Colors
          </button>
          <button className="primary-btn">Save</button>
        </div>
      </section>
    );
  }
}
