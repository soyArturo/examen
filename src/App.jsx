import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";

class App extends Component {
  constructor() {
    super();
    this.state = {
      color: "",
    };
    this.increment = this.increment.bind(this);
  }

  increment(id, color) {
    const newColor = color;
    console.log(id + " , " + newColor);
    this.setState({ color: newColor });
  }

  render() {
    const { color } = this.state;
    return (
      <div style={{ backgroundColor: color }} className="app">
        <div className="Container">
          <h1>Examen</h1>
          <div className="row">
            <Button
              className="btn"
              name="Boton 1"
              click={() => this.increment(1, "#2D7DD2")}
            />
            <Button
              className="btn"
              name="Boton 2"
              click={() => this.increment(2, "#97CC04")}
            />
            <Button
              className="btn"
              name="Boton 3"
              click={() => this.increment(3, "#eeb902")}
            />
            <Button
              className="btn"
              name="Boton 4"
              click={() => this.increment(4, "#f45d01")}
            />
            <Button
              className="btn"
              name="Boton 5"
              click={() => this.increment(5, "#474647")}
            />
            <Button
              className="btn"
              name="Boton 6"
              click={() => this.increment(6, "#7776bc")}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
