import React, { useState } from 'react'

const CounterPrac = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>CounterPrac : {counter}</h1>
      <button onClick={()=> setCounter(counter+1)}>+</button>
      <button onClick={()=> setCounter(counter-1)}>-</button>
      <button onClick={()=>setCounter(0)}>Reset</button>
    </div>
  )
}

export default CounterPrac;