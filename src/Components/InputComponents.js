import React, { Component } from "react";

export default class InputComponents extends Component {
  calButton = [
    { name: "CE", type: "clearInput" },
    { name: "C", type: "clearAll" },
    { name: "Del", type: "delete" },
    { name: "/", type: "div" },
    { name: "7", type: "number" },
    { name: "8", type: "number" },
    { name: "9", type: "number" },
    { name: "*", type: "multi" },
    { name: "4", type: "number" },
    { name: "5", type: "number" },
    { name: "6", type: "number" },
    { name: "-", type: "minus" },
    { name: "1", type: "number" },
    { name: "2", type: "number" },
    { name: "3", type: "number" },
    { name: "+", type: "plus" },
    { name: "+/-", type: "negative" },
    { name: "0", type: "number" },
    { name: ".", type: "decimal" },
    { name: "=", type: "equal" },
  ];
  renderButton = () => {
    return this.calButton.map((item, index) => {
      switch (item.type) {
        case "number":
          return (
            <div className="col-3 p-0" key={index}>
              <button
                type="button"
                className="cal-btn btn btn-light border w-100"
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
                className="cal-btn btn btn-primary border w-100"
              >
                {item.name}
              </button>
            </div>
          );
        default:
          return (
            <div className="col-3 p-0" key={index}>
              <button type="button" className="cal-btn btn btn-secondary border w-100">
                {item.name}
              </button>
            </div>
          );
      }
    });
  };
  
  render() {
    return (
      <div>
        <div className="text-center title border-bottom border-dark">
          <h3>Input</h3>
        </div>
        <div className="show text-right mt-3">
          <div className="__details border border-light bg-light p-3">
            <p className="__p-details m-0 ">This is details</p>
          </div>
          <div className="__result border border-light bg-light p-3">
            <p className="__p-result m-0 font-weight-bold">This is results</p>
          </div>
        </div>
        <div className="Calculate container-fluid m-0 p-0">
          <div className="row w-100 m-0 mt-4 text-center">{this.renderButton()}</div>
        </div>
      </div>
    );
  }
}
