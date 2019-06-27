import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class Color extends Component {
  constructor() {
    super();

    this.state = {
      color: "#ffffff",

      text: " ",
      listElement: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleClick() {
    axios.get("http://www.colr.org/json/color/random").then(response => {
      this.setState({
        color: response.data.new_color,
        listElement: [...this.state.listElement, response.data]
      });
    });
  }

  render() {
    return (
      <div id="Container">
        <form>
          <p>Enter your text: </p>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </form>
        <button onClick={this.handleClick}>Change color</button>
        <h1 style={{ color: "#" + this.state.color }}>{this.state.text}</h1>

        <hr />

        <ul className="my-list">
          {this.state.listElement.map(colors => (
            <li style={{ color: "#" + colors.new_color }}>
              {colors.new_color}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Color;
