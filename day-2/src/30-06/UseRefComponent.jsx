import React, {useEffect, useRef, useState} from 'react';

const UseRefComponent = () => {
    const [counter, setCounter] = useState(0);
    const prevCounter = useRef(0);
    console.log(prevCounter, "prevCounter");

    useEffect(()=>{
        prevCounter.current = counter;
    }, [counter]);

  return (
    <div>
        <h1>previous Counter: {prevCounter.current}</h1>
        <h1>Counter : {counter}</h1>
        <button onClick={()=> setCounter(prevValue => (prevValue + 1))}>+</button>
        <button onClick={()=> setCounter(0)}>Reset</button>
    </div>
  )
}

export default UseRefComponent;