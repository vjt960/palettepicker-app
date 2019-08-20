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

  createColorBlocks = () => {
    const generatedColors = this.generateColors();
    const colors = generatedColors.splice(0, this.props.totalColors);
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
          // key={uuid}
        />
      );
    });
    return (
      <section className="PalettePicker">
        <div
          className="edit-block"
          style={this.state.editable ? editBarActive : null}
        >
          <form>
            <label htmlFor="hue-selection" />
            <input type="text" placeholder="hue" name="hue-selection" />
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
