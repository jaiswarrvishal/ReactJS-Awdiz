import React, { memo, useCallback, useState } from 'react'
// import Counter from '../15-06/useState';

const UseCallbackComponents = () => {
    const [counter, setCounter] = useState(0);
    const [data, setData] = useState("");
    console.log(data, "data")

    // const Increment = () => {
    //     setCounter((prevValue) => prevValue + 1)
    // }

    const Increment = useCallback(() => {
        setCounter((prevValue) => prevValue + 1);
    }, []);


  return (
    <div>
    <h2>UseCallback</h2>
        <input onChange={(event) => setData(event.target.value)} />
        <MemoComponent counter = {counter} Increment = {Increment}/>
    </div>
  )
}

const MemoComponent = memo(function ChildrenComponent({ counter, Increment }) {
    console.log("Children Component rendered");
    return(
        <div>
            <h1>Counter : {counter}</h1>
            <button onClick={ Increment }>+</button>
        </div>
    );
});
    
export default UseCallbackComponents;



