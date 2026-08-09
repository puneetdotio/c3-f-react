import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/counterSlice';

const App = () => {
  let count = useSelector((store) => store.counter.value)
  let dispatch = useDispatch();

  return (
    <div>
      <h2>Count is {count}</h2>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  )
}

export default App