import React, { Component } from "react";
import axios from "axios";

import "./App.css";

export default class App extends Component {
  state = { advice: "" };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    const random = Math.floor(Math.random() * (224 - 1 + 1) + 1);
    axios
      .get("https://api.adviceslip.com/advice/" + random)
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button
            className="button"
            onClick={() => {
              this.fetchAdvice();
            }}
          >
            GIVE ME ADVICE!
          </button>
        </div>
      </div>
    );
  }
}
