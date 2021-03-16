import React, { Component } from "react";
import Die from "./Die";
import "../style/rolldice.css";
class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  constructor() {
    super();
    this.state = {
      dice1: "one",
      dice2: "one",
      rolling: false,
      disable: false,
    };
  }
  roll = () => {
    let random = Math.floor(Math.random() * this.props.sides.length);
    let random1 = Math.floor(Math.random() * this.props.sides.length);
    const newDice1 = this.props.sides[random];
    const newDice2 = this.props.sides[random1];
    this.setState({
      dice1: newDice1,
      dice2: newDice2,
      rolling: true,
      disable: true,
    });
    setTimeout(() => {
      this.setState({ rolling: false, disable: false });
    }, 1000);
  };
  render() {
    return (
      <div className="rolldice">
        <div className="rolldice-container">
          <Die face={this.state.dice1} rolling={this.state.rolling} />
          <Die face={this.state.dice2} rolling={this.state.rolling} />
        </div>
        <button onClick={this.roll} disabled={this.state.disable}>
          {this.state.rolling ? "Rolling" : "Roll Dice"}
        </button>
      </div>
    );
  }
}
export default RollDice;
