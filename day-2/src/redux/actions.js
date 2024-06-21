//action type
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
 //action creators->one functions jo return karega object ko


 //action creators 
 export const increment = () => {
    return { type: INCREMENT};
 }
 //the compact way writting above code
//  export const increment = () => ({type: INCREMENT});

//  export const decrement = () => {
//     return { type: DECREMENT};
//  }
 //the compact way writting above code
 export const decrement = () => ({type: DECREMENT});