import React, { useEffect, useState } from 'react'

const firstCb = () => {
    console.log("useEffect with empty Dependency");
}

const secondCb = () => {
    console.log("useEffect with no Dependency");
}

const thirdCb = () => {
    console.log("useEffect with some Dependency");
}

const firstCleanup = () => {
    console.log("cleanup function with empty dependency");
}

const secondCleanup = () => {
    console.log("cleanup function with no dependency");
}

const ThirdCleanup = () => {
    console.log("cleanup function with dependency array");
}

function UseEffectComponent() {

    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    // with empty dependency
    useEffect(() => {
        firstCb();
        return firstCleanup;
    }, []);

    // with no dependency
    useEffect(() => {
        secondCb();
        // cleanup function
        return secondCleanup;
    });

    // with some dependency
    useEffect(() => {
        thirdCb();
        console.log('``````````````````````````````````````');
        return ThirdCleanup;
    }, [count]);


    console.log("render, useEffectComponent", `count ${count}`, `input ${input}`);

    return (
        <div>
            <h2>UseEffect Component</h2>
            <p>Count: {count}</p>
            <button onClick={() => { setCount(prevCount => prevCount + 1) }}> + </button>
            <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }} />
        </div>
    )
}

export default UseEffectComponent
