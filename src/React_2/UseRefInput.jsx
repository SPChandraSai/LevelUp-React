/**
* useRef: used to save a value across re-renders
* major use case: used to access DOM elements directly
**/

// import React, { useRef, useState } from 'react'

// function UseRefInput() {
//     const [input, setInput] = useState("");
//     // let a=10;
//     // it is used to save values across re-renders, means upon each render it doesnt reinitialize its value to initial count value.
//     const initialRef=useRef(10);
//     console.log("a", initialRef.current);
//     initialRef.current++;
//     console.log("a", initialRef.current);
//     console.log("Render");
//     return (
//         <div>
//             <h2>UseRef Example</h2>
//             <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }} />
//         </div>
//     )
// }

// export default UseRefInput


/************* adding focus programaticaly ************/
import React, { useRef, useState } from 'react'

function UseRefInput() {
    const [input, setInput] = useState("");
    const refVar=useRef(null);
    const addFocus=()=>{
        refVar.current.focus();
    }

    return (
        <div>
            <h2>UseRef Example</h2>
            <input type="text" 
            value={input} 
            onChange={(e) => { setInput(e.target.value) }} 
            ref={refVar}
            />

            <button onClick={addFocus}>Add Focus</button>
        </div>
    )
}

export default UseRefInput