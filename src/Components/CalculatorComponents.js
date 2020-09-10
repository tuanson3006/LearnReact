import React, { Component } from 'react'
import InputComponents from './InputComponents'
import HistoryComponent from './HistoryComponent'
export default class CalculatorComponents extends Component {
    render() {
        return (
            // 240 240 241 functional
            // 134 183 222 blue active
            // 213 217 224 focus
            <div className="container mt-5 p-3" style={{backgroundColor:'rgb(242,242,242)'}}>
                <div className="row">
                    {/* Input */}
                    <div className="col-7 p-0">
                       <InputComponents/>
                    </div>
                    {/* History */}
                    <div className="col-5">
                        <HistoryComponent/>
                    </div>
                </div>
            </div>
        )
    }
}
