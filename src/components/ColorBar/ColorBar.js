import React, { Component } from "react";
import "./ColorBar.css";

export default class ColorBar extends Component {
  state = {
    locked: false
  };
  render() {
    const colorBarStyle = {
      backgroundColor: `#${this.props.color}`
    };
    const blockStyle = {
      // transform: `translateY(${this.state.bookmarked ? -150 : 50}%)`,
      transform: "translateY(-150%)",
      animation: `move 0.7s ease-in ${this.props.number / 8}s forwards`
    };
    return (
      <div className="color-block" style={blockStyle}>
        <div
          className={`color-bar color-${this.props.number + 1}`}
          style={colorBarStyle}
        >
          <p className={this.props.vRotate && "color-bar-text-vertical"}>
            {"#" + this.props.color.toUpperCase()}
          </p>
        </div>
        <button>Save?</button>
      </div>
    );
  }
}
