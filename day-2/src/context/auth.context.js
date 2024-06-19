


import { createContext, useReducer } from "react";

function reducer(state,action){
    switch(action.type){
        case "LOGIN":
            return {...state, user: action.payload}
        case 'LOGOUT':
            return {...state, user: null}
        default:
            return state
    }
}

const initialState = {user: null}

export const AuthContext = createContext()

function MyContextProvider({children}){
    //Higher Order Component
    const [ state, dispatch ] = useReducer(reducer, initialState);
    return(
        <AuthContext.Provider value = {{ state, dispatch }} >
            {children}
        </AuthContext.Provider>
    )
}
export default MyContextProvider;