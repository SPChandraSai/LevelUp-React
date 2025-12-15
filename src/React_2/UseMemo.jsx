import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [count, setCount] = useState(0);
    const [address, setAddress] = useState("");

    const result = useMemo(() => {
        console.log("Result was calculated");
        return count ** count;
    }, [count]);

    return (
        <div>
            <h1>Count: {count}</h1>
            <h2>Memorized Value:{result}</h2>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <label>
                Address{': '}
                <input value={address} onChange={e => setAddress(e.target.value)} />
            </label>
        </div>
    )
}

export default UseMemo
