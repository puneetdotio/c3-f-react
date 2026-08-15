import { useSelector } from "react-redux"


const App = () => {

  const data = useSelector((store) => store.auth)
  console.log(data)

  return (
    <div>App</div>
  )
}

export default App