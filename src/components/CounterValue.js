import React from 'react'
import CounterContext from '../context/counter/counterContext';

const CounterValue = () => {
    const {count} = React.useContext(CounterContext)
    console.log("state============", count)
    return (
        <div>
            Value of Counter : {count}
        </div>
    )
}

export default CounterValue
