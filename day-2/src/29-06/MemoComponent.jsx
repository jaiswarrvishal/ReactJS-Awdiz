import React, { memo, useState } from 'react'
// import Counter from '../15-06/useState';

const UseCallbackComponent = () => {
    const [counter, setCounter] = useState(0);
    const [data, setData] = useState("");
    console.log(data, "data")
  return (
    <div>
    <h2>memo</h2>
        <input onChange={(event) => setData(event.target.value)} />
        <MemoComponent counter = {counter}/>
        <button onClick={() => setCounter((prevValue) => prevValue + 1)}>+</button>
    </div>
  )
}

const MemoComponent = memo(function ChildrenComponent({ counter }) {
    console.log("Children Component rendered");
    return(
        <div>
            <h1>Counter : {counter}</h1>
        </div>
    );
});
    
export default UseCallbackComponent;



