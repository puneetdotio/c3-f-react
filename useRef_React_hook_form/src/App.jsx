import React from 'react'
import Form from './components/Form'
import RHF from './RHF'

const App = () => {
  console.log("app rendering...")

  return (
    <div className='h-screen w-full p-5 bg-gray-300'>
      <h2>Hey This is Form</h2>
      {/* <Form/> */}

      <RHF/>

    </div>
  )
}

export default App