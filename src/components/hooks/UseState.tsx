import React, { useState } from "react";

const UseState = () => {
    const [counter, setCounter] = useState<number>(0);

    const handleIncrease = () => {
        setCounter(counter + 1);
    }
    const handleDecrease = () => {
        setCounter(counter - 1);
    }
    const handleReset = () => {
        setCounter(0);
    }
    return (
        <div>
            <h1>counter:{counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default UseState;