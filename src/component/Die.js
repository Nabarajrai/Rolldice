import React from "react";
import "../style/style.css";
class Die extends React.Component {
  render() {
    return (
      <i
        className={`dice fas fa-dice-${this.props.face} ${
          this.props.rolling ? "shaking" : ""
        }`}
      ></i>
    );
  }
}
export default Die;
