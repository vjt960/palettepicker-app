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
    bookmarked: false,
    colors: []
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
    return scheme.colors();
  };

  createColorBlocks = () => {
    const generatedColors = this.generateColors();
    const colors = generatedColors.splice(0, this.props.totalColors);
    console.log(colors);
    return colors.map((color, i) => {
      const uuid = uuidv1();
      return (
        <ColorBar
          color={color}
          vRotate={this.props.vRotate}
          number={i}
          key={uuid}
        />
      );
    });
  };
  render() {
    return (
      <section className="PalettePicker">
        <div className="colors-section">{this.createColorBlocks()}</div>
        <div className="button-bar">SelectionBar</div>
      </section>
    );
  }
}
