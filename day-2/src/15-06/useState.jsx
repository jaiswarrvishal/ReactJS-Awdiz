import { useContext, useState } from "react";
import { CounterContext } from "../context/coutner.context";
import { useNavigate } from "react-router-dom";
// import '../25-05/UseState.css'

function Counter(){
    // const {state,dispatch}=useContext(CounterContext);
    const { state, dispatch } = useContext(CounterContext)
    const[counter1,setCounter1]=useState(0);
    console.log("Counter: ",counter1);
    const router=useNavigate();

    function increment(){
        // dispatch({type: "INCREMENT", counter : state.counter+1})
        dispatch({type: "INCREMENT"})

        // console.log("Inside function")
        setCounter1((prevValue)=>prevValue+1);
        router("/");
    }


    return(
        <div id="usestatesty">
            <h1>Counter1:    {counter1}</h1>
            <button onClick={increment}>+</button><br/>
        </div>
    );
}

export default Counter;