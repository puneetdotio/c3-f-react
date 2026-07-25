import React, { useCallback, useMemo, useState } from 'react'
import Home from './components/Home'
import About from './components/About'

const App = () => {
  console.log("App rendering...")

  const [count, setCount] = useState(0)
  
  const [users , setUsers ] = useState({uName: "raghav", id: 83})

  let calculation = useMemo(() => {
    console.log("calculation running...")

    let sum = 0;

    for (let i = 0; i < 1000000; i++){
      sum += 1;

    }

    return sum;
  }, [count])

  let greet = useCallback(() =>{console.log("good evening...")}, [])


  
  return (
    <div>
      <h1>Memoization</h1>
      <h2>Count - {count}</h2>
      <h3>User namae - { users.uName}</h3>
      <button onClick={() => setUsers({...users, uName: "raman"})}>Change user name </button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Home greet={greet} />
      <About greet={greet} />
    </div>
  )
}

export default App