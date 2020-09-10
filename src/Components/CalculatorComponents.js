import React, { Component } from "react";
import InputComponents from "./InputComponents";
import HistoryComponent from "./HistoryComponent";
export default class CalculatorComponents extends Component {
  render() {
    return (
      <div
        className="container mt-5 p-3"
        style={{ backgroundColor: "rgb(242,242,242)" }}>
        <div className="row">
          {/* Input */}
          <div className="col-7 p-0">
            <InputComponents />
          </div>
          {/* History */}
          <div className="col-5">
            <div className="h-100 overflow-hidden">
              <div className="text-center title border-bottom border-dark">
                <h3>History</h3>
              </div>
              <div className="bg-light h-100">test</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
