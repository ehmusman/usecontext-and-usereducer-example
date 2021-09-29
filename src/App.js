import React from 'react'
import Counter from './components/Counter'
import CounterValue from './components/CounterValue'
import CounterState from './context/counter/counterState'

const App = () => {
//   const initialState = {
//     count: 0
//   }
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "increment":
//         return {
//           ...state,
//           count: state.count + 1
//       };
//       case "decrement":
//         return {
//           ...state,
//           count: state.count - 1
//       };
//       default:
//         return state;
//     }
//   }
//   const [state, dispatch]= React.useReducer(reducer, initialState)
//   console.log("state in App", state)
//   const handleIncrement = () => {
// dispatch({
//   type: "increment"
// })
//   }
//   const handleDecrement = () => {
//     dispatch({
//       type: "decrement"
//     })
//       }
  return (
    <CounterState>
      {/* <button onClick={handleIncrement}>Increment in App</button>
      <button onClick={handleDecrement}>Decrement in App</button> */}
    <div>
      <div>
        <CounterValue />
      </div>
      <div>
        <Counter/>
      </div>
    </div>
    </CounterState>
  )
}

export default App