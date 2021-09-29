// here we'll  make our initial states and implement all the actions like searchUser, GetRequests etc,
// we'll make a Types.js file where all of our methods are initialized with the same name as string. this is mostly used in redux. if we're familiar with redux than to understand it is very easy;

import React, { useReducer } from 'react';
import CounterReducer from './counterReducer';
import CounterContext from './counterContext'

const CounterState = (props) => {
    const initialState = {
        value: 0
    }
    const [state, dispatch] = useReducer(CounterReducer, initialState)

    const increment = () => {
        dispatch({
            type: "INCREMENT"
        })
    }
    const decrement = () => {
        dispatch({
            type: "DECREMENT"
        })
    }
    return <CounterContext.Provider
        value={{
            count: state.value,
            increment,
            decrement
        }}>
        {props.children}
    </CounterContext.Provider>

}

export default CounterState;