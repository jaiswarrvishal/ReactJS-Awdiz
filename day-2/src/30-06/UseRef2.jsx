import React, { useRef, useState } from 'react'

const UseRef2 = () => {
    const counterRef = useRef(0);
    const [counter, setCounter] = useState(1);

    function Increment (){
        counterRef.current++;
        console.log("current counter", counterRef.current)
    }
  return (
    <div>
        <h1>State Counter : {counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <h2>UseRef2 : {counterRef.current}</h2>
        <button onClick={Increment}>+</button>
    </div>
  )
}

export default UseRef2;