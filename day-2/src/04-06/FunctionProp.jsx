// import React from 'react'

import { useState } from "react";

//this example is for "Counter":
function FunctionProp(){
    const [counter, setCounter] = useState(1);
    function Increment(){
        setCounter (counter + 1);
    }

    return(
        <div>
            <h1>Counter : {counter}</h1>
            <ChildrenComponent Increment = {Increment} />
        </div>
    )
}

function ChildrenComponent ({Increment}){
    return <button onClick={Increment}> + </button>
}


// //below example is for "text":

// function FunctionProp() {
//     function HandleClick(){
//         console.log("Clicked");
//     }
//   return (
//     <div>
//         <h1>FunctionProp</h1>
//         <ChildrenComponent buttonValue="Click me!" HandleClick={HandleClick} />
//     </div>
//   );
// }

// function ChildrenComponent({buttonValue, HandleClick}){
//     return(
//         <button onClick={HandleClick}>{buttonValue}</button>
//     )
// }

export default FunctionProp;