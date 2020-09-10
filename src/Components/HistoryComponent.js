import React, { Component } from "react";
// import InputComponents from "./InputComponents";
export default class HistoryComponent extends Component {
  state = {
    history: "",
  };
  reState = (str) => {
    this.setState({
      history: str
    })
  };
  render() {
    return (
      <div className="h-100 overflow-hidden">
        <div className="text-center title border-bottom border-dark">
          <h3>History</h3>
        </div>
        <div className="bg-light h-100">{this.state.history}</div>
      </div>
    );
  }
}
