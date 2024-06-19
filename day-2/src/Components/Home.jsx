import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/auth.context';
import { CounterContext } from '../context/coutner.context';

function Home(){

    // const { state } = useContext(AuthContext);
    const { state } = useContext(CounterContext);
    // console.log(state, "state")

    const router = useNavigate();
    return(
        <div>
            {/* <h1>Home Page - {state?.user?.name}</h1> */}
            <h1>Home Page - {state?.counter}</h1>
            <button onClick={()=> router('/use-navigate')}>Redirect to useNavigate Page</button>
            <button onClick={()=> router('/to-do')}>Go to Todo</button>
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