import React, { useState } from 'react';

const Counter = ({ title }) => {

    const [count, setCount] = useState(0);

    const increment = (num) => {
        setCount(prev => prev + num);
    }

    const decrement = (num) => {
        setCount(prev => prev - num);
    }

    const reset = () => {
        setCount(0);
    }

    return <div className={"counter " + ( count % 2 == 0 ? "even" : "odd" ) }>
            <h3>{title}</h3>
            <p role="figure" className={count < 0 ? "debt" : ""}>{count}</p>
            <button onClick={() => decrement(10)}>--</button>
            <button onClick={() => decrement(1)}>-</button>
            <button onClick={reset}>0</button>
            <button onClick={() => increment(1)}>+</button>
            <button onClick={() => increment(10)}>++</button>
           </div>
}

export default Counter;