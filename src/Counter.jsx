import React,{ useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);

    const incrementNumber = () => {
        setCount(count+1);
    }
    
    const decrementNumber = () => {
        setCount(count-1);
    }

    return(
        <React.Fragment>
            <p>This count is : {count}</p>
            <button onClick = {incrementNumber}> Increment </button>
            <button onClick = {decrementNumber}> Decrement </button>
        </React.Fragment>
    );
}

export default Counter;