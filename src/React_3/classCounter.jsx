import React, { Component } from "react";

export default class ClassCounter extends Component {
    // 1. state declare in an object -> initialize it's value in constructor
    constructor(props) {
        // calling super class constructor
        super(props);
        this.state = {
            count: 0
        }
    }

    incCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decCount = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    // 2. render method
    render() {
        return (<>
            <h1>Class Counter</h1>
            <h2>{this.state.count}</h2>
            <div>
                <button onClick={this.incCount}>+</button>
                <button onClick={this.decCount}>-</button>
            </div>
        </>)
    }
}