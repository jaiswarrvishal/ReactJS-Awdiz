


import { createContext, useEffect, useReducer } from "react";

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

    useEffect(() => {
        alert("Page Reload")
  // retrive token from storage and send token to backend
  //   token  decrypt -> userid 
    // {name :"Vishal"}
    // dispatch({type :"LOGIN" , payload })
    }, []);
    return(
        <AuthContext.Provider value = {{ state, dispatch }} >
            {children}
        </AuthContext.Provider>
    )
}
export default MyContextProvider;