import React, { useState } from 'react'

function FunctionalCounter() {
    const [count, setCount] = useState(0);
    const incCount = () => {
        setCount((prevCount) => { return prevCount + 1 })
    }
    const decCount = () => {
        setCount((prevCount) => { return prevCount - 1 })
    }
    return (
        <div>
            <h1>Functional Counter</h1>
            <h2>{count}</h2>
            <div>
                <button onClick={incCount}>+</button>
                <button onClick={decCount}>-</button>
            </div>
        </div>
    )
}

export default FunctionalCounter
