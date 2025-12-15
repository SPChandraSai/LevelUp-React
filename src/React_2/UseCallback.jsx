import React, { useCallback } from 'react'
import { useState } from 'react';

function UseCallback() {
    const [value, setValue] = useState("");
    const [count, setCount] = useState(0);
    
    // every time state changes, the handle function renders due to hoisting in which new memory is allotted to it when hoisted. So to avoid that we can use useCallback hook.
    // without callback
    // const handleClick = () => {
    //     setCount(count + 1);
    // }

    // with callback
    const memorizedCallback=useCallback(()=>{
        setCount(count + 1);
    }, [count]);
    return (
        <div>
            <input type="text" value={value}
                onChange={(e) => { setValue(e.target.value) }}
            />
            <p>Count: {count}</p>
            <MemorizedChildrenCOmpopnent
                parentClick={memorizedCallback}
                count={count}>
            </MemorizedChildrenCOmpopnent>
        </div>
    )
}

const MemorizedChildrenCOmpopnent = React.memo(ChildComponent);
function ChildComponent({ parentClick, count }) {
    console.log("Child Component Rendered");
    return <>
        <button onClick={parentClick}>Child says Increment the count from: {count}</button>
    </>
}

export default UseCallback
