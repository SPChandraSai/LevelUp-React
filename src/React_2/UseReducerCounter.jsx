import React, { useReducer } from 'react'

const counteReducer = (state, action) => {
    switch (action) {
        case 'INCREMENT':
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "INCREMENTBY5":
            return state + 5;
        case "DECREMENTBY5":
            return state - 5;
        default:
            return state;
    }
}

function UseReducerCounter() {
    // state variable for the counter
    // useReducer: 
    // 1. input: render function, initial state
    // 2. output: state variable, dispatch
    // a reducer: function that defines how state should change based on actions or that holds all the permuatation of the state change logic.
    const [count, dispatch] = useReducer(counteReducer, 0);

    // // Function to increment the counter by 1
    // const increment=()=>{
    //     // setCount(count+1);
    // }

    // // Function to decrement the counter by 1
    // const decrement =()=>{
    //     // setCount(count-1);
    // }

    // // Function to increment the counter by 5
    // const incrementBy5=()=>{
    //     // setCount(count+5);
    // }

    // // Function to decrement the counter by 5
    // const decrementBy5=()=>{
    //     // setCount(count-5);
    // }

    return (
        <div>
            <h2>UseReducer Counter</h2>

            <button onClick={() => { dispatch("INCREMENT") }}>Increment</button>
            <button onClick={() => { dispatch("DECREMENT") }}>Decrement</button>
            <button onClick={() => { dispatch("INCREMENTBY5") }}>Increment by 5</button>
            <button onClick={() => { dispatch("DECREMENTBY5") }}>Decrement by 5</button>

            <h3>Count Value: {count} </h3>
        </div>
    )
}

export default UseReducerCounter
