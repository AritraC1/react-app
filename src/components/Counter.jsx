// Counter App Component
import { useState } from "react";

function Counter(){

    // Responsible for changing the state of the UI and propagates it into the DOM
    // The first is variable and the second one is the function that is reponsible to update the variable
    // counter is the current value; setCounter updates it
    // React state variables using useState should always be declared with const since you're not reassigning the variable itself
    const [counter, setCounter] = useState(0)

    // let counter = 0;

    const increment = () => {
        // counter++;
        // setCounter(counter+1)
        setCounter(prev => prev + 1); // prev here is the last updated state
        // setCounter(counter+1)
        // setCounter(counter+1)
        // setCounter(counter+1)
    } 

    const decrement = () => {
        if (counter > 0){
            setCounter(prev => prev - 1);
        }
        else {
            // console.log("Counter is already at 0");
            console.warn("Cannot decrement: counter is already at 0");
        }
    } 

    return (
        <>
        <h2>Counter value: {counter}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        </>
    )
}

export default Counter