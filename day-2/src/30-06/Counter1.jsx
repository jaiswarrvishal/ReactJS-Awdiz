import React, { useState } from 'react'

const Counter1 = () => {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter+1);
    }
  return (
    <div>
        <h1>Counter1 : {counter}</h1>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter1;