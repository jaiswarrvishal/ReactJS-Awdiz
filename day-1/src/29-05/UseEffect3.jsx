import { useEffect, useState } from "react";

function UseEffect3(){
    const [counter, setCounter] = useState(0)
    const[isLoggedIn, setisLoggedIn] = useState(true); // true

    function Switch(){
        setisLoggedIn((prevState) => !prevState); // false => !false => true   // true => !true => false
    }

     //   if( codition) {
  //     statement 1
  //   } else {
  //     statement 2
  //   }

    function Increment(){
        setCounter(counter + 1)
    }

    //   useEffect(() => {
  //     alert("Calling from useeffect.");
  //   }, [counter]);

    useEffect(()=> {alert("Calling from useeffect for isLoggedIn.");}, [isLoggedIn]);

    // useEffect(() => {
    //     alert("Calling from useEffect")
    // }, [counter]); 
    
    return(
        <div>
            {/* Assigment && -> if counter is more than 10 and less than 20 then display "counter is in between 10-20" else display "counter is out of range". */}
      {/* {condition ? 1st statement : 2nd statement } */}

            {isLoggedIn?(<button onClick={Switch}>Please login!</button>) : (<button onClick={Switch}>Welcome! logout?</button>)}
            {counter >= 10 && counter<=20 ? (<h1>Counter is in between 10-20.</h1>) : (<h1>Counter is out of range.</h1>)}
            {/* <h2 onClick={countertentwenty}>{isTenTwenty}</h2> */}
            <h1>Counter : {counter}</h1>
            <button onClick={Increment}> + </button>
            <button onClick={() => setCounter(counter-1)}>-</button>
        </div>
    )
}
export default UseEffect3;