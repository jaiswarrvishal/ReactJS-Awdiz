import React, { useReducer } from 'react'

function reducer(state, action){
    // console.log(state, action, "para");
    switch(action.type){
        case "INCEREMENT":
            return { ...state , counter: state.counter+1};
        case "DECREMENT":
            return { ...state , counter: state.counter-1};
        case "RESET":
            return { ...state , counter: 0};
        default:
            return state;
    }
} //custom loginc to handle state

const initialState = { counter: 0} //state
const Reducer = () => {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    console.log(state, "state");
    
    function Increment(){
        dispatch({type: "INCEREMENT"});
    }
    function Decrement(){
        dispatch({type: "DECREMENT"});
    }
    function Reset(){
        dispatch({type: "RESET"});
    }
  return (
    <div>
        <h1 style={{backgroundColor:"lightblue"}}>Increment, Decrement and Reset using UseReducer <br/> Counter: <br/><strong style={{ backgroundColor:"white"}}>{state.counter}</strong></h1>
        <button onClick={Increment}>+</button>
        <button onClick={Decrement}>-</button>
        <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default Reducer;