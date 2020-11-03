import React, {useState, useReducer} from 'react';

const initialState = {count : 0}

const reducer = (state,action) =>{
    console.log(state,action)
    switch(action.type){
        case 'INCREMENT':
            return {count: state.count +1}
           // break;
            //default:   
                //return state;
        case 'DECREMENT':
            return {count: state.count-1}
                   // break;
            default:
                return state;


    }

}

const ReducerCount = () => {
    const [count, setCount] = useState(0)
    const [state,dispatch] =useReducer(reducer, initialState)

    return (
        <div>
            <h1> This is ReducerCount: {state.count}</h1>
            <button onClick={()=>dispatch({type: 'INCREMENT'})}>increment</button>
            <button onClick={()=>dispatch({type: 'DECREMENT'})}>decrement</button>
        </div>
    );
};

export default ReducerCount;