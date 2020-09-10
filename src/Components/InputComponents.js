/*eslint-disable no-eval */
import React, { Component } from "react";
export default class InputComponents extends Component {
  state = {
    newNum: true,
    detail: "test",
    inputNumber: "0",
    result: "",
    operator: "",
    // history: [<p key="test1">test</p>, <p key="test2">test2</p>],
    history: [],
  };
  updateInput = (inputNumber) => {
    if (this.state.newNum) {
      this.setState({
        newNum: false,
        inputNumber: inputNumber,
      });
    } else {
      let number = this.state.inputNumber === "0" ? "" : this.state.inputNumber;
      this.setState({
        inputNumber: number + inputNumber,
      });
    }
  };
  updateDetail = (inputOperator) => {
    if (this.state.result === "") {
      this.setState({
        newNum: true,
        detail: this.state.inputNumber + inputOperator,
        inputNumber: this.state.inputNumber,
        result: this.state.inputNumber,
        operator: inputOperator,
      });
    } else {
      let re = eval(
        this.state.result + this.state.operator + this.state.inputNumber
      );
      this.setState({
        newNum: true,
        detail: this.state.detail + this.state.inputNumber + inputOperator,
        inputNumber: re,
        result: re,
        operator: inputOperator,
      });
    }
  };
  equal = () => {
    let his = this.state.detail + this.state.inputNumber;
    let re = eval(
      this.state.result + this.state.operator + this.state.inputNumber
    );
    this.state.history.push([his, re]);
    let newHistory = this.state.history;
    this.setState({
      history: newHistory,
      inputNumber: re,
    });   
  };
  calButton = [
    { name: "CE", type: ["clearInput"] },
    { name: "C", type: ["clearAll"] },
    { name: "Del", type: ["delete"] },
    { name: "/", type: ["cal", "div"] },
    { name: "7", type: ["number"] },
    { name: "8", type: ["number"] },
    { name: "9", type: ["number"] },
    { name: "*", type: ["cal", "multi"] },
    { name: "4", type: ["number"] },
    { name: "5", type: ["number"] },
    { name: "6", type: ["number"] },
    { name: "-", type: ["cal", "minus"] },
    { name: "1", type: ["number"] },
    { name: "2", type: ["number"] },
    { name: "3", type: ["number"] },
    { name: "+", type: ["cal", "plus"] },
    { name: "+/-", type: ["negative"] },
    { name: "0", type: ["number"] },
    { name: ".", type: ["decimal"] },
    { name: "=", type: ["equal"] },
  ];
  renderButton = () => {
    return this.calButton.map((item, index) => {
      switch (item.type[0]) {
        case "number":
          return (
            <div className="col-3 p-0" key={index}>
              <button
                type="button"
                className="cal-btn btn btn-light border w-100"
                onClick={() => {
                  this.updateInput(item.name);
                }}
              >
                {item.name}
              </button>
            </div>
          );
        case "equal":
          return (
            <div className="col-3 p-0" key={index}>
              <button
                type="button"
                className="cal-btn btn btn-success border w-100"
                onClick={() => {
                  this.equal();
                }}
              >
                {item.name}
              </button>
            </div>
          );
        case "cal":
          return (
            <div className="col-3 p-0" key={index}>
              <button
                type="button"
                className="cal-btn btn btn-info border w-100 font-weight-bold"
                onClick={() => {
                  this.updateDetail(item.name);
                }}
              >
                {item.name}
              </button>
            </div>
          );
        default:
          return (
            <div className="col-3 p-0" key={index}>
              <button
                type="button"
                className="cal-btn btn btn-secondary border w-100"
              >
                {item.name}
              </button>
            </div>
          );
      }
    });
  };

  render() {
    return (
      <div
        className="container mt-5 p-3"
        style={{ backgroundColor: "rgb(242,242,242)" }}
      >
        <div className="row">
          {/* Input */}
          <div className="col-7 p-0">
            <div>
              <div className="text-center title border-bottom border-dark">
                <h3>Input</h3>
              </div>
              <div className="show text-right mt-3">
                <div className="__details border border-light bg-light p-3">
                  <p className="__p-details m-0 ">{this.state.detail}</p>
                </div>
                <div className="__result border border-light bg-light p-3">
                  <h2 className="__p-result m-0 font-weight-bold">
                    {this.state.inputNumber}
                  </h2>
                </div>
              </div>
              <div className="Calculate container-fluid m-0 p-0">
                <div className="row w-100 m-0 mt-4 text-center">
                  {this.renderButton()}
                </div>
              </div>
            </div>
          </div>
          {/* History */}
          <div className="col-5">
            <div className="h-100 overflow-hidden">
              <div className="text-center title border-bottom border-dark">
                <h3>History</h3>
              </div>
              <div className="bg-light h-100">
                {this.state.history.map((item, index) => {
                  return (
                    <div className="text-right pr-3 py-2 p-0 m-0 border-bottom border-secondary" key={index + "test"}>
                      <p className="m-0 p-0">{item[0]}=</p>
                      <h5 className="m-0 p-0">{item[1]}</h5>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
