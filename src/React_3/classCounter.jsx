import React, { Component } from "react";

export default class ClassCounter extends Component {
    // 1. state declare in an object -> initialize it's value in constructor
    constructor(props) {
        console.log("1. Constructor Called");
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

    // 3. run once just after render
    componentDidMount() {
        console.log("3. Component Did Mount");
    }

    // 4. run after every re-render
    componentDidUpdate(){
        console.log("4. Component Did Update");
    }

    // 5. Component will Unmount
    componentWillUnmount(){
        console.log("5. Component Will Unmount (When component is removed then it will be called)");
    }

    // 2. render method
    render() {
        console.log("2. Render Method Called");
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