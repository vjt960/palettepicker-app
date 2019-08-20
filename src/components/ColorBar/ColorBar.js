import React, { Component } from "react";
import "./ColorBar.css";

export default class ColorBar extends Component {
  state = {
    locked: false
  };

  handleClick = () => {
    const toggle = this.state.locked;
    this.setState({ locked: !toggle });
  };

  render() {
    const colorBarStyle = {
      backgroundColor: `${this.props.color}`
    };
    const defaultStyle = {
      transform: "translateY(-150%)",
      animation: `move 0.7s ease-in ${this.props.number / 8}s forwards`
    };
    const lockedBarStyle = {
      backgroundColor: `${this.props.color}`,
      borderBottom: "5px solid black"
    };
    const lockedStyle = {
      visibility: "visible",
      height: "15%",
      opacity: 1
    };
    return (
      <div className="color-block" style={defaultStyle}>
        <div
          className={`color-bar color-${this.props.number + 1}`}
          style={this.state.locked ? lockedBarStyle : colorBarStyle}
        >
          <p className={this.props.vRotate && "color-bar-text-vertical"}>
            {this.props.color.toUpperCase()}
          </p>
        </div>
        <button
          className="lock-button"
          onClick={this.handleClick}
          style={this.state.locked ? lockedStyle : null}
        >
          {this.state.locked ? (
            <i className="fas fa-2x fa-lock" />
          ) : (
            <i className="fas fa-2x fa-unlock-alt" />
          )}
        </button>
      </div>
    );
  }
}
