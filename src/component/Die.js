import React from "react";
import "../style/style.css";
class Die extends React.Component {
  render() {
    return <i className={`dice fas fa-dice-${this.props.face}`}></i>;
  }
}
export default Die;
