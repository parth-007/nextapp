
import { useState } from "react";

 export const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <>
        <button onClick={() => setCounter(prev => prev + 1)}>Increment</button>
        <button onClick={() => setCounter(prev => prev - 1)}>Decrement</button>
        <p>Counter: {counter}</p>
        </>
    )
}
 
