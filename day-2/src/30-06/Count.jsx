import React, { useState } from 'react'
import { increment } from '../redux/actions';

const Count = () => {
    const [counter, setCounter] = useState(10);

   const increment = () => setCounter(counter => counter + 1)

   const decrement = () => setCounter(PrevCount => PrevCount - 1)

   const reset = () => setCounter(0)
  return (
    <div>
    <h2>Count: {counter}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Count;