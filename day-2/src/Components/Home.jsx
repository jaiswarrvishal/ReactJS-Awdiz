import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/auth.context';
import { CounterContext } from '../context/coutner.context';
import { themeContext } from '../context/theme.context';

function Home(){

    // const { state } = useContext(AuthContext);
    const { state } = useContext(CounterContext);
    const { themeState, dispatch } = useContext(themeContext);
    console.log(themeState, "themeState")
    // console.log(state, "state")

    const router = useNavigate();
    return(
        // <div style={{backgroundColor: themeState === "light" ? "yellow" : "lightblue"}}>
        <div style={{backgroundColor: themeState.theme === "light" ? "yellow" : "lightblue"}}>
            {/* <h1>Home Page - {state?.user?.name}</h1> */}
            <h1>Home Page - {state?.counter}</h1>
            <button onClick={()=> router('/use-navigate')}>Redirect to useNavigate Page</button>
            <button onClick={()=> router('/to-do')}>Go to Todo</button>
            <br /> <br />
            {/* <button onClick={() => dispatch({type: "DARK"})}> // FOR static Changes after clicking on button */}
            <button onClick={() => dispatch({type: themeState?.theme === "light" ? "DARK" : "LIGHT"})}> 
            {/* for Dnamic Changes after clicking on button */}
            Change {themeState?.theme === "light"? "light" : "dark"} theme</button>
        </div>
        
    )
}
export default Home;


// import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/auth.context';

// function Home(){

//     const { state } = useContext(AuthContext);
//     // console.log(state, "state")

//     const router = useNavigate();
//     return(
//         <div>
//             <h1>Home Page - {state?.user?.name}</h1>
//             <button onClick={()=> router('/use-navigate')}>Redirect to useNavigate Page</button>
//         </div>
        
//     )
// }
// export default Home;