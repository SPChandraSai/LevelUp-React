import React, { useState } from 'react'

// even wgile typinf the address the component id being rendered again. So to avoid that we are using React.Memo which only renders the component when its props change.
export default function ReactMemo() {
    const [name, setName]=useState("");
    const [address, setAddress]=useState("");

    return (
        <>
            <label>
                Name{': '}
                <input value={name} onChange={e=>setName(e.target.value)}/>
            </label>
            <br />
            <label>
                Address{': '}
                <input value={address} onChange={e=>setAddress(e.target.value)}/>
            </label>
            <MemoGreeting name={name}/>
        </>
    )
}

// when you want to stop unnecessaryv re-renders of a component you can wrap that component in React.memo
const MemoGreeting=React.memo(Greeting);
function Greeting({name}){
    console.log("Greeting Rendered");
    return <h3>Hello{name && ', '}{name}!</h3>;
}