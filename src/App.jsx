import React, { useState } from 'react'
import UseStateComponent from './React_1/UseStateComponent'
import UseEffectComponent from './React_1/UseEffectComponent'

// Lecture-1
// function App() {

//   const [showEffect, setShowEffect] = useState(true);

//   return (
//     <>
//       <button onClick={() => { setShowEffect((prevEffect) => { setShowEffect(!prevEffect) }) }}> Toggle Effect {showEffect} </button>

//       <UseStateComponent />
//       <h2>`````````````````````````````````````````````````````````````````````````````````````````````````</h2>
//       {showEffect && <UseEffectComponent />}
//     </>
//   )
// }

// Lecture-2
import UseStateCounter from './React_2/UseStateCounter'
import UseReducerCounter from './React_2/UseReducerCounter'
import FormManagement from './React_2/FormManagement'

function App() {
  return (
    <div>
      {/* <UseStateCounter /> */}
      {/* <UseReducerCounter/> */}
      <FormManagement/>
    </div>
  )
}

export default App
