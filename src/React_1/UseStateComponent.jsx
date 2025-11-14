import React from 'react'
import { useState } from 'react'
import '../App.css'

function UseStateComponent() {
    const [count, setCount] = useState(0);

    const incrementHandler = () => {
        setCount((prevCount) => {
            return prevCount + 1;
        });
    }

    const decrementHandler = () => {
        setCount((prevCount) => {
            return prevCount - 1;
        });
    }

    const handleUpdateEverySec = () => {
        setInterval(() => {
            console.log("Calling Interval");
            setCount((prevCount) => prevCount + 1)
        }, 1000);
    }

    return (
        <>
            <div className="card">
                <button onClick={incrementHandler}>
                    +
                </button>
                count is {count}

                <button onClick={decrementHandler}>
                    -
                </button>
            </div>

            <div>
                <button onClick={handleUpdateEverySec}>Increment after every second</button>
            </div>
        </>
    )
}

export default UseStateComponent

