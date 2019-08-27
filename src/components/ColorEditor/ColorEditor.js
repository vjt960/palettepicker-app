import React, { Component } from "react";

export default class ColorEditor extends Component {
  state = {
    color: ""
  };

  componentDidMount() {
    this.setState({ color: this.props.palette.hex });
  }

  handleChange = e => {
    const { value } = e.target;
    this.setState({ color: value });
  };

  render() {
    return (
      <article className="palette-details" key={this.props.palette.hex}>
        <section className="palette-inputs">
          <div
            className="palette-color"
            style={{
              backgroundColor: this.state.color
            }}
          ></div>
          <input
            type="text"
            value={this.state.color}
            onChange={e => this.handleChange(e)}
          />
        </section>
        {/* <button
          className="update-btn"
          type="button"
          onClick={() => this.props.handleColor(this.props.palette, "update")}
        >
          Update Color
        </button> */}
        <button
          className="remove-btn"
          type="button"
          onClick={() => this.props.handleColor(this.props.palette, "remove")}
        >
          Remove
        </button>
      </article>
    );
  }
}
