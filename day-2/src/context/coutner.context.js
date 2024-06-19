
import { createContext, useReducer } from "react";

function reducer(state,action){
    switch(action.type){
        case "INCREMENT":
            return {...state, counter: state.counter + 1}
        default:
            return state
    }
}

const initialState = {counter:  0}

export const CounterContext = createContext()

function CounterContextProvider({children}){
    //Higher Order Component
    const [ state, dispatch ] = useReducer(reducer, initialState);
    return(
        <CounterContext.Provider value = {{ state, dispatch }} >
            {children}
        </CounterContext.Provider>
    )
}
export default CounterContextProvider;