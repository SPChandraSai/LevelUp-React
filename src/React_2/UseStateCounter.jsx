import React, { useState } from 'react'

function UseStateCounter() {

    const [count, setCount]=useState(0);

    // Function to increment the counter by 1
    const increment=()=>{
        setCount(count+1);
    }

    // Function to decrement the counter by 1
    const decrement =()=>{
        setCount(count-1);
    }

    // Function to increment the counter by 5
    const incrementBy5=()=>{
        setCount(count+5);
    }

    // Function to decrement the counter by 5
    const decrementBy5=()=>{
        setCount(count-5);
    }

    return (
        <div>
            <h2>Use State Counter</h2>

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={incrementBy5}>Increment by 5</button>
            <button onClick={decrementBy5}>Decrement by 5</button>
            
            <h3>Count Value: {count} </h3>
        </div>
    )
}

export default UseStateCounter
