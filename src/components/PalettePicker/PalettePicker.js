import React, { Component } from "react";
import ColorScheme from "color-scheme";
import "./PalettePicker.css";

export default class PalettePicker extends Component {
  state = {
    hue: null,
    colorScheme: null,
    variation: "pastel",
    bookmarked: false,
    colors: []
  };

  handleBookmarked = () => {
    const bookmarked = this.state.bookmarked;
    this.setState({ bookmarked: !bookmarked });
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

  createColorBlocks = (vRotate = this.props.vRotate, speed = 8) => {
    const generatedColors = this.generateColors();
    const colors = generatedColors.splice(0, this.props.totalColors);
    return colors.map((color, i) => {
      const colorBarStyle = {
        backgroundColor: `#${color}`
      };
      const blockStyle = {
        // transform: `translateY(${this.state.bookmarked ? -150 : 50}%)`,
        transform: "translateY(-150%)",
        animation: `move 0.7s ease-in ${i / speed}s forwards`
      };
      console.log(blockStyle);
      return (
        <div className="color-block" style={blockStyle}>
          <div className={`color-bar color-${i + 1}`} style={colorBarStyle}>
            <p className={vRotate && "color-bar-text-vertical"}>
              {"#" + color.toUpperCase()}
            </p>
          </div>
          <button>Save?</button>
        </div>
      );
    });
  };
  render() {
    return (
      <section className="PalettePicker" onClick={this.handleBookmarked}>
        {this.createColorBlocks()}
      </section>
    );
  }
}
