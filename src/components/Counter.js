import React from 'react'
import CounterContext from '../context/counter/counterContext';
 
const Counter = () => {
    const state = React.useContext(CounterContext)

    return (
        <div>
            <button onClick={() => state.increment()}>Increment</button>
            <button onClick={() => state.decrement()}>decrement</button>
        </div>
    )
}

export default Counter
