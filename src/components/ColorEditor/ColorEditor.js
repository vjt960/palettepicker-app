import React, { Component } from "react";

export default class ColorEditor extends Component {
  state = {
    color: "",
    updated: false
  };

  componentDidMount() {
    this.setState({ color: this.props.palette.hex });
  }

  handleChange = e => {
    const { value } = e.target;
    this.setState({ color: value, updated: true });
  };

  handleUpdate = () => {
    this.props.handleColor(this.props.palette, "update", this.state.color);
    this.setState({ updated: false });
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
        <button
          className="update-btn"
          type="button"
          onClick={this.handleUpdate}
        >
          Update Color
        </button>
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
